<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Pay extends App_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('connect_model');
        $this->load->model('donation_model');
        $this->load->model('order_model');
        $this->config->load('stripe');
    }
    
    public function index($checkoutUid) {
        
        // Check for a form submission:
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {

            // Stores errors:
            $errors = array();

            // Need a payment token:
            if (isset($_POST['stripeToken'])) {

                $token = $_POST['stripeToken'];

                // Check for a duplicate submission, just in case:
                // Uses sessions, you could use a cookie instead.
                if ($this->session->userdata('token') && ($this->session->userdata('token') == $token)) {
                    $errors['token'] = 'You have apparently resubmitted the form. Please do not do that.';
                } else { // New submission.
                    $this->session->set_userdata('token', $token);
                }
            } else {
                $errors['token'] = 'The order cannot be processed. Please make sure you have JavaScript enabled and try again.';
            }

            // Get all the parametter
            $name = $this->input->post('name');
            $email = $this->input->post('email');
            $frequencyUser = $this->input->post('frequency');
            $amountUser = $this->input->post('amount');
            
            // Get donation info from data base:
            $donation = $this->donation_model->getDonation(null, $checkoutUid);
            
            if ($donation && $donation['public_state']==1){
                // Decide the amount: User input or from database:
                if ($donation['amount_decide'] == 0){
                    // User decide.
                    $amount = $amountUser;
                } else {
                    $amountOption = count($donation['amounts']);
                    if ($amountOption > 1){
                        // There will many option. User will select the amount.
                        $amount = $amountUser;
                    } else {
                        // Just one option. Still get from user for simple :)
                        $amount = $amountUser;
                    }
                }
                // TODO : Do the frequency stuff: make it recurring....
                if ($donation['frequency'] == 0){
                    $frequency = $frequencyUser;
                } else {
                    $frequency = $donation['frequency'];
                }
            } else {
                $errors['donation'] = 'Could not find the Donation';
            }
            
            // Validate other form data!
            // If no errors, process the order:
            if (empty($errors)) {
                // create the charge on Stripe's servers - this will charge the user's card
                try {

                    // Load the library and config
                    require_once(APPPATH . 'libraries/Stripe.php');
                    $this->config->load('stripe');

                    // set your secret key: remember to change this to your live secret key in production
                    // see your keys here https://manage.stripe.com/account
                    Stripe::setApiKey($this->config->item('stripe_key_test_secret'));
                    
                    // Charge the order:
                    $charge = Stripe_Charge::create(array(
                                "amount" => $amount*100, // amount in cents, again
                                "currency" => "usd",
                                "card" => $token,
                                "description" => $checkoutUid
                            )
                    );
                    // Check that it was paid:
                    if ($charge->paid == true) {
                        // Payment successful.
                        // Save to Order table
                        $userId = $donation['user_id'];
                        $orderData = array(
                            'user_id' => $userId,
                            'client_name' => $name,
                            'client_email' => $email,
                            'frequency' => $frequency,
                            'amount' => $amount
                        );
                        $orderId = $this->order_model->createOrder($orderData);
                        
                        if ($orderId){
                            // Save order successful
                            $data['confirmation'] = $donation['confirmation_message'];
                            $this->render_embed_page('pay/thankyou', $data);
                        } else {
                            // Error on saving order
                        }
                    } else { // Charge was not paid!	
                        echo '<div class="alert alert-error"><h4>Payment System Error!</h4>Your payment could NOT be processed (i.e., you have not been charged) because the payment system rejected the transaction. You can try again or use another card.</div>';
                    }
                } catch (Stripe_CardError $e) {
                    // Card was declined.
                    $e_json = $e->getJsonBody();
                    $err = $e_json['error'];
                    $errors['stripe'] = $err['message'];
                } catch (Stripe_ApiConnectionError $e) {
                    // Network problem, perhaps try again.
                    $errors['stripe'] = "Network Error!";
                } catch (Stripe_InvalidRequestError $e) {
                    // You screwed up in your programming. Shouldn't happen!
                    $errors['stripe'] = "Invalid Stripe Request";
                } catch (Stripe_ApiError $e) {
                    // Stripe's servers are down!
                    $errors['stripe'] = "Stripe Server is down";
                } catch (Stripe_CardError $e) {
                    // Something else that's not the customer's fault.
                    $errors['stripe'] = "It's our fault, not yours.";
                }
                if (! empty($errors)){
                    // Show error screen
                foreach ($errors as $key => $error){
                    echo "<p><b>".$key.":</b> ".$error."</p>";
                }
                }
            } else {
                // A user form submission error occurred, handled below.
//                foreach ($errors as $error){
//                    $this->session->set_flashdata('app_error', $error);
//                }
                // Show error screen
                foreach ($errors as $key => $error){
                    echo "<p><b>".$key.":</b> ".$error."</p>";
                }
            }
        } else {
            // Make the normal view.

            $this->body_class[] = 'home';
            $this->page_title = 'Donate';
            $this->current_section = 'pay';

            $this->assets_js[] = 'plugins/moment/moment.min.js';
            $this->assets_js[] = 'bootbox/bootbox.min.js';
            $this->assets_js[] = 'https://js.stripe.com/v2/';
            $this->assets_js[] = 'pay/pay.js';

            $data = array();
            $donation = $this->donation_model->getDonation(null, $checkoutUid);
            if ($donation){
                $data['publish_key'] = $this->config->item('stripe_key_test_public');
                $data['donation'] = $donation;

                $this->render_embed_page('pay/index', $data);
            } else {
                // Not found donation
                redirect('not-found');
            }
        }
    }
}

<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Donation extends App_Controller {

    public function __construct() {
        parent::__construct();

        // Check if user login
        if ($this->ion_auth->logged_in()) {
            // Do nothing
        } else {
            // Redirect user to login page
            redirect('login');
        }
        $this->load->model('connect_model');
        $this->config->load('stripe');
    }

    public function index() {
        $this->body_class[] = 'home';
        $this->page_title = 'Your Donations';
        $this->current_section = 'donation';

        $this->assets_css[] = 'plugins/dataTables/dataTables.bootstrap.css';
        $this->assets_js[] = 'plugins/dataTables/jquery.dataTables.js';
        $this->assets_js[] = 'plugins/dataTables/dataTables.bootstrap.js';
        $this->assets_js[] = 'plugins/moment/moment.min.js';
        $this->assets_js[] = 'donation/donation.js';
        $this->assets_js[] = 'bootbox/bootbox.min.js';

        // Get the user ID
        $userId = $this->ion_auth->get_user_id();
        $clientId = $this->config->item('stripe_client_id_test');
        $data['stripe_active'] = $this->connect_model->checkConnect($userId);

        // Set the annoucement area:
        if ($data['stripe_active']) {
            $data['announce_message'] = "Welcome to Donations, get started by: ";
            $data['announce_action'] = "#create-donation";
            $data['announce_action_text'] = "Create a Donation";
        } else {
            $data['announce_message'] = "Welcome to Donations, get started by: ";
            $data['announce_action'] = "https://connect.stripe.com/oauth/authorize?response_type=code&scope=read_write&client_id=".$clientId."&state=" . $userId;
            $data['announce_action_text'] = "Activate your Stripe account";
        }

        $data['user_id'] = $userId;
        $this->render_page('donation/index', $data);
    }

    public function connect() {

        define('CLIENT_ID', $this->config->item('stripe_client_id_test'));
        define('API_KEY', $this->config->item('stripe_key_test_secret'));

        define('TOKEN_URI', 'https://connect.stripe.com/oauth/token');
        define('AUTHORIZE_URI', 'https://connect.stripe.com/oauth/authorize');

        if (isset($_GET['code'])) { // Redirect w/ code
            $code = $_GET['code'];

            $token_request_body = array(
                'client_secret' => API_KEY,
                'grant_type' => 'authorization_code',
                'client_id' => CLIENT_ID,
                'code' => $code,
            );

            $req = curl_init(TOKEN_URI);
            curl_setopt($req, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($req, CURLOPT_POST, true);
            curl_setopt($req, CURLOPT_POSTFIELDS, http_build_query($token_request_body));
            
            // This disable SSL stuff to connect to https site. :D
            // But it just bypass verification.
            // TODO: Check better way in: http://curl.haxx.se/mail/curlphp-2005-11/0038.html
            curl_setopt($req, CURLOPT_SSL_VERIFYPEER, false);

            // TODO: Additional error handling
            // can only request 1 time, the next time will be null
            $respCode = curl_getinfo($req, CURLINFO_HTTP_CODE);
            $resp = json_decode(curl_exec($req), true);
            curl_close($req);
            
            // Get the user ID
            $userId = $this->input->get('state');
            
            if ( ! $this->connect_model->checkConnect($userId)){
                $this->connect_model->saveConnect($userId, $resp);
            }
            
            // Redirect to index.
            redirect('donation');
        } else if (isset($_GET['error'])) { // Error
            echo $_GET['error_description'];
        } else { // Show OAuth link
            $authorize_request_body = array(
                'response_type' => 'code',
                'scope' => 'read_write',
                'client_id' => CLIENT_ID
            );

            $url = AUTHORIZE_URI . '?' . http_build_query($authorize_request_body);
            echo "<a href='$url'>Connect with Stripe</a>";
        }
    }

}

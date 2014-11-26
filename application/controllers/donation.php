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
    }

    public function index() {
        $this->body_class[] = 'home';
        $this->page_title = 'Your Donations';
        $this->current_section = 'donation';
        
        $this->assets_css[] = 'plugins/dataTables/dataTables.bootstrap.css';
        $this->assets_js[] = 'plugins/dataTables/jquery.dataTables.js';
        $this->assets_js[] = 'plugins/dataTables/dataTables.bootstrap.js';
        
        $this->assets_js[] = 'bootbox/bootbox.min.js';
        
        $data['stripe_active'] = FALSE;
        
        // Set the annoucement area:
        if ($data['stripe_active']){
            $data['announce_message'] = "Welcome to Donations, get started by: ";
            $data['announce_action'] = "#create-donation";
            $data['announce_action_text'] = "Create a Donation";
        } else {
            $data['announce_message'] = "Welcome to Donations, get started by: ";
            $data['announce_action'] = "#create-donation";
            $data['announce_action_text'] = "Activate your Stripe account";
        }

        $this->render_page('donation/index', $data);
    }
}

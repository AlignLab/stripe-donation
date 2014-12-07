<?php
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
require APPPATH . '/libraries/REST_Controller.php';

class Donation extends REST_Controller {
    
    public function __construct() {
        parent:: __construct();
        $this->load->model('donation_model');
    }

    function get() {

        $id = $this->_get('id');
        $userId = $this->_get('user_id');
        
        if ($userId){
            $response = $this->donation_model->getDonation($userId, $id);
        } else {
            $response = null;
        }
        
        if ($response){
            $code = 200;
        } else {
            $code = 404;
            $response = array('error' => "404 - Not found");
        }
        $this->response($response, $code);
    }
    
    // TODO : Add user_id authenticate. NOT APPLIED YET.

    function post() {
        $data = $this->_post_args;
        
        $id = $this->donation_model->createDonation($data);
        if ($id) {
            $response = array_merge(array('id'=>$id),$data);

            $this->response($response, 201); // 201 being the HTTP response code
        } else {
            $this->response(array('error' => 'Donation could not be created'), 404);
        }
    }

    public function put() {
        $id = $this->_get('id');
        if (!$id) {
            $this->response(array('error' => '400 - An "id" must be provided by GET parameter to put.'), 400);
        } else {
            $data = $this->_put_args;
            if ($this->donation_model->updateDonation($id, $data)){
                $response = array_merge(array('id'=>$id),$data);
                $this->response($response, 200); // 201 being the HTTP response code
            } else {
                $this->response(array('error' => "Error"), 500);
            }
        }
    }

    function delete() {
        $id = $this->_get('id');
        if (!$id) {
            $this->response(array('error' => '400 - An "id" must be provided by GET parameter to delete.'), 400);
        } else {
            if ($this->donation_model->deleteDonation($id)){
                $this->response(array('id'=>$id), 200);
            } else {
                // Not found
                $this->response(array('error' => '404 - Word could not be found'), 404);
            }
        }
    }

}

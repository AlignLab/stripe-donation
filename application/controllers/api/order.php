<?php
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
require APPPATH . '/libraries/REST_Controller.php';

class Order extends REST_Controller {
    
    public function __construct() {
        parent:: __construct();
        $this->load->model('order_model');
    }

    function get() {

        $query = $this->_get('q');
        $userId = $this->_get('user_id');
        
        if ($query == 'summary'){
            // Get the summary of the order
            $response = $this->order_model->getSummary($userId);
        } else {
            $id = $this->_get('id');
            if ($userId){
                $response = $this->order_model->getOrder($userId, $id);
            } else {
                $response = null;
            }
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
        
        $id = $this->order_model->createOrder($data);
        if ($id) {
            $response = array_merge(array('id'=>$id),$data);

            $this->response($response, 201); // 201 being the HTTP response code
        } else {
            $this->response(array('error' => 'Could not be created'), 404);
        }
    }

    public function put() {
        $id = $this->_get('id');
        if (!$id) {
            $this->response(array('error' => '400 - An "id" must be provided by GET parameter to put.'), 400);
        } else {
            $data = $this->_put_args;
            if ($this->order_model->updateOrder($id, $data)){
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
            if ($this->order_model->deleteOrder($id)){
                $this->response(array('id'=>$id), 200);
            } else {
                // Not found
                $this->response(array('error' => '404 - Word could not be found'), 404);
            }
        }
    }

}

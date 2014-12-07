<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/* 
 * Code written by Nguyen Van Hung at @imrhung
 * Feel free to re-use or share it.
 * Happy code!!!
 */

/*
 * Code reference from: https://stripe.com/docs/checkout/guides/php
 */
 
$config['stripe_secret_key'] = "sk_test_BQokikJOvBiI2HlWgH4olfQ2";
$config['stripe_publishable_key'] = "pk_test_6pRNASCoBOKtIshFeQd4XMUh";
//Stripe::setApiKey($stripe['secret_key']);

// Configuration options
$config['stripe_client_id_test']         = 'ca_5GjTCWrNPajibJQMsjoyl9BIxFmEW7Gu';
$config['stripe_client_id_live']         = 'ca_5GjTbfnUZOGDCG4BppNCynfMEnb3x69y';
$config['stripe_key_test_public']         = 'pk_test_1f1JnvFwnZ73kj2N62zpZ1ZX';
$config['stripe_key_test_secret']         = 'sk_test_kEJOl8KxBN7Jyp79x8QB99kJ';
$config['stripe_key_live_public']         = 'pk_live_SXgfQ5ASTV9MLFaPJCPKD8Xf';
$config['stripe_key_live_secret']         = 'sk_live_9kTFWAsSMuk8UJ0My2xShJVL';
$config['stripe_test_mode']               = (ENVIRONMENT == 'production') ? FALSE : TRUE;
$config['stripe_verify_ssl']              = FALSE;
$config['stripe_currency']                = 'usd';
$config['stripe_decode']                  = FALSE;

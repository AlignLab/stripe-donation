
<div class="">
    <div class="brand-logo"></div>
    <div class="content" id="js-content">
        <h1>Charge $10 with Stripe</h1>
        <!--        <form action="" method="POST" id="payment-form">-->
        <form method="POST" id="payment-form" onsubmit="return false;">

            <input id="publish-key" type="hidden" value="<?php echo $publish_key ?>">

            <span class="payment-errors"></span>
            
            <!--Name-->
            <div class="form-group">
                <label for="name">Your name</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="">
            </div>

            <!--Email-->
            <div class="form-group">
                <label for="email">Your email address</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="" required="required">
            </div>

            <!--Frequency-->
            <?php if ($donation['frequency'] == 1) : ?>
                <!--One time payment. Show nothing-->
                
            <?php elseif ($donation['frequency'] == 0) : ?>
                <!--Client choose the frequency-->
                <div class="form-group">
                    <label for="frequency">Frequency</label>
                    <select id="frequency" name="frequency" class="form-control">
                        <option value="1">Once</option>
                        <option value="7">Weekly</option>
                        <option value="30">Monthly</option>
                        <option value="3">3 months</option>
                        <option value="6">6 months</option>
                        <option value="12">Yearly</option>
                    </select>
                </div>
                
            <?php else : ?>
                <!--Frequency is set. Just show to user.-->
                <div class="form-group">
                    <label for="frequency">Frequency</label>
                    <select id="frequency" name="frequency" class="form-control">
                        <option value="1">Once</option>
                        <option value="7">Weekly</option>
                        <option value="30">Monthly</option>
                        <option value="3">3 months</option>
                        <option value="6">6 months</option>
                        <option value="12">Yearly</option>
                    </select>
                </div>
                <script>
                    $('#frequency').val(<?php echo $donation['frequency'];?>)
                            .prop('disabled', 'disabled');
                </script>
            <?php endif; ?>
            
            <!--Amount-->
            <?php if ($donation['amount_decide'] == 0) :?>
                <!--User decide the amount-->
                <div class="form-group">
                    <label for="amount">Amount</label>
                    <div class="input-group">
                        <span class="input-group-addon">$</span>
                        <input type="number" class="form-control" id="amount" name="amount" placeholder="" required="">
                    </div>
                </div>
            <?php else : ?>
                <!--Select from fixed amounts-->
                <div class="form-group">
                    <label for="amount">Amount</label>
                    <select id="amount" name="amount" class="form-control">
                        <?php
                        foreach ($donation['amounts'] as $amount) {
                            echo '<option value="'.$amount['amount'].'">$'.$amount['amount'].' - '.$amount['description'].'</option>';
                        }
                        ?>
                    </select>
                </div>
            <?php endif; ?>
            
            <div class="form-group">
                <label>
                    <span>Card Number</span>
                </label>
                <input type="text" size="20" data-stripe="number" class="form-control input-sm"/>

            </div>

            <div class="form-group">
                <div class="row">
                    <div class="col-md-4">
                        <label>
                            <span>CVC</span>
                        </label>
                        <input type="text" size="4" data-stripe="cvc" class="form-control input-sm"/>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-6">
                        <label>
                            <span>Expiration (MM/YYYY)</span>
                        </label>
                        <div class="row">
                            <div class="col-xs-6">
                                <input type="text" size="2" data-stripe="exp-month" class="form-control input-sm"/>
                            </div>
                            <div class="col-xs-6">
                                <input type="text" size="4" data-stripe="exp-year" class="form-control input-sm"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        <button type="submit" class="btn btn-primary btn-block">Submit Payment</button>
                    </div>
                </div>
        </form>
        <div class="well well-sm text-small" id="credit">
            This payment supported by Align Lab using Stripe payment.
        </div>
    </div>
</div>
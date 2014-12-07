/* 
 * Code written by Nguyen Van Hung at @imrhung
 * Feel free to re-use or share it.
 * Happy code!!!
 */



var stripeResponseHandler = function (status, response) {
    var $form = $('#payment-form');

    if (response.error) {
        // Show the errors on the form
        $form.find('.payment-errors').text(response.error.message);
        $form.find('button').prop('disabled', false);
    } else {
        // token contains id, last4, and card type
        var token = response.id;
        // Insert the token into the form so it gets submitted to the server
        $form.append($('<input type="hidden" name="stripeToken" />').val(token));
        // and re-submit
        $form.get(0).submit();
    }
};

jQuery(function ($) {
    // This identifies your website in the createToken call below
    Stripe.setPublishableKey($('#publish-key').val());

    $('#payment-form').submit(function (e) {
        var $form = $(this);

        // Disable the submit button to prevent repeated clicks
        $form.find('button').prop('disabled', true);

        Stripe.card.createToken($form, stripeResponseHandler);

        // Prevent the form from submitting with the default action
        return false;
    });
});



$(function () {
    var teamId = 123,
            tokenStr = "token", passcodeStr = "passcode", passcode = "2014";
    function md5(signature) {
        return CryptoJS.MD5(signature).toString()
    }
    function signature(token, passcode) {
        return passcodeStr + "=" + encodeURIComponent(passcode) + "&" + tokenStr + "=" + encodeURIComponent(token)
    }
    $(".btn-light").click(function (e) {
        e.preventDefault();
        if ($(this).parents("li").hasClass("on")) {
            $(this).parents("li").removeClass("on").addClass("off");
            return
        }
        var light = parseInt(this.id.replace("light", "")), self = this;
        if (light == 3)
            return;
        var params = {callback: window.location.origin + "/callback"};
        $.post("/v1/api/lights/" + light + "/token", params, function (resp) {
            var token = resp.token, params = {
                token: token, passcode: passcode, signature: md5(signature(token, passcode))
            };
            $.post("/v1/api/lights/" + light + "/on", params, function (resp) {
                $(self).parents("li").removeClass("off").addClass("on")
            }).fail(function (xhr) {
                alert(xhr.responseJSON.errors)
            })
        }).fail(function (xhr) {
            alert(xhr.responseJSON.errors)
        })
    })
});

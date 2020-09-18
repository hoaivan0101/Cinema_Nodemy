$('.btn_login').click(function () {
    var username = $('#username').val();
    var password = $('#password').val();
    var email = $('#userEmail').val();
    var mobile = $('#userMobile').val();
    
    $('.alert_username').text('');
    $('.alert_password').text('');
    $('.alert_email').text('');
    $('.alert_mobile').text('');
    
        if (username == "") {
            $('.alert_username').text('PLEASE INPUT YOUR USERNAME');
            return false;
        }
        if (password == "") {
            $('.alert_password').text('PLEASE INPUT YOUR PASSWORD');
            return false;
        }
        if (email == "") {
            $('.alert_email').text('PLEASE INPUT YOUR EMAIL');
            return false;
        }
        if (mobile == "") {
            $('.alert_mobile').text('PLEASE INPUT YOUR MOBILE');
            return false;
        }
 
    $.ajax({
            url: '/auth/local/signup',
            type: 'POST',
            data: {
                userName: username,
                userPassword: password,
                userEmail: email,
                userMobile: mobile
            }, 
        })
            .then(data => {
                if (!data) { $('.alert_mobile').text('USERNAME OR EMAIL HAS EXISTED'); }
                else {setTimeout(function() {
                    swal({
                        title: "Wow!",
                        text: "SIGNUP SUCCESSFUL",
                        type: "success"
                    }, function() {
                      window.location.href ='/index';
                    });
                }, 100);}
        })
})
        // Test input


$('.btn_login').click(function () {
    var username = $('#username').val();
    var password = $('#password').val();
    $.ajax({
      url: '/users/login',
      type: "POST",
      data: {
        username: username,
        password: password
      }
    })
      .then(data => {
        if (data == 'Fail') {swal('ERR')  }
        else {
          setTimeout(function() {
            swal({
                title: "Wow!",
                text: "LOGIN SUCCESSFUL",
                type: "success"
            }, function() {
              window.location.href ='/';
            });
        }, 100);
        }
      })
      .catch(err => {
        console.log(err);
      })
})


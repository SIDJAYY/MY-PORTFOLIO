// validation

var email = document.forms['form']['email'];
var pass = document.forms['form']['pass'];

var email_error = document.getElementById('email_error')
var pass_error = document.getElementById('pass_error')

function validated() {
    if(email.value.lenght < 9 ) {
        email.style.border = "1px red solid";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
}
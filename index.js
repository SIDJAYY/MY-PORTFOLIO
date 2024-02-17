const Username = document.querySelector('#username');
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const cpass = document.querySelector('#cpass');

Submit.addEventListener('click', (event)=>{
    event.preventDefault();
    //username VALIDATION

    if(Username.value.trim()==''){
        error(Username, 'USERNAME CANNOT BE EMPTY');
    }else {
        success(Username);
    }
    // email

    if(email.value.trim() == '') {
        error(email, 'EMAIL IS EMTPY')
    }else {
        success(email);
    }

    // password

    if(pass.value.trim() == '') {
        error(pass, 'PASSWORD IS EMTPY')
    }else {
        success(pass);
    }

    // confirm password

    if(cpass.value.trim() == '') {
        error(cpass, 'WRONG PASSWORD')
    // }else if(cpass.value.trim() != pass){
        error(cpass, 'WRONG PASSWORD')
    }else {
        success(cpass);
    }
});

//Username function

function error(element, msg){
    element.style.border = '1px red  solid';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.textContent = msg;
    p.style.visibility = 'visible';
}

function success(element) {
    element.style.border = '2px green  solid';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.style.visibility = 'hidden';
}



function login() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!email || email.length == 0) {
        return 0; // email is empty
    }

    if(!validateEmail(email)){
        return 0; // email is invalid
    }

    if(!password || password.length == 0){
        return 0; // password is empty
    }

    if(password.length <= 4){
        return 0; // password is too short
    }

    return 0;
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
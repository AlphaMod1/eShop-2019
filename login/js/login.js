function login() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!email || email.length == 0) {
        console.log("email is empty"); //pop up warning is coming soon
        return 0; // email is empty
    }

    if(!validateEmail(email)){
        console.log("email is invalid");//pop up warning is coming soon
        return 0; // email is invalid
    }

    if(!password || password.length == 0){
        console.log("password is empty");//pop up warning is coming soon
        return 0; // password is empty
    }

    if(password.length <= 4){
        console.log("password is short");//pop up warning is coming soon
        return 0; // password is too short
    }

    const emailF = document.querySelector('#email').value;
    const passwordF = document.querySelector('#password').value;

    for(let i = 0; i < login_info.length; i++){
        if(login_info[i].email == emailF && login_info[i].password == base64salt(passwordF)){
            location.replace("../Vendor/vendor.html#"+login_info[i].id)
        }
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function base64salt(string){
    return btoa(string+"+++");
}
var email = document.getElementById('email');
var emailP = document.getElementById('emailP');
var password = document.getElementById('password');
var passwordP = document.getElementById('passwordP');
var login = document.getElementById('login');

login.addEventListener('click', function () {
    var truc1 = false;
    var truc2 = false;
    if (email.value == "") {
        emailP.className = "para";
        truc1 = false;
    } else {
        emailP.className = "displayNone";
        truc1 = true;
    }
    
    if (password.value == "") {
        passwordP.className = "para";
        truc2 = false;
    } else {
        passwordP.className = "displayNone";
        truc2 = true;
    }

    if (truc1 && truc2) {
        console.log(email.value);
        console.log(password.value);
        document.cookie = "IsAdmin=" + ("value" || "") + "; path=/";
        window.location.href = 'index.html';
    }
});
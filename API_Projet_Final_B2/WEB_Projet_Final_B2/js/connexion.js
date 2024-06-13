// URL API
var baseURL = "http://localhost:8080";

// Input et warning
var email = document.getElementById('email');
var emailP = document.getElementById('emailP');
var password = document.getElementById('password');
var passwordP = document.getElementById('passwordP');
var pasCorrectP = document.getElementById('pasCorrectP');
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
        fetch(baseURL + "/get_token?email=" + email.value + "&mdp=" + password.value)
            .then((response) => {
                return response.json();
            }).then((json) => {
                console.log(json);
                if (json.length != 0) {
                    console.log(json);
                    document.cookie = "Token=" + (json[0].Token || "") + "; path=/";
                    if (json[0].Is_Admin) {
                        document.cookie = "isConnected=" + ("2" || "") + "; path=/";
                    } else {
                        document.cookie = "isConnected=" + ("1" || "") + "; path=/";
                    }
                    document.cookie = "Id=" + (json[0].Id || "") + "; path=/";
                    pasCorrectP.className = "displayNone";
                    window.location.href = 'index.html';
                } else {
                    document.cookie = "Token=" + ("" || "") + "; path=/";
                    document.cookie = "Id=" + ("" || "") + "; path=/";
                    document.cookie = "isConnected=" + ("0" || "") + "; path=/";
                    pasCorrectP.className = "para";
                }
            });
    }
});
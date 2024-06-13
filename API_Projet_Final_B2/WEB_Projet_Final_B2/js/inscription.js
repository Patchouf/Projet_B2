// URL API
var baseURL = "http://localhost:8080";

// Input et warning
var nameTKT = document.getElementById('name');
var nameP = document.getElementById('nameP');
var email = document.getElementById('email');
var emailP = document.getElementById('emailP');
var password = document.getElementById('password');
var passwordP = document.getElementById('passwordP');
var verifPassword = document.getElementById('verifPassword');
var verifPasswordP = document.getElementById('verifPasswordP');
var correspPasswordP = document.getElementById('correspPassword');
var verifEmail = document.getElementById('verifEmail');
var buInscription = document.getElementById('inscription');

buInscription.addEventListener('click', function () {
    var truc1 = false;
    var truc2 = false;
    var truc3 = false;
    var truc4 = false;
    var passwordEqual = false;

    if (nameTKT.value == "") {
        nameP.className = "para";
        truc1 = false;
    } else {
        nameP.className = "displayNone";
        truc1 = true;
    }

    if (email.value == "") {
        emailP.className = "para";
        truc2 = false;
    } else {
        emailP.className = "displayNone";
        truc2 = true;
    }

    if (password.value == "") {
        passwordP.className = "para";
        truc3 = false;
    } else {
        passwordP.className = "displayNone";
        truc3 = true;
    }

    if (verifPassword.value == "") {
        verifPasswordP.className = "para";
        truc4 = false;
    } else {
        verifPasswordP.className = "displayNone";
        truc4 = true;
    }

    if (password.value != verifPassword.value) {
        correspPasswordP.className = "para";
        passwordEqual = false;
    } else {
        correspPasswordP.className = "displayNone";
        passwordEqual = true;
    }

    if (truc1 && truc2 && truc3 && truc4 && passwordEqual) {
        // Faire la création de compte --------------------------------------------------------------
        // Puis récuperer le token et le boolean de la base de données ------------------------------

        fetch(baseURL + "/verif_email?email=" + email.value)
            .then((response) => {
                return response.json();
            }).then((json) => {
                if (json[0].Count == 0) {

                    // Création du compte
                    const response = fetch(baseURL + "/user/create?email=" + email.value + "&mdp=" + password.value + "&nom=" + nameTKT.value + "&photo=", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    
                    // Récuperartion des Token pour l'Auth
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
                                window.location.href = 'index.html';
                            } else {
                                document.cookie = "Token=" + ("" || "") + "; path=/";
                                document.cookie = "Id=" + ("" || "") + "; path=/";
                                document.cookie = "isConnected=" + ("0" || "") + "; path=/";
                            }
                        });
                        verifEmail.className = "displayNone";
                } else {
                    document.cookie = "Token=" + ("" || "") + "; path=/";
                    document.cookie = "Id=" + ("" || "") + "; path=/";
                    document.cookie = "isConnected=" + ("0" || "") + "; path=/";
                    verifEmail.className = "para";
                }
            });
    }
});

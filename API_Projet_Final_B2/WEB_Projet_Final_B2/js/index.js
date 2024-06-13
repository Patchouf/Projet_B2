// URL API
var baseURL = "http://localhost:8080";

// Bouton
var buLivres = document.getElementById('boutonLivres');
var buAuteurs = document.getElementById('boutonAuteurs');
var buUtilisateurs = document.getElementById('boutonUtilisateurs');
var buRecherches = document.getElementById('boutonRecherches');
var buLivres2 = document.getElementById('boutonLivres2');
var buAuteurs2 = document.getElementById('boutonAuteurs2');
var buUtilisateurs2 = document.getElementById('boutonUtilisateurs2');
var buRecherche = document.getElementById('search-bouton');
// Resultats
var divLivres = document.getElementById('resultatsLivres');
var divAuteurs = document.getElementById('resultatsAuteurs');
var divUtilisateurs = document.getElementById('resultatsUtilisateurs');
var divRecherches = document.getElementById('resultatsRecherches');
var divLivres2 = document.getElementById('resultatsLivres2');
var divAuteurs2 = document.getElementById('resultatsAuteurs2');
var divUtilisateurs2 = document.getElementById('resultatsUtilisateurs2');


buLivres.addEventListener('click', function () {
    buLivres.className = "selectBouton";
    buAuteurs.className = "notSelectBouton";
    buUtilisateurs.className = "notSelectBouton";
    buRecherches.className = "notSelectBouton";

    divLivres.className = "selectDiv";
    divAuteurs.className = "notSelectDiv";
    divUtilisateurs.className = "notSelectDiv";
    divRecherches.className = "notSelectDiv";
});

buAuteurs.addEventListener('click', function () {
    buLivres.className = "notSelectBouton";
    buAuteurs.className = "selectBouton";
    buUtilisateurs.className = "notSelectBouton";
    buRecherches.className = "notSelectBouton";

    divLivres.className = "notSelectDiv";
    divAuteurs.className = "selectDiv";
    divUtilisateurs.className = "notSelectDiv";
    divRecherches.className = "notSelectDiv";
});

buUtilisateurs.addEventListener('click', function () {
    buLivres.className = "notSelectBouton";
    buAuteurs.className = "notSelectBouton";
    buUtilisateurs.className = "selectBouton";
    buRecherches.className = "notSelectBouton";

    divLivres.className = "notSelectDiv";
    divAuteurs.className = "notSelectDiv";
    divUtilisateurs.className = "selectDiv";
    divRecherches.className = "notSelectDiv";
});

buRecherches.addEventListener('click', function () {
    buLivres.className = "notSelectBouton";
    buAuteurs.className = "notSelectBouton";
    buUtilisateurs.className = "notSelectBouton";
    buRecherches.className = "selectBouton";

    divLivres.className = "notSelectDiv";
    divAuteurs.className = "notSelectDiv";
    divUtilisateurs.className = "notSelectDiv";
    divRecherches.className = "selectDivRecherche";
});

buLivres2.addEventListener('click', function () {
    buLivres2.className = "selectBouton";
    buAuteurs2.className = "notSelectBouton";
    buUtilisateurs2.className = "notSelectBouton";

    divLivres2.className = "selectDiv";
    divAuteurs2.className = "notSelectDiv";
    divUtilisateurs2.className = "notSelectDiv";
});

buAuteurs2.addEventListener('click', function () {
    buLivres2.className = "notSelectBouton";
    buAuteurs2.className = "selectBouton";
    buUtilisateurs2.className = "notSelectBouton";

    divLivres2.className = "notSelectDiv";
    divAuteurs2.className = "selectDiv";
    divUtilisateurs2.className = "notSelectDiv";
});

buUtilisateurs2.addEventListener('click', function () {
    buLivres2.className = "notSelectBouton";
    buAuteurs2.className = "notSelectBouton";
    buUtilisateurs2.className = "selectBouton";

    divLivres2.className = "notSelectDiv";
    divAuteurs2.className = "notSelectDiv";
    divUtilisateurs2.className = "selectDiv";
});

fetch(baseURL + "/livre?aleatoire=50")
    .then((response) => {
        return response.json();
    }).then((json) => {
        createLivre(json, divLivres);
    });

function createLivre(json, divResult) {
    if (json.length == 0) {
        divResult.innerHTML = "Aucun Resultat";
        return;
    }

    json.forEach(element => {
        var boutonLivre = document.createElement('button');
        boutonLivre.className = "buResultatLivre";
        boutonLivre.value = element.Id;

        // Ajout d'une action click pour tous les bouton
        boutonLivre.addEventListener('click', function () {
            var valeur = boutonLivre.value;
            window.location.href = "livre.html?Id=" + encodeURIComponent(valeur);
        });

        var imgLivre = document.createElement('img');
        imgLivre.className = "photoLivre";
        if (element.Photo == "" || element.Photo == null) {
            imgLivre.src = "../img/livre.png";
        } else {
            imgLivre.src = element.Photo;
        }

        var titreLivre = document.createElement('p');
        titreLivre.innerHTML = element.Nom;

        boutonLivre.appendChild(imgLivre);
        boutonLivre.appendChild(titreLivre);
        divResult.appendChild(boutonLivre);
    });
}

fetch(baseURL + "/auteur?aleatoire=50")
    .then((response) => {
        return response.json();
    }).then((json) => {
        createAuteur(json, divAuteurs);
    });

function createAuteur(arrayAuteur, divResult) {
    if (arrayAuteur.length == 0) {
        divResult.innerHTML = "Aucun Resultat";
        return;
    }

    arrayAuteur.forEach(element => {
        var boutonAuteur = document.createElement('button');
        boutonAuteur.className = "buResultatPersonne";
        boutonAuteur.value = element.Id;

        // Ajout d'une action click pour tous les bouton
        boutonAuteur.addEventListener('click', function () {
            var valeur = boutonAuteur.value;
            window.location.href = "auteur.html?Id=" + encodeURIComponent(valeur);
        });

        var imgAuteur = document.createElement('img');
        imgAuteur.className = "photoPerson";
        if (element.Photo == "" || element.Photo == null) {
            imgAuteur.src = "../img/default-profil-picture.png";
        } else {
            imgAuteur.src = element.Photo;
        }

        var nomAuteur = document.createElement('p');
        nomAuteur.innerHTML = element.Nom;

        boutonAuteur.appendChild(imgAuteur);
        boutonAuteur.appendChild(nomAuteur);
        divResult.appendChild(boutonAuteur);

    });
}

fetch(baseURL + "/user?aleatoire=50")
    .then((response) => {
        return response.json();
    }).then((json) => {
        createUtilisateur(json, divUtilisateurs);
    });

function createUtilisateur(json, divResult) {
    if (json.length == 0) {
        divResult.innerHTML = "Aucun Resultat";
        return;
    }

    var sameUser = false;
    

    json.forEach(element => {
        if (isCookieSet("isConnected")) {
            if (getCookieValue("Id") == element.Id) {
                sameUser = true;
            } else {
                sameUser = false;
            }
        } else {
            sameUser = false;
        }

        if (!element.Is_Admin && !sameUser) {
            var boutonUtilisateur = document.createElement('button');
            boutonUtilisateur.className = "buResultatPersonne";
            boutonUtilisateur.value = element.Id;

            // Ajout d'une action click pour tous les bouton
            boutonUtilisateur.addEventListener('click', function () {
                var valeur = boutonUtilisateur.value;
                window.location.href = "profil.html?Id=" + encodeURIComponent(valeur);
            });

            var imgUtilisateur = document.createElement('img');
            imgUtilisateur.className = "photoPerson";
            if (element.Photo == "" || element.Photo == null) {
                imgUtilisateur.src = "../img/default-profil-picture.png";
            } else {
                imgUtilisateur.src = element.Photo;
            }

            var nomUtilisateur = document.createElement('p');
            nomUtilisateur.innerHTML = element.Nom;

            boutonUtilisateur.appendChild(imgUtilisateur);
            boutonUtilisateur.appendChild(nomUtilisateur);
            divResult.appendChild(boutonUtilisateur);
        }
    });

}


buRecherche.addEventListener('click', function () {
    var textInput = document.getElementById('search-bar');
    if (textInput.value != "") {
        // Recherche livres
        fetch(baseURL + "/livre?livre_name=" + textInput.value)
            .then((response) => {
                return response.json();
            }).then((json) => {
                divLivres2.innerHTML = "";
                createLivre(json, divLivres2);
            });

        // Recherche auteurs
        fetch(baseURL + "/auteur?auteur_name=" + textInput.value)
            .then((response) => {
                return response.json();
            }).then((json) => {
                divAuteurs2.innerHTML = "";
                createAuteur(json, divAuteurs2);
            });

        // Recherche utilisateurs
        fetch(baseURL + "/user?user_name=" + textInput.value)
            .then((response) => {
                return response.json();
            }).then((json) => {
                divUtilisateurs2.innerHTML = "";
                createUtilisateur(json, divUtilisateurs2);
            });
    } else {
        divLivres2.innerHTML = "Auncun resultat";
        divAuteurs2.innerHTML = "Auncun resultat";
        divUtilisateurs2.innerHTML = "Auncun resultat";
    }
});
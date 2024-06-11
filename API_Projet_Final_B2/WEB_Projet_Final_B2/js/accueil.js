// Bouton
var buLivres = document.getElementById('boutonLivres');
var buAuteurs = document.getElementById('boutonAuteurs');
var buUtilisateurs = document.getElementById('boutonUtilisateurs');
var resultatsLivres = document.getElementsByClassName('buResultatLivre');
var resultatsAuteurs = document.getElementsByClassName('buResultatAuteur');
var resultatsProfils = document.getElementsByClassName('buResultatProfil');

// Resultats
var divLivres = document.getElementById('resultatsLivres');
var divAuteurs = document.getElementById('resultatsAuteurs');
var divUtilisateurs = document.getElementById('resultatsUtilisateurs');


buLivres.addEventListener('click', function () {
    buLivres.className = "selectBouton";
    buAuteurs.className = "notSelectBouton";
    buUtilisateurs.className = "notSelectBouton";

    divLivres.className = "selectDiv";
    divAuteurs.className = "notSelectDiv";
    divUtilisateurs.className = "notSelectDiv";
});

buAuteurs.addEventListener('click', function () {
    buLivres.className = "notSelectBouton";
    buAuteurs.className = "selectBouton";
    buUtilisateurs.className = "notSelectBouton";

    divLivres.className = "notSelectDiv";
    divAuteurs.className = "selectDiv";
    divUtilisateurs.className = "notSelectDiv";
});

buUtilisateurs.addEventListener('click', function () {
    buLivres.className = "notSelectBouton";
    buAuteurs.className = "notSelectBouton";
    buUtilisateurs.className = "selectBouton";

    divLivres.className = "notSelectDiv";
    divAuteurs.className = "notSelectDiv";
    divUtilisateurs.className = "selectDiv";
});

// Ajout d'une action click pour tous les bouton resultats
for (let element of resultatsLivres) {
    element.addEventListener('click', function () {
        var valeur = element.value;
        console.log(valeur);
        window.location.href = "livre.html?Id=" + encodeURIComponent(valeur);
    });
}
for (let element of resultatsAuteurs) {
    element.addEventListener('click', function () {
        var valeur = element.value;
        console.log(valeur);
        window.location.href = "auteur.html?Id=" + encodeURIComponent(valeur);
    });
}
for (let element of resultatsProfils) {
    element.addEventListener('click', function () {
        var valeur = element.value;
        console.log(valeur);
        window.location.href = "profil.html?Id=" + encodeURIComponent(valeur);
    });
}
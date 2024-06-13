// URL API
var baseURL = "http://localhost:8080";

// Récupération de l'Id dans l'url
var parametres = new URLSearchParams(window.location.search);
var valeurRecue = parametres.get("Id");
if (valeurRecue == null) {
    window.location.href = "index.html";
}

// Récuperation des balises pour les compléter
var divInfoAuteur = document.getElementById('info-auteur');
var divLivreAuteur = document.getElementById('collection-livre');

fetch(baseURL + "/auteur?auteur_id=" + valeurRecue)
    .then((response) => {
        return response.json();
    }).then((json) => {
        auteurInfo(json);
    });

function auteurInfo(json) {
    var imgAuteur = document.createElement('img');
    imgAuteur.className = "profil-pic";
    if (json[0].Photo == "" || json[0].Photo == null) {
        imgAuteur.src = "../img/default-profil-picture.png";
    } else {
        imgAuteur.src = json[0].Photo;
    }

    var divInfo = document.createElement('div');
    divInfo.className = "info";

    var strong1 = document.createElement('strong');
    strong1.innerHTML = "Nom:";

    var p1 = document.createElement('p');
    p1.innerHTML =" " + json[0].Nom;
    p1.style = "display: inline;";

    var br1 = document.createElement('br');
    var br2 = document.createElement('br');

    var strong2 = document.createElement('strong');
    strong2.innerHTML = "Description:";

    var p2 = document.createElement('p');
    p2.innerHTML = " " + json[0].Description;
    p2.style = "display: inline;";

    divInfo.appendChild(strong1);
    divInfo.appendChild(p1);
    divInfo.appendChild(br1);
    divInfo.appendChild(br2);
    divInfo.appendChild(strong2);
    divInfo.appendChild(p2);
    divInfoAuteur.appendChild(imgAuteur);
    divInfoAuteur.appendChild(divInfo);
}

fetch(baseURL + "/livre?auteur_id=" + valeurRecue)
    .then((response) => {
        return response.json();
    }).then((json) => {
        livreAuteur(json);
    });

function livreAuteur(json) {
    json.forEach(element => {
        var boutonLivre = document.createElement('button');
        boutonLivre.className = "buLivre";
        boutonLivre.value = element.Id;

        // Ajout d'une action click pour tous les bouton
        boutonLivre.addEventListener('click', function () {
            var valeur = boutonLivre.value;
            window.location.href = "livre.html?Id=" + encodeURIComponent(valeur);
        });

        var imgLivre = document.createElement('img');
        imgLivre.className = "photoLivre";
        if (element.Photo == null || element.Photo == "") {
            imgLivre.src = "../img/livre.png";
        } else {
            imgLivre.src = element.Photo;
        }

        var titreLivre = document.createElement('p');
        titreLivre.innerHTML = element.Nom;

        boutonLivre.appendChild(imgLivre);
        boutonLivre.appendChild(titreLivre);
        divLivreAuteur.appendChild(boutonLivre);
    });
}
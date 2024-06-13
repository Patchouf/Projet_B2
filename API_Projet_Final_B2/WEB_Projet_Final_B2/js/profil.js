// URL API
var baseURL = "http://localhost:8080";

// Récupération de l'Id dans l'url ou dans les cookie
var parametres = new URLSearchParams(window.location.search);
var IdProfil = parametres.get("Id");
if (IdProfil == null) {
    if (isCookieSet("isConnected")) {
        var connect = getCookieValue("isConnected");
        if (connect == 0) {
            window.location.href = "index.html";
        } else if (connect == 2 && getCookieValue("Id") == "") {
            IdProfil = 0;
        } else {
            IdProfil = getCookieValue("Id");
        }
    }
}

// Récuperation des balises pour les compléter
var divInfoProfil = document.getElementById('info-personnel');
var divCollection = document.getElementById('collection');

fetch(baseURL + "/user?user_id=" + IdProfil)
    .then((response) => {
        return response.json();
    }).then((json) => {
        profilInfo(json);
    });

function profilInfo(json) {
    var imgProfil = document.createElement('img');
    imgProfil.className = "profil-pic";
    if (json[0].Photo == "" || json[0].Photo == null) {
        imgProfil.src = "../img/default-profil-picture.png";
    } else {
        imgProfil.src = json[0].Photo;
    }

    var divInfo = document.createElement('div');
    divInfo.className = "info";

    var strong1 = document.createElement('strong');
    strong1.innerHTML = "Nom:";

    var p1 = document.createElement('p');
    p1.innerHTML = " " + json[0].Nom;
    p1.style = "display: inline;";

    var br1 = document.createElement('br');
    var br2 = document.createElement('br');

    var strong2 = document.createElement('strong');
    strong2.innerHTML = "Email:";

    var p2 = document.createElement('p');
    p2.innerHTML = " " + json[0].Email;
    p2.style = "display: inline;";

    var br3 = document.createElement('br');

    var modifBouton = document.createElement('button');
    modifBouton.className = "add-to-list-btn";
    modifBouton.innerHTML = "Modifier le profil";

    divInfo.appendChild(strong1);
    divInfo.appendChild(p1);
    divInfo.appendChild(br1);
    divInfo.appendChild(br2);
    divInfo.appendChild(strong2);
    divInfo.appendChild(p2);
    divInfo.appendChild(br3);
    divInfo.appendChild(modifBouton);
    divInfoProfil.appendChild(imgProfil);
    divInfoProfil.appendChild(divInfo);
}


fetch(baseURL + "/collection?user_id=" + IdProfil, {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${getCookieValue("Token")}`,
        'Content-Type': 'application/json'
    }
})
    .then((response) => {
        return response.json();
    }).then((json) => {
        getBooksFromCollection(json);
    });

function getBooksFromCollection(arrayCategorie) {
    arrayCategorie.forEach(element => {
        fetch(baseURL + "/livre?collection_id=" + element.Id, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getCookieValue("Token")}`,
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                return response.json();
            }).then((json) => {
                createCollection(json, element.Nom);
            });
    });
}

function createCollection(arrayLivre, titre) {

    var titreCollection = document.createElement('h3');
    titreCollection.innerHTML = titre;
    titreCollection.className = "titre-collection";

    var divLivres = document.createElement('div');
    divLivres.className = "collection-livre";

    arrayLivre.forEach(element => {
        var boutonLivre = document.createElement('button');
        boutonLivre.value = element.Id;
        boutonLivre.className = "buLivre";

        // Ajout d'une action click pour tous les bouton livres
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

        var nomLivre = document.createElement('p');
        nomLivre.innerHTML = element.Nom;

        boutonLivre.appendChild(imgLivre);
        boutonLivre.appendChild(nomLivre);
        divLivres.appendChild(boutonLivre);
    });

    divCollection.appendChild(titreCollection);
    divCollection.appendChild(divLivres);
}
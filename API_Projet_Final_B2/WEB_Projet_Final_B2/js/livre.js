// URL API
var baseURL = "http://localhost:8080";

// Récupération de l'Id dans l'url ou dans les cookie
var parametres = new URLSearchParams(window.location.search);
var IdLivre = parametres.get("Id");
if (IdLivre == null) {
    window.location.href = "index.html";
}

// Info livre
var divLivreInfos = document.getElementById('book-details');
var divInfo = document.getElementById('book-info');
// Pop up
var popUp = document.getElementById('collection');
popUp.className = "displayNone";
var buCroix = document.getElementById('bouton-croix');
var divListCollection = document.getElementById('list-collection');
var buAjouterCollection = document.getElementById('buAjouterCollection');
// Com
var divCommentaires = document.getElementById('comments-section');
var divAjouterCommentaire = document.getElementById('addComment');
var buAjouterCommentaire = document.getElementById('boutonAjouter');



fetch(baseURL + "/livre?livre_id=" + IdLivre)
    .then((response) => {
        return response.json();
    }).then((json) => {
        livreInfos(json);
    });

function livreInfos(arrayLivre) {
    var imgLivre = document.createElement('img');
    imgLivre.className = "livre-pic";
    if (arrayLivre[0].Photo == "" || arrayLivre[0].Photo == null) {
        imgLivre.src = "../img/livre.png";
    } else {
        imgLivre.src = arrayLivre[0].Photo;
    }

    var divInfo = document.createElement('div');
    divInfo.className = "book-info";

    var titreLivre = document.createElement('h1');
    titreLivre.innerHTML = arrayLivre[0].Nom;

    var strong1 = document.createElement('strong');
    strong1.innerHTML = "Auteur:";

    // fetch l'auteur du livre ---------------------------------
    var p1 = document.createElement('button');
    p1.className = "boutonAuteur";
    p1.value = arrayLivre[0].Id_Auteur;
    fetch(baseURL + "/auteur?auteur_id=" + arrayLivre[0].Id_Auteur)
        .then((response) => {
            return response.json();
        }).then((json) => {
            p1.innerHTML = " " + json[0].Nom;
        });
    p1.addEventListener('click', function () {
        var valeur = p1.value;
        window.location.href = "auteur.html?Id=" + encodeURIComponent(valeur);
    });

    var br1 = document.createElement('br');
    var br2 = document.createElement('br');

    var strong2 = document.createElement('strong');
    strong2.innerHTML = "Genre:";

    // fetch la categorie du Livre -------------------------------
    var p2 = document.createElement('p');
    p2.style = "display: inline;";
    fetch(baseURL + "/categorie?categorie_id=" + arrayLivre[0].Id_Categorie)
        .then((response) => {
            return response.json();
        }).then((json) => {
            p2.innerHTML = " " + json[0].Nom;
        });

    var br3 = document.createElement('br');
    var br4 = document.createElement('br');

    var p3 = document.createElement('p');
    p3.innerHTML = arrayLivre[0].Prix + " €";
    p3.className = "price";

    var br5 = document.createElement('br');

    var strong3 = document.createElement('strong');
    strong3.innerHTML = "Description:";

    var p4 = document.createElement('p');
    p4.innerHTML = arrayLivre[0].Description;
    p4.style = "display: inline;";

    var divBouton = document.createElement('div');
    divBouton.className = "buttons";
    divBouton.style = "margin-top: 20px;"

    var bouton = document.createElement('button');
    bouton.innerHTML = "Ajouter à une collection";
    bouton.className = "add-Livre";
    bouton.id = "add-Livre";

    bouton.addEventListener('click', function () {
        popUp.className = "background-flou";
    });

    verifConnection(bouton);

    divInfo.appendChild(titreLivre);
    divInfo.appendChild(strong1);
    divInfo.appendChild(p1);
    divInfo.appendChild(br1);
    divInfo.appendChild(br2);
    divInfo.appendChild(strong2);
    divInfo.appendChild(p2);
    divInfo.appendChild(br3);
    divInfo.appendChild(br4);
    divInfo.appendChild(p3);
    divInfo.appendChild(br5);
    divInfo.appendChild(strong3);
    divInfo.appendChild(p4);
    divBouton.appendChild(bouton);
    divInfo.appendChild(divBouton);
    divLivreInfos.appendChild(imgLivre);
    divLivreInfos.appendChild(divInfo);
}

fetch(baseURL + "/commentaire?livre_id=" + IdLivre)
    .then((response) => {
        return response.json();
    }).then((json) => {
        createCommentaire(json);
    });

function createCommentaire(arrayCom) {
    arrayCom.forEach(element => {

        var divCom = document.createElement('div');
        divCom.className = "comment";
        divCom.id = element.Id;

        var buProfil = document.createElement('button');
        buProfil.className = "boutonProfilCom";
        buProfil.value = element.Id_User;

        // Ajout d'une action click pour tous les bouton
        buProfil.addEventListener('click', function () {
            var valeur = buProfil.value;
            window.location.href = "profil.html?Id=" + encodeURIComponent(valeur);
        });

        var imgProfil = document.createElement('img');
        imgProfil.className = "profil_pic_comment";
        fetch(baseURL + "/user?user_id=" + element.Id_User)
            .then((response) => {
                return response.json();
            }).then((json) => {
                if (json[0].Photo == null || json[0].Photo == "") {
                    imgProfil.src = "../img/default-profil-picture.png";
                } else {
                    imgProfil.src = json[0].Photo;
                }
            });

        var textComment = document.createElement('p');
        textComment.innerHTML = element.Com;

        buProfil.appendChild(imgProfil)
        divCom.appendChild(buProfil);
        divCom.appendChild(textComment);
        divCommentaires.appendChild(divCom);
    });
}

function verifConnection(bouton) {
    if (isCookieSet("isConnected")) {
        var connect = getCookieValue("isConnected");
        if (connect == 0) {
            bouton.className = "displayNone";
            divAjouterCommentaire.className = "displayNone";
        } else {
            bouton.className = "add-Livre";
            divAjouterCommentaire.className = "";
        }
    } else {
        bouton.className = "displayNone";
        divAjouterCommentaire.className = "displayNone";
    }
}

buAjouterCommentaire.addEventListener('click', function () {
    var textBox = document.getElementById('input-text');
    if (textBox.value != "" || textBox.value != null) {
        // Création du commmentaire
        const response = fetch(baseURL + "/commentaire/add?livre_id=" + IdLivre + "&text_commentaire=" + textBox.value, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${getCookieValue("Token")}`,
                'Content-Type': 'application/json'
            }
        });
    }
});

// Pop up => Collections
buCroix.addEventListener('click', function () {
    popUp.className = "displayNone";
});

fetch(baseURL + "/collection", {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${getCookieValue("Token")}`,
        'Content-Type': 'application/json'
    }
}).then((response) => {
    return response.json();
}).then((json) => {
    createCollection(json);
});

function createCollection(arrayCollection) {
    arrayCollection.forEach(element => {

        var divItem1 = document.createElement('div');
        divItem1.className = "item";

        var nomCollection = document.createElement('div');
        nomCollection.className = "collection-name";
        nomCollection.innerHTML = element.Nom;
        nomCollection.id = element.Id;

        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.id = element.Id;

        divItem1.appendChild(nomCollection);
        divItem1.appendChild(checkbox);
        divListCollection.appendChild(divItem1);
    });

    var divItem2 = document.createElement('div');
    divItem2.className = "item";

    var boutonAjouter = document.createElement('button');
    boutonAjouter.className = "buAjouterCollection";
    boutonAjouter.id = "buAjouterCollection";
    boutonAjouter.innerHTML = "Ajouter";

    boutonAjouter.addEventListener('click', function () {
        var collec = document.getElementsByClassName('collection-name');
        var checkbox = document.getElementsByClassName('checkbox');
        for (let i = 0; i < collec.length; i++) {
            // console.log(collec[i].innerHTML + " : " + checkbox[i].checked + " : " + checkbox[i].id);
            // Ajout du livre aux collection si la checkbox est cochée 
            if (checkbox[i].checked) {
                const response = fetch(baseURL + "/collection/add_livre?livre_id=" + IdLivre + "&collection_id=" + checkbox[i].id, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${getCookieValue("Token")}`,
                        'Content-Type': 'application/json'
                    }
                });
            }
        }
        popUp.className = "displayNone";
    });

    divItem2.appendChild(boutonAjouter);
    divListCollection.appendChild(divItem2);
}



// URL API
var baseURL = "http://localhost:8080";

if (isCookieSet("isConnected")) {
    if (getCookieValue("isConnected") != 2) {
        window.location.href = 'index.html';
    }
} else {
    window.location.href = 'index.html';
}

// Ajout de livre -----------------------------------------------------------------
// Inputs
var inputNomLivre = document.getElementById('inputNomLivre');
var inputDescriptionLivre = document.getElementById('inputDescriptionLivre');
var inputPhotoLivre = document.getElementById('inputPhotoLivre');
var inputIsbnLivre = document.getElementById('inputIsbnLivre');
var inputEditeurLivre = document.getElementById('inputEditeurLivre');
var inputPrixLivre = document.getElementById('inputPrixLivre');
var inputAuteurIdLivre = document.getElementById('inputAuteurIdLivre');
var inputCategorieIdLivre = document.getElementById('inputCategorieIdLivre');
// Warnings
var warningNomLivre = document.getElementById('warningNomLivre');
var warningDescriptionLivre = document.getElementById('warningDescriptionLivre');
var warningPhotoLivre = document.getElementById('warningPhotoLivre');
var warningIsbnLivre = document.getElementById('warningIsbnLivre');
var warningEditeurLivre = document.getElementById('warningEditeurLivre');
var warningPrixLivre = document.getElementById('warningPrixLivre');
var warningAuteurIdLivre = document.getElementById('warningAuteurIdLivre');
var warningCategorieIdLivre = document.getElementById('warningCategorieIdLivre');
var warningTypeLivre = document.getElementById('warningTypeLivre');
// Button
var buAjouterLivre = document.getElementById('buAjouterLivre');

buAjouterLivre.addEventListener('click', function () {
    var nothingEmpty = true;

    if (inputNomLivre.value == "") {
        warningNomLivre.className = "warning";
        nothingEmpty = false;
    } else {
        warningNomLivre.className = "displayNone";
    }
    if (inputDescriptionLivre.value == "") {
        warningDescriptionLivre.className = "warning";
        nothingEmpty = false;
    } else {
        warningDescriptionLivre.className = "displayNone";
    }
    if (inputPhotoLivre.value == "") {
        warningPhotoLivre.className = "warning";
        nothingEmpty = false;
    } else {
        warningPhotoLivre.className = "displayNone";
    }
    if (inputIsbnLivre.value == "") {
        warningIsbnLivre.className = "warning";
        nothingEmpty = false;
    } else {
        warningIsbnLivre.className = "displayNone";
    }
    if (inputEditeurLivre.value == "") {
        warningEditeurLivre.className = "warning";
        nothingEmpty = false;
    } else {
        warningEditeurLivre.className = "displayNone";
    }
    if (inputPrixLivre.value == "") {
        warningPrixLivre.className = "warning";
        nothingEmpty = false;
    } else {
        warningPrixLivre.className = "displayNone";
    }
    if (inputAuteurIdLivre.value == "") {
        warningAuteurIdLivre.className = "warning";
        nothingEmpty = false;
    } else {
        warningAuteurIdLivre.className = "displayNone";
    }
    if (inputCategorieIdLivre.value == "") {
        warningCategorieIdLivre.className = "warning";
        nothingEmpty = false;
    } else {
        warningCategorieIdLivre.className = "displayNone";
    }

    // Call API pour ajouter le livre 
    if (nothingEmpty) {
        var toutEstBon = true;
        var prix = parseFloat(inputPrixLivre.value);
        var idAuteur = parseInt(inputAuteurIdLivre.value);
        var idCategorie = parseInt(inputCategorieIdLivre.value);

        if (isNaN(prix) || isNaN(idAuteur) || isNaN(idCategorie)) {
            toutEstBon = false;
            warningTypeLivre.className = "warning";
        } else {
            warningTypeLivre.className = "displayNone";
        }

        // Execution de la requête
        if (toutEstBon) {
            const response = fetch(baseURL + "/livre/add?categorie_id=" + idCategorie + "&auteur_id=" + idAuteur + "&nom=" + inputNomLivre.value + "&description=" + inputDescriptionLivre.value + "&photo=" + inputPhotoLivre.value + "&isbn=" + inputIsbnLivre.value + "&editeur=" + inputEditeurLivre.value + "&prix=" + prix, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${getCookieValue("Token")}`,
                    'Content-Type': 'application/json'
                }
            });
        }

        // Reset des champs pour éviter de faire la manip deux fois :)
        inputNomLivre.value = "";
        inputDescriptionLivre.value = "";
        inputPhotoLivre.value = "";
        inputIsbnLivre.value = "";
        inputEditeurLivre.value = "";
        inputPrixLivre.value = "";
        inputAuteurIdLivre.value = "";
        inputCategorieIdLivre.value = "";
    }
});


// Changer les informations d'un livre --------------------------------------------
// Inputs
var inputIdLivreModif = document.getElementById('inputIdLivreModif');
var inputNomLivreModif = document.getElementById('inputNomLivreModif');
var inputDescriptionLivreModif = document.getElementById('inputDescriptionLivreModif');
var inputPhotoLivreModif = document.getElementById('inputPhotoLivreModif');
var inputIsbnLivreModif = document.getElementById('inputIsbnLivreModif');
var inputEditeurLivreModif = document.getElementById('inputEditeurLivreModif');
var inputPrixLivreModif = document.getElementById('inputPrixLivreModif');
var inputAuteurIdLivreModif = document.getElementById('inputAuteurIdLivreModif');
var inputCategorieIdLivreModif = document.getElementById('inputCategorieIdLivreModif');
// Warning
var warningIdLivre = document.getElementById('warningIdLivre');
var warningChangerInfoLivre = document.getElementById('warningChangerInfoLivre');
var warningTypeLivreModif = document.getElementById('warningTypeLivreModif');
// Button
var buModifierLivre = document.getElementById('buModifierLivre');

buModifierLivre.addEventListener('click', function () {
    var Ok = true;

    if (inputIdLivreModif.value == "") {
        warningIdLivre.className = "warning";
        Ok = false;
    } else {
        warningIdLivre.className = "displayNone";
    }

    if (inputNomLivreModif.value == "" && inputDescriptionLivreModif.value == "" && inputPhotoLivreModif.value == "" && inputIsbnLivreModif.value == "" && inputEditeurLivreModif.value == "" && inputPrixLivreModif.value == "" && inputAuteurIdLivreModif.value == "" && inputCategorieIdLivreModif.value == "") {
        warningChangerInfoLivre.className = "warning";
        Ok = false;
    } else {
        warningChangerInfoLivre.className = "displayNone";
    }

    if (Ok) {
        var toutEstBon = true;
        var id = parseFloat(inputIdLivreModif.value);
        var prix = parseFloat(inputPrixLivre.value);
        var idAuteur = parseInt(inputAuteurIdLivre.value);
        var idCategorie = parseInt(inputCategorieIdLivre.value);

        if (isNaN(id)) {
            toutEstBon = false;
        }
        if (inputPrixLivre.value != "" && isNaN(prix)) {
            toutEstBon = false;
        }
        if (inputAuteurIdLivre.value != "" && isNaN(idAuteur)) {
            toutEstBon = false;
        }
        if (inputCategorieIdLivre.value != "" && isNaN(idCategorie)) {
            toutEstBon = false;
        }

        // Execution de la requête
        if (toutEstBon) {
            warningTypeLivreModif.className = "displayNone";

            var url = baseURL + "/livre/change_info?livre_id=" + id;

            if (inputNomLivreModif.value != "") {
                url = url + "&nom=" + inputNomLivreModif.value;
            }
            if (inputDescriptionLivreModif.value != "") {
                url = url + "&description=" + inputDescriptionLivreModif.value;
            }
            if (inputPhotoLivreModif.value != "") {
                url = url + "&photo=" + inputPhotoLivreModif.value;
            }
            if (inputIsbnLivreModif.value != "") {
                url = url + "&isbn=" + inputIsbnLivreModif.value;
            }
            if (inputEditeurLivreModif.value != "") {
                url = url + "&editeur=" + inputEditeurLivreModif.value;
            }
            if (inputNomLivreModif.value != "") {
                url = url + "&prix=" + prix;
            }
            if (inputNomLivreModif.value != "") {
                url = url + "&id_auteur=" + idAuteur;
            }
            if (inputNomLivreModif.value != "") {
                url = url + "&id_categorie=" + idCategorie;
            }

            const response = fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${getCookieValue("Token")}`,
                    'Content-Type': 'application/json'
                }
            });
        } else {
            warningTypeLivreModif.className = "warning";
        }

        // Reset des champs pour éviter de faire la manip deux fois :)
        inputIdLivreModif.value = "";
        inputNomLivreModif.value = "";
        inputDescriptionLivreModif.value = "";
        inputPhotoLivreModif.value = "";
        inputIsbnLivreModif.value = "";
        inputEditeurLivreModif.value = "";
        inputPrixLivreModif.value = "";
        inputAuteurIdLivreModif.value = "";
        inputCategorieIdLivreModif.value = "";
    }
});

// Suppression d'un livre ---------------------------------------------------------
// Input
var inputSupprimerLivre = document.getElementById('inputSupprimerLivre');
// Warning
var warningSupprimerLivre = document.getElementById('warningSupprimerLivre');
var warningTypeLivreSuppr = document.getElementById('warningTypeLivreSuppr');
// Button
var buSupprimerLivre = document.getElementById('buSupprimerLivre');

buSupprimerLivre.addEventListener('click', function () {
    var isEmpty = false;

    if (inputSupprimerLivre.value == "") {
        warningSupprimerLivre.className = "warning";
        isEmpty = true;
    } else {
        warningSupprimerLivre.className = "displayNone";
    }

    if (!isEmpty) {
        var toutEstBon = true;
        var id = parseInt(inputSupprimerLivre.value);

        if (isNaN(id)) {
            toutEstBon = false; 
        }

        // Execution de la requête
        if (toutEstBon) {
            warningTypeLivreSuppr.className = "displayNone";

            const response = fetch(baseURL + "/livre/delete?livre_id=" + id , {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${getCookieValue("Token")}`,
                    'Content-Type': 'application/json'
                }
            });
        } else {
            warningTypeLivreSuppr.className = "warning";
        }

        // Reset des champs pour éviter de faire la manip deux fois :)
        inputSupprimerLivre.value = "";
    }
});

// Ajout d'un auteur --------------------------------------------------------------
// Inputs
var inputNomAuteur = document.getElementById('inputNomAuteur');
var inputDescriptionAuteur = document.getElementById('inputDescriptionAuteur');
var inputPhotoAuteur = document.getElementById('inputPhotoAuteur');
// Warnings
var warningNomAuteur = document.getElementById('warningNomAuteur');
var warningDescriptionAuteur = document.getElementById('warningDescriptionAuteur');
var warningPhotoAuteur = document.getElementById('warningPhotoAuteur');
// Button
var buAjoutAuteur = document.getElementById('buAjoutAuteur');

buAjoutAuteur.addEventListener('click', function () {
    var nothingEmpty = true;

    if (inputNomAuteur.value == "") {
        warningNomAuteur.className = "warning";
        nothingEmpty = false;
    } else {
        warningNomAuteur.className = "displayNone";
    }
    if (inputDescriptionAuteur.value == "") {
        warningDescriptionAuteur.className = "warning";
        nothingEmpty = false;
    } else {
        warningDescriptionAuteur.className = "displayNone";
    }
    if (inputPhotoAuteur.value == "") {
        warningPhotoAuteur.className = "warning";
        nothingEmpty = false;
    } else {
        warningPhotoAuteur.className = "displayNone";
    }

    if (nothingEmpty) {
        // Execution de la requête
        const response = fetch(baseURL + "/auteur/create?nom=" + inputNomAuteur.value + "&description=" +  inputDescriptionAuteur.value + "&photo=" + inputPhotoAuteur.value, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${getCookieValue("Token")}`,
                'Content-Type': 'application/json'
            }
        });

        // Reset des champs pour éviter de faire la manip deux fois :)
        inputNomAuteur.value = "";
        inputDescriptionAuteur.value = "";
        inputPhotoAuteur.value = "";
    }
});

// Ajout d'une catégorie ----------------------------------------------------------
// Input
var inputNomCategorie = document.getElementById('inputNomCategorie');
// Warning
var warningNomCategorie = document.getElementById('warningNomCategorie');
// Button
var buAjoutCategorie = document.getElementById('buAjoutCategorie');

buAjoutCategorie.addEventListener('click', function () {
    var isEmpty = false;

    if (inputNomCategorie.value == "") {
        warningNomCategorie.className = "warning";
        isEmpty = true;
    } else {
        warningNomCategorie.className = "displayNone";
    }

    if (!isEmpty) {
        // Execution de la requête
        const response = fetch(baseURL + "/categorie/create?nom=" + inputNomCategorie.value, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${getCookieValue("Token")}`,
                'Content-Type': 'application/json'
            }
        });


        // Reset des champs pour éviter de faire la manip deux fois :)
        inputNomCategorie.value = "";
    }
});

// Suppression d'un commentaire ---------------------------------------------------
// Input
var inputIdCommentaire = document.getElementById('inputIdCommentaire');
// Warning
var warningIdCommentaire = document.getElementById('warningIdCommentaire');
var warningTypeCommentaire = document.getElementById('warningTypeCommentaire');
// Button
var buSupprimerCommentaire = document.getElementById('buSupprimerCommentaire');

buSupprimerCommentaire.addEventListener('click', function () {
    var isEmpty = false;

    if (inputIdCommentaire.value == "") {
        warningIdCommentaire.className = "warning";
        isEmpty = true;
    } else {
        warningIdCommentaire.className = "displayNone";
    }

    if (!isEmpty) {
        var toutEstBon = true;
        var id = parseInt(inputIdCommentaire.value);

        if (isNaN(id)) {
            toutEstBon = false; 
        }

        // Execution de la requête
        if (toutEstBon) {
            warningTypeCommentaire.className = "displayNone";

            const response = fetch(baseURL + "/commentaire/delete?commentaire_id=" + id, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${getCookieValue("Token")}`,
                    'Content-Type': 'application/json'
                }
            });
        } else {
            warningTypeCommentaire.className = "warning";
        }

        // Reset des champs pour éviter de faire la manip deux fois :)
        inputIdCommentaire.value = "";
    }
});

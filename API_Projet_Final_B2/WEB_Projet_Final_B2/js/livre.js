var popUp = document.getElementById('collection');
var buAddLivre = document.getElementById('Add-Livre');
var buCroix = document.getElementById('bouton-croix');
var buAjouterCollection = document.getElementById('buAjouterCollection');
var buAjouterCommentaire = document.getElementById('boutonAjouter');

popUp.className = "displayNone";

buAddLivre.addEventListener('click', function () {
    popUp.className = "background-flou";
});

buCroix.addEventListener('click', function () {
    popUp.className = "displayNone";
});

buAjouterCollection.addEventListener('click', function () {
    var collec = document.getElementsByClassName('collection-name');
    var checkbox = document.getElementsByClassName('checkbox');
    for (let i = 0; i < collec.length; i++) {
        console.log(collec[i].innerHTML + " : " + checkbox[i].checked);
    }
    popUp.className = "displayNone";
});

buAjouterCommentaire.addEventListener('click', function () {
    var text = document.getElementById('input-text').value;
    console.log(text);
});

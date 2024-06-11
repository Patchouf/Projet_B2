var livres = document.getElementsByClassName('buLivre');

// Ajout d'une action click pour tous les bouton resultats
for (let element of livres) {
    element.addEventListener('click', function () {
        var valeur = element.value;
        console.log(valeur);
        window.location.href = "livre.html?Id=" + encodeURIComponent(valeur);
    });
}
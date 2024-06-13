// Obtenir tous les cookies
const cookies = document.cookie.split(';');

// Fonction pour vérifier si un cookie existe
function isCookieSet(cookieName) {
    // Rechercher le cookie par son nom
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Vérifier si le cookie commence par le nom recherché
        if (cookie.startsWith(cookieName + '=')) {
            return true; // Le cookie est trouvé
        }
    }
    return false; // Le cookie n'est pas trouvé
}

function getCookieValue(cookieName) {

    // Parcourir chaque cookie
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();

        // Vérifier si le cookie commence par le nom recherché suivi de "="
        if (cookie.startsWith(cookieName + '=')) {
            // Retourner la valeur du cookie en supprimant le "cookieName="
            return cookie.substring(cookieName.length + 1);
        }
    }

    // Si le cookie n'est pas trouvé, retourner null ou une chaîne vide
    return null;
}

// Exemple d'utilisation
if (isCookieSet('isConnected')) {
    if (getCookieValue("isConnected") == "0") {
        fetch('../html/notConnectedHeader.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header').innerHTML = data;
            })
            .catch(error => console.error('Error loading the HTML:', error));
    } else if (getCookieValue("isConnected") == "1") {
        fetch('../html/connectedHeader.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header').innerHTML = data;
            })
            .catch(error => console.error('Error loading the HTML:', error));
    } else if (getCookieValue("isConnected") == "2") {
        fetch('../html/adminHeader.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header').innerHTML = data;
            })
            .catch(error => console.error('Error loading the HTML:', error));
    }
} else {
    fetch('../html/notConnectedHeader.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading the HTML:', error));
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getDeconnexionButton() {
    for (let i = 0; i < 10; i++) {
        try {
            var deconnexion = document.getElementById('buDeconnexion');

            deconnexion.addEventListener('click', function () {
                document.cookie = "isConnected=" + ("0" || "") + "; path=/";
                document.cookie = "Token=" + ("" || "") + "; path=/";
                document.cookie = "Id=" + ("" || "") + "; path=/";
                window.location.href = 'index.html';
            });
        } catch { }

        await delay(2000);
    }
}

getDeconnexionButton();

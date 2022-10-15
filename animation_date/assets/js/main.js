// Déclaration des variables pour la date en affectant avec l'ID du document correspondant
const dayElement = document.getElementById('day'),
    monthElement = document.getElementById('month'),
    yearElement = document.getElementById('year');

// Déclaration des variables pour l'heure avec la même méthode d'affectation 
const hourElement = document.getElementById('hour'),
    minutesElement = document.getElementById('minutes'),
    secondesElement = document.getElementById('secondes');

// Création d'une fonction pour animer la date et l'heure
// Ici main() est le nom de la fonction
function main() {

    // Déclaration d'une variable en créant un nouveau constructeur Date()
    let date = new Date();

    let day = date.getDate() < 10 ? 
        `0${ date.getDate() }`: date.getDate(),
    month = (date.getMonth() + 1) < 10 ? 
        `0${ (date.getMonth() + 1) }`: (date.getMonth() + 1),
    year = date.getFullYear().toString().slice(2);

    let hour = date.getHours() < 10 ? 
        `0${ date.getHours() }`: date.getHours(),
    minutes = date.getMinutes() < 10 ?
        `0${ date.getMinutes() }` : date.getMinutes(),
    secondes = date.getSeconds() < 10 ? 
        `0${ date.getSeconds() }`: date.getSeconds();

    // Affectation des variables constantes avec la propriété innerText pour pouvoir afficher les animations    
    dayElement.innerText = day;
    monthElement.innerText = month;
    yearElement.innerText = year;

    hourElement.innerText = hour;
    minutesElement.innerText = minutes;
    secondesElement.innerText = secondes; 
}

// Appel avec la fonction setInterval dans chaque 1 seconde
setInterval(main, 1000);

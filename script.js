// Si il y a plusieurs éléments .draggable
// Obtenir tous les éléments Draggie
var draggableElems = document.querySelectorAll('.draggable');

/* array of Draggabillies
var draggies = []

// init Draggabillies
for ( var i=0; i < draggableElems.length; i++ ) {
var draggableElem = draggableElems[i];
var draggie = new Draggabilly( draggableElem, {
    containment: true,
});

draggies.push( draggie );
}*/

// Vérifiez si nous sommes sur une page nécessitant un positionnement aléatoire
var section = document.querySelector('#section3');
if (section) {
    var sectionWidth = section.offsetWidth;
    var sectionHeight = section.offsetHeight;
    
    // Positionnement aléatoire des éléments dans #section3
    draggableElems.forEach(function(elem) {
    // Générer des positions aléatoires dans les limites de la section
    var randomX = Math.random() * (sectionWidth - elem.offsetWidth);
    var randomY = Math.random() * (sectionHeight - elem.offsetHeight);

    // Appliquer les positions aléatoires
    elem.style.left = randomX + 'px';
    elem.style.top = randomY + 'px';
});
}

// array of Draggabillies
var draggies = [];

// init Draggabillies
for (var i = 0; i < draggableElems.length; i++) {
    var draggableElem = draggableElems[i];
    var draggie = new Draggabilly(draggableElem, {
        containment: true, // Garder cette configuration pour toutes les pages
    });

    draggies.push(draggie);
}


// essai d'affichage des panneau cosplay

document.addEventListener("DOMContentLoaded", function () {
    var panneauCosplay = document.querySelector("#panneau_cosplay");

    if (panneauCosplay) {
        var panneauWidth = panneauCosplay.offsetWidth;
        var panneauHeight = panneauCosplay.offsetHeight;
        var draggableCosplayElems = panneauCosplay.querySelectorAll(".draggable");
        var placedPositions = []; // Stocke les positions déjà prises

        draggableCosplayElems.forEach(function (elem) {
            var elemWidth = elem.offsetWidth;
            var elemHeight = elem.offsetHeight;
            var maxAttempts = 50; // Nombre max de tentatives pour éviter les superpositions
            var attempts = 0;
            var positionValid = false;
            var randomX, randomY;

            while (!positionValid && attempts < maxAttempts) {
                randomX = Math.random() * (panneauWidth - elemWidth);
                randomY = Math.random() * (panneauHeight - elemHeight);
                positionValid = true;

                // Vérifier la collision avec les autres images déjà placées
                for (var i = 0; i < placedPositions.length; i++) {
                    var other = placedPositions[i];
                    if (
                        randomX < other.x + other.width &&
                        randomX + elemWidth > other.x &&
                        randomY < other.y + other.height &&
                        randomY + elemHeight > other.y
                    ) {
                        positionValid = false;
                        break; // Sort de la boucle dès qu'une collision est détectée
                    }
                }
                attempts++;
            }

            // Si on a trouvé une position sans superposition, on place l'image
            elem.style.left = randomX + "px";
            elem.style.top = randomY + "px";

            // Enregistrer la position de cette image
            placedPositions.push({ x: randomX, y: randomY, width: elemWidth, height: elemHeight });
        });

        // Initialisation des Draggabilly
        var cosplayDraggies = [];
        draggableCosplayElems.forEach(function (elem) {
            var draggie = new Draggabilly(elem, {
                containment: panneauCosplay, // Garde les éléments à l'intérieur de la section
            });
            cosplayDraggies.push(draggie);
        });
    }
});
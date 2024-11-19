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
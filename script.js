// Si il y a plusieurs éléments .draggable
// Obtenir tous les éléments Draggie
var draggableElems = document.querySelectorAll('.draggable');

// array of Draggabillies
var draggies = []

// init Draggabillies
for ( var i=0; i < draggableElems.length; i++ ) {
var draggableElem = draggableElems[i];
var draggie = new Draggabilly( draggableElem, {
    containment: true,
});

draggies.push( draggie );
}
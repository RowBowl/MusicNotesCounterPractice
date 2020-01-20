
var Note = require('../config/note.js');
var ScaleBuilder = require('../config/scale.js');


var alphabet = 'A,B,C,D,E,F,G';

//build the scale (array of notes)
var cNotes = ScaleBuilder.generateChromatic(alphabet);


//choose a random pair of notes



//calculate the # number of seminotes between the notes


 module.exports = {allNotes:cNotes, direction:"cw"};

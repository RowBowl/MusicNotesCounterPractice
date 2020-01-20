var Note = require('../config/note.js')


class ScaleBuilder{
    static generateChromatic(alphabet){
        var chromatic = [], chromaticNotes=[];


        alphabet.split(',').forEach(function(letter, index,arr){
            chromatic.push(letter);
            if(letter !== "B" && letter !== "E"){
                chromatic.push(letter + '#' + arr[(index+1)%7] + 'b');
            }
        });
        chromatic.forEach(function(note){
            if(note.endsWith('b')){
                chromaticNotes.push(new Note(note, true));
            } else{
                chromaticNotes.push(new Note(note, false));
            }
        });

        return chromaticNotes;
    }
}

module.exports = ScaleBuilder;

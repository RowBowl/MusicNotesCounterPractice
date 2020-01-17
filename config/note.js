

class Note{
    constructor(note, hasAccidental){
        this.note = note;
        this.hasAccidental = hasAccidental;
    }

    getNote(){
        return this.note;
    }
}

module.exports = Note;

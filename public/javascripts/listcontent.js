

/*class ListItem{
    constructor(firstNote, secondNote, usrAnswer, correctAnswer){
        this.firstNote = firstNote;
        this.secondNote = secondNote;
        this.usrAnswer = usrAnswer;
        this.correctAnswer = correctAnswer;
    }

    get isCorrect(){
        return usrAnswer === correctAnswer ? 'Correct' : 'Incorrect';
    }
}*/


class ActivityList{
    constructor(){
        this.displayString = '';
    }
    addItem(first, second, uAnswer, cAnswer){
        let isCorrect = (uAnswer === cAnswer) ? 'Correct' : 'Incorrect',
            textColor = (uAnswer === cAnswer) ? 'green' : 'red';
        let timeDate =  new Date().toLocaleString([], {day:'numeric',
         month:'2-digit', year:'numeric',hour: '2-digit', minute:'2-digit'});

        this.appendString(
        `
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Notes: ${first}, ${second}</h5>
                </div>
                <p class="mb-1">Result: <span style="color:${textColor}">
                ${isCorrect} </span></p>
                <small class="text-muted">${timeDate}</small>
            </a>
        `);
        return;
    }

    appendString(toAppend){
        this.displayString += toAppend;
    }
    get getDisplay(){
        return this.displayString;
    }
}

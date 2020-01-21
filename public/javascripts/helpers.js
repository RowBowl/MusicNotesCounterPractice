
function processData(data){
    let notes = data.pair;
    for(let i = 0; i < 2; i++){
        //console.log(notes[i].hasAccidental + "  :  " + notes[i].note.substring(0,2))
        if(Math.round(Math.random() * 1)){
            notes[i].note = notes[i].hasAccidental ? notes[i].note.slice(2) : notes[i].note;
        } else{
            notes[i].note = notes[i].hasAccidental ? notes[i].note.substring(0,2) : notes[i].note;
        }
    }

    let answer = data.numOfSeminotes;
    let displayNotes = document.getElementById('_displayNotes');
    genFirst = notes[0].note;
    genSecond = notes[1].note;
    displayNotes.innerHTML = `<ul class="list-inline">
                                  <li class="list-inline-item">${notes[0].note}</li>
                                  <li class="list-inline-item">${notes[1].note}</li>
                              </ul>`;
    $('[data-toggle="popover"]').popover('hide');

}

function validateResponse(response){
    if(response.ok){
        console.log('notes produced');
        return response.json();
    }
    throw new Error('Fetching Notes failed');
}

function answerBtnClick(element) {
    var aList = new ActivityList();
    console.log('fetch answer');
    status = "Answer Clicked";
    let parsed = parseInt(element.value), displayContent='';
    colorElement(document.getElementById(`_usrAnswer${correctAnswer}`), "green");

    if(parsed && parsed > 0 && parsed < 13){
        if(parsed === correctAnswer){
            displayContent = 'Correct!';
        } else{
            colorElement(document.getElementById(`_usrAnswer${parsed}`), "red");
            displayContent = 'Incorrect!';
        }
    }
    disableAnswers();
    aList.addItem(genFirst,genSecond, parsed, correctAnswer);

    $('#_listContents').append(aList.getDisplay);

    $(`button#${element.id}`).popover({
        trigger: 'focus',
        placement: 'bottom',
        content: displayContent,
        container: 'body'
    });
    $(`button#${element.id}`).popover("show");
}

function colorElement(element, color){
    element.style.backgroundColor=color;
}

function disableAnswers(){
    for(let i = 1; i < 12; i++){
        document.getElementById(`_usrAnswer${i}`)
        .setAttribute("disabled", "");
    }
}

function enableAnswers(){
    for(let i = 1; i < 12; i++){
        let element = document.getElementById(`_usrAnswer${i}`);
        element.removeAttribute("disabled");
        element.style.backgroundColor = null;
    }
}
function popperTitle(element){
    if(parseInt(element) === correctAnswer){
        return 'Correct!';
    } else{
        return 'Incorrect!';
    }
}

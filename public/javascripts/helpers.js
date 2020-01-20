
function processData(data){
    let notes = data.pair;
    for(var i = 0; i < 2; i++){
        console.log(notes[i].hasAccidental + "  :  " + notes[i].note.substring(0,2))
        if(Math.round(Math.random() * 1)){
            notes[i].note = notes[i].hasAccidental ? notes[i].note.slice(2) : notes[i].note;
        } else{
            notes[i].note = notes[i].hasAccidental ? notes[i].note.substring(0,2) : notes[i].note;
        }
    }

    let answer = data.numOfSeminotes;
    let displayNotes = document.getElementById('_displayNotes');
    displayNotes.innerHTML = `<p>${notes[0].note}</p>`;
    displayNotes.innerHTML += `<p>${notes[1].note}</p>`;
}

function validateResponse(response){
    if(response.ok){
        console.log('notes produced');
        return response.json();
    }
    throw new Error('Fetching Notes failed');
}

function sendError(e, wrongValue){
    //let error = document.getElementById('_errorText')
    //let usrAnswer = document.getElementById('_usrAnswer');
    
    errorText.removeAttribute("hidden");
    errorText.innerHTML = e;
    colorBorder(document.getElementById(`_usrAnswer${wrongValue}`), "red");
    return;
}

function validateAnswer(usrValue, corrValue){
    errorText.setAttribute('hidden', "");
    colorBorder(document.getElementById(`_usrAnswer${corrValue}`), "green");
    if(usrValue === corrValue){
        document.getElementById('_displayAnswer').innerHTML = `<p>Correct!</p>`;
    } else{
        sendError("Wrong Answer!", usrValue);
    }
    disableAnswers();
}

function answerBtnClick(element) {
    console.log('fetch answer');
    status = "Answer Clicked";
    let parsed = parseInt(element.value);
    if(parsed && parsed > 0 && parsed < 13){
        validateAnswer(parsed, correctAnswer);
    }
}

function colorBorder(element, color){
    element.style.borderColor=color;
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
        element.style.borderColor = null;
    }
}
window.onload = function(){
    let htmlString = "";
    status = "Start";
    for(let i = 1; i < 12; i++){
        htmlString +=
        `<input type='button' id='_usrAnswer${i}' value="${i}" onclick=answerBtnClick(this)>`;
    }
    document.getElementById('_usrAnswerButtons').innerHTML = htmlString;
    return;
}

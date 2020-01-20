
var btn = document.getElementById('_rBtn'),
      errorText = document.getElementById('_errorText');

var correctAnswer = "", status ="";


btn.addEventListener('click', function(e){
    console.log('Generating Notes!');
    status = "Notes Generated";
    errorText.setAttribute('hidden', "");
    document.getElementById('_displayAnswer').innerHTML = "";
    document.getElementById('_usrAnswerButtons').removeAttribute('hidden');
    enableAnswers();

    fetch('/notes', {method:'POST'})
    .then(function(response){
        return validateResponse(response);
    })
    .then(function(data) {
        correctAnswer = data.numOfSeminotes;

        processData(data);
    })
    .catch(function(error){
        console.log(error);
    });
});

/*answerBtn.addEventListener('click', function(e){
    console.log('fetch answer');
    let usrAnswer = "2";
    let parsed = parseInt(usrAnswer.value);
    if(parsed && parsed > 0 && parsed < 13){
        document.getElementById('_displayAnswer').removeAttribute("hidden");
        validateAnswer(parsed, correctAnswer);
    } else{
        sendError("Please enter a valid value: number ranging from 1 to 12.");
    }

});*/


//configData.allNotes.forEach(x => document.getElementById('_displayNotes').innerHTML += x);

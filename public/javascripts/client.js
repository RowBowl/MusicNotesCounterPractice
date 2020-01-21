
var btn = document.getElementById('_rBtn');

var correctAnswer = "", status ="";


btn.addEventListener('click', function(e){
    console.log('Generating Notes!');
    status = "Notes Generated";
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

window.onload = function(e){
    console.log('Generating Notes!');

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


    let htmlString = "",
    genFirst = '', genSecond = '';
    for(let i = 1; i < 12; i++){
        htmlString += `<button tabindex="0" id='_usrAnswer${i}' type="button" value="${i}"
                        class="btn btn-light"
                        onclick=answerBtnClick(this) data-toggle="popover" data-trigger="focus">${i}</button>`
        //`<input type='button' class="btn btn-light" id='_usrAnswer${i}' value="${i}" onclick=answerBtnClick(this)>`;
    }
    document.getElementById('_usrAnswerButtons').innerHTML = htmlString;

    return;
};

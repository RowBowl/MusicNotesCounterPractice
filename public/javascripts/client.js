
const btn = document.getElementById('_rBtn'),
      answerBtn = document.getElementById('_checkBtn');

btn.addEventListener('click', function(e){
    console.log('button clicked');

    fetch('/notes', {method:'POST'})
    .then(function(response){
        if(response.ok){
            console.log('notes produced');
            return response.json();
        }
        throw new Error('Fetching Notes failed');
    })
    .then(function(data) {
        console.log(data);

        let note1 = data.pair[0],
            note2 = data.pair[1];
        let answer = data.numOfSeminotes;
        let displayNotes = document.getElementById('_displayNotes'),
            displayAnswer = document.getElementById('_displayAnswer');

        displayNotes.innerHTML = `<p>${note1.note}</p>`;
        displayNotes.innerHTML += `<p>${note2.note}</p>`;
        displayAnswer.innerHTML = `<p>${answer}</p>`;

        if(displayAnswer.hasAttribute("hidden") !== true){
            displayAnswer.setAttribute("hidden","");
        }
        //console.log(data);
    })
    .catch(function(error){
        console.log(error);
    });
});

answerBtn.addEventListener('click', function(e){
    console.log('fetch answer');
    let answer = document.getElementById('_displayAnswer');
    answer.removeAttribute("hidden");
});


//configData.allNotes.forEach(x => document.getElementById('_displayNotes').innerHTML += x);

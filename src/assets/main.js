let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value === '' && attempt.value === '') {
        setHiddenFields();
    }
    if (getResults(input)) {
        setMessage("You Win! :)");
        showAnswer(true);
        showReplay();
    } else if (!getResults(input) && attempt >= 10) {
        setMessage("You Lose! :(");
        showAnswer(false);
        showReplay();
    } else {
        setMessage("Incorrect, try again.");
    }
}

//implement new functions here
function setHiddenFields() {
    answer.value = Math.floor(Math.random() * 10000).toString;
    while (answer.value.length < 4) {
        answer.value = "0" + answer.value;
    }
    attempt.value = 0;
}
function setMessage(param) {
    document.getElementById('message').innerHTML = param;
}
function validateInput(param2) {
    if (param2.length = 4) {
        return true;
    } else {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}
if (validateInput(input.value)) {
    attempt.value += 1;
} else {
    return false;
}
function getResults(input) {
    let newHTML = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    let correctGuess = 0;
    for (i = 0; i < input.length; i++) {
        if (input.charAt(i) == answer.value.charAt(i)) {
            newHTML += '<span class="glyphicon glyphicon-ok"></span>';
            correctGuess += 1;
        } else if (answer.value.indexOf(input.charAt(i)) > -1) {
            newHTML += '<span class="glyphicon glyphicon-transfer"></span>';
        } else {
            newHTML += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    newHTML += '</div></div>';
    document.getElementById('results').innerHTML += newHTML;
    if (correctGuess = 4) {
        return true;
    } else {
        return false;
    }
}
function showAnswer(answer) {
    let code = document.getElementById('code');
    if (success) {
        code.className += " success";
    } else {
        code.className += " failure";
    }
    code.innerHTML = answer.value;
}
function showReplay() {
    document.getElementById("guessing-div").style.display = "none";
    document.getElementById("replay-div").style.display = 'block';
}
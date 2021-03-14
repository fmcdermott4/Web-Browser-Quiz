var choiceOne = $("#choiceOne");
var choiceTwo = $("#choiceTwo");
var choiceThree = $("#choiceThree");
var choiceFour = $("#choiceFour");
var question = $("#question");
var time = $("#timer");
var start = $("#start")
var startHeader=$("#startHeader")
var timeLeft = 59;
var clickEvent = $(".answer");
var i=0;
var timeStarted = false;

// Object defining questions ans answers

var answerMe = new Object()
answerMe.question= [];
answerMe.question[0] = [`Commnly used data types DO NOT include`];
answerMe.question[0].answer = [];
answerMe.question[0].answer[0] = [`1. strings`, -10];
answerMe.question[0].answer[1] = [`2. booleans`, -10];
answerMe.question[0].answer[2] = [`3. alerts`, -10];
answerMe.question[0].answer[3] = [`4. functions`, -10];

function next(x){
    if (!timeStarted){
        startTimer();
        nextQuestion(i);
    } else if (answerMe.question.length() > i) {
        i++;

    }
    else{
        i++;

    }
    
}


function startTimer(){
setInterval(function(){
    time.text(timeLeft + "s");
    timeLeft = timeLeft - 1;
    if ( timeLeft == 0 ){
        return;
    }
}, 1000)}

function nextQuestion(i) {   
        question.text(answerMe.question[i]);
        choiceOne.text(answerMe.question[i].answer[0][0]);
        choiceTwo.text(answerMe.question[i].answer[1][0]);
        choiceThree.text(answerMe.question[i].answer[2][0]);
        choiceFour.text(answerMe.question[i].answer[3][0]);
    }    
// function listenForAnswer() {
//     $("#choiceOne").on("click", console.log("hey1"));
//     $("#choiceTwo").on("click", console.log("hey2"));
//     $("#choiceThree").on("click", console.log("hey3"));
//     $("#choiseFour").on("click", console.log("hey4"));
// }


// Show/hide explanation
// https://www.codeproject.com/Questions/458830/Show-Hide-DIV-using-JQuery
// Timer code taken verbatum
// https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
var choiceOne = $("#choiceOne");
var choiceTwo = $("#choiceTwo");
var choiceThree = $("#choiceThree");
var choiceFour = $("#choiceFour");
var question = $("#question");
var time = $("#timer");
var start = $("#start")
var startHeader=$("#startHeader")
var timeLeft = 59;
// Object defining question 1

const questionOne = {
    question: [`Answer me`],
    a1: [`I'm right`, 10],
    a2: [`I'm wrong`, -10],
    a3: [`I'm wrong`, -10],
    a4: [`I'm wrong`, -10],
}

// Hides quiz on start until user clicks start button
$(document).ready(function(){
    question.hide();
    time.hide();
    choiceOne.hide();
    choiceTwo.hide();
    choiceThree.hide();
    choiceFour.hide();
})
// Start button, reveals question, timer and possible answers, hides start button
start.on("click", function(){
    startHeader.hide();
    question.show();
    time.show();
    choiceOne.show();
    choiceTwo.show();
    choiceThree.show();
    choiceFour.show();
    startTheQuiz();
    startTimer();
})

function startTheQuiz() {

}
function startTimer(){
setInterval(function(){
    time.text(timeLeft + "s");
    timeLeft = timeLeft - 1;
}, 1000)}




// Show/hide explanation
// https://www.codeproject.com/Questions/458830/Show-Hide-DIV-using-JQuery
// Timer code taken verbatum
// https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
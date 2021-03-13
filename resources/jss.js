var choiceOne = $("#choiceOne");
var choiceTwo = $("#choiceTwo");
var choiceThree = $("#choiceThree");
var choiceFour = $("#choiceFour");
var question = $("#question");
var time = $("#timer");
var start = $("#start")
var startHeader=$("#startHeader")
var timeLeft = 59;
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
    jQuery(function ($) {
        startTimer(timeLeft, time);
    });
})
// Timer function, taken from https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
function startTimer(timeLeft, display) {
    var timer = timeLeft, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text("0:" + seconds);

        if (--timer < 0) {
            timer = timeLeft;
        }
    }, 1000);
}



// Show/hide explanation
// https://www.codeproject.com/Questions/458830/Show-Hide-DIV-using-JQuery
// Timer code taken verbatum
// https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
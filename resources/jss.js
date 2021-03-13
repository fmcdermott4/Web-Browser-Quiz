var choiceOne = $("#choiceOne");
var choiceTwo = $("#choiceTwo");
var choiceThree = $("#choiceThree");
var choiceFour = $("#choiceFour");
var question = $("#question");
var time = $("#timer");
var start = $("#start")
var startHeader=$("#startHeader")
var timeLeft = 60;

$(document).ready(function(){
    question.hide();
    time.hide();
    choiceOne.hide();
    choiceTwo.hide();
    choiceThree.hide();
    choiceFour.hide();
})

start.on("click", function(){
    startHeader.hide();
    question.show();
    time.show();
    choiceOne.show();
    choiceTwo.show();
    choiceThree.show();
    choiceFour.show();
    countDown();
})

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    startTimer(timeLeft, time);
});

// Show/hide explanation
// https://www.codeproject.com/Questions/458830/Show-Hide-DIV-using-JQuery
// Timer code taken verbatum
// https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
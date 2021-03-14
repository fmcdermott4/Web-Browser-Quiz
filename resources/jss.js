var choiceOne = $("#choiceOne");
var choiceTwo = $("#choiceTwo");
var choiceThree = $("#choiceThree");
var choiceFour = $("#choiceFour");
var question = $("#question");
var time = $("#timer");
var start = $("#start")
var startHeader=$("#startHeader")
var timeLeft = 60;
var clickEvent = $(".answer");
var i=-1;
var timeStarted = false;

// Object defining questions ans answers

var answerMe = new Object()
answerMe.question= [];
answerMe.question[0] = [`Commonly used data types DO NOT include`];
answerMe.question[0].answer = [];
answerMe.question[0].answer[0] = [`1. strings`, -10];
answerMe.question[0].answer[1] = [`2. booleans`, -10];
answerMe.question[0].answer[2] = [`3. alerts`, 10];
answerMe.question[0].answer[3] = [`4. functions`, -10];

answerMe.question[1] = [`The conditional in an if / else statement is enclosed within ______`];
answerMe.question[1].answer = [];
answerMe.question[1].answer[0] = [`1. quotes`, -10];
answerMe.question[1].answer[1] = [`2. curly brackets`, -10];
answerMe.question[1].answer[2] = [`3. parenthesis`, 10];
answerMe.question[1].answer[3] = [`4. square brackets`, -10];

answerMe.question[2] = [`Arrays in JavaScript can be used to store`];
answerMe.question[2].answer = [];
answerMe.question[2].answer[0] = [`1. numbers and strings`, -10];
answerMe.question[2].answer[1] = [`2. other arrays`, -10];
answerMe.question[2].answer[2] = [`3. booleans`, -10];
answerMe.question[2].answer[3] = [`4. all of the above`, 10];

answerMe.question[3] = [`String values must be enclosed within ______ when being assigned to variables`];
answerMe.question[3].answer = [];
answerMe.question[3].answer[0] = [`1. commas`, -10];
answerMe.question[3].answer[1] = [`2. curly brackets`, -10];
answerMe.question[3].answer[2] = [`3. quotes`, 10];
answerMe.question[3].answer[3] = [`4. parenthesis`, -10];

answerMe.question[4] = [`A very useful tool used during development and debugging for printing content to the debugger is:`];
answerMe.question[4].answer = [];
answerMe.question[4].answer[0] = [`1. JavaScript`, -10];
answerMe.question[4].answer[1] = [`2. terminal/bash`, -10];
answerMe.question[4].answer[2] = [`3. for loops`, -10];
answerMe.question[4].answer[3] = [`4. console.log`, 10];

function next(x){
    i++;
    if (!timeStarted){
        startTimer();
        nextQuestion(i);
        timeStarted=true;
    } else if (answerMe.question.length > i) {
        addScore();
        nextQuestion(i);
    }
    else{
        $("main").hide();

    }
    
}


function startTimer(){
setInterval(function(){
    if ( timeLeft === 0 ){
        $("main").hide();
    }
    timeLeft = timeLeft - 1;
    time.text(timeLeft + "s");    
    
}, 1000)}

function nextQuestion(i) {   
        question.text(answerMe.question[i]);
        choiceOne.text(answerMe.question[i].answer[0][0]);
        choiceTwo.text(answerMe.question[i].answer[1][0]);
        choiceThree.text(answerMe.question[i].answer[2][0]);
        choiceFour.text(answerMe.question[i].answer[3][0]);
    }    

// Show/hide explanation
// https://www.codeproject.com/Questions/458830/Show-Hide-DIV-using-JQuery
// Timer code taken verbatum
// https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
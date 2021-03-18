var choiceOne = $("#choiceOne");
var choiceTwo = $("#choiceTwo");
var choiceThree = $("#choiceThree");
var choiceFour = $("#choiceFour");
var question = $("#question");
var time = $("#timer");
var start = $("#start");
var startHeader = $("#startHeader");
var timeLeft = 60;
var clickEvent = $(".answer");
var i = 0;
var timeStarted = false;
var finalScore;
var tableBody = $("#table-body");

// Object defining questions and answers
$("#highScores").hide();
$("#scores-from-storage").hide();

var answerMe = new Object();
answerMe.question = [];
answerMe.question[0] = [`Commonly used data types DO NOT include`];
answerMe.question[0].answer = [];
answerMe.question[0].answer[0] = [`1. strings`, -10];
answerMe.question[0].answer[1] = [`2. booleans`, -10];
answerMe.question[0].answer[2] = [`3. alerts`, 10];
answerMe.question[0].answer[3] = [`4. functions`, -10];

answerMe.question[1] = [
  `The conditional in an if / else statement is enclosed within ______`,
];
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

answerMe.question[3] = [
  `String values must be enclosed within ______ when being assigned to variables`,
];
answerMe.question[3].answer = [];
answerMe.question[3].answer[0] = [`1. commas`, -10];
answerMe.question[3].answer[1] = [`2. curly brackets`, -10];
answerMe.question[3].answer[2] = [`3. quotes`, 10];
answerMe.question[3].answer[3] = [`4. parenthesis`, -10];

answerMe.question[4] = [
  `A very useful tool used during development and debugging for printing content to the debugger is:`,
];
answerMe.question[4].answer = [];
answerMe.question[4].answer[0] = [`1. JavaScript`, -10];
answerMe.question[4].answer[1] = [`2. terminal/bash`, -10];
answerMe.question[4].answer[2] = [`3. for loops`, -10];
answerMe.question[4].answer[3] = [`4. console.log`, 10];
// main function directing other functions in program
function next(x) {
  if (timeStarted) {
    addScore(x, i);
    i++;
  }
  if (!timeStarted) {
    startTimer();
    nextQuestion(i);
    timeStarted = true;
  } else if (answerMe.question.length > i) {
    nextQuestion(i);
  } else {
    finalScore = timeLeft;
    $("main").hide();
    $("#highScores").show();
    $("#scores-from-storage").show();
  }
}
// function for interval timer
function startTimer() {
  setInterval(function () {
    if (timeLeft === 0) {
      $("main").hide();
    }
    timeLeft = timeLeft - 1;
    time.text(timeLeft + "s");
  }, 1000);
}
// pulls data from answerMe object to populate question and answers
function nextQuestion(i) {
  question.text(answerMe.question[i]);
  choiceOne.text(answerMe.question[i].answer[0][0]);
  choiceTwo.text(answerMe.question[i].answer[1][0]);
  choiceThree.text(answerMe.question[i].answer[2][0]);
  choiceFour.text(answerMe.question[i].answer[3][0]);
}
choiceOne.on("click", () => {
  console.log("Clicked!");
});
// pulls score modifier from answerMe object and adjusts current time by the amount
function addScore(x, i) {
  timeLeft += answerMe.question[i].answer[x][1];
}
// submits user initials to local data and appends high score list
function submitForm(event) {
  event.preventDefault();
  var init = $("#initials2").val();
  var newObjToStore = { initials: init, score: finalScore };

  if (localStorage.getItem("quizScores")) {
    //If there are already existing scores in storage
    var scoresfromStorage = localStorage.getItem("quizScores");
    var arrayFromStorage = JSON.parse(scoresfromStorage);
    arrayFromStorage.unshift(newObjToStore);
    localStorage.setItem("quizScores", JSON.stringify(arrayFromStorage));
  } else {
    //if nothing stored in storage
    localStorage.setItem("quizScores", JSON.stringify([newObjToStore]));
  } 
  tableBody.html("");
  populateScoreTable();
  $("#submit-form").hide();
}


function populateScoreTable() {
  //clear out the high scores table

  if (localStorage.getItem("quizScores")) {
    var scoresfromStorage = localStorage.getItem("quizScores");
    var arrayFromStorage = JSON.parse(scoresfromStorage);

    for (var i = 0; i < arrayFromStorage.length; i++) {
      //create a <tr><td>User</td><td>Score</td></tr>
      var newRow = document.createElement("tr");
      var userInitials = document.createElement("td");
      userInitials.textContent = arrayFromStorage[i].initials;
      var userScore = document.createElement("td");
      userScore.textContent = arrayFromStorage[i].score;
      newRow.append(userInitials);
      newRow.append(userScore);
      tableBody.append(newRow);
     
    }
  }
}

populateScoreTable();
// Show/hide explanation
// https://www.codeproject.com/Questions/458830/Show-Hide-DIV-using-JQuery
// Timer code taken verbatum
// https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript

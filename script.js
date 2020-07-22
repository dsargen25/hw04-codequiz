var questionAnswers = [
  {
      questions: "Commonly Used data types DO NOT include:",
      selections: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts",
  },
  {
      questions: "The condition in an if / else statment is enclosed within ____.",
      selections: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses",
  },
  {
      questions: "Arrays in JavaScript can be used to store ____.",
      selections: ["numbers and strings", "other arrays", "booleans", "all of the above"],
      answer: "all of the above",
  },
  {
      questions: "String values must be enclosed within ____ when being assigned to variables.",
      selections: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes",
  },
  {
      questions: "A very useful tool used during development and debugging for printing content to the debugger is:",
      selections: ["JavaScript", "terminal/bash", "for loops", "console.log"],
      answer: "console.log",
  }
]

// End of Q&A

var i = 0;
var time = 75000;
var timerIndicator;
var timerDisplay = document.querySelector(".topitems__right");
var choicesList = document.getElementsByClassName(".selections");
var questions = document.querySelector(".question");

function quizStart(){
    timerIndicator = setInterval(count, 1000);
    timerDisplay.textContent = time;
    retrieveQuestion();
}

function count(){
    time--;
    timerDisplay.textContent = time;
    if(time === 0){
        endQuiz();
    }
}

function retrieveQuestion(){
    var currQuestion = questions[i];
    questions.textContent = currQuestion.questions;
    selectionItems.innerHTML = "";

    answerA.textContent = questionAnswers[i].selections[0];
    answerB.textContent = questionAnswers[i].selections[1];
    answerC.textContent = questionAnswers[i].selections[2];
    answerD.textContent = questionAnswers[i].selections[3];  

    for (var i = 0; i < 4; i++){
        questionAnswers[i].selections[i] = choicesList[i];
    }
}
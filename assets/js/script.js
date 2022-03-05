var buttonEl = document.querySelector("#start-button");
console.log(buttonEl);

var runQuiz = function() {
    var quizBox = document.querySelector("#quiz-sheet");
    var quizQuestionOne = document.createElement("div");
    quizQuestionOne.textContent ="Which tag is used to list items with bullets?";
    quizBox.appendChild(quizQuestionOne);
}

buttonEl.addEventListener("click", runQuiz);




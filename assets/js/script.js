var buttonEl = document.querySelector("#start-button");



var runQuiz = function() {
    var quizBox = document.querySelector("#quiz-sheet");
    document.getElementById("start-button-container").hidden = true;
    var quizQuestionOne = document.createElement("div");
    quizQuestionOne.textContent ="Which tag is used to list items with bullets?";
    quizBox.appendChild(quizQuestionOne);
}

buttonEl.addEventListener("click", runQuiz);




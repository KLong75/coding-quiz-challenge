var buttonEl = document.querySelector("#start-button");



var runQuiz = function() {
    var quizBox = document.querySelector("#quiz-sheet");
    document.getElementById("start-button-container").hidden = true;
    var quizQuestionOne = document.createElement("div");
    quizQuestionOne.textContent ="Which tag is used to list items with bullets?";
    quizBox.appendChild(quizQuestionOne);

    var answerChoiceBoxA = document.createElement("div");
    answerChoiceBoxA.className = "container";
    quizBox.appendChild(answerChoiceBoxA); 

    var answerChoiceA = document.createElement("button");
    answerChoiceA.className = "container text-left"
    answerChoiceA.textContent="A. rgrgrgasgasg";
    answerChoiceBoxA.appendChild(answerChoiceA);

    var answerChoiceBoxB = document.createElement("div");
    answerChoiceBoxB.className = "container";
    quizBox.appendChild(answerChoiceBoxB); 

    var answerChoiceB = document.createElement("button");
    answerChoiceB.className = "container text-left"
    answerChoiceB.textContent="B. rgrgrgasgasg";
    answerChoiceBoxB.appendChild(answerChoiceB);

    var answerChoiceBoxC = document.createElement("div");
    answerChoiceBoxC.className = "container";
    quizBox.appendChild(answerChoiceBoxC); 

    var answerChoiceC = document.createElement("button");
    answerChoiceC.className = "container text-left"
    answerChoiceC.textContent="C. rgrgrgasgasg";
    answerChoiceBoxC.appendChild(answerChoiceC);


   // var answerChoiceA = document.createElement("button");
  //  answerChoiceA.textContent="A.";
   // quizBox.appendChild(answerChoiceA);

   // var answerChoiceB = document.createElement("button");
    //answerChoiceB.textContent="B.";
    //quizBox.appendChild(answerChoiceB);

    //var answerChoiceC = document.createElement("button");
    //answerChoiceC.textContent="C.";
    //quizBox.appendChild(answerChoiceC);

   /* var answerTest = document.createElement("div");
    answerTest.className = "container";
    //answerTest.textContent="Afadfasdfadgfasdgasdg.";
    quizBox.appendChild(answerTest);
    
    var testAnswerChoice = document.createElement("button");
    testAnswerChoice.className = "container text-left"
    testAnswerChoice.textContent="A. rgrgrgasgasg";
    answerTest.appendChild(testAnswerChoice);*/
}

buttonEl.addEventListener("click", runQuiz);




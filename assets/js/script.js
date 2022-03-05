


var runQuiz = function() {
    
    //  var nextQuestion = document.querySelector("#next");
      //    document.getElementById("next-question").hidden = false;

    var quizBox = document.querySelector("#quiz-sheet");
      document.getElementById("start-button-container").hidden = true;


    var quizQuestionOne = document.createElement("div");
      quizQuestionOne.className ="quiz-question";
      quizQuestionOne.textContent ="1. What does HTML stand for?";
      quizBox.appendChild(quizQuestionOne);

    var answerChoiceBoxA = document.createElement("div");
      answerChoiceBoxA.className = "container";
      quizBox.appendChild(answerChoiceBoxA); 

    var answerChoiceA = document.createElement("button");
      answerChoiceA.id = "incorrect";
      answerChoiceA.className = "container text-left btn btn-secondary";
      answerChoiceA.textContent="A. Hyper Toddler Makes Lasagna";
      answerChoiceBoxA.appendChild(answerChoiceA);
      document.getElementById("incorrect").addEventListener("click", checkAnswerA);
      function checkAnswerA() {
        document.getElementById("incorrect").innerHTML = "Incorrect";
    }

    var answerChoiceBoxB = document.createElement("div");
      answerChoiceBoxB.className = "container";
      quizBox.appendChild(answerChoiceBoxB); 

    var answerChoiceB = document.createElement("button");
      answerChoiceB.id = "correct"
      answerChoiceB.className = "container text-left btn btn-secondary"
      answerChoiceB.textContent="B. Hypertext Markup Language";
      answerChoiceBoxB.appendChild(answerChoiceB);
      document.getElementById("correct").addEventListener("click", checkAnswerB);
        function checkAnswerB() {
          document.getElementById("correct").innerHTML = "Correct";
        }
   

    var answerChoiceBoxC = document.createElement("div");
      answerChoiceBoxC.className = "container";
      quizBox.appendChild(answerChoiceBoxC); 
    

    var answerChoiceC = document.createElement("button");
      answerChoiceC.id = "incorrect-c";
      answerChoiceC.className = "container text-left btn btn-secondary";
      answerChoiceC.textContent="C. How To Make Lasagna";
      answerChoiceBoxC.appendChild(answerChoiceC);
      document.getElementById("incorrect-c").addEventListener("click", checkAnswerC);
      function checkAnswerC() {
        document.getElementById("incorrect-c").innerHTML = "Incorrect";
      }
      

    /*var nextQuestion = document.createElement("button")
      nextQuestion.id = "next-question";
      nextQuestion.className = "next-question btn btn-success";
      nextQuestion.textContent = "Next Question"
      quizBox.appendChild(nextQuestion);*/
    }
    
    
    document.getElementById("start-button").addEventListener("click", runQuiz);
    
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




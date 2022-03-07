
//var buttonEl = document.querySelector("#next-question");


var timeBox = document.querySelector("#header-row");

var runQuiz = function() {

    var timeLeft = 100;
    var quizTimer = setInterval(function(){
      if(timeLeft <= 0){
       clearInterval(quizTimer);
       document.getElementById("countdown").innerHTML = "Finished";
    } else {
       document.getElementById("countdown").innerHTML = "Timer: " + timeLeft + " seconds remaining";
    }
    timeLeft -= 1;
    }, 1000);
    


    var nextQuestion = document.querySelector("#next");
        document.getElementById("next-question").hidden = false;

    var quizBox = document.querySelector("#quiz-sheet");
      document.getElementById("start-button-container").hidden = true;

 
     

    /*var userChoice = ['A', 'B', 'C'];
      userChoice.forEach((choiceValue, i) => {
         var labelValue = document.createElement('label');
         labelValue.innerHTML = choiceValue;
         var inputValue = document.createElement('input');
         inputValue.type = "radio";
         inputValue.name = choiceValue;
         inputValue.choiceValue = i;
         document.body.appendChild(labelValue);
         document.body.appendChild(inputValue);
    });*/




    var quizQuestionOne = document.createElement("div");
      quizQuestionOne.id ="question-one"
      quizQuestionOne.className ="quiz-question";
      quizQuestionOne.textContent ="1. What does HTML stand for?";
      quizBox.appendChild(quizQuestionOne);

    var answerChoiceBoxA = document.createElement("div");
      answerChoiceBoxA.id = "choice-box-a"
      answerChoiceBoxA.className = "container";
      quizBox.appendChild(answerChoiceBoxA); 

    var answerChoiceA = document.createElement("button");
      answerChoiceA.id = "hyper-toddler";
      answerChoiceA.className = "container text-left btn btn-secondary";
      answerChoiceA.textContent="A. Hyper Toddler Makes Lasagna";
      answerChoiceBoxA.appendChild(answerChoiceA);
      document.getElementById("hyper-toddler").addEventListener("click", checkAnswerA);
      function checkAnswerA() {
        document.getElementById("countdown").timeLeft = timeLeft -=10;
        document.getElementById("hyper-toddler").innerHTML = "Incorrect";
        document.getElementById("hyper-toddler").className = "container text-left btn btn-danger"

      }

    var answerChoiceBoxB = document.createElement("div");
      answerChoiceBoxB.id = "choice-box-b"
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
          document.getElementById("correct").className = "container text-left btn btn-success"
        }
   
    var answerChoiceBoxC = document.createElement("div");
      answerChoiceBoxC.id = "choice-box-c"
      answerChoiceBoxC.className = "container";
      quizBox.appendChild(answerChoiceBoxC); 

    var answerChoiceC = document.createElement("button");
      answerChoiceC.id = "lasagna";
      answerChoiceC.className = "container text-left btn btn-secondary";
      answerChoiceC.textContent="C. How To Make Lasagna";
      answerChoiceBoxC.appendChild(answerChoiceC);
      document.getElementById("lasagna").addEventListener("click", checkAnswerC);
      function checkAnswerC() {
        document.getElementById("countdown").timeLeft = timeLeft -=10;
        document.getElementById("lasagna").innerHTML = "Incorrect";
        document.getElementById("lasagna").className = "container text-left btn btn-danger"
      }

    var nextQuestion = document.createElement("button")
      nextQuestion.id = "next-question";
      nextQuestion.className = "next btn btn-primary";
      nextQuestion.textContent = "Next Question!"
      quizBox.appendChild(nextQuestion);
      document.getElementById("next-question").addEventListener("click", nextPage);
      function nextPage() {
          console.log('next');
          document.getElementById("question-one").style.display = "none";
          document.getElementById("choice-box-a").style.display = "none";
          document.getElementById("hyper-toddler").style.display = "none";
          document.getElementById("choice-box-b").style.display = "none";
          document.getElementById("correct").style.display = "none";
          document.getElementById("choice-box-c").style.display = "none";
          document.getElementById("lasagna").style.display = "none";
          document.getElementById("next-question").style.display = "none";

          var quizQuestionTwo = document.createElement("div");
            quizQuestionTwo.id ="question-two"
            quizQuestionTwo.className ="quiz-question";
            quizQuestionTwo.textContent ="2. What does CSS stand for?";
            quizBox.appendChild(quizQuestionTwo);

          var secondChoiceBoxA = document.createElement("div");
            secondChoiceBoxA.id = "second-box-a"
            secondChoiceBoxA.className = "container";
            quizBox.appendChild(secondChoiceBoxA); 
    
          var secondChoiceA = document.createElement("button");
            secondChoiceA.id = "second-choice-a";
            secondChoiceA.className = "container text-left btn btn-secondary";
            secondChoiceA.textContent="A. Careful Scary Sock";
            secondChoiceBoxA.appendChild(secondChoiceA);
            document.getElementById("second-choice-a").addEventListener("click", checkSecondAnswerA);
            function checkSecondAnswerA() {
              document.getElementById("countdown").timeLeft = timeLeft -=10;
              document.getElementById("second-choice-a").innerHTML = "Incorrect";
              document.getElementById("second-choice-a").className = "container text-left btn btn-danger"
            }
    
           var secondChoiceBoxB = document.createElement("div");
             secondChoiceBoxB.id = "second-box-b"
             secondChoiceBoxB.className = "container";
             quizBox.appendChild(secondChoiceBoxB); 
    
           var secondChoiceB = document.createElement("button");
             secondChoiceB.id = "cascading-style-sheet"
             secondChoiceB.className = "container text-left btn btn-secondary"
             secondChoiceB.textContent="B. Cascading Style Sheet";
             secondChoiceBoxB.appendChild(secondChoiceB);
             document.getElementById("cascading-style-sheet").addEventListener("click", checkSecondAnswerB);
               function checkSecondAnswerB() {
                 document.getElementById("cascading-style-sheet").innerHTML = "Correct";
                 document.getElementById("cascading-style-sheet").className = "container text-left btn btn-success"
               }
       
            var secondChoiceBoxC = document.createElement("div");
              secondChoiceBoxC.id = "second-box-c"
              secondChoiceBoxC.className = "container";
              quizBox.appendChild(secondChoiceBoxC); 
    
            var secondChoiceC = document.createElement("button");
              secondChoiceC.id = "crazy-super-silly";
              secondChoiceC.className = "container text-left btn btn-secondary";
              secondChoiceC.textContent="C. Crazy Super Silly";
              secondChoiceBoxC.appendChild(secondChoiceC);
              document.getElementById("crazy-super-silly").addEventListener("click", checkSecondAnswerC);
              function checkSecondAnswerC() {
                document.getElementById("countdown").timeLeft = timeLeft -=10;
                document.getElementById("crazy-super-silly").innerHTML = "Incorrect";
                document.getElementById("crazy-super-silly").className = "container text-left btn btn-danger"
              }

              var thirdQuestion = document.createElement("button")
              thirdQuestion.id = "third-question";
              thirdQuestion.className = "third btn btn-primary";
              thirdQuestion.textContent = "Next Question!"
              quizBox.appendChild(thirdQuestion);
              document.getElementById("third-question").addEventListener("click", thirdPage);
              function thirdPage() {
                  console.log('third page');
                  document.getElementById("question-two").style.display = "none";
                  document.getElementById("second-box-a").style.display = "none";
                  document.getElementById("second-choice-a").style.display = "none";
                  document.getElementById("second-box-b").style.display = "none";
                  document.getElementById("cascading-style-sheet").style.display = "none";
                  document.getElementById("second-box-c").style.display = "none";
                  document.getElementById("crazy-super-silly").style.display = "none";
                  document.getElementById("third-question").style.display = "none";

                  var quizQuestionThree = document.createElement("div");
                    quizQuestionThree.id ="question-three"
                    quizQuestionThree.className ="quiz-question";
                    quizQuestionThree.textContent ="3. What is Javascript?";
                    quizBox.appendChild(quizQuestionThree);

                  var thirdChoiceBoxA = document.createElement("div");
                    thirdChoiceBoxA.className = "container";
                    quizBox.appendChild(thirdChoiceBoxA); 
  
                  var thirdChoiceA = document.createElement("button");
                    thirdChoiceA.id = "third-choice-a";
                    thirdChoiceA.className = "container text-left btn btn-secondary";
                    thirdChoiceA.textContent="A. The language spoken by Jawas on Tatooine";
                    thirdChoiceBoxA.appendChild(thirdChoiceA);
                    document.getElementById("third-choice-a").addEventListener("click", checkThirdAnswerA);
                    function checkThirdAnswerA() {
                      document.getElementById("countdown").timeLeft = timeLeft -=10;
                      document.getElementById("third-choice-a").innerHTML = "Incorrect";
                      document.getElementById("third-choice-a").className = "container text-left btn btn-danger"
                      
                    }
  
                  var thirdChoiceBoxB = document.createElement("div");
                    thirdChoiceBoxB.className = "container";
                    quizBox.appendChild(thirdChoiceBoxB); 
  
                  var thirdChoiceB = document.createElement("button");
                    thirdChoiceB.id = "coffee"
                    thirdChoiceB.className = "container text-left btn btn-secondary"
                    thirdChoiceB.textContent="B. A fancy coffee drink";
                    thirdChoiceBoxB.appendChild(thirdChoiceB);
                    document.getElementById("coffee").addEventListener("click", checkThirdAnswerB);
                      function checkThirdAnswerB() {
                        document.getElementById("countdown").timeLeft = timeLeft -=10;
                        document.getElementById("coffee").innerHTML = "Incorrect";
                        document.getElementById("coffee").className = "container text-left btn btn-danger"
                      }
     
                  var thirdChoiceBoxC = document.createElement("div");
                    thirdChoiceBoxC.className = "container";
                    quizBox.appendChild(thirdChoiceBoxC); 
  
                  var thirdChoiceC = document.createElement("button");
                    thirdChoiceC.id = "javascript";
                    thirdChoiceC.className = "container text-left btn btn-secondary";
                    thirdChoiceC.textContent="C. A programming language that allows the user to interact with apps and websites";
                    thirdChoiceBoxC.appendChild(thirdChoiceC);
                    document.getElementById("javascript").addEventListener("click", checkSecondAnswerC);
                    function checkSecondAnswerC() {
                       document.getElementById("javascript").innerHTML = "Correct";
                       document.getElementById("javascript").className = "container text-left btn btn-success"
                       document.getElementById("countdown").style.display = "none";
                       var finishTime = document.createElement("div");
                         finishTime.id ="finish-time"
                         finishTime.className ="end-time text-right col";
                         finishTime.textContent ="Final Time: " + timeLeft;
                         timeBox.appendChild(finishTime);
                    }

                  var checkScore = document.createElement("button")
                    checkScore.id = "check-score";
                    checkScore.className = "third btn btn-warning";
                    checkScore.textContent = "Check Score!"
                    quizBox.appendChild(checkScore);
                    document.getElementById("check-score").addEventListener("click", endGame);
                    function endGame() {
                      console.log('game over');
                  } 
              }
        }
}

document.getElementById("start-button").addEventListener("click", runQuiz);
  




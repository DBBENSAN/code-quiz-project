// Quiz questions array



var quizBank = [
    {
        question: "How do you print defined items within the Console?",
        choices: ["console.log()", "print()", "return", "Tom Holland"],
        answer: "console.log()"
    },

    {
        question: "Which of the following represent a Javacript file",
        choices: ["index.html", "style.css", "script.js", "favico.ico"],
        answer: "script.js"
    },

    {
        question: "Which window method displays an alert with a message, an OK button, and a cancel button",
        choices: ["confirm()", "alert()", "prompt()", "funciton()"],
        answer: "confirm()"
    },

    {
        question: "Finish the code snippet:\n<script __='phew.js'></script>",
        choices: ["href", "src", "ref", "class"],
        answer: "src"
    },

    {
        question: "How do you declare a variable in Javascript?",
        choices: ["var", "let", "const", "All of the above"],
        answer: "All of the above"
    },

    // {
    //     question: "",
    //     choices: ["", "", "", ""],
    //     answer: "b"
    // },
]

// init variables from html
var startBtn = document.getElementById("start-btn");
var infoCard = document.getElementById("info-card");
var questionCard = document.getElementById("quest-card");
var timerElement = document.getElementById("timeLeft");

// variables for questions and gives buttons functionality to check if user made the correct choice
var questionHead = document.getElementById("questionHead");


var choiceA = document.getElementById("choicesA");
var choiceB = document.getElementById("choicesB");
var choiceC = document.getElementById("choicesC");
var choiceD = document.getElementById("choicesD");

var questionOutcome = document.getElementById("questionOutcome");

choiceA.addEventListener("click", checkAnswer);
choiceB.addEventListener("click", checkAnswer);
choiceC.addEventListener("click", checkAnswer);
choiceD.addEventListener("click", checkAnswer);



var i = 0;

// intialize variables for timer
var timer;
var timerCount;





function startQuiz() {
    console.log("quizStart");
    timerCount = 6;
    questionCard.style.display = "block";
    infoCard.style.display = "none"; // 
    // loadQuestion();
    displayQuestions();
    startTimer();

}


// function loadQuestion() {
//     questionsArray = [];
//     for (t = 0; t < quizBank.length; t++) {
//         var questionsArray = quizBank[t];
//         console.log(questionsArray);
//         // return question
//     }
// }

function displayQuestions() {
    console.log("We are here");
    questionHead.textContent = quizBank[i].question;
    choiceA.textContent = quizBank[i].choices[0];
    choiceB.textContent = quizBank[i].choices[1];
    choiceC.textContent = quizBank[i].choices[2];
    choiceD.textContent = quizBank[i].choices[3];
}

function checkAnswer() {
    console.log("checkanswer!!!!")
    var correctAnswer = quizBank[i].answer
    console.log(correctAnswer)

    // if (___ === correctAnswer) {

    // }
}



    // https://developer.mozilla.org/en-US/docs/Web/API/setInterval
    function startTimer() {
        timer = setInterval(function () {
            timerCount--;
            timerElement.textContent = "Time remaining: " + timerCount;
            //   if (timerCount >= 0) {

            //     if (isWin && timerCount > 0) {

            //       clearInterval(timer);
            //       winGame();
            //     }
            //   }
            // Tests if time has run out
            if (timerCount === 0) { // add || "When the user has reached the end of quiz"
                clearInterval(timer);
                console.log(timer);
                endGame();
            }
        }, 1000);
    }

    // function endGame() {
    //     var totalPts = 
    // }


    startBtn.addEventListener("click", startQuiz);


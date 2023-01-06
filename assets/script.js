// Quiz questions array
var quizBank = [
    {
        question: "How do you print items within the Console?",
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

var clickBtn = document.getElementById('click');
var quizH1 = document.getElementById('quiz');
var firstContainer = document.getElementById('first');
var timeEl = document.getElementById('timer');
var timeLeft = 60;
var questionIndex = 0;


var HighScores = [];

// create
// add
// append
function startQuiz() {
    timerStart();
    setQuizQuestions();
}


function setQuizQuestions() {
    firstContainer.innerHTML = '';
    quizH1.setAttribute('class', 'hide');
    var h1 = document.createElement('h1');
    var div = document.createElement('div');
    div.setAttribute('class', 'container')

    h1.textContent = quizBank[questionIndex].question;

    for (var i = 0; i < quizBank[questionIndex].choices.length; i++) {
        var btn = document.createElement('button');
        btn.value = quizBank[questionIndex].choices[i];
        console.log(btn.value)
        btn.textContent = quizBank[questionIndex].choices[i];
        btn.setAttribute('class', 'btn');

        btn.addEventListener('click', checkAnswer);
        div.append(btn);
    }
    firstContainer.append(h1, div);
    clickBtn.setAttribute('class', 'hide');
    
}

function checkAnswer() {
    correctAnswer = quizBank[questionIndex].answer
    if (correctAnswer === quizBank[questionIndex].answer) {
        console.log("nice")
    } else {
        console.log("whoops");
    }

    // var userChoice = 
    // if (quizBank[questionIndex] === quizBank[questionIndex].answer) {
    //     console.log("hello")
    // }

    if (questionIndex >= quizBank.length - 1) {
        endQuiz();
    } else {
        questionIndex++;
        setQuizQuestions();
    }
}

function timerStart() {
    timerInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timeEl.textContent = timeLeft;
        } else {
        clearInterval(timerInterval)
        endQuiz();
    } }, 1000);
}

function endQuiz() {
    console.log("reached end of quiz");

    firstContainer.innerHTML = ''; //clears content on the screen

    var div = document.createElement('div'); // creates a parent div
    var GameOver = document.createElement('h2');
    GameOver.textContent = "Thanks for playing!";

    div.setAttribute('class', 'container') // setting attribute to created div
    div.appendChild(GameOver);
}



clickBtn.addEventListener('click', startQuiz);
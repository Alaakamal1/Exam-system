document.addEventListener('DOMContentLoaded', function() {
    let savedState = localStorage.getItem('examState');
    const startBtn = document.getElementById('startButton');
    const examContent = document.getElementById('examContent');
    if (savedState) {
        if (startBtn) startBtn.style.display = 'none';
        if (examContent) examContent.style.display = 'block';
        // Restore state here
    } else {
        if (startBtn) startBtn.style.display = 'block';
        if (examContent) examContent.style.display = 'none';
    } 
})

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
    }
}
function handleKeyPress(e) {
    if (e.key === 'Escape') {
        e.preventDefault();
        const modal = document.getElementById('confirmExitModal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }
    if (e.key === 'Tab') {
        e.preventDefault();
    }
}
function handleRightClick(e) {
    e.preventDefault();
}
function startExam() {
    toggleFullScreen();
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('contextmenu', handleRightClick);
    
    const startBtn = document.getElementById('startButton');
    const examContent = document.getElementById('examContent');
    
    if (startBtn) startBtn.style.display = 'none';
    if (examContent) examContent.style.display = 'block';
    
    updateQuestionDisplay(1);
    checkAllQuestionsAnswered();
}

document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('startButton');
    if (startBtn) {
        startBtn.addEventListener('click', startExam);
    }
    const examContent = document.getElementById('examContent');
    if (examContent) {
        examContent.style.display = 'none';
    }
    const cancelBtn = document.getElementById('cancelExitBtn');
    const confirmBtn = document.getElementById('confirmExitBtn');
    
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            const modal = document.getElementById('confirmExitModal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    }
    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('contextmenu', handleRightClick);
            
            const modal = document.getElementById('confirmExitModal');
            if (modal) {
                modal.style.display = 'none';
            }
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            handleSubmit();
        });
    }
});
const questions = {
    1: { answered: false, selected: null, flagged: false },
    2: { answered: false, selected: null, flagged: false },
    3: { answered: false, selected: null, flagged: false },
    4: { answered: false, selected: null, flagged: false },
    5: { answered: false, selected: null, flagged: false },
    6: { answered: false, selected: null, flagged: false },
    7: { answered: false, selected: null, flagged: false },
    8: { answered: false, selected: null, flagged: false },
    9: { answered: false, selected: null, flagged: false },
    10: { answered: false, selected: null, flagged: false }
};
const questionBank = [
     {
        question: "What is the correct way to declare a variable in JavaScript?",
        options: [
            "var x = 5;",
            "variable x = 5;",
            "x = 5;",
            "let x = 5;"
        ],
        correctAnswer: "A"
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: [
            "Boolean",
            "Integer",
            "String",
            "Object"
        ],
        correctAnswer: "B"
    },
    {
        question: "What does the '===' operator do in JavaScript?",
        options: [
            "Assigns a value",
            "Compares values and types",
            "Compares only values",
            "Checks if a value exists"
        ],
        correctAnswer: "B"
    },
    {
        question: "Which method is used to add an element to the end of an array?",
        options: [
            "push()",
            "append()",
            "add()",
            "insert()"
        ],
        correctAnswer: "A"
    },
    {
        question: "What is the purpose of the 'use strict' directive?",
        options: [
            "To make the code run faster",
            "To enable strict mode and catch common coding mistakes",
            "To allow the use of older JavaScript features",
            "To disable error checking"
        ],
        correctAnswer: "B"
    },
    {
        question: "Which of these is NOT a valid way to create a function in JavaScript?",
        options: [
            "function myFunc() {}",
            "const myFunc = () => {}",
            "function: myFunc() {}",
            "const myFunc = function() {}"
        ],
        correctAnswer: "C"
    },
    {
        question: "What is the output of console.log(typeof [])?",
        options: [
            "array",
            "object",
            "list",
            "undefined"
        ],
        correctAnswer: "B"
    },
    {
        question: "Which method is used to convert a string to an integer in JavaScript?",
        options: [
            "parseInt()",
            "toInteger()",
            "convertToInt()",
            "parseInteger()"
        ],
        correctAnswer: "A"
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: [
            "To refer to the current function",
            "To refer to the current object",
            "To create a new instance",
            "To declare a variable"
        ],
        correctAnswer: "B"
    },
    {
        question: "Which of these is NOT a valid way to create an object in JavaScript?",
        options: [
            "const obj = {}",
            "const obj = new Object()",
            "const obj = Object.create()",
            "const obj = { key: value }"
        ],
        correctAnswer: "C"
    }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(questionBank);
const examQuestions = questionBank.slice(0, 10);

let currentQuestion = 1;
let timeLeft =  5 * 60; 

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const submitBtn = document.getElementById('submitBtn');

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        handleSubmit();
        window.location.replace("../Html/Grade.html");
    } else {
        timeLeft--;
    }
}
const timerInterval = setInterval(updateTimer, 1000);

function checkAllQuestionsAnswered() {
    const allAnswered = Object.values(questions).every(q => q.answered);
    submitBtn.classList.toggle('hidden', !allAnswered);
    return allAnswered;
}
function updateQuestionDisplay(questionNumber) {
    
    const questionCard = document.querySelector('.question-card');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    questionCard.querySelector('.question-title').textContent = `Question ${questionNumber}`;
    questionText.textContent = examQuestions[questionNumber - 1].question;
    optionsContainer.innerHTML = '';
    examQuestions[questionNumber - 1].options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.dataset.option = String.fromCharCode(65 + index); 
        button.textContent = option;
        optionsContainer.appendChild(button);
    });

    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const questionNumber = currentQuestion;
            optionButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            questions[questionNumber].answered = true;
            questions[questionNumber].selected = button.dataset.option;
            document.querySelector(`.number-button:nth-child(${questionNumber})`).classList.add('answered');
            checkAllQuestionsAnswered();
        });
    });

    if (questions[questionNumber].answered) {
        const selectedOption = questions[questionNumber].selected;
        const selectedButton = document.querySelector(`[data-option="${selectedOption}"]`);
        if (selectedButton) {
            selectedButton.classList.add('selected');
        }
    }

    const currentQuestionNumber = document.querySelector('.number-button.active');
    if (questions[questionNumber].flagged) {
        currentQuestionNumber.classList.add('flagged');
    } else {
        currentQuestionNumber.classList.remove('flagged');
    }
}
updateQuestionDisplay(1);
checkAllQuestionsAnswered();

const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentQuestion = index + 1;
        numberButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        updateQuestionDisplay(currentQuestion);
    });
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentQuestion > 1) {
        currentQuestion--;
        const prevButton = document.querySelector(`.number-button:nth-child(${currentQuestion})`);
        document.querySelector('.number-button.active').classList.remove('active');
        prevButton.classList.add('active');
        updateQuestionDisplay(currentQuestion);
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentQuestion < 10) {
        currentQuestion++;
        const nextButton = document.querySelector(`.number-button:nth-child(${currentQuestion})`);
        document.querySelector('.number-button.active').classList.remove('active');
        nextButton.classList.add('active');
        updateQuestionDisplay(currentQuestion);
    }
});

const flagButton = document.querySelector('.flag-button');
flagButton.addEventListener('click', () => {
    const currentQuestionNumber = document.querySelector('.number-button.active');
    questions[currentQuestion].flagged = !questions[currentQuestion].flagged;
    if (questions[currentQuestion].flagged) {
        currentQuestionNumber.classList.add('flagged');
    } else {
        currentQuestionNumber.classList.remove('flagged');
    }
});

submitBtn.addEventListener('click', handleSubmit);

function handleKeyPress(e) {
    if (document.fullscreenElement || 
        document.webkitFullscreenElement || 
        document.mozFullScreenElement ||
        document.msFullscreenElement) {
      
      if (e.key === 'Escape' || e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();
          endQuiz();
        return false;
      }
    }
  }
    document.addEventListener('fullscreenchange', handleFullscreenChange);
  document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
  document.addEventListener('mozfullscreenchange', handleFullscreenChange);
  document.addEventListener('MSFullscreenChange', handleFullscreenChange);
  
  function handleFullscreenChange() {
    if (
      !document.fullscreenElement &&
      !document.webkitFullscreenElement &&
      !document.mozFullScreenElement &&
      !document.msFullscreenElement
    ) {
      document.getElementById('confirmExitModal').style.display = 'flex';
    }
  }
  
  document.getElementById('confirmExitBtn').addEventListener('click', () => {
    endQuiz();
  });
  
  document.getElementById('cancelExitBtn').addEventListener('click', () => {
    document.getElementById('confirmExitModal').style.display = 'none';
  
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  });
  
  document.addEventListener('fullscreenchange', handleFullscreenChange);
  document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
  document.addEventListener('mozfullscreenchange', handleFullscreenChange);
  document.addEventListener('MSFullscreenChange', handleFullscreenChange);

  function handleSubmit() {
    clearInterval(timerInterval);
    const results = {
        answers: [],
        score: 0,
        timeLeft,
    };

    examQuestions.forEach((question, index) => {
        const questionNumber = index + 1;
        const userAnswer = questions[questionNumber].selected;
        const correctAnswer = question.correctAnswer;
        const isCorrect = userAnswer === correctAnswer;

        if (isCorrect) results.score++;

        results.answers.push({
            question: questionNumber,
            selected: userAnswer,
            correctAnswer: correctAnswer,
            isCorrect: isCorrect
        });
    });

    sessionStorage.setItem("examCompleted", true);
    localStorage.setItem('examResults', JSON.stringify(results));
    window.location.replace("../Html/Grade.html");
}


window.addEventListener("beforeunload",function(){
this.window.location.replace("../Html/Grade.html");
})

console.log("123")

window.onbeforeunload =function(){
  this.window.location.replace("../Html/Grade.html");
}
const question=document.getElementById("question");
const choice=Array.from(document.getElementsByClassName("choice-text"));
let currentQuestion={};
let acceptingAnswer=true;
let score=0;
let questionCounter=0;
let availableQuestion= [];

let questions= [
  {
    question:"hello from herrrrr",
    choice1:"hi",
    choice1:"hidv",
    choice1:"eeee",
    choice1:"hae",
    answer:1,
  },
  {
    question:"hello from hhh",
    choice1:"hi",
    choice1:"hidv",
    choice1:"eeee",
    choice1:"hae",
    answer:2,
  },
  {
    question:"hello from llll",
    choice1:"hi",
    choice1:"hidv",
    choice1:"eeee",
    choice1:"hae",
    answer:3,
  },
  {
    question:"hello from herreeerrr",
    choice1:"hi",
    choice1:"hidv",
    choice1:"eeee",
    choice1:"hae",
    answer:4,
  },

];


const correctBonus=10;
const maxQuestion=4;

startExam = () =>{
  questionCounter = 0;
  score = 0;
  availableQuestion = [...questions]
}

getNewQuestion = () => {
  
}


startExam();
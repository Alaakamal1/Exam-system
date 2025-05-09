const result = JSON.parse(localStorage.getItem('examResults'));
let texttimeout = document.getElementById('textTimeOut');
let greating = document.getElementById('textGrating');
let retrayBtn = document.getElementById("redirect");
let quote = document.getElementById('textQuote');
let score = result.score;
let time = result.timeLeft;
function success() {
  greating.textContent = "Congratulations!";
  quote.textContent = `Your grade is ${score * 10}%  You did it! This is just the beginning—keep shining.`;
}
function failed() {
  greating.textContent = "Sorry, you failed.";
  quote.textContent = `Your grade is ${score * 10}%  Failing one test doesn’t define your worth.
  You’ve got what it takes this is just a plot twist, not the end of your story.`;
  retrayBtn.classList.remove('btntry');
  retrayBtn.addEventListener('click',function(){
    window.location.replace("../Html/Examination.html");
  })
}  
if (time === 0) {
  texttimeout.textContent = "Your time is up";
  if (score >= 6) {
    success();
  }else {
    failed();
  }
}else{
  if (score >= 6) {
    success();
  } else {
    failed();
  }
}

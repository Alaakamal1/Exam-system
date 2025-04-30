// كود مبدئي

// const user = JSON.parse(localStorage.getItem("userData"));
let gradeText=document.getElementsByTagName('div')[0];
let quote=document.createElement('p');
let retrayBtn=document.createElement('button');
let texttimeout=document.createElement('h1');
let greating=document.createElement('h2');
let quoteText="";
let retrayBtnText="";
let greatingText="";
let score=4;
let time = 0;
if (time === 0) {
  let timeText = document.createTextNode(`Your time is up `);
  gradeText.append(texttimeout);
  texttimeout.appendChild(timeText);
  if(score >= 6){
    greatingText=document.createTextNode(`Congratulation`);
    quoteText = document.createTextNode(`Your grade is ${score*10}%You did it! This is just the beginning—keep shining`);
    gradeText.append(greating);
    greating.appendChild(greatingText);
    gradeText.append(quote);
    quote.appendChild(quoteText);

    }else{
      greatingText=document.createTextNode(`Sorry , you failed `);
      quoteText = document.createTextNode(`Your grade is ${score*10}% Failing one test doesn’t define your worth. You’ve got what it takes this is just a plot twist, not the end of your story`);
      retrayBtnText=  document.createTextNode(`Try agian`);
      gradeText.append(greating);
      greating.appendChild(greatingText);
      gradeText.append(quote);
      gradeText.append(retrayBtn);
      quote.appendChild(quoteText);
      retrayBtn.appendChild(retrayBtnText);
      retrayBtn.className="btn-grade sansita-regular";
  }
} else {
  if(score >= 6){
    greatingText=document.createTextNode(`Congratulation`);
    quoteText = document.createTextNode(`Your grade is ${score*10}% You did it! This is just the beginning—keep shining`);
    gradeText.append(greating);
    greating.appendChild(greatingText);
    gradeText.append(quote);
    quote.appendChild(quoteText);
  }else{
    greatingText=document.createTextNode(`Sorry , you failed `);
    quoteText = document.createTextNode(`Your grade is ${score*10}% Failing one test doesn’t define your worth. You’ve got what it takes this is just a plot twist, not the end of your story`);
    retrayBtnText=  document.createTextNode(`Try agian`);
    gradeText.append(greating);
    greating.appendChild(greatingText);
    gradeText.append(quote);
    gradeText.append(retrayBtn);
    quote.appendChild(quoteText);
    retrayBtn.appendChild(retrayBtnText);
    retrayBtn.className="btn-grade sansita-regular";


  }
}

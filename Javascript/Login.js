
var RegEmail= /^[a-zA-Z0-9]{3,15}@(yahoo|gmail|su.edu.eg)\.com$/;
var RegPassword=/^[0-9A-Za-z.!@#$%&]{6,20}$/;
var errorEmail=document.getElementById("error-email-login");
var errorpassword=document.getElementById("error-password-login");


document.getElementById("loginform").addEventListener("submit",function(event){
  event.preventDefault();
 
  const user = JSON.parse(localStorage.getItem("userData"));
  emailconf=user.email;
  passconf=user.password;
  var email=document.getElementById("email-login").value;
  if(email.trim()===""){
    errorEmail.textContent="you must input your email";
  }
  else if(!RegEmail.test(email) || email !==  emailconf){
    errorEmail.textContent="your email is not vaild";
  }else{
    errorEmail.textContent="";
  }

  var password=document.getElementById("password-login").value;
  if(password.trim()===""){
    errorpassword.textContent="you must input your email";
  }
  else if(!RegPassword.test(password) || password !==  passconf){
    errorpassword.textContent="Incorrect password";
    errorpassword.textContent="your password must have at least 1 number & 1 char & special letters";
  }else{
    errorpassword.textContent="";
  }

  if (
    errorEmail.textContent === "" &&
    errorpassword.textContent === ""
  ) {
    window.location.href = "../Html/Examination.html"; 
  }
});

document.getElementById("email-login").addEventListener("input", function () {
  if (RegEmail.test(this.value)) errorEmail.textContent = "";
});

document.getElementById("password-login").addEventListener("input", function () {
  if (RegPassword.test(this.value)) errorpassword.textContent = "";
});

// استدعاء بصفحه تانيه

// const user = JSON.parse(localStorage.getItem("userData"));
// if (user) {
//   document.body.innerHTML = `<h1>مرحباً ${user.username}!</h1><p>بريدك: ${user.email}</p>`;
// } else {
//   document.body.innerHTML = "<p>لا توجد بيانات مستخدم محفوظة.</p>";
// }
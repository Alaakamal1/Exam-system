var RegUserName=/^[a-zA-Z]{3,15}$/;
var RegEmail= /^[a-zA-Z0-9]{3,15}@(yahoo|gmail|su.edu.eg)\.com$/;
var RegPassword=/^[0-9A-Za-z.!@#$%&]{6,20}$/;
var RegConfPassword=/^[0-9A-Za-z!@#$%&]{6,20}$/;

var errorUsername=document.getElementById("error-username");
var errorEmail=document.getElementById("error-email");
var errorpassword=document.getElementById("error-password");
var errorConfPass=document.getElementById("error-Confirmpassword");


document.getElementById("signupform").addEventListener("submit",function(event){
  event.preventDefault();
  var username=document.getElementById("username").value;
  if(username.trim()===""){
    errorUsername.textContent="you must input your username";
  }
  else if(!RegUserName.test(username)){
    errorUsername.textContent="you must input character only between 3 to 15 char";
  }else{
    errorUsername.textContent="";
  }

  var email=document.getElementById("email").value;
  if(email.trim()===""){
    errorEmail.textContent="you must input your email";
  }
  else if(!RegEmail.test(email)){
    errorEmail.textContent="your email is not vaild";
  }else{
    errorEmail.textContent="";
  }

  var password=document.getElementById("password").value;
  if(password.trim()===""){
    errorpassword.textContent="you must input your email";
  }
  else if(!RegPassword.test(password)){
    errorpassword.textContent="your password must have at least 1 number & 1 char & special letters";
  }else{
    errorpassword.textContent="";
  }

  var confPassword=document.getElementById("Confirmpassword").value;
  if(confPassword.trim()===""){
    errorConfPass.textContent="you must input Confirmpassword";
  }
  else if(!RegConfPassword.test(confPassword) || password !== confPassword){
    errorUsername.textContent="The password you entered does not match the confirmation password";
  }else{
    errorConfPass.textContent="";
  }
  
  const userData = {
    username: username,
    email: email,
    password:password,
    confirmpassword:confPassword
  };

  localStorage.setItem("userData", JSON.stringify(userData));
  if (
    errorUsername.textContent === "" &&
    errorEmail.textContent === "" &&
    errorpassword.textContent === "" &&
    errorConfPass.textContent === ""
  ) {
    window.location.href = "../Html/Login.html"; 
  }
});

document.getElementById("username").addEventListener("input", function () {
  if (RegUserName.test(this.value)) errorUsername.textContent = "";
});

document.getElementById("email").addEventListener("input", function () {
  if (RegEmail.test(this.value)) errorEmail.textContent = "";
});

document.getElementById("password").addEventListener("input", function () {
  if (RegPassword.test(this.value)) errorpassword.textContent = "";
});

document.getElementById("Confirmpassword").addEventListener("input", function () {
  if (this.value === document.getElementById("password").value) errorConfPass.textContent = "";
});



// استدعاء بصفحه تانيه

// const user = JSON.parse(localStorage.getItem("userData"));
// if (user) {
//   document.body.innerHTML = `<h1>مرحباً ${user.username}!</h1><p>بريدك: ${user.email}</p>`;
// } else {
//   document.body.innerHTML = "<p>لا توجد بيانات مستخدم محفوظة.</p>";
// }
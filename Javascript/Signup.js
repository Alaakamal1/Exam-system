let RegUserName=/^[a-zA-Z]{3,15}$/;
let RegEmail= /^[a-zA-Z0-9]{3,15}@(yahoo|gmail|su.edu.eg)\.com$/;
let RegPassword=/^[0-9A-Za-z.!@#$%&]{6,20}$/;
let RegConfPassword=/^[0-9A-Za-z!@#$%&]{6,20}$/;

let errorUsername=document.getElementById("error-username");
let errorEmail=document.getElementById("error-email");
let errorpassword=document.getElementById("error-password");
let errorConfPass=document.getElementById("error-Confirmpassword");


document.getElementById("signupform").addEventListener("submit",function(event){
  event.preventDefault();
  let username=document.getElementById("username").value;
  if(username.trim()===""){
    errorUsername.textContent="you must input your username";
  }
  else if(!RegUserName.test(username)){
    errorUsername.textContent="you must input character only between 3 to 15 char";
  }else{
    errorUsername.textContent="";
  }

  let email=document.getElementById("email").value;
  if(email.trim()===""){
    errorEmail.textContent="you must input your email";
  }
  else if(!RegEmail.test(email)){
    errorEmail.textContent="your email is not vaild";
  }else{
    errorEmail.textContent="";
  }

  let password=document.getElementById("password").value;
  if(password.trim()===""){
    errorpassword.textContent="you must input your password";
  }
  else if(!RegPassword.test(password)){
    errorpassword.textContent="your password must have at least 1 number & 1 char & special letters";
  }else{
    errorpassword.textContent="";
  }

  let confPassword=document.getElementById("Confirmpassword").value;
  if(confPassword.trim()===""){
    errorConfPass.textContent="you must input Confirmpassword";
  }
  else if(!RegConfPassword.test(confPassword) || password !== confPassword){
    errorUsername.textContent="The password you entered does not match the confirmation password";
  }else{
    errorConfPass.textContent="";
  }
  
  if (
    errorUsername.textContent === "" &&
    errorEmail.textContent === "" &&
    errorpassword.textContent === "" &&
    errorConfPass.textContent === ""
  ) {
    const userData = {
      username: username,
      email: email,
      password: password,
      confirmpassword: confPassword
    };
  
    localStorage.setItem("userData", JSON.stringify(userData));
      window.location.replace("./Html/Login.html");
  }
});

let regname=/^[a-zA-Z]{0,15}$/;
document.getElementById("username").addEventListener("input", function () {
  if(!regname.test(this.value))  errorUsername.textContent="you must input character only";
  else errorUsername.textContent = "";
});

document.getElementById("email").addEventListener("input", function () {
  if (RegEmail.test(this.value))  errorEmail.textContent = "";
});

document.getElementById("password").addEventListener("input", function () {
  if (RegPassword.test(this.value)) errorpassword.textContent = "";
});

document.getElementById("Confirmpassword").addEventListener("input", function () {
  if (this.value === document.getElementById("password").value) errorConfPass.textContent = "";
});

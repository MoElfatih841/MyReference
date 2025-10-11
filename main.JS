let myBtn = document.getElementById("btn");

myBtn.onclick = function () {
  let userNameValidation = false;
  let userAgeValidation = false;
  let userName = document.querySelectorAll("input")[0];
  let userAge = document.querySelectorAll("input")[1];
  if (userName.value !== "" && userName.value.length <= 10) {
    userNameValidation = true;
    console.log("userNameValidation Done");
  }
  if (userAge.value !== "" && userAge.value.length <= 2) {
    userAgeValidation = true;
    console.log("userAgeValidation Done");
  }
  if (userNameValidation === false || userAgeValidation === false) {
    event.preventDefault();
    console.log("stop");
  }
};

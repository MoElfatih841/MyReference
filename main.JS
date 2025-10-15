let myDiv = document.querySelector("div");
console.log(typeof myDiv.innerHTML);

let countDown = function () {
  myDiv.innerHTML = +myDiv.innerHTML - 1;
  console.log(typeof myDiv.innerHTML);
  if (myDiv.innerHTML === "0") {
    clearInterval(counter);
  }
};
let counter = setInterval(countDown, 1000);

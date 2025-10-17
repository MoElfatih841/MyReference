if (localStorage.getItem("backgroundColor") !== null) {
  document.body.style.backgroundColor = localStorage.getItem("backgroundColor");
} else {
  document.body.style.backgroundColor = document
    .querySelectorAll(".container span")[0]
    .getAttribute("color-data");
}
addEventListener("click", function (e) {
  if (e.target.hasAttribute("color-data")) {
    this.localStorage.backgroundColor = e.target.getAttribute("color-data");
    this.document.body.style.backgroundColor = localStorage.backgroundColor;
  }
});

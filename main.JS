let numCode = function (...num) {
  if (num.length === 4) {
    for (let i = 0; i < num.length; i++) {
      document.getElementsByTagName("form")[0][i].setAttribute("value", num[i]);
    }
  } else {
    console.error(`code is not right`);
  }
};
numCode(3, 5, 6, 4);

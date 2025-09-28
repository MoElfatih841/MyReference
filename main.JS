let titleContent = "Elzero",
  DesContent = "Elzero Web School",
  DateContent = 25 / 10;
let layOut = `
<div>
  <h3>Hello ${titleContent}</h3>
  <p>${DesContent}</p>
  <span>${DateContent}</span>
</div>
`;
document.write(layOut.repeat(4));
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
console.log(
  '`I\'m In \n \\\\ \nLove \\\\ """ \'\'\' \n ++ With ++ \n\\"""\\""" \n""JavaScript""``'
);
let a = 21;
let b = 20;
let aAndb = `${b}${a}_`.repeat(3);

console.log(`_${a}_${aAndb}${b}`); // _21_2021_2021_2021_20_

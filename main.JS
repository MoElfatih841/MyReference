let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samara"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];
let numOfAdmins;
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  numOfAdmins = i + 1;
}
document.write(`<div>We Have ${numOfAdmins} Admins</div>`);

for (let i = 0; i < numOfAdmins; i++) {
  document.write("<hr>");
  document.write(`<div> The Admin For Team ${i + 1} Is ${myAdmins[i]}`);
  document.write(`<h3>Team Members:</h3>`);
  let num = 0;
  for (let e = 0; e < myEmployees.length; e++) {
    if (myAdmins[i][0] === myEmployees[e][0]) {
      document.write(`<p>-${++num}  ${myEmployees[e]}</p>`);
    }
  }

  document.write(`</div>`);
}

console.log(myAdmins[0][0]);

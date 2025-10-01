let job = "doctor";
let salary = 0;

switch (job) {
  case "manger":
    salary = 8000;
    break;
  case "it":
  case "support":
    salary = 6000;
    break;
  case "developer":
  case "designer":
    salary = 7000;
    break;
  default:
    salary = 4000;
}
console.log(salary);

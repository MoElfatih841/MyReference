let myString = "1,2,3,EE,l,z,e,r,o,_W,e,b,_,S,h,o,o,l,2,0,Z";
let solution;

solution = myString
  .split("")
  .filter((ele) => isNaN(parseInt(ele)) && ele !== ",")
  .map((ele) => (ele !== "_" ? ele : " "))
  .slice(+true, -true)
  .reduce((acc, ele) => acc + ele);

console.log(solution);

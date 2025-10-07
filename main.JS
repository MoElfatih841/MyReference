// let names = function (...myNames) {
//   return `String [${myNames.join("], [")}] => Done !`;
// };

let names = (...myNames) => `String [${myNames.join("], [")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim", "Khalid"));

let myNumbers = [20, 50, 10, 60];
let calc = (one, two, ...nums) => one + two + nums[0][1];
console.log(calc(10, myNumbers[0], myNumbers));

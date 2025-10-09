/*  Introduction & Syntax

what is javascript: it give the website vitality and activity

use in:
- web apps
- mobile apps [ionic, react, flutter]
- games [pixi, iychee.js, playcanvas]
- server [Node, mongodb, express]
- desktop app [electron, nwjs, appjs, meteor, proton native]

where we write js:
- html page: 1- <script> js code </script>       2- source js file  <script src="/course/javascript_cource/javascript_cource_queiz.js"></script>

js outputs:
- document => output show in web page, document reference to html files that script init js file
document.write("hallo");
document.getElementById("btn").innerHTML = "hallo js";
- console => usually use for testing
console.log("hallo js");
!!console is feature in WEB API not using js to use it!!

statement => a line of code

Console:
- some console function:
console.log
Ex:/
console.log("log");
console.error
Ex:/
console.error("Error");
console.table
Ex:/
console.table(["mo", "ali", "ahmed"]);
console styling
Ex:/
console.log(
  "hello my %cfri%cend",
  "font-size:40px; color: red",
  "font-size:40px; color: blue"
);


*/

/*  Data Types, Concatenation, Template Literals And Variable 

data type:
- string
console.log(typeof "mo elfatih");
- number
console.log(typeof 320);
- boolean
console.log(typeof true);
- object
console.log(typeof { name: "mo", age: 22, country: "egy" });
- array => object
console.log(typeof ["mo", "ali", 32, 44]);
- null => object
console.log(typeof null);
- undefined
console.log(typeof undefined);

* Note *
- array and null defined as a object

Variables:
Var
- Redeclare(overright) (Yes)
- Access(initialization) Before Declare (Undefined) 
- Variable Scope Drama [Added To Window Object] (yes) اضافة المتغير لكأن النافذة
- Block Or Scope Function

- scope: global
- hoisting:
- can be reassigned(new value same variable): yes
- can be redeclared: no


Let
- Redeclare(overright) (No => Error)
- Access(initialization) Before Declare (Error)
- Variable Scope Drama [Added To Window Object] (no)
- Block Or Scope Function

- scope: local
- hoisting:
- can be reassigned(new value same variable): yes
- can be redeclared: no


Const
- Redeclare(overright) (No => Error)
- Access(initialization) Before Declare (Error)
- Variable Scope Drama [Added To Window Object] (no)
- Block Or Scope Function

- scope: local
- hoisting:
- can be reassigned(new value same variable): no ,if it not (newtable)object or array
- can be redeclared: no

- javascript is loosely typed langues
- Id element in html file, read as variable in js file
- Variable Scope Drama ??

String "" Syntax :
console.log("hello my 'world'");
console.log('hello my "world"');

Character Escape Sequences \ :
\ use to make the next character is a string
console.log("hello \\my\\ world");

New Line \n :
console.log("hello \nmy\nworld");

Concatenation:
use to merge data 
console.log("mo" + " " + "elfatih");


Template Literals (Template String):
use to merge data by ES6 feature
Ex:/
let title = "Header";
let desc = "The description of the header";
let LayOut = `
<div>
  <h1>${title}</h1>
  <p>${desc}</p>
</div>
`;
document.write(LayOut);

*/

/*  Operators (العوامل)

Arithmetic Operators: +  -  *  /  %  ++  --  **
pre increment  ++num         pre decrement  --num
post increment  num++        post decrement  num--
EX:/
var x = 3,
    y = 8,
    z = "6";
console.log(x + y);// 11
console.log(y - x);// 5
console.log(x * y);// 24
console.log(y / x);// 2.66
console.log(y % x);// 2
console.log(x % y);// 3  !!if small number % bigger number the result is the small number!!
console.log(++x);// 4
console.log(x++);// 4 and x = 5 after print !!if there no print then x++ same as ++x!!
console.log(x);// 5
console.log(--y);// 7
console.log(y--);// 7 and y = 6 after print !!if there no print then y-- same as --y!!
console.log(y);// 6
console.log(x**y);// x = 3 x 3 x 3 x 3 x 3 x 3 x 3 = 2187
console.log(+z);// 6 !!+"number string" = number!!
console.log(-z);// -6 !!-"number string" = -number!!
console.log(+true);// 1
console.log(-true);// -1
console.log(+false);// 0
console.log(-false);// -0

Unary Operator: change string to a number
unary plus(+)
unary negation(-)
Ex:/
console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"ali");
console.log(+"19.3");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);
console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"ali");
console.log(-"19.3");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);

assignment operator (العامل المساند): =  +=  -=  *=  **=  /=  %=
Ex:/
var x = 4;
console.log(x += 2);// 6    x = x + 2
console.log(x -= 2);// 4    x = x - 2
console.log(x *= 2);// 8    x = x * 2
console.log(x /= 2);//4     x = x / 2
console.log(x **= 2);//16   x = x ** 2
console.log(x %= 2);//0     x = x % 2



False Output:
||
- null, undefined, falsy value(0, "", false)
??
- null, undefined only
Ex:/
let price = 0;
console.log(price || 200); // 200
console.log(price ?? 200); // 0
price = false;
console.log(price || 200); // 200
console.log(price ?? 200); // false
price = null;
console.log(price || 200); // 200
console.log(price ?? 200); // 200
price = undefined;
console.log(price || 200); // 200
console.log(price ?? 200); // 200

*/

/*  Number, Math And String

Syntactic Sugar: طرق مختلفه لكتابت الرقم ليكون سهل القراءة
Ex:/
console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);

Min Max VAlue And Safe Value:
Ex:/
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MIN_VALUE); // 5e-324
* Note *
- double precision ??



Number methods: [toString(), toFixed(), parseInt(), parseFloat(), isInteger(), isNaN(),]
!!use double dots .. or () to call method!!
- toString(): use to change number to string
console.log((100).toString()); // 100
console.log(typeof (100).toString()); // string
console.log((100.676).toString()); //100.676
console.log(typeof (100.676).toString()); // string
- toFixed(): use to control decimal point numbers
* Note *
- more than or equal 5 = +1
- less than 5 = -1
Ex:/
console.log((100.555555).toFixed(2)); // 100.56
console.log(typeof (100.555555).toFixed(2)); // string
console.log((100.554555).toFixed(2)); // 100.54
console.log(typeof (100.554555).toFixed(2)); // string
- parseInt(): use to change string to integer number even if there a string
Ex:/
console.log(parseInt("100.45 mo")); // 100
console.log(typeof parseInt("100.45 mo")); // number
- parseFloat(): use to change string to integer or float number even if there a string
Ex:/
console.log(parseFloat("100.45 mo")); // 100.45
console.log(typeof parseFloat("100.45 mo")); // number
- Number.isInteger(): use to ask if the input is integer number or not
console.log(Number.isInteger("100")); // false
console.log(Number.isInteger(100.55)); // false
console.log(Number.isInteger(100)); // true
- Number.isInteger(): use to ask if the input is NaN or not
console.log(Number.isNaN("ali")); // false
console.log(Number.isNaN("ali" - 20)); // true
console.log(Number.isNaN(+"ali")); // true



Math(): [pow(), sqrt(), round(),  ceil(), floor(), random(), trunc()]
is methods use to process numbers
- Math.round(): less than 0.5 equal 0.0 , more or equal 0.5 add 1
console.log(Math.round(4.448)); // 4
console.log(Math.round(4.552)); // 5
- Math.ceil(): + 1 
console.log(Math.ceil(4.448)); // 5
console.log(Math.ceil(4.552)); // 5
- Math.ceil(): - 1 
console.log(Math.floor(4.448)); // 4
console.log(Math.floor(4.552)); // 4 
- Math.trunc(): take out the decimal
console.log(Math.trunc(4.448)); // 4
console.log(Math.trunc(4.552)); // 4
- Math.min or max(): get less number or get large number
console.log(Math.min(2, 5, 10, -10, -7)); // -10
console.log(Math.max(2, 5, 10, -10, -7)); // 10
- Math.pow( , ): to the power ...
console.log(Math.pow(2, 4)); // 16
- Math.random(): get random number
console.log(Math.random()); // 0.5897391296844772
console.log(Math.round(Math.random() * 100)); // 38



String Methods
string methods: [index[], chartAt(), length, toUpperCase(), toLowerCase(), split(), slice(), subString(),
substr(), trim(), indexOf(), lastIndexOf(), includes(), startWith(), endWith()]
Ex:/
let theName = "  Ahmed  ";

// indexing[]: use to access sequins data by indexing 
console.log(theName[4]); // m
console.log(theName[11]); // undefined

//charAt(): use to access sequins data by character position 
console.log(theName.charAt(4)); // m
console.log(theName.charAt(11)); // empty " "

// length: use to counting sequins
console.log(theName.length); // 9

// trim(): use to take out spacing in left and right
console.log(theName.trim()); // Ahmed

// toUpperCase(): use to change all string to capital
console.log(theName.toUpperCase()); //   AHMED

// toLowerCase() : use to change all string to small
console.log(theName.toLowerCase()); //   ahmed

// Chain Method: use to make sequins methods
console.log(theName.trim().charAt(2).toUpperCase()); // M

Ex:/
let title = " elzero web school ";

// indexOf(string, startingIndex): use to search string index
console.log(title.indexOf("web")); // 8
console.log(title.indexOf("weq")); // -1

// lastIndexOf(string, startingIndex): use to search string index, but start searching from the last
console.log(title.lastIndexOf("o")); // 16
console.log(title.lastIndexOf("u")); // -1

// repeat()
console.log(title.repeat(2)); // elzero web school  elzero web school

// split(): use to cutting string to pice's
console.log(title.split()); // [' elzero web school ']
console.log(title.split("")); // [' ', 'e', 'l', 'z', 'e', 'r', 'o', ' ', 'w', 'e', 'b', ' ', 's', 'c', 'h', 'o', 'o', 'l', ' ']
console.log(title.split(" ")); // ['', 'elzero', 'web', 'school', '']

// slice(): take a pace of a string
console.log(title.slice(8, 11)); // web
console.log(title.slice(-4, -2)); // oo

// substring()
console.log(title.substring(1, 7)); // elzero
console.log(title.substring(7, 1)); // elzero
console.log(title.substring(-100, 7)); //  elzero

// substr()
console.log(title.substr(1, 6)); // elzero
console.log(title.substr(15, 2)); // oo

// includes()
console.log(title.includes("oo")); // true
console.log(title.includes("oo", 16)); // false

// startsWith(): search in the start of the length for string
console.log(title.startsWith("oo")); // false
console.log(title.startsWith("oo", 15)); // true

// endsWith(): search in the last of the length for string
console.log(title.endsWith("oo")); // false
console.log(title.endsWith("oo", 17)); // true




*/

/*  Conditions And Switch

comparison operators: المقارنه
==   compare the value only
!=   compare the value only
===  compare the value and data type
!==  compare the value and data type
>
>=
<
<=



logical operators:
!  not
&& and
|| or

Ex:/
console.log(!(10 < 20)); // false
console.log(!true); // false
console.log(!(10 === "10")); // true
console.log(100 <= "100" && 20 > 1 && !false); // true
console.log(100 <= "100" || 20 < 1 || !false); // true



if condition:
let price = 100;
let discount = true;
let discountAmount = 30;
let country = "sudan";
if (country === "ksa" || country === "sudan" || country === "egypt") {
  country = true;
} else {
  country = false;
}
console.log(country, discount);
if (discount === true && country === true) {
  price = price - discountAmount - 20;
  console.log("hello");
} else if (discount === true || country === true) {
  price -= discountAmount;
  console.log("hi");
} else {
  price -= 10;
  console.log("olla");
}
console.log(price);



Nesting Condition:
Ex:/
let price = 100;
let discount = false;
let discountAmount = 30;
let country = "usa";
let student = false;
if (discount === true) {
  price -= 10;
  if (country === "ksa" || country === "sudan" || country === "egypt") {
    price -= discountAmount;
    if (student === true) {
      price -= 20;
    }
  }
}
console.log(price);



Ex:/
var x = 4,
y = "ten";
if (x % 2 === 0 && y % 2 === 0){
  console.log("even");
} else if (x % 2 === 1 || y % 2 === 1){
  console.log("odd");
} else {
  console.log("error");
}



ternary condition: الشرط المختصر
Ex:/
let theName = "Mona";
let theGender = "Female";
let theAge = 45;

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);
let ageResult =
  theAge < 18 ? "Child" : theAge >= 18 && theAge <= 45 ? "Young" : "Old";
console.log(ageResult);



default value:
- logic or || : if the value equal null, undefined, false value
Ex:/
let price = 10;
console.log(`price is ${price || "$$"}`);
price = null;
console.log(`price is ${price || "$$"}`);
price = undefined;
console.log(`price is ${price || "$$"}`);
price = 0;
console.log(`price is ${price || "$$"}`);
- nullish coalescing ?? : if the value equal null or undefined
Ex:/
let price = 10;
console.log(`price is ${price ?? "$$"}`);
price = null;
console.log(`price is ${price ?? "$$"}`);
price = undefined;
console.log(`price is ${price ?? "$$"}`);
price = 0;
console.log(`price is ${price ?? "$$"}`);


switch condition:
!!must write break after any case to break the condition!!
Ex:/
let day = "3";
switch (day) {
  case 0:
    console.log("sunday");
    break;
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("thursday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("tuesday");
    break;
  case 5:
    console.log("friday");
    break;
  default:
    console.log("Unknown");
}
Ex:/
let job = "manager";
let salary = 0;
switch (job){
  case (job = "manager"):
    salary = 8000;
    break;
  case (job = "it"):
  case (job = "support"):
    salary = 6000;
    break;
  case (job = "developer"):
  case (job = "designer"):
    salary = 7000;
    break;
  default :
    salary = 4000;
};
console.log(salary);

*/

/*  Array

Access In Array Data:
Ex:/
let myFriends = ["Abdo", "Ahmed", "Ali", ["Osama", "Sayed", ["Mohammed", "Elfatih"]], "Marwan"];
console.log(myFriends);
console.log(myFriends[3][1]);

Change Data In Array:
Ex:/
myFriends[3][1] = "Mustafa";
console.log(myFriends);
// myFriends[myFriends.length] = "Noor";
console.log(myFriends);
myFriends[myFriends.length - 1] = "Rashed";
console.log(myFriends);



Array.isArray() Method: use to show if it array or not
Ex:/
let myFriends = ["Abdo", "Ahmed", "Ali", ["Osama", "Sayed", ["Mohammed", "Elfatih"]], "Marwan"];
console.log(Array.isArray(myFriends)); // true



Length With Array:
let myFriends = ["Abdo", "Ahmed", "Ali", ["Osama", "Sayed", ["Mohammed", "Elfatih"]], "Marwan"];
console.log(myFriends.length); // 5
myFriends[myFriends.length] = "memo";
console.log(myFriends.length); // 6
console.log(myFriends); 
myFriends[myFriends.length - 1] = "nano"; 
console.log(myFriends); 



array:  [pop(), push(), shift(), unshift(), length, sort(), revers(), indexOf(), lastIndexOf(),
include(), slice(), splice(), join(),  concat()]


ADD Element In Array:
- unshift(): يضف عنصر في اول المصفوفة و يعطيك عدد العناصر داخل المصفوفه بعد الاضافه
Ex:/
var array = ["mohammed", "elfatih", "ahmed"],
    newArray = array.unshift("hamed");
console.log(array); // ['hamed', 'mohammed', 'elfatih', 'ahmed']
console.log(newArray); // 4
- push("add element"): يضف عنصر في اخر المصفوفة و يعطيك عدد العناصر داخل المصفوفه بعد الاضافه
Ex:/
var array = ["mohammed", "elfatih", "ahmed"],
    newArray = array.push("hamed");
console.log(array); // ['mohammed', 'elfatih', 'ahmed', 'hamed']
console.log(newArray); // 4

Remove Element In Array:
- shift(): اخذ اول عنصر داخل المصفوفه و تخزن كقيمه
Ex:/
var array = ["mohammed", "elfatih", "ahmed"],
    newArray = array.shift();
console.log(array); // ['elfatih', 'ahmed']
console.log(newArray); // mohammed
- pop(): تاخذ اخر عنصر داخل المصفوفه و تخزن كقيمه
Ex:/
var array = ["mohammed", "elfatih", "ahmed"],
    newArray = array.pop();
console.log(array); // ['mohammed', 'elfatih']
console.log(newArray); // ahmed



Search In Array:
- indexOf(): search for the element from the beginning of the array
- lastIndexOf(): search for the element from the last of the array
- includes(): search for the element in the array and return true or false
* Note *
- if the element that is not found return -1 (indexOf, lastIndexOf, includes)
Ex:/
let numbers = [3, 101, 102, 10, 202, "201", "1000", 102, 300, 3];
console.log(numbers.indexOf(3)); // 0
console.log(numbers.indexOf(3, 3)); // 9 
console.log(numbers.lastIndexOf(3)); // 9
console.log(numbers.lastIndexOf(3, -3)); // 0
console.log(numbers.includes(201, 2)); // false



Sorting Array Elements:( ترتيب عناصر المصفوفة )
- sort(): use to order elements alphabetic
- revers(): use to revers elements order
Ex:/
let myArray = [4, mohammed, ali, 50, -3, -100, 200, -200, 11, 12, omar, 90, 900, 1000]
console.log(myArray);
console.log(myArray.reverse());
console.log(myArray.sort());



Array Cutting:
- slice (): اختيار عناصر محدده داخل المصفوفه
Slice(start opt, end opt)
create a new array without changing in the main array
- splice(): اضافة عناصر جديده و حزف عناصر و تغير قيمة المصفوفه الاصليه
Splice(start !opt, how many element to remove !opt, adding elements)
splice will change in the main array
Ex:/
var array = ['mohammed', 'elfatih', 'ahmed', 'ali', 'malik'];
var newArray1 = array.slice(1,3);
console.log(newArray1); // ['elfatih', 'ahmed']
console.log(array); // ['mohammed', 'elfatih', 'ahmed', 'ali', 'malik']
var newArray2 =array.splice(2, 2, "noor", "rashed");
console.log(newArray2); //  ['ahmed', 'ali']
console.log(array); //  ['mohammed', 'elfatih', 'noor', 'rashed', 'malik']



Concatenate And Joining Array: 
- concat():  يدمج مصفوفتان مع بعضهم البعض او اكثر
- join("الفاصل بين عناصر المصفوفة"): تحول المصفوفة الي نص و تكتب كيفيت الفصل بين العناصر
Ex:/
let townFriend = ["omar", "ali", "noor"];
let schoolFriend = ["mohamed", "anwar", "nona"];
let companyFriend = ["ahmed", "elfatih"];
let allFriends = townFriend.concat(
  schoolFriend,
  companyFriend,
  0,
  [1, 2, 3, 4]
);
console.log(allFriends);
console.log(allFriends.join(" | "));


Other Array Method:[from(), copyWithin(), some(), every()]

- Array.from(): method to get arr from iterable
Array.from(variable, Map function, this);
!!this reference to the array!!
Ex:/
let item1 = "osman";
let item2 = "12123455";
let arr1 = Array.from(item1);
console.log(arr1);
let arr2 = Array.from(item2, el => +el + +el, this);
console.log(arr2);
Ex:/
let myArray = [1,1,2,2,3,3,4,4];
let mySet = new Set(myArray);
mySet = Array.from(mySet);
console.log(mySet);
// console.log([...new Set(myArray)]) // advanced

- copyWithin(): copy elements in array and past them in same array without change length of the arr
!!copyWithin() make the change in same array!!
copyWithin(target index, start index of the copy(option), end index of the copy(option))
let myArray = [10, 20, 30, 40, 50, "A", "B"];
myArray.copyWithin(3) // [10, 20, 30, 10, 20, 30, 40]
// myArray.copyWithin(4,-1) // [10, 20, 30, 40, 'B', 'A', 'B']
// console.log(arr.copyWithin(-6, -2)); // [10, 'A', 'B', 40, 50, 'A', 'B']
// console.log(arr.copyWithin(-6, -2, -1)); // [10, 'A', 30, 40, 50, 'A', 'B']
console.log(myArray);

- some(): method use to check the elements of the array and return true or false
!!if there only one element pass the condition then it true!!
Ex:/
let lopping = 0;
let arr = [1,2,3,4,5,6,7,8,9,10,20,30];
let num = 10;
let checking = arr.some(function (el){
  lopping += 1;
  return el > this;
}, num);
console.log(lopping);
console.log(checking);
Ex:/
let myArray = [1,2,3,4,5,6,7,8,9];
let number = 4;
function checkFun(arr, value) {
  return arr.some(function(el){
    return el === value;
  });
}; console.log(checkFun(myArray, number));
Ex:/
let myArray = [1,2,3,4,5,6,7,8,9];
let range = {
  min: 5,
  max: 15,
};
 let numInRange = myArray.some(function (el){
  console.log("done");
  return el >= this.min && el <= this.max;
}, range);
 console.log(numInRange);

- every():  method use to check the elements of the array and return true or false
!!if there only one element does not pass the condition then it false!!
Ex:/
 let loc = {
   20: "place1",
   30: "place2",
   10: "place3",
   40: "place4",
 };
 let mainLocation = 15;
 let keysArray = Object.keys(loc);
 console.log(keysArray);
 let newArray = keysArray.map(el => +el)
 console.log(newArray);
 let check = newArray.every(function(el){
   return el >= this;
 }, mainLocation);
 console.log(check);
*/

/*  Loop
Ex:/
let array = [1, 2, "Ali", "Omar", 3, "Ahmed", "Mohamed", 4];
let newArray = [];
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "string") {
    newArray.push(array[i]);
  }
}
console.log(newArray.sort());



Nested Loop:
Ex:/
let products = ["Keyboard", "Phone", "Ipad", "Mouse"];
let colors = ["Green", "Black", "white"];
let models = [2022, 2025];

for (let i = 0; i < products.length; i++) {
  console.log(`# ${products[i]}:`);
  console.log(" Colors:");
  for (let c = 0; c < colors.length; c++) {
    console.log(`- ${colors[c]}`);
  }
  console.log(" Models:");
  for (let m = 0; m < models.length; m++) {
    console.log(`-- ${models[m]}`);
  }
  console.log("*".repeat(15));
}




Loop Control: Break, Continue & Label

- Break: use to stop the loop if the condition done
Ex:/
let products = ["Keyboard", "Phone", "Ipad", "Mouse"];
for (let i = 0; i < products.length; i++) {
  if (products[i] === "Ipad") {
    break;
  }
  console.log(products[i]); // Keyboard, Phone
}

- Continue: use to continue the loop and forget the condition result
Ex:/
let products = ["Keyboard", 1, 2, "Phone", "Ipad", 3, "Mouse"];
for (let i = 0; i < products.length; i++) {
  if (typeof products[i] === "number") {
    continue;
  }
  console.log(products[i]); // Keyboard, Phone, Ipad, Mouse
}

- Label: use to stop parent loop using child loop
Ex:/
let products = ["Keyboard", "Phone", "Ipad", "Mouse"];
let colors = ["Green", "Black", "white"];
parentLoop: for (let i = 0; i < products.length; i++) {
  console.log(`# ${products[i]}:`);
  console.log(" Colors:");
  childLoop: for (let c = 0; c < colors.length; c++) {
    if (colors[c] === "Black") {
      break parentLoop;
    }
    console.log(`- ${colors[c]}`);
  }
  console.log("*".repeat(15));
}



Short Syntax:
Ex:/
let products = ["Keyboard", "Phone", "Ipad", "Mouse"];
let i = 0;
for (;;) {
  if (i == products.length) break;
  console.log(products[i]);
  i++;
}



While & Do While Looping
- While:
Ex:/
let products = ["Keyboard", "Phone", "Ipad", "Mouse"];
let index = 0;
while (index < products.length) {
  console.log(`[${index + 1}] ${products[index]}`);
  index += 1;
}

- Do While:
Ex:/
let products = ["Keyboard", "Phone", "Ipad", "Mouse"];
do {
  console.log(products[index]);
  index++;
} while (index < products.length);
 
*/

/*





spread operator ... : use to spread elements in arrays or objects
-  use with string
Ex:/
console.log("mohammed");
console.log(..."mohammed");
console.log([..."mohammed"]);
- use with concatenate array and object
Ex:/
let arr1 = [1,2,3],
arr2 = [4,5,6],
newArray = [...arr1, ...arr2, 7, 8];
console.log(newArray);
let obj1 = {
  a:1,
  b:2,
};
let obj2 = {
  c:3,
  d:4,
};
let newObj = {...obj1, ...obj2, d:5};
console.log(newObj);
- use to copy array and object
Ex:/
let arr = [1,3,4];
let newArray = [...arr];
console.log(newArray);
let obj = {
  a:1,
  b:2,
  c:3,
};
let newObject = {...obj};
console.log(newObject);
- use to push inside array
Ex:/
let arr = [1,2,3],
newArray = [];
newArray.push(...arr);
console.log(newArray);
- use with Math() method
let arr = [1,2,3,4,3,2,1];
console.log(Math.max(...arr));

*/

/*  string

character escape sequences:
back slash(\): use to egnor character and line
Ex:/
console.log("mohammed \"elfatih\"");
console.log("mohammed\
\"elfatih\"");
back slash new line(\n):
console.log("mohammed\n\"elfatih\"");


concatenation الدمج: use to concat between data
Ex:/
let a = "mohammed";
let b = "elfatih";
console.log(a + " " + b);

template literals(template string (``)): new ES6 feature use to concatenate data
Ex:/
let theName = "mohammed";
let age = 22;
let markUp = `
<div>
  <div class="child">
    <h3>${theName}</h3>
    \\
    <p>${age}</p>
  </div>
</div>
`;
document.body.innerHTML = markUp;
console.log(markUp);
Ex:/
let theTittle = "Elzero",
theDesc = "Web School",
theDate = "24/6";
let div = `
  <div>
    <h3>${theTittle}</h3>
    <p>${theDesc}</p>
    <span>${theDate}</span>
  </div>
`;
document.body.innerHTML = div.repeat(4);

string methods: [index[], chartAt(), length, toUpperCase(), toLowerCase(), split(), slice(), subString(),
substr(), trim(), indexOf(), lastIndexOf(), includes(), startWith(), endWith()]
- index[] & charAt(): get character in the string.
Ex:/
let theName = "ali";
console.log(theName.charAt(2));  // i
console.log(theName[2]); // i
!!if the index not found output: undefine!!
!!if the charAt not found output: " "!!
- length:
- toUpperCase() & toLowerCase(): change the characters capital or small
Ex:/
let theName = "ali";
console.log(theName.toUpperCase());  // ALI
console.log(theName.toLowerCase());  // ali
- split: تختار من اين يقطع النص مثال المسافات او حرف معين او رمز معين و يكون الناتج مصفوفه تستعمل عادتا لاخز  جزْء من رابط معين
Ex:/
var theUrl = "www.google.com/hadhcgkjacgafcjac/id=20";
var items = theUrl.split("/");
var target = items[2];
console.log(target);
- slice: اخز جزء من النص و يكون الناتج نص و يكون طريقة اختيار النص عن طريقة كتابت خانت البداية و النهايه
Ex:/
var theUrl = "www.google.com",
    item = theUrl.slice(4, 10);// target index 9 + 1n
console.log(item);
- substring(): work like slice method with some difference
Ex:/
let theName = "mohammed elfatih";
console.log(theName.substring(0, 4)); // moha
console.log(theName.substring(4, 0)); // moha
console.log(theName.substring(-8, 4)); // moha
!!if the number negative will start from 0!!
- substr(): choose the characters that will take
!!count with characters not indexing!!
Ex:/
let theName = "mohammed elfatih";
console.log(theName.substr(0, 4)); // moha
console.log(theName.substr(9, 2)); // el
console.log(theName.substr(-7)); // elfatih
- trim: اخذ المسافات في البدايه و النهايه
Ex:/
var theUrl = "    mom   dad      ",
item = theUrl.trim();
console.log(theUrl);//    mom   dad
console.log(item);//mom   dad
- indexOf: يبحث عن النص الذي ادخلته اذا كان موجود يعطيك الخانه اذا كانت غير موجوده يعطيك ناتج -1
Ex:/.
var theUrl = "    mom   dad      ",
item = theUrl.indexOf("md");// target index 9 + 1
console.log(item);//-1
- lastIndexOf(): start from the end
Ex:/
console.log(theName.lastIndexOf("m")); // 5
- includes(): return true or false after searching
!!count with characters not indexing!!
Ex:/
let theName = "mohammed elfatih";
console.log(theName.includes("mm")); // true
console.log(theName.includes("mm", 4)); // true
console.log(theName.includes("mm", 6)); // false
- startWith(): return true or false after searching in the beginning
!!count with characters not indexing!!
let theName = "mohammed elfatih";
console.log(theName.startsWith("mm")); // false
console.log(theName.startsWith("mm", 6)); // false
console.log(theName.startsWith("mm", 4)); // true
- endWith(): return true or false after searching in the last
!!count with characters not indexing!!
let theName = "mohammed elfatih";
console.log(theName.endsWith("ed")); // false
console.log(theName.endsWith("ed", 8)); // true

*/

/*  function

Function: use to (D'not Repeat Yourself)
the function have two input : parameters => the variables , and the value of parameters call arguments



Anonymous Function: function without name
Ex:/
function (){
  console.log("anonymous function");
}();



Definition Function: function with a name
Ex:/
function log(){
  console.log("definition function");
}log();



Return Function: return the value to the trigger calling function
Ex:/
function add1(){
  let x = 0;
  return x + 2;
}add1();
console.log(add1()); // add1() = 2
function add2(){
  return add1() + 2;
}add2();
console.log(add2()); // add2() = 4
function add3(){
  return add2() + 2;
}add3();
console.log(add3()); // add3() = 6



Interrupting: use return to stop the function
Ex:/
function generate(start, end){
  for (let i = start; i <= end; i++){
    console.log(i);
    if (i === 15){
      return "Interrupting";
    };
  };
};
generate(10, 20);



Default Value Of Parameters: default value to the param if there was no value
Ex:/
function param(a = 5, b = "mohammed"){
  console.log(a, b);
}
param(1);



Rest Parameter: one parameter for unknown arguments
* Note *
... make the parameter array
rest parameter must be the last in params
Ex:/
function calc(...myNumbers) {
  let result = 0;
  for (let i = 0; i < myNumbers.length; i++) {
    result += myNumbers[i];
  }
  return `The result is ${result}`;
}
console.log(calc(10, 20, 30, 40, 50, 50));



Variable Equal Function: save the function in variable with or without function name
* Note*
- expression function with function name is best practice , because it help in debugging
Ex:/
var func = function (){
  console.log("expression function");
}
func();



Nested Function:
Ex:/
let theMassage = function (firstName, lastName){
  let massage = `hello`;
  function massageConcat(){
    function fullName(){
      return `${firstName} ${lastName}`;
    };
    return `${massage} ${fullName()}`;
  };
  return `${massageConcat()}`;
};
console.log(theMassage("mohammed", "ali"));



Arrow Function:
Ex:/
let theElement = element => console.log(element);
theElement("moha");
Ex:/
let subAndMay = (num1 , num2) => {
  console.log(num1 + num2);
  console.log(num1 - num2);
  return (num).toString
};
subAndMay(10, -5);



self invoke function(IIFE): put the function between practices
Ex:/
(function func(){
  console.log("self invoke function")
})();

?? Execution Context ??
?? Lexical Environment ??


Ex:/
let numAdder = 0;

function theAdderFunc(){
  numAdder += 1;
  return numAdder;
}
function theNumResult( theNum = theAdderFunc()){
  console.log(theNum);
}
theNumResult();
theNumResult(5);
theNumResult();
theNumResult();


return the arguments:
Ex:/
function arg(){
  return console.log(Array.from(arguments).join(" | ")); // ali | ahmed | omar | salah
};
arg("ali", "ahmed", "omar", "salah");



Higher Order Function:
-map(): method used to create new array from elements of the array without changing it
array.map(function (ele, index, array{Block Of Code},this);
Ex:/
let array = [1, 4, 9, 16];
let newArray = array.map(function(ele){
  return Math.sqrt(ele);
});
console.log(newArray);
Ex:/
let array = [
  {key: 1, value: 10,},
  {key: 2, value: 20,},
  {key: 3, value: 30,}
];
let newArray = array.map(function(ele){
  newObj = {};
  newObj[ele.key] = ele.value
  return newObj;
});
console.log(newArray);

- filter():method create new array that pass the condition without changing the array
array.filter(function(ele, index, array){},this)
Ex:/
let array = [1, 2, 3, 4, 5, 6, 7];
let newArray = array.filter( function(ele){
  return ele % 2 == 0;
});
console.log(newArray);
or
let newArray = array.filter( ele => ele % 2 == 0);
console.log(newArray);
Ex:/
let theNames = ["mohammed", "elfatih", "ahmed", "hamed", "ibrahim"];
function filterFun(query){
  return theNames.filter(function(ele){
    return ele.toLowerCase().indexOf(query) !== -1;
  });
};
console.log(filterFun("me")); // ['mohammed', 'ahmed', 'hamed']
console.log(filterFun("mm")); // ['mohammed']
console.log(filterFun("i")); // ['elfatih', 'ibrahim']



- forEach(): method using function loop once for each element of the array in order
array.forEach(function(ele, index, array){ console.log(); }, this);
Ex:/
var array = ["a", "b", "c", "d"];
array.forEach(function(ele, index, array){
  console.log(ele.toUpperCase() + ele, index, array);
},this);



- reduce():method use to get one value result
array.filter(function(accumulator, ele, index, array){},initialValue)
Ex:/
 let arr = [[1,2], [3,4], [5,6]];
 let newArr = arr.reduce(function(accumulator, e){
  return accumulator.concat(e);
 }, [])
 console.log(newArr)




 function dad(money){
  let carry;
  carry = money / 4;
  money = carry / 6;
  carry *= 3;
  money *= 3;
  carry += money;
  console.log(carry);
}
dad(250000000);




Call Stack: use in calling function (last in first out)system
Ex:/
function name1(){
  console.log("Mohammed");
};
function name2(){
  name1();
  console.log("Elfatih");
};
function name3(){
  name2();
  console.log("Ahmed");
};
function name4(){
  name3();
  console.log("Hamed");
};
name4();





Callback Queue: is web api use to store operation(first in , first out)
Ex:/
stackFun();
console.log("one");
setTimeout(() => {
  console.log("four");
}, 0);
console.log("two");
setTimeout(() => {
  console.log("five");
}, 0);
console.log("three");
function stackFun(){
  return setTimeout(() => {
    console.log("three.five");
  }, 0);
};

*/

/*  object
object contain property(information) and method(functions)
Ex:/
let user = {
  // Property
  theName: "Mohamed",
  theAge: 30,
  // Method
  info: function () {
    return `Hello ${user.theName}, your age is ${user.theAge}`;
  },
};
console.log(user.theName);
console.log(user.theAge);
console.log(user.info());



Dot Notation & Bracket Notation
dot notation access only to the direct property name
bracket notation can access to variables and string property name
Ex:/
let outProperty = "the-country";
let user = {
  theName: "Mohamed",
  "the-country": "Egypt",
};
console.log(user.theName); // Mohamed
console.log(user["the-country"]); // Egypt
console.log(user[outProperty]); // Egypt
console.log(user.outProperty); // undefined




Nested Object:
Ex:/
let available = "is-available";
let user = {
  theName: "Mohamed",
  theAge: 30,
  addresses: {
    ksa: {
      addressOne: "Riyadh",
      addressTwo: "Judah",
    },
    sudan: "Khartoum",
  },
  skills: ["HTML", "CSS", "Js"],
  "is-available": false,
  check: function () {
    if (user[available] === true) {
      return `free to work`;
    } else {
      return `not free to work`;
    }
  },
};
console.log(user.check()); // not free to work



Create Object With New Keyword & This Keyword
Ex:/
let myObject = new Object({
  theName: "mohamed",
  theAge: 33,
  show: function () {
    return `${this.theAge * 365} Days`;
  },
});
myObject.skills = ["HTMl", "CSS", "JS"];
myObject.theAge = 30;
console.log(myObject);
console.log(myObject.show());



Create Object With Create Method(Prototype النموزج)
Ex:/
let myObject = new Object({
  theName: "mohamed",
  theAge: 33,
  show: function () {
    return `${this.theAge * 365} Days`;
  },
});
myObject.skills = ["HTMl", "CSS", "JS"];
myObject.theAge = 30;
console.log(myObject);
console.log(myObject.show()); // 10950 Days
let copyObj = Object.create(myObject);
console.log(copyObj); // {}
copyObj.theAge = 20;
console.log(copyObj.show()); // 7300 Days




Create Object With Assign Method
method use to copy properties and methods form objects to a another object
let obj1 = {
  prop1: 1,
  show: function () {
    return `prop1:${this.prop1}`;
  },
};
let obj10 = {
  prop1: 10,
  prop2: 20,
  show: function () {
    return `prop1:${this.prop1}  prop2:${this.prop2}`;
  },
};
let assignObj = Object.assign({}, obj1, obj10, { prop3: 3, prop4: 4 });
console.log(assignObj);
console.log(assignObj.show());

object: three ways to create object
- object literals
Ex:/
var user1 = {
  name: "Mohammed",
  tell: 0922591418,
  address: {
    country: "sudan",
    city: "khartoum",
  },
};
console.log(user1.name); // Mohammed
console.log(user1["tell"]); // 922591418
console.log(user1["address"]["country"]); // sudan

- new object
Ex:/
var user2 = new Object();
user2.name = "Ali";
user2.tell = 09347878568;
user2.address = new Object;
user2.address.country = "KSA";
user2.address.city = "jadah";
console.log(user2.name);
console.log(user2["tell"]);
console.log(user2["address"]["city"]);

- create object
EX:/
var user3 = Object.create(user1, {
  name:{
    value: "sara"
  },
  tell: {
    value: 093425462453
  },
  address: {
    value: {
      country: {
        value: "UAE"
      },
      city: {
        value: "dubai"
      },
    },
  },
});
console.log(user3.name);
console.log(user3["tell"]);
console.log(user3["address"]["city"]);


!! create method can take other object properties and methods!!
Ex:/
let theObject = {
  theAge: 20,
  theAgeWithDays: function (){
    return this.theAge * 365;
  },
};
console.log(theObject.theAgeWithDays()); // 7300
let copyObject = Object.create(theObject);
console.log(copyObject); {}
copyObject.theAge = 40;
console.log(copyObject.theAgeWithDays()); // 14600


*/

/*  objects data type methods
***********************************************************************
syntax: ([
  [key, value],
  [key, value],
  [key, value],
]);
or
([
  [{key: "value"}, {key: "value"}, {key: "value"}],
  [{key: "value"}, {key: "value"}, {key: "value"},]
]);


set data type
new Set(): it is object data type, use as array
!!store only unique values!!
!!cannot access elements by index[]!!
!!set data use like filter method!!
- size: property use to count unique value.
- add():
- delete():
- clear():
- has():
Ex:/
let arr = [1,2,33,33,3];
let unique = new Set(arr);
unique.add("a").add("b").add("b").add("a").add("b").add("a").add("c").add("c").add("d").add("c");
console.log(unique.size);
console.log(unique.delete("c"));
console.log(unique.has("D".toLowerCase()));
console.log(unique.size);
unique.clear();
console.log(unique.size);
console.log(unique);
- !!can store any data type inside of the array, (storage array, string)!!
EX:/
let arr = [1,1,2,3,4,5,5];
let str = "1123455";
let newArr = new Set(arr);
console.log(newArr);
let newStr = new Set(str);
console.log(newStr);
- !!have keys, value and entries!!
EX:/
let arr = [1,1,2,3,"A","A","B"];
let newArr = new Set(arr);
console.log(newArr);
let iterator = newArr.values() // .keys()
console.log(iterator);
console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // A
console.log(iterator.next().value); // B
console.log(iterator.next().done); // true
- !!can use forEach!!
EX:/
let mySet = new Set()
mySet.add(1).add(2).add(2).add(2).add(3)
console.log(mySet);
mySet.forEach(el => {
  console.log(el + el);
});
Ex:/
let items = [1,1,2,2,3,3,4,4];
let uniqueItems1 = new Set(items);
let uniqueItems2 = new Set(["A","A","B","C","D","D","E","F"]);
console.log(uniqueItems1);
console.log(uniqueItems1.size);
console.log(uniqueItems1.add(5).add(6).add(7));
console.log(uniqueItems1.size);
console.log(uniqueItems1.delete(1));
uniqueItems1.delete(2);
console.log(uniqueItems1.size);
console.log(`does have 1 : ${uniqueItems1.has(1)}`);
console.log(`does have 4 : ${uniqueItems1.has(4)}`);
console.log(uniqueItems1.size);
uniqueItems1.clear();
console.log(uniqueItems1.size);
console.log(uniqueItems1);
console.log("*".repeat(25))
console.log(uniqueItems2);
console.log(uniqueItems2.size);
console.log(uniqueItems1.add("G").add("H").add("I"));
console.log(uniqueItems2.size);
uniqueItems2.delete("A");
console.log(uniqueItems2.delete("a"));
console.log(uniqueItems2.size);
console.log(`does have "C" : ${uniqueItems2.has("C")}`);
console.log(`does have "A" : ${uniqueItems2.has("A")}`);
console.log(uniqueItems2.size);
uniqueItems2.clear();
console.log(uniqueItems2.size);
console.log(uniqueItems2);



WeakSet(garbage collector): store objects that become anuses(garbage collection) to remove them from memory
- can store only object data type inside of the array
- does not have size property
- does not have clear() , keys(), ... ect methods
- can't use foreach() method
Ex:/
let elem2 = [{a:1,b:2}, {a:3,b:4}, {a:5,b:6}];
let uniqueElem2 = new WeakSet(elem2);
console.log(uniqueElem2);


Map data type: object use like object with some different's
Map():[size, delete(), clear(), has()]
- !!map does not contain default key but, object have!!
- !!map put the data in order but, object not 100%!!
- !!map can get items by size() but, object only manually!!
- !!map can loop in keys directly but, object can't only manually!!
- !!map better performance than object in add and remove data!!
- !!map keys can be [object, function or any data type] but, object can be symbol!!
- size: property use to count unique value.
- delete():
- clear():
- has():
Ex:/
let obj = {}, // have prototype
emptyObj = Object.create(null), // have no prototype
mapObj = new Map(); // have no prototype
console.log(obj);
console.log(emptyObj);
console.log(mapObj);
Ex:/
let obj = {
  1: "number",
  "1": "string",
};
let newMapObj = new Map();
newMapObj.set(1,"number");
newMapObj.set("1","string");
console.log(newMapObj.get(1));
console.log(obj[1]);
newMapObj.set(true,"boolean");
newMapObj.set({c:1, d:2,},"object");
newMapObj.set(n => n = 1  + 1,"function");
console.log(newMapObj);
Ex:/
let myMap = new Map([
  ["name", "string"],
  ["phone", "number"],
  [false, "boolean"],
]);
myMap.set("address","Arkweet");
myMap.set("email", "melfatih841@gmail.com");
myMap.set("hallo",function hallo(){console.log("hallo");});
console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("hallo"));
console.log(myMap.size);
console.log(myMap.delete("hallo"));
console.log(myMap.size);
myMap.clear();
console.log(myMap);
console.log(myMap.size);
Ex:/
let obj = {
  1: "one",
  2: "two",
};                              // Error: can not contain object in Map data type
let newObj = new Map(obj);
console.log(newObj);


WeakMap: store object only and remove them once they become anuses to (garbage collection)
Ex:/
// Map
let myObj = {
  theName: "Mohammed",
  theNumber: 0922591418,
  theAddress: "Arkweet",
};
let myMap = new Map();
myMap.set(myObj, "object value");
console.log(myObj);
console.log(myMap);
myObj = null;
console.log("##".repeat(18));
let myObj2 = {
  theName: "Mohammed",
  theNumber: 0922591418,
  theAddress: "Arkweet",
};
//  WeakMap
let myWeakMap = new WeakMap();
myWeakMap.set(myObj2, "object value");
console.log(myObj2);
console.log(myWeakMap);
myObj2 = null;
Ex:/
let obj = {
  1: "one",
  2: "two",
}
console.log(obj);
let newObj = new WeakMap();
newObj.set(obj, "ojectValue")
obj = null;
console.log(newObj);
console.log(obj);
console.log(newObj);
*/

/*  this

this: is a object return to parent object
- this inside global scope: this return to window
Ex:/
this.x = 2;
window.x = 2;
console.log(this.x); // same output: 2
console.log(window.x); // same output: 2
!!in destination function this return to window object!!
Ex:/
function test(){
  return this;
}
console.log(test());


- this inside local scope:
this inside the function and the function inside the object , then this return to the object
Ex:/
let theName = {

  firstName: "Mohammed",
  secondName: "Elfahtih",
  fullName: function (){

    return this.firstName + " " + this.secondName
  },

};
console.log(theName);
console.log(theName.fullName());


this inside event, then this return to the element of the event
Ex:/
let div = document.querySelectorAll("div");
for (let i = 0; i < div.length; i++){

  div[i].addEventListener("click", function(){

    this.style.display = "none";
    console.log(this);

  });

};


- call & apply: use the called function in different places
Ex:/
var a = "ali";

var obj = {
  a: "omer",
  b: "ahmed",
};

function This(){
  return this.a;
}

console.log(This());
console.log(This.call(obj)); // use function This()  in  obj object
console.log(This.apply(obj)); // use function This()  in  obj object


Ex:/
let obj1 = {
  firstName: "Mohammed",
  lastName: "Elfatih",
}

let obj2 = {
  fullName: function concat(){
    return this.firstName + " " + this.lastName;
  }
}
console.log(obj2.fullName.call(obj1));

!!this inside this function inside objet , then this return to window , solve it with new variable!!
Ex:/
let youtube = {

  channelName: "Elzero",
  content: ["HTML", "CSS", "JS"],
  returnChannelName(){

    console.log(this.content);

  },
  returnContent(){

    let that = this;
    that.content.forEach(function(ele){

      console.log(that);

    });

  },

};
console.log(youtube.returnContent());


?? this with strict mode ??
*/

/*  dom

DOM: an object that control the HTML page


Get Selector: [getElementById(), getElementByTagName(), getElementByClassName(),
querySelector(), querySelectorAll()]
- getElementById : Find Element By ID
Ex:/
let myIdElement = document.getElementById("my-div");
- getElementsByTagName: Find Element By Tag Name
Ex:/
let myTagElements = document.getElementsByTagName("p");
- getElementsByClassName: Find Element By Class Name
EX:/
let myClassElement = document.getElementsByClassName("my-span"); => Find Element By Class Name
- querySelector: Find Element By CSS Selectors
Ex:/
let myQueryElement = document.querySelector(".my-span");
- querySelectorAll: Find All Elements By Selector
Ex:/
let myQueryAllElement = document.querySelectorAll(".my-span");
!!querySelector get the first selector of this name only!!
!!querySelectorAl get all of the selectors by this name!!


Direct Elements : [title, head, body, forms, links, URL, images]
- title
console.log(document.title);
- head
console.log(document.head);
- body
console.log(document.body);
- forms
console.log(document.forms[0].one.value);
- links
console.log(document.links[1].href);
- URL
console.log(document.URL);
- images
console.log(document.images[0]);


Get / Set Elements Content: [innerHTML, innerText, textContent]
- innerHTML: get and set html elements with the texts
myElement.innerHTML = "Text From <span>Main.js</span> File";
console.log(myElement.innerHTML);
- innerText: get and set text only
document.body.innerText = "<span>hallo</span>";
- textContent:
myElement.textContent = "Text From <span>Main.js</span> File";
!!textContent get and set text only !!
!!innerText can't get display none element text , but textContent can!!


Attribute: [getAttribute(), setAttribute(), attributes(), hasAttributes, hasAttribute(), removeAttribute(),
createAttribute(), setAttributeNode()]
- get & set: methods use to get the attribute of the element and can change the value
Ex:/
let element = document.querySelector("input");
console.log(element.getAttribute("value"));
console.log(element.setAttribute("value", "Hello"));
console.log(element.setAttribute("class"));
- attributes: show all the attributes of the element
- hasAttributes: check if the element have attributes
- hasAttribute: check if the element have main attribute
- removeAttribute: if the element have main attribute remove it
- createAttribute: create attribute in html page
Ex:/
let ch = document.querySelector(".father div");
if (ch.hasAttributes() === true){
  if(ch.getAttribute("class") === ""){
    ch.removeAttribute("class");
  } else {
    ch.setAttribute("class", "done");
  };
} else {
  console.log("no attribute");
};
Ex:/
let father = document.querySelector(".father");
let myAtt = document.createAttribute("id");
father.setAttributeNode(myAtt);
father.id = "fa"
console.log(father);


Create: [createElement(), createComment(), createTextNode()]
- createElement: create element in html page
Ex:/
let myElement = document.createElement("div");
- createComment: create comment in html page
Ex:/
let myComment = document.createComment("This Is Div");
- createTextNode: create text in html page
Ex:/
let myText = document.createTextNode("Product One");


Get Children's Of The Element: [children, childNodes, firstChild, lastChild, firstElementChild, lastElementChild]
- children: get only child's elements of parent element
console.log(myElement.children);
- childNodes: get all child's (element, comment, text, space, ...ect) of parent element
console.log(myElement.childNodes);
- firstChild: get first child of parent element (element, comment, text, space, ...ect)
console.log(myElement.firstChild);
- lastChild: get last child of parent element (element, comment, text, space, ...ect)
console.log(myElement.lastChild);
- firstElementChild: get first only element child of parent element
console.log(myElement.firstElementChild);
- lastElementChild: get last only element child of parent element
console.log(myElement.lastElementChild);


Dom events:
mouse events: [click, dblclick, mousedown, mouseup, mouseover, mouseenter, mousemove, mouseleave, mouseout]
- mousedown: count one time after start click
- mouseup: count one time after end click
- mouseenter: count one time when hover the element only
- mouseover: count one time when hover the element or the element child's
- mouseleave: count one time when leave or get out the element only
- mouseout: count one time when leave or get out the element or the element child's
- mousemove: counting when moving inside the element
keyboard events: [keypress, keydown, keyup]
- keypress: counting while the key pressing
- keydown: counting while the key pressing
- keyup: count one time after end the key pressing
Form Events: auto focus or blur when load the page or click
- click
- focus
- blur
- cut
- past
- input: cut & past
- submit
selection
- change
load event: when the page finish loading
window.onload = function (){
  window.alert("loaded");
}
- preventDefault(): method use to stop the normal behavior for the event
EX:/
document.links[0].onclick = function (event){
  event.preventDefault();
};
- Event Simulation: [click(), focus(), blur(), submit()]
Ex:/
let userName = document.querySelector('[name="username"]');
let userAge = document.querySelector('[name="age"]');
window.onload = function (){
  userName.focus();
};
userName.onblur = function (){
  userAge.focus();
};
userAge.onblur = function (){
  document.forms[0].submit()
};


Class List Object: [classList, classList.length, classList.contains(), classList.item(),
classList.add(), classList.remove(), classList.toggle()]
- classList: show all the classes of the element
console.log(element.classList);
- classList.contains: show if the element have main class name
console.log(element.classList.contains("osama"));
- classList.item(index): show the class name number[..] in the element
console.log(element.classList.item("3"));
- classList.add: add class in the element
element.onclick = function () {
  element.classList.add("show");
};
- classList.remove: remove class in the element
element.onclick = function () {
  element.classList.remove("show");
};
- classList.toggle: (not found the class name)add or (found the class name)remove the class in the element
element.onclick = function () {
  element.classList.toggle("show");
};


CSS Styling: [style.theProperty, style.cssText, style.removeProperty(), style.setProperty(), styleSheets[].rules[].style]
- style.theProperty:
document.body.style.background = "red"; // line style
- style.cssText:
document.body.style.cssText = ` background-color: red; font-size: 33px; `; // line style
- style.removeProperty():
document.body.style.removeProperty("color"); // line style
- style.setProperty():
document.body.style.setProperty("background", "red", "important"); // line style
- styleSheets[].rules[].style:
styleSheets[the number of the css file]
rules[the number of selector]
document.styleSheets[0].cssRules[0].style.setProperty("background", "red", "important"); // css sheet style
document.styleSheets[0].cssRules[0].style.removeProperty("border"); // css sheet style


Ordering Elements: [before(), after(), append(), prepend(), remove()]
- before: add [Element || String] before target element
div.before(p);
- after: add [Element || String] after target element
div.after(p);
- append: add [Element || String] at last inside target element
div.append(p);
- prepend: add [Element || String] at first inside target element
div.prepend(p);
- remove: remove element
p.remove();


Traversing(الانتقال): target the parent element or the brothers
- nextSibling: target next something after element
- previousSibling: target before something before element
- nextElementSibling: target next element after element
- previousElementSibling: target before element before element
- parentElement: target the parent element


Clone: [cloneNode()]
- cloneNode(Deep): take copy of element if
!!true will take copy the element with attributes , child's , text, comment ...ect  !!
!!default(false) will take copy of the element only with attributes!!
Ex:/
let myP = document.querySelector("p").cloneNode(true);
!!to change the clone element id use this method: myP.id = `${myP.id}-clone`;!!

- addEventListener: method for make events it need parameters event and function
!!can make more than one event for the same element!!
!!can make event for element that did not made yet!!
!!addEventListener() can take more than one event for same element!!
let p = document.querySelector("p");
p.onclick = function (){
  let newP = p.cloneNode(true);
  document.body.appendChild(newP);
  newP.classList = "clone";
};
document.addEventListener("click", function (e){
  if (e.target.className === "clone"){
    console.log("i am clone");
  };
});
*/

/*  bom

Browser Popup: [alert(), confirm(), prompt()]
- alert(): popup massage return undefined
Ex:/
let ale = alert("Hello from browser");
console.log(ale);
- confirm(): popup massage return true or false
Ex:/
let con = confirm("are you sure");
console.log(con);
- prompt(): popup massage return the text
let prom = prompt("write text");
console.log(prom);


BOM Timing : [setTimeout(), clearTimeout(), setInterval(), clearInterval(), holder variable]
- setTimeout(): make the function one time only after counting
 setTimeout(Function, Timeout, function arguments)
!!write function name without ()!!
Ex:/
let holder1 = setTimeout(function (){
  console.log("Hello From Browser");
}, 2000);
function hello(){
  console.log("Hello From Function");
};
let holder2 = setTimeout(hello, 3000);
function info(theName, theAge){
  console.log(`Hello ${theName}, Your Age Is ${theAge}`);
};
let holder3 = setTimeout(info, 4000, "Mohammed", 27);
let btn = document.querySelector("button");
btn.onclick = function (){
  clearTimeout(holder1);
  clearTimeout(holder2);
  clearTimeout(holder3);
};
- setInterval(): make looping on the function
setInterval(Function, seconds, Additional Params)
Ex:/
let para = document.querySelector("p");
function dec(){
  para.innerText -= 1;
  if (para.innerText === "0"){
    clearInterval(holder);
  };
};
let holder = setInterval(dec, 1000);


************************************************************
location: is a object that have methods that control the url
- href: new url, with saving last page in history
location.href("https://google.com/map");
- assign: new link with saving last page in history
location.assign("https://google.com/map");
- replace: new link without saving last page in history
location.replace("https://google.com/map");
- protocol: change to http or https
location.protocol("https");
- port:
location.port("");
- host: change main link with port or without port
location.hostname("google.com");
location.host("google.com");
- pathname: the link inside the link page
location.pathname("/map");
- hash: link with the id
location.hash("#secondPage");
*****************************


Page methods: [open(), close(), stop(), print(), focus()];
- open():open new link in new window
window.open([url]"https://google.com",[open in _self or _blank] "_blank",[property width, height,top...] "width=300,height=300,top=50,left=50");
- close():close only the window that opened with open() method
window.close();
- stop(): stop the loading of the page
- print(): print the page
- focus(): auto focus in the page


History :is a object that have methods that control browser history
- length: method that count the history pages include the live page
history.length();
- back: method that go back to last page in history
history.back();
- forward: method that go back to the next page in history
history.forward();
- go: method that jump back or next  pages in history
history.go(-3);`


Scroll: [scrollTo(x, y, behavior), scrollBy(x, y, behavior), scrollX, scrollY]
!!scrollTo: move to the values of x and y axises one time!!
!!scrollBy: move to the values of x and y axises every time!!
- scrollX : use to read scrolling value of x axis
- scrollY: use to read scrolling value of y axis
- scrollTop: use like scrollY
- scrollLeft: use like scrollX
Ex:/
window.scrollTo({
  left: 500,
  top: 500,
  behavior: "smooth",
});
window.scrollBy({
  left: 500,
  top: 500,
  behavior: "smooth",
});
Ex:/
let theBody = document.body;
theBody.onscroll = function (){
  localStorage.setItem("scrollingY", scrollY)
  localStorage.setItem("scrollingX", scrollX)
};
console.log(localStorage.getItem("scrollingY"));
console.log(localStorage.getItem("scrollingX"));
window.scrollTo({
  top: localStorage.getItem("scrollingY"),
  left: localStorage.getItem("scrollingX"),
  behavior: "smooth",
});
- scrollHeight: read all page height
- scrollClient: read the visible page height only

Local & Session Storage Methods: [setItem(), getItem(), .key(), removeItem(), clear()]
- local storage:
!!private tab = new storage!!
!!same page different protocol(http & https) = different storage!!
- session storage:
!!new tab(page) = new storage!!
!!new tab(page) same url = new storage!!
!!duplicate tab = same storage!!
Ex:/
- setItem(): set new key to the localStorage object
- getItem(): get key value from the localStorage object
- key(): get key name using indexing from the localStorage object
- removeItem(): remove key from the localStorage object
- clear(): clear all keys from the localStorage object
Ex:/
let black =  localStorage.setItem("color1", "#aaa"); // not working !!!!!
let red = localStorage.color2 = "red";
let green = localStorage["color3"] = "green";
document.body.style.backgroundColor = green;
localStorage.removeItem("color2");
console.log(localStorage.key(1));
localStorage.clear();
Ex:/
let lis = document.querySelectorAll("ul li");
let div = document.querySelector("div");
if (localStorage.getItem("color")){
  // console.log(true);
  div.style.background = localStorage.getItem("color");
  lis.forEach(li => {
    li.classList.remove("active");
  });
  document.querySelector(`[data-color="${localStorage.getItem("color")}"]`).classList = "active";
} else {
  console.log(false);
}
lis.forEach(li => {
  li.addEventListener("click", li => {
    // console.log(li.target.dataset.color);
    lis.forEach(li => {
      li.classList.remove("active");
    });
    li.target.classList = "active";
    localStorage.setItem("color", li.target.dataset.color);
    div.style.background = localStorage.color;
  });
});


event properties
- event.target: the element that make the event
Ex:/
event.target.id
event.target.innerText
- event.type: the type of the event
console.log(event.type);
- event.clientX: vertical axises value count ,from the page
console.log(event.clientX);
- event.clientY: horizontal axises value count ,from the page
console.log(event.clientY);
- event.offsetX:  vertical axises value count ,from the target
console.log(event.offsetX);
- event.offsetY:  vertical axises value count ,from the target
console.log(event.offsetY);
Ex:/
function test(event){
  console.log(event.type);
}
var btn = document.getElementById("btn");
btn.addEventListener("mousedown", test);; //!!when calling function in event , the call without () because the function will work before event!!


screen:
- screen.width: the full width of the device
console.log(screen.width);
- screen.availWidth: the full width of the device - the features
console.log(screen.availWidth);
- screen.height: the full width of the device
console.log(screen.height);
- screen.availHeight: the full height of the device - the features
console.log(screen.availHeight);


navigator: show the details of the browser app
console.log(navigator.appName);
console.log(navigator.appCodeName);
console.log(navigator.platform);
console.log(navigator.appVersion);
console.log(navigator.language);
console.log(navigator.languages);
console.log(navigator.onLine);
*/

/*  Destructuring  استخراج البيانات

it allow you to extract data from array , object and function and set them in new variables

- Destructuring with Array:
Ex;/
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let myFriends = ["Ahemd", "Ali", "Mohammed"];
[a, , c, d = "Elfatih"] = myFriends; // !!d= "Elfatih" => default value!!
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(myFriends);
let [x, , y] = myFriends; // !!skip index[1]!!
console.log(x);
console.log(y);


- Destructuring with Nasted Array
Ex:/
let myFriends = ["mohammed", "Elfatih", "Ahmed", ["Wisal", "Malik", "Mohammed", ["Elfatih", "Ahmed", "Mohammed"]]];
let [a, , , [, , b, [, , c]]] = myFriends;
console.log(a);
console.log(b);
console.log(c);


variable swapping vs destructuring swapping
- variable swapping:
Ex:/
let one = 2;
let two = 1;
let stash = one;
one = two;
two = stash;
console.log(one);
console.log(two);
- variable swapping with destructuring:
Ex:/
let three = 4;
let four = 3;
[three, four] = [four, three];
console.log(three);
console.log(four);


- destructuring with spread operator:
Ex:/
let theArray = ["first", "second", "ali", "ahmed", "omer"];
let [a, b, ...c] = theArray;
console.log(c); // ['ali', 'ahmed', 'omer']
console.log(a, b ,...c); // first second ali ahmed omer
!!spread must be last element!!


- Destructuring with object
Ex:/
let user = {
  theName: "mohammed",
  theAge: 27,
  theCountry: "sudan",
}
let {theAge, theCountry} = user;
console.log(theAge);
console.log(theCountry);

- Destructuring with nasted object
Ex:/
let user = {
  name: "mohammed",
  age: 33,
  address: {
    address1: "sudan/khartoum",
    address2: "ksa/riyadh",
  },
  skills: {
    sport: {
      sport1: "swimming",
      sport2: "football",
    },
    developer: {
      programLanguage1:"js",
      programLanguage2:"python",
    },
  },
};
let {name: n, address: {address1:ad1, address2: ad2}} = user;
console.log(n);
console.log(ad1);
console.log(ad2);
let {programLanguage1:lang1, programLanguage2:lang2} = user.skills.developer;
console.log(lang1);
console.log(lang2);

- Destructuring using function:
Ex:/
let user = {
  name: "mohammed",
  age: 24,
  skills: {
    one: "HTML",
    two: "CSS",
    three: "JS"
  },
};
function des({name, age, skills:{one: o, two: w, three:t}} = user){
  console.log(`Your Name This ${name}`);
  console.log(`Your Age Is ${age}`);
  console.log(`Your Skills Is ${o}, ${w}, ${t}`);
};
des(user);


Ex:/
let chosen = 4;
let myFriends = [
  {title: "osama", age: "39", available: true, skills: ["HTML", "CSS"],},
  {title: "ahmed", age: "25", available: false, skills: ["python", "django"],},
  {title: "sayed", age: "33", available: true, skills: ["php", "laravel"],},
];
  if (chosen === 1){
    let [{title: t, age: g, available: a, skills: [one, two]}] = myFriends;
    console.log(t);
    console.log(g);
    a === true ? console.log("available") : console.log("not available");
    console.log(`${one} | ${two}`);
  } else if (chosen === 2){
    let [,{title: t, age: g, available: a, skills: [one, two]}] = myFriends;
    console.log(t);
    console.log(g);
    a === true ? console.log("available") : console.log("not available");
    console.log(`${one} | ${two}`);
  } else if (chosen === 3){
    let [,,{title: t, age: g, available: a, skills: [one, two]}] = myFriends;
    console.log(t);
    console.log(g);
    a === true ? console.log("available") : console.log("not available");
    console.log(`${one} | ${two}`);
  } else {
    console.log(Error("undefined"));;
  };

*/

/*  Regular Expression

Regular Expression: pattern use to check data valid or not

syntax:
-  /pattern/modifiers;
-  new RegExp("pattern", "modifiers");

modifiers:
-  i : not insensitive with letters
-  g : get all elements in array
-  m : can read multiline's

methods: [match(), test(), replace(), replaceAll()]
-  string.match(pattern): match the string with the pattern // string or array or null
Ex:/
console.log(osama.match(/[^ad]/));
-  pattern.test(string): if only one pass the pattern return true, else return false
Ex:/
console.log(/[^ad]/.test(osama));
-  string.replace(string, string): change one piece only of string with a string
Ex:/
console.log("1 @ 2 @ 3".replace(/@/ig, "|"));
-  string.replaceAll(string, string): change all pieces of strings with a string
Ex:/
console.log("1 @ 2 @ 3".replaceAll(/@/ig, "|"));

ranges:
-  (x|y)  : x or y
-  [0-9]  : 0 to 9
-  [^0-9] : anything but not 0 to 9
-  [a-z]  : a to z
-  [^a-z] : anything but not a to z
-  [A-Z]  : A to Z
-  [^A-Z] : anything but not A to Z
-  [abc]  : a and b and c
-  [^abc] : anything but not a and b and c
-  [^a-z0-9] : anything but not a to z and 0 to 9
-  practice

characters classes:
-  .  : any characters except new line and other line terminators
-  \w : a to z, A to Z, 0 to 9 and underscore
-  \W : not \w
-  \d : 0 to 9
-  \D : not \d
-  \s : white space
-  \S : not \s
-  \b : beginning with or end with
-  \B : not \b

quantifiers:
-  a+ : one or more
-  c* : null or more
-  r? : null or one
-  s{num} : num digits of s
-  w{num, num} : range between num and num digits of w
-  0{num,} : range between digits num at least  and more of 0
-  e$ : the string end with e
-  ^qu : the string start with qu
-  ?=ed : followed by ed
-  ?!ed : not ?=

Ex:/
let url1 = "elzero.org";
let url2 = "http://elzero.info";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.com";
let url5 = "https://www.elzero.org:800/articles.php?id=100&cat=topics";
let re = /(https?:\/\/)?(www.)?\w+.(\w+)?.*\/g;
console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));

*/

/*  oop

Object Oriented Programming(OOP):
- can create complex and large software architecture
- can hide parts of the code in the object using encapsulation
- can use the object in different software using inheritance



Factory Function: function use to create objects
Ex:/
function cars(name, model, color){
  return {
    theName: name,
    theModel: model,
    theColor: color,
  };
};
let car1 = cars("BMW", "2015", "Black");
let car2 = cars("Toyota", "2010", "White");
let car3 = cars("Honda", "2020", "Silver");
console.log(car1);
console.log(car2);
console.log(car3);



Constructor Function:  use function to instances(انستاشييت) objects,to (change one time run everywhere)
!!the name of the constructor function with capital letter!!
instanceof & constructor: use to check the new object father
Ex:/
function User(id, name, jobName){
  this.i = id;
  this.n = name;
  this.j = jobName;
};
let user1 = new User(101, "mohammed", "frontend");
let user2 = new User(203, "ali", "backend");
console.log(user1.i);
console.log(user1.n);
console.log(user1.j);
console.log(user2.i);
console.log(user2.n);
console.log(user2.j);
!!write methods out the constructor function to useless memory!!
Ex:/
function Cars(name, model, color){
  this.theName = name;
  this.theModel = model;
  this.theColor = color;
};
Cars.prototype.start = function (){
  console.log(`${this.theName}: Start Moving`);
};
Cars.prototype.stop = function (){
  console.log(`${this.theName}: Stop Moving`);
};
let car1 = new Cars("BMW", "2015", "Black");
let car2 = new Cars("Toyota", "2010", "White");
let car3 = new Cars("Honda", "2020", "Silver");
console.log(car1);
console.log(car2);
car2.start();
console.log(car3);
car3.stop();

- Class: new syntax of constructor function
to now which constructor function that made the object use: instanceof or objectName.constructor
user1 instanceof User // true ==> made of this constructor
object.constructor === User // true ==> made of or part of it made by this constructor
Ex:/
console.log(user1.constructor === User);
console.log(user1 instanceof User);
Ex:/
class User {
  constructor (name, id, jobName){
    this.i = id;
    this.n = name;
    this.j = jobName;
  };
};
let user1 = new User(101, "mohammed", "frontend");
let user2 = new User(203, "ali", "backend");
console.log(user1.i);
console.log(user1.n);
console.log(user1.j);
console.log(user2.i);
console.log(user2.n);
console.log(user2.j);
console.log(user1.constructor === User);
console.log(user1 instanceof User);
Ex:/
class User {
  constructor (name, age){
    this.name = name || "Unknown";
    this.age = age || "Unknown";
    this.msg = function (){
      return `Hello ${this.name}, Your Age Is ${this.age}`;
    };
  };
  ageByDays (){
    return `Your age by days is: ${this.age * 365} day`;
  };
};
let user1 = new User("Mohamed", 27);
console.log(user1.msg());
console.log(user1.ageByDays());
Ex:/
class User {
constructor(name, id, gmail, salary){
  // properties
  this.n = name || "unknown";
  this.i = id || "unknown";
  this.g = gmail || "*****@gmail.com";
  this.s = salary < 1000 ? salary + 250 : salary;
  this.m = function (){
    return `Hallo ${this.n} Your Salary Is ${this.s}`;
  };
  this.h = function (){
    return "##".repeat(15);
  };
};
// methods
check(){
  return `Login Checked`
};
};
let user1 = new User("Mohammed", 201, "mo@gmail.com", 700);
let user2 = new User("Mohammed", "", "mo@gmail.com", 1600);
let user3 = new User("Mohammed", 201, "", 800);
console.log(user1.n);
console.log(user1.i);
console.log(user1.g);
console.log(user1.s);
console.log(user1.m());
console.log(user1.check());
console.log(user1.h());
console.log(user2.n);
console.log(user2.i);
console.log(user2.g);
console.log(user2.s);
console.log(user2.m());
console.log(user3.n);
console.log(user2.check());
console.log(user2.h());
console.log(user3.i);
console.log(user3.g);
console.log(user3.s);
console.log(user3.m());
console.log(user3.check());
console.log(user3.h());
console.log(user1 instanceof User);
console.log(user2.constructor === user3);
update property
class User {
constructor (name, number, address){
  this.name = name || "unknown";
  this.number = number || "unknown";
  this.address = address || "unknown";
  this.hallo = function(){
    if(this.name !== "unknown"){
      return `hallo ${this.name}`;
    }
    else {
      return `hallo`;
    };
  };
};
updateNumber(newNumber){
  return this.number = newNumber;
};
};
let user1 = new User("Ali", "", "Arkweet, Alsallam ST");
console.log(user1.name);
console.log(user1.number);
console.log(user1.address);
user1.updateNumber(0922591418);
console.log(user1.number);
built in constructor:
Ex:/
let num1 = 20;
let num2 = new Number(20);
console.log(typeof num1); // number
console.log(typeof num2); // object
console.log(num1 instanceof Number); // false
console.log(num2 instanceof Number); // true
console.log(num1.constructor === Number); // true
console.log(num2.constructor === Number); // true

- static property and method: only constructor function can get to it
Ex:/
class User{
static count = 0;
constructor(name, age, number){
    this.n = name;
    this.a = age;
    this.num = number;
    User.count++;
  };
static counting(){
    return `${this.count} Members`;
  };
};
let user1 = new User("ali", 25, 09325635625);
let user2 = new User("ali", 25, 09325635625);
let user3 = new User("ali", 25, 09325635625);
console.log(User.count);

- Inheritance: give same properties and methods form class to class
Ex:/
class User {
constructor (name, id){
  this.n = name;
  this.i = id;
};
hallo(){
  return `Hallo ${this.n}, Welcome`;
};
};
class Admin extends User{
constructor (name, id, permission, salary){
  super(name, id);
  this.p = permission || "unknown";
  this.s = salary;
};
};
class Boss extends Admin{
constructor (name, permission, salary, password){
  super (name,"",permission,salary);
  this.pass = password;
};
};
let user1 = new User("mohamed", 88);
let user2 = new User("ahmed", 25);
let admin1 = new Admin("omer", 701, true, 5000);
let boss1 = new Boss("elfatih", true, 18000, "***********");
console.log(user2.n);
console.log(user2.i);
console.log("###".repeat(10));
console.log(admin1.n);
console.log(admin1.i);
console.log(admin1.p);
console.log(admin1.s);
console.log("###".repeat(10));
console.log(boss1.n);
console.log(boss1.p);
console.log(boss1.s);
console.log(boss1.pass);

- Encapsulation: use to made property and method privet in the class
Ex:/
class User{
  #n;
  #i;
  constructor (name, age, id){
    this.#n = name;
    this.a = age;
    this.#i = id;
  };
  onlyNum(){
    return parseInt(this.#i);
  };
  onlyString(){
    return this.#n.toLowerCase();
  };
  block(){
    return `###`.repeat(10);
  }
};
let user1 = new User("Ali", 25, "275 id");
console.log(user1.onlyString());
console.log(user1.a);
console.log(user1.onlyNum());
console.log(user1.block());
class Admin extends User {
  constructor (name, age, id, password){
    super(name, age, id);
    this.p = password;
  };
};
let admin1 = new Admin("Mohammed", 56, "21 id", true);
console.log(admin1.onlyString());
console.log(admin1.a);
console.log(admin1.onlyNum());
console.log(admin1.p);
console.log(admin1.block());

- Prototype: is mechanism that JS objects can inherit features from the constructor
Ex:/
Number.prototype.yourAge = function(num){ // method
  return `months = ${this * 12}
weeks = ${this * 48}
days = ${this * 354}`;
};
String.prototype.enter = "Welcome"; // property
let myAge = 26;
let me = "Mohammed";
console.log(me.enter);
console.log(myAge.yourAge());
Ex:/
Object.prototype.sayHallo = function (name){
    if (typeof this === "string" && +(this).charAt(0) !== NaN){
    return `Hello ${this.toLowerCase()}`;
  } else {
    return `Syntax Error: ${this} is not a string`;
  };
};
let theName = "M86LL";
console.log(theName.sayHallo());
console.log(Number.prototype);
console.log("String".sayHallo());

- Description
Object Meta Data And Descriptor(create new property): [Object.defineProperty(), Object.defineProperties(),
Object.getOwnPropertyDescriptor(), Object.getOwnPropertyDescriptors()]
- writable (default = false): if it true then can change property value outside of the descriptor
- enumerable (default = false): if it true then the property count when looping in the object
- configurable (default = false): if it true then can't delete the property or reconfigure(change) the descriptor
Object.defineProperty(object name, "prop name"): set descriptor for new property
Object.defineProperties(object name, {prop:{},}): set descriptors for the new properties
Object.getOwnPropertyDescriptor(object name, prop name): get descriptor of the property
Object.getOwnPropertyDescriptors(object name): get descriptors of the properties
Ex:/
let newObj = {
  a:1,
  b:2,
  c:3
};
Object.defineProperty(newObj, "d", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: 4,
});
console.log(newObj)
newObj.
console.log(newObj)
Ex:/
let obj = {
  a: 1,
  b: 2,
};
obj.c = 3;
Object.defineProperty(obj, "d" ,{
  writable: false,
  enumerable: false,
  configurable: true,
  value: 4,
});
Object.defineProperties(obj, {
  e: {
    configurable: true,
    value: 5,
  },
  f: {
    configurable: true,
    value: 6,
  },
  g: {
    configurable: true,
    value: 7,
  },
});
console.log(obj);
console.log(Object.getOwnPropertyDescriptor(obj, "c"));
console.log(Object.getOwnPropertyDescriptors(obj));


Generators Function: use to loop in iterables
!!the variable that contain generator function can not loop init more than one time, but can in the generator function it self!!
Ex:/
function* generatorNumbers(){
  yield 1;
  console.log("hallo from yield 1");
  yield 2;
  yield 3;
  yield 4;
};
let generator = generatorNumbers();
console.log(typeof generator);
console.log(generator);
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
for (let value of generator){
  console.log(value);
}
for (let value of generateNumber()){
  console.log(value);
}
for (let value of generateNumber()){
  console.log(value);
}
- Generators Delegate(مندوب او نايب): use as inherent generator function
!!return in generate function use stop generating!!
Ex:/
function* generatorNum(){
  yield 1;
  yield 2;
  yield 3;
};
function* generatorString(){
  yield "A";
  yield "B";
  yield "C";
};
let arr = [20, 30, 40];

function* generateAll(){
  yield* generatorString();
  yield* generatorNum();
  yield* arr;
};
let allGenerators = generateAll()
console.log(allGenerators.next());
console.log(allGenerators.next());
console.log(allGenerators.next());
console.log(allGenerators.next());
console.log(allGenerators.next());
console.log(allGenerators.next());
console.log(allGenerators.next());
console.log(allGenerators.next());
// console.log(allGenerators.return());
console.log(allGenerators.next());
console.log(allGenerators.next());
- infinite yields:
Ex:/
function* generateNum(){
  let index = 0;
  while (true) {
    yield index++;
  }
}
let generator = generateNum();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

*/

/*  Date

- Date Constructor: [Date.now()]
new Date(): constructor for days and time  // Wed Jun 07 2023 13:24:36 GMT+0200 (Eastern European Standard Time)
Date.now(): method use to count from 1970 to now  // 1686137086758 Mill
??year 2038 problem in computer science??
Ex:/
let date = new Date();
let dateNow = Date.now()
console.log(date);
console.log(dateNow);
let seconds = dateNow / 1000;
console.log(seconds);
let min = seconds / 60;
console.log(min);
let hours = min / 60;
console.log(hours);
let days = hours / 24;
console.log(days);
let years = days / 365;
console.log(years);
Ex:/
let dateNow = new Date();
let birthday = new Date("Jun 24, 96");
let older = (dateNow - birthday)  / 1000 / 60 / 60 / 24 / 365;
console.log(older);
Get: [getTime(), getDate(), getFullYear, getMonth(), getDay(), getHours(),
getMinutes(), getSeconds()]
- getTime(): get the time form 1970 and till now// millisecond
- getDate(): the date in the month now// 24
- getFullYear(): the year now // 2024
- getMonth(): the month of the year now but, count from index[0] // 5
- getDay():  the month of the week now but, count from index[0] // 0
- getHours(): the hour of the day now // 19
- getMinutes():  the minutes of the hour now // 33
- getSeconds(): the seconds of the minutes now // 55
Ex:/
let dateNow = new Date();
console.log(dateNow);
console.log(dateNow.getTime()); // millisecond
console.log(dateNow.getDate()); // the date of the month
console.log(dateNow.getFullYear()); // the year
console.log(dateNow.getMonth()); // the month of the year but, count from 0
console.log(dateNow.getDay()); // the day of the week but, start from sunday and = 0
console.log(dateNow.getHours()); // the hour of the day
console.log(dateNow.getMinutes()); // the minutes of the hour
console.log(dateNow.getSeconds()); // the seconds of the minutes
Set:
- setTime(milliseconds): set form 1970
- setDate(): day of month (negative === last month , positive === next month)
- setFullYear(year, (optional)month 0 - 11, (optional)day 1 - 31)
- setMonth(month 0 - 11,  (optional)day 1 - 31 (negative === last month , positive === next month), )
- setHours(hours 0 - 23, (optional) minutes 0 - 59, (optional) seconds 0 -59, (optional) milliseconds 0 - 999)
- setMinutes(minutes 0 - 59, (optional) seconds 0 -59, (optional) milliseconds 0 - 999)
- setSeconds(seconds 0 -59, (optional) milliseconds 0 - 999)
Ex:/
let dateNow = new Date();
// dateNow.setTime(10000);
// dateNow.setDate(32);
// dateNow.setFullYear(2020, 2, 20);
// dateNow.setMonth(0, 24);
// dateNow.setHours(10, 30, 30);
// dateNow.setMinutes(30,30,333);
// dateNow.setSeconds(30, 333);
dateNow.setMilliseconds(9999);
console.log(dateNow);
Date.parse(): method use to write init the date and output came with milliseconds
Ex:/
console.log(Date.parse("1996 24 Jun"));
let myDate1 = new Date("1996 24 Jun");
console.log(myDate1);
let myDate2 = new Date("1996");
console.log(myDate2);
let myDate3 = new Date("1996 24");
console.log(myDate3);
let myDate4 = new Date(1996, 5, 24, 3, 45, 700);
console.log(myDate4);
let day1 = new Date("1996-6-24");
console.log(day1);
let date = new Date("1996-6-24T06:30:30Z");
console.log(date);
Tracking Operation Time:
Ex:/
let start = new Date();
for (let i = 0 ; i < 10000 ; i++){
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(i));
  document.body.appendChild(div);
};
let end = new Date();
let time = end - start;
console.log(time)

*/

/*  API

Module: use to export and import codes between js files
- add attribute type = "module" to export and import js src=/main.js files
- import way:    import { a, arr, func as con } from "/Programing_References/javascript_reference.js";
- alias new name using (as) in export file or import file
- default one time  only and it will be without a name
- can not use default with *
Ex:/
let a = "Elzero",
    arr = a.split("");
export  function elzero(){
  return arr.join("");
};
export {a, arr}





Javascript Object Notation(JSON): use to shearing data between client side and server side
!!in jason the keys write between ""!!
!!the data types that can save in jason is: string, number, boolean, object, array and null!!
!!the data types that can't save in jason is: function, undefined and date(2/10/2021)!!
JSON.parse(): method use to convert json text to js object
JSON.stringify(): method use to convert js object to json text
Ex:/
let jsonObjectFromServer = `{
  "theName": "Mohammed",
  "theAge": 25,
  "theAddress": {
    "address1": "KSA",
    "address2": "EGYPT"
  },
  "theSkills": ["HTML", "CSS", "JS"]
}`;
console.log(typeof jsonObjectFromServer);
console.log(jsonObjectFromServer);
let jsObject = JSON.parse(jsonObjectFromServer);
console.log(typeof jsObject);
console.log(jsObject);
let jsonObjectToServer = JSON.stringify(jsObject);
console.log(typeof jsonObjectToServer);
console.log(jsonObjectToServer);
Ex:/
var jasonData =
[
  {
    "name": "mohammed",
    "age": 26,
    "tel": 0922591418,
    "address":
    {
      "country": "sudan",
      "stat": "khartoum",
      "city": "arkweet",
    },
    "child": ["ahmed", "ali"],
    "valid": null
  },
  {
    "name": "manal",
    "age": 55,
    "tel": 0922591455,
    "address":
    {
      "country": "sudan",
      "stat": "khartoum",
      "city": "altayif",
    },
    "child": ["ibrahim", "ahmed", "yasser"],
    "valid": true
  },
  {
    "name": "omer",
    "age": 63,
    "tel": 0922595245,
    "address":
    {
      "country": "sudan",
      "stat": "aljazzera",
      "city": "madany",
    },
    "child": ["sara"],
    "valid": false
  },
];
var str = JSON.stringify(jasonData);
// document.body.innerHTML = str;
console.log(str);
var obj = JSON.parse(str);
// document.body.innerHTML = obj;
console.log(obj);






Application Program Interface(API): request and response الوسيط في مشاركةالبيانات
available accessing data, display as json file
- Public API
- Private API




callback hell or pyramid of boom
Ex:/
setTimeout(() => {
  console.log("Mohammed");
  setTimeout(() => {
    console.log("Elfatih");
    setTimeout(() => {
      console.log("Ahmed");
      setTimeout(() => {
        console.log("Hamed");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);




- Promise With XMLHttpRequest:
Ex:/
function request(theLink){
  return new Promise((resolve, reject) => {
    let theRequest = new XMLHttpRequest();
    theRequest.onload = function (){
      if (this.readyState === 4 && this.status === 200){
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error(`No Data Found`));
      };
    };
    theRequest.open("GET", theLink);
    theRequest.send();
  });
};
request("https://jsonplaceholder.typicode.com").then(resolveValue => {
  resolveValue.length = 10;
  return resolveValue;
}).then(resolveValue => {
  resolveValue[0]["name"]
  return resolveValue;
}).catch(rejectedValue => rejectedValue).finally(setTimeout(() => {
  console.log(`operation is done`);
}, 0));


- Upgrade Promise Syntax:
Async:
Ex:/
// function data(){
//   return new Promise((resolve, reject) => {
//     if (user.length > 0) {
//       resolve("user found")
//     } else {
//       throw Error `user not fond`
//     };
//   });
// };
// // console.log(data());
// data().then(
//   resValue => console.log(resValue),
//   rejValue => console.log(rejValue));

//                  ||
//                  ||
//                 \  /
//                  \/
// function data(){
//   if (user.length > 0) {
//     return Promise.resolve("user found")
//   } else {
//       return Promise.reject(Error (`user not fond`))
//     };
// };
// // console.log(data());
// data().then(
// resValue => console.log(resValue),
// rejValue => console.log(rejValue));

//                  ||
//                  ||
//                 \  /
//                  \/

async function data(){
  if (user.length > 0) {
    return "user found";
  } else {
      throw Error(`user not fond`);
    };
};
// console.log(data());
data().then(
resValue => console.log(resValue),
rejValue => console.log(rejValue));

Await: use to let the code wait and till the promise finish first
Ex:/
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("I'm Good Promise");
    reject(Error("I'm Bad Promise"));
  }, 2000);
});
async function readData(){
  console.log("Before Promise");
  console.log(await myPromise.catch(err => err));
  console.log("After Promise");
};
readData();



- Fetch API: get api using fetch method
Ex:/
fetch("https://jsonplaceholder.typicode.com").then(result => {
  let myApi = result.json();
  console.log(myApi);
  return myApi;
}).then(theData => {
  for (let i = 0; i < theData.length; i++){
    console.log(theData[i].name);
  };
});

Use Fetch API With try, catch and finally:
Ex:/
async function fetchData(){
  console.log("Before Promise");
  try {
    let myDate = await fetch("https://jsonplaceholder.typicode.com");
    myDate = myDate.json();
    myDate.length = 10;
    console.log(await myDate);
  } catch (error) {
    console.log(`Reason: ${error}`);
  } finally {
    console.log("After Promise");
  };
};
fetchData();

*/

/*  api

Error Handling: handil the error before stop the code run
- throw : throw the epected error
- try : the code if there no error
- catch : catch the throw value in param
- finally : run this code in way
Ex:/
document.querySelector(".container button").addEventListener("click", function () {
  try {
    let result = divFunc(+(document.querySelector("#num1").value), +(document.querySelector("#num2").value));
    document.querySelector(".container p span").innerHTML = ` ${result}`;
  } catch (error) {
    alert("Error: " + error);
  } finally {
    console.log("Finsh");
  }
});
function divFunc(num1, num2) {
  if (document.querySelector("#num1").value === "" || document.querySelector("#num2").value === "") {
    throw "input empty";
  };
  let result;
  result = num1 / num2;
  if (result === Infinity) {
    throw "Num2 can not equal zero";
  };
  return result;
};


Request component:
-  Url: https://jsonplaceholder.typicode.com/todos/4
- Type:
-- GEt: method use to get the api of the url rescoures
-- POST:method use to post create new json in the api
-- PUT: method use to modify the json
-- PATCH: method use to modify the json
-- DELETE: method use to  delete part of of json
- Params:
-- Path Params: number write in the url, Ex:/ https://jsonplaceholder.typicode.com/todos/4
-- Query Params: the keys and values the write in the url ,Ex:/ https://jsonplaceholder.typicode.com/todos/title=eweggww
-- Body Params: contain the keys and values of the json
- Headers: contain information about the request, usually will be hidden Ex:/ Token






Asynchronous Javascript And XML(AJAX): is a technique use to get data form web server by sending request using XMLHttpRequest() object
!!use to send and reserve data without update the page!!
ReadyState:
0: request not send
1: server connection
2: received the request
3: process the request
4: process is finish and the response is ready
Status:
200-299: response is successful
404: not found
Ex:/
function loadData(){
  var xHttp = new XMLHttpRequest();
  xHttp.onreadystatechange = function (){ //    onreadystatechange will call the function when
    if(this.readyState == 4 && this.status >= 200 && this.status < 300){ // readyState complete the 4 steps and the status is 200(ok)
      document.body.innerHTML = JSON.stringify(this.responseText);
      console.log(JSON.parse(this.responseText));
    };
  };
};
loadData();
Ex:/
function getData(){
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/posts");

  request.responseType = "json";

  request.send();
  request.onload = function () {

    // let posts = JSON.parse(request);
    let posts = request.response;
    if(this.readyState == 4 && this.status >= 200 && this.status < 300){
      for (p of posts) {
        document.body.innerHTML += `<h2>${p.title}</h2>`
      };
      alert("Done");
    } else {
      alert("Error");
    }
  };
};
function createNewData(){

  let req = new XMLHttpRequest();
  req.open("POST", "https://jsonplaceholder.typicode.com/posts");
  req.responseType = "json";
  // req.setRequestHeader("Accept", "application/json");
  req.setRequestHeader("Content-type", "application/json");
  let bodyParam = `{
    "title": "egwegeaa",
    "body": "urhwhwvbjbvbwkhvjevk",
    "userId": 1
  }`;
  req.send(bodyParam);
  req.onload = function (){
    if(this.readyState == 4 && this.status >= 200 && this.status < 300){
      console.log(req.response);
      alert("Done");
    } else {
      alert("Error");
    };
  };

};
function createUpdateData(){

  let req = new XMLHttpRequest();
  req.open("PUT", "https://jsonplaceholder.typicode.com/posts/2");
  req.responseType = "json";
  // req.setRequestHeader("Accept", "application/json");
  req.setRequestHeader("Content-type", "application/json");
  let bodyParam = `{
    "title": "egwegeaa",
    "body": "urhwhwvbjbvbwkhvjevk",
    "userId": 1
  }`;
  req.send(bodyParam);
  req.onload = function (){
    if(this.readyState == 4 && this.status >= 200 && this.status < 300){
      console.log(req.response);
      alert("Done");
    } else {
      alert("Error");
    };
  };

};
function createDeleteData(){

  let req = new XMLHttpRequest();
  req.open("DELETE", "https://jsonplaceholder.typicode.com/posts/2");
  req.responseType = "json";
  // req.setRequestHeader("Accept", "application/json");
  req.setRequestHeader("Content-type", "application/json");
  req.onload = function (){
    if(this.readyState == 4 && this.status >= 200 && this.status < 300){
      console.log(req.response);
      alert("Done");
    } else {
      alert("Error");
    };
  };

};
// getData();
// createNewData();
// createUpdateData();
// createDeleteData();
Ex:/
let jsData;
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "/Programing_References/json_refernce.json");
myRequest.send();
myRequest.onreadystatechange = function(){
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    let jsData = JSON.parse(this.responseText);
    for (let i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsData[i].string);
      div.appendChild(repoName);
      document.body.appendChild(div);
    };
    console.log(jsData);
  };
};


??Cross Origin API(CORS)??
??API Authentication??


callback hell or pyramid of boom
Ex:/
setTimeout(() => {
  console.log("Mohammed");
  setTimeout(() => {
    console.log("Elfatih");
    setTimeout(() => {
      console.log("Ahmed");
      setTimeout(() => {
        console.log("Hamed");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);


Promise: promise is async code
!!any promise can use then()!!
!!calling resolve or reject will call then or catch code!!
- syntax:
new Promise(function (funtion resolve(function then(){}){}, function reject(function catch(){}){}){}).then(function(){}).catch(function(){})
Ex:/
let myPromise = new Promise((resolve, reject) => {
  let myFriends = ["Ahmed", "Ali", "Omar", "Ibrahim"];
  if (myFriends.length === 4){
    resolve(myFriends);
  } else {
    reject(Error(`My Friends Are not 4`))
  };
});
myPromise.then(resolvedValue =>{
  resolvedValue.length = 2;
  return resolvedValue;
}).then(resolvedValue => {
  resolvedValue.length = 1
  return resolvedValue;
}).then(resolvedValue => {
  console.log(`My Friend This ${resolvedValue}`);
}).catch(rejectedValue => {
  console.log(rejectedValue)}
  ).finally(setTimeout(() => {
  console.log(`Operation Is Done`);
}, 0));
Ex:/
new Promise((resolve, reject) => {
  setTimeout(() => {
    let div = document.createElement("div");
    div.style.color = "red";
    document.body.append(div);
    div.append("Div One");
    resolve()
  }, 1000);
}).then(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let div = document.createElement("div");
      div.style.color = "blue";
      document.body.append(div);
      div.append("Div Two");
      resolve()
    }, 1000);
  })
}).then(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let div = document.createElement("div");
      div.style.color = "brown";
    document.body.append(div);
    div.append("Div Three");
    resolve()
  }, 1000);
  })
});
Ex:/
let successful = true;
new Promise((resolve, reject) => {
  if (successful) {
    setTimeout(() => {
      console.log("promise 1");
      resolve();
    }, 1000);
  } else {
    reject(`Not Successful`);
  }
}).then(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("promise 2");
      resolve();
    }, 1000);
  });
}).then(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("promise 3");
      resolve();
    }, 1000);
  });
}).then(() => {
  setTimeout(() => {
    console.log("promise 4");
  }, 1000);
}).catch(rejectValue => console.log(Error(rejectValue)));
- Promise Methods: [Promise.all(), Promise.allSettled(), Promise.race()]
Promise.all(): use to give all promises values in array if all promises are resolved,
ales give the first rejected promise value
Promise.allSettled(): use to give the status(reject or resolve) and the value for all
the promises in array
Promise.race(): give first promise value
Ex:/
let myFirstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("I'm First Promise");
  }, 3000);
});
let mySecondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("I'm First Promise");
  }, 2000);
});
let myThirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("I'm Third Promise");
  }, 1000);
});
Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(resolvedValue => {
  console.log(resolvedValue);
},
rejectedValues => {
  console.log(rejectedValues);
});
Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(resolvedValue => {
  console.log(resolvedValue);
},
rejectedValues => {
  console.log(rejectedValues);
});
Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(resolvedValue => {
  console.log(resolvedValue);
},
rejectedValues => {
  console.log(rejectedValues);
});
Ex:/
let user = ["ALi"];
function data(){
  if (user.length > 0) {
    return Promise.resolve("user found")
  } else {
      return Promise.reject(Error (`user not fond`))
    };
};
// console.log(data());
data().then(
resValue => console.log(resValue),
rejValue => console.log(rejValue));


Async & Await:
async function getTitles() {
  await new Promise(resolve => {
    setTimeout(() => {
      document.querySelector("#title1").style.visibility = "visible";
      console.log(resolve("done1"));
    }, 1000);
  })
  await new Promise(resolve => {
    setTimeout(() => {
      document.querySelector("#title2").style.visibility = "visible";
      console.log(resolve("done2"));
    }, 1000);
  })
  await new Promise(resolve => {
    setTimeout(() => {
      document.querySelector("#title3").style.visibility = "visible";
      console.log(resolve("done3"));
    }, 1000);
  })
  setTimeout(() => {
    document.querySelector("#title4").style.visibility = "visible";
    console.log("done4");
  }, 1000);
};
getTitles();


Token & Authentication & Authorization:
Ex:/
function logInFunc() {
  fetch("https://reqres.in/api/login",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
      })
    }
  ).then((res) => res.json())
    .then(data => localStorage.setItem("token", data["token"]))
    .catch((error) => console.log(error));
  newPost(localStorage.getItem("token"))
}
function newPost(token) {
  console.log(localStorage.getItem("token"));
  fetch("https://reqres.in/api/users", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`
    },
    method: "POST",
    body: JSON.stringify({
      "name": "morpheus",
      "job": "leader"
    })
  }).then(res => res.json())
    .then(data => console.log(data));
}
window.onload = logInFunc();

*/

/*  methods





some():method use to check if there are any element that pass the condition, the output true or false
!!if there any element pass the condition the method will not check the rest of elements!!
Ex:/
let arr = [1, "mohammed", "ali", 2, 3];
let check = arr.some(function(e){
  return e < 0;
});
console.log(check);



every():method use to check all of the elements pass the condition or not, output true or false
Ex:/
let check = [1, 2, 3].every(function(e){
  return e > 0;
});
console.log(check); 



find():method use to return the first element that have the same value , if there no element output undefined
Ex:/ 
let check = [{a:1, b:2,}, {a:2, b:3,}, {a:3, b:4,}].find(function(e){
  return e.a === 2 && e.b === 3;
});
console.log(check);
findIndex():method use to return the index of the first element that pass the condition , if there no element output -1
Ex:/
let check = [{a:1, b:2,}, {a:2, b:3,}, {a:3, b:4,}].findIndex(function(e){
  return e.a === 2 && e.b === 3;
});
console.log(check);




sort() & reverse(): methods use to order array content
Ex:/
let names = ["mohammed", "ahmed", 2, 3, "%", "**", "ali", "omer"];
console.log(names.sort())
console.log(names.reverse())




sort():method use also to order numbers
Ex:/
let nums = [3,6,1,6,9,3,5,7,0];
console.log(nums)
let order1 = nums.sort(function(a, b){
  return a - b;
})
console.log(order1)
let order2 = nums.sort(function(a, b){
  return b - a;
})
console.log(order2)
 */

/*  notes

!!when i make this move , what going to happen is == function!!
document.getElementById("btn").onclick = function (){
  document.getElementById("btn").innerHTML = "hallo js";
}


!!use array for arranged(in order) data, but object use for unarranged(not in order) data!! not always
!!array and null defined as a object in data types!!

arthematic operators:
!!if small number % bigger number the result is the small number!!
!!if there no print then x++ same as ++x!!
!!if there no print then y-- same as --y!!
!!+"number string" = number!!
!!-"number string" = -number!!



switch condition:
!!must write break after any case to break the condition!!

expression function:
!!expression function with function name is best practice , because it help in debugging!!

function with events:
!!when calling function in event , the call without () because the function will work before event!!

add event listener:
!!addEventListener() can take more than one event for same element!!

do while:
!!check the condition after first round!!

jason:
!!in jason the keys write between ""!!
!!the data types that can save in jason is: string, number, boolean, object, array and null!!
!!the data types that can't save in jason is: function, undefined and date(2/10/2021)!!

element.preventDefault(): stop default behavior

scope:
!!global scope: the code read in all the program!!
!!local scope: the code read inside the code only!!

!! declaration: var x; !!
!! assignment: var x = 5; !!

method:
!!(function inside object) = method!!

error types:
!!syntax error(parsing error): error in syntax!!
!!runtime error(exceptions error): calling method in runtime that not exist!!
!!logic error: error in the logic , can use try catch method!!

strict mode("use strict")
!!it use to write secure js code , best brackets!!







--------------------------------------------------------------------------------------
|                                                                                    |
|     Compilation:      Source Code ======> Machine Code ======>  Program            |
|                                             (exe file)                             |
|                                                                                    |
|                                                                                    |
|    Interpretation:      Source Code ============================>  Program         |
|                                                                                    |
|                                                                                    |
|                                                                                    |
|  Just-In-Time(JIT):     Source Code ======> Machine Code ======>  Program          |
|                                                                                    |
|                        Javascript is just-in-time                                  |
--------------------------------------------------------------------------------------


- Javascript is Multi Paradigm: can use in coding in different ways
1-Procedural Programming: coding line by line
2-Object Oriented Programming: coding objects 
3-Functional Programming: coding functions


Javascript is Prototype Based
Prototype Based: is the objects can inherits all the properties and methods form each other without using classes
!!you can change the child object properties and methods from parent object to another parent object during runtime in the code!!


First Class Function(First Class Citizen): save the function block code in variable 
!!in javascript can use the name of the function as variable!!
+ can use it as a parameter in other function
Ex:/
function sayHello(){
  console.log("Hello");
};
let hello = sayHello;
hello(); // Hello
+ can use to return function
Ex:/
function createNumber(num1){
  return function (num2){
    return num1 * num2;
  };
};
let triple = createNumber(3);
console.log(triple(10)); // 30
let double = createNumber(2)
console.log(double(10)); // 20


Javascript Is Dynamic Type Language
Dynamic Type: create new variable without choose data type and change the value of the same variable data type in same code
Ex:/ 
let newVariable = "mohammed";
console.log(newVariable); // mohammed
newVariable = 55;
console.log(newVariable); // 55
newVariable = true;
console.log(newVariable); // true


Javascript Engine: is software program use to execute machine code from javascript code
Ex:/
+ V8 Engine: made by Google to use in Chrome Browser
+ Chakra: made by Microsoft to use in Internet Explorer Browser
+ SpiderMonkey: made by Mozilla to use in FireFox Browser

 ________________________________________________________________________________________________________________
|                                                                                                                |
|  Javascript Compilation:                                                                                       |
|                                                                                                                |
|   _______           _______________                 ______________________                    _____________    | 
|  |       |         |               |               |                      |  Byte Code       |             |   |
|  |  JS   | ======> |    Parsing    | ============> |        (JIT)         | ==============>  |  Execution  |   |
|  |  Code |         |               |     A.S.T     |     Compilation      |                  |             |   |
|  |_______|         |_______________|       ||      |______________________|                  |_____________|   |
|                                           \||/                 |                                    |          |
|                                            \/                  ^          _____________________     v          |        
|                                           Tree                 |         |                     |    |          |
|                                       Data Structure            <---<----|    Optimization     | <---          |
|                                                                 code     |_____________________|               |
|                                                             block replace                                      |
|________________________________________________________________________________________________________________|

optimize code help the optimization the code faster:
// optimize code
Ex:/
function OptimizedClass (a, b){
  this.a = a;
  this.b = b; 
};
let optimizeObj1 = new OptimizedClass (1, 2);
console.log(optimizeObj1); // OptimizedClass {a: 1, b: 2}
let optimizeObj2 = new OptimizedClass(1, 2);
console.log(optimizeObj2); // OptimizedClass {a: 1, b: 2}
Ex:/
// non optimize code
function OptimizedClass (){};
let nonOptimizeObj1 = new OptimizedClass ();
nonOptimizeObj1.a = 1;
nonOptimizeObj1.b = 2; 
console.log(nonOptimizeObj1);  // OptimizedClass {a: 1, b: 2}
let nonOptimizeObj2 = new OptimizedClass ();
nonOptimizeObj2.b = 2;
nonOptimizeObj2.a = 1; 
console.log(nonOptimizeObj2); // OptimizedClass {b: 2, a: 1}\


Execution Context: javascript engine create execution context for every execute and start with global 
[1] Memory Allocation: save the variables first
[2] Execution: execute the code
!!javascript engine create execution context for function!!  
!!javascript engine create execution context for arrow function without argument object and this keyword!!  
 ____________________________________________
|              Variable Environment          |
|--------------------------------------------|
| Variables | Functions | Arguments Objects  |
|-----------|-----------|--------------------|
|                                            |
|                Scope Chain                 |
|                                            |
|--------------------------------------------|
|                                            |
|               This Keyword                 |
|____________________________________________|



.                                  Javascript Run Time Environment
 ________________________________________________________________________________________________________
|                                                                                                        |
|                                                                          WEB API                       |
|    _________________________________________                     __________________________            |
|   |                                         |                   |                          |           |
|   |                                         |                   |   DOM (document object)  |           |
|   |                JS Engine                |                   |__________________________|           |
|   |                                         |                   |                          |           |
|   |   __________________     ___________    |                   |   AJAX(XMLHttpRequest)   |           |
|   |  |                  |   |   Call    |   |                   |__________________________|           |
|   |  |   Memory Heap    |   |   Stack   |   |                   |                          |           |
|   |  |                  |   |-----------|   |                   |   console.log()          |           |
|   |  |   ============   |   |-----------|   |                   |__________________________|           |
|   |  |                  |   |-----------|   |                   |                          |           |
|   |  |   ============   |   |-----------|   |                   |   Time Functions         |           |
|   |  |                  |   |-----------|   |                   |__________________________|           |
|   |  |                  |   |-----------|   |                                                          |
|   |  |__________________|   |___________|   | <-<-<--                    Callback Queue                |
|   |                                         |       ^           ____________________________________   |
|   |_________________________________________|       |          | Callback Queue : Any Thing         |  |
|                                                   (Event) <--- |____________________________________|  |
|                                                   (Loop)  <--- | Job  Queue : Promise , async await |  |
|                                                                |____________________________________|  |
|________________________________________________________________________________________________________|


Asyncrouns: 
[1] Js Functions, Objects, ... code
[2] Web API Job Queue
[3] Web API Callback Queue
Ex:/
console.log("Start");
setTimeout(() => {
  console.log("From setTimeOut");
}, 0);
Promise.resolve().then(() => console.log("From Promise 1"));
Promise.resolve().then(() => console.log("From Promise 2"));
console.log("End");
// Start
// End
// From Promise 1
// From Promise 2
// From setTimeOut


Stack Overflow: the stack of the engine can not take more execution context
Ex:/
function recursiveCalls(){
  recursiveCalls();
};
recursiveCalls(); // Error: Maximum call stack size exceeded
!!solution of this problem using recursion!!
Ex:/
function recursiveCalls(count){
  if (count === 0){
    return;
  };
  console.log("Recursive call");
  recursiveCalls(count - 1);
};
recursiveCalls(2); //  Recursive call
.                      Recursive call


Argument Object: give the arguments of the function in object
Ex:/
function call(){
  console.log(typeof arguments);
  console.log(arguments);
  console.log(arguments.length);
};
call(1,2,3,4);
call();
!!argument object not work with the arrow function!!
Ex:/
let call = (a) => {
  console.log(arguments);
};
call(12);
!!argument conn't see default parameters!!
Ex:/
function call(a = 20){
  console.log(typeof arguments);
  console.log(arguments);
  console.log(arguments.length);
};
call(1,2,3,4); // {0:1, 1:1, 2:3, 3:4}
!!in strict mode can't change element inside the argument value!!
Ex:/
"use strict";
function param(a, b){
  arguments[1] = "ahmed";
  console.log(arguments);
} 
param("mohammed", "elfatih");


Rest Parameter(...): three dots add for the parameter to contain all the arguments in one array
Ex:/
function param(...c){
  console.log(c);
};
param(1,2,3,4,5); // [1, 2, 3, 4, 5]
param(1,2,3,4,5,6,7,8,9,10); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


Data Type:
- Primitive Data Type:           - NonPrimitive Data Type:
[1] null                         [1] object
[2] undefined                    [2] array
[3] string                       [3] function
[4] number
[5] boolean
[6] symbol


Memory In Javascript Engine:                                                                          
Ex:/                                Execution Context:  Variable Environment                        Memory Heap    
let age1 = 31;                     ___________________________________________             _____________________________
let age2 =  age1;                 |               |           memory          |           |            | {              |
age2 = 33 ;                       |   identifier  |-------------------------- |           |            |  name: "Ali"   |
console.log(age2); // 33          |               |  address    |     value   |      ->-- |    D055    |  age: 25       |
let obj1 = {                      |_______________|_____________|_____________|     |     |            |  }             |
  name: "Omar",                   |     age1      |    0001     |     31      |     |     |------------|----------------|
  age: 25,                        |---------------|-------------|-------------|     ^     |            |                |
};                                |     age2      |    0002     |     33      |     |     |    D056    |                |
let obj2 = obj1;                  |---------------|-------------|-------------|     ^     |            |                |
obj2.name = "Ali";                |     obj1      |    0010     |    D055     | -->--     |------------|----------------|
console.log(obj2.name);// "Ali"   |---------------|-------------|-------------|     |     |            |                |
.                                 |     obj2      |    0011     |    D055     | -->--     |    D057    |                |
.                                 |               |             |             |           |            |                |
.                                 |_______________|_____________|_____________|           |____________|________________|


Scope: 
var: variable defined with var can access out of the scope
let and const:  variable defined with let and const can't access out of the scope
scope chain: save variable environment of the parent
lexical scope: knows the parent and child of this block scope 
lookup: can get the variables in parents scopes for the block scope  can't do the عكس


Global Variable:
many variable in the global that will make memory leaks, to avoid the best practice that every variable write in block scope


This Keyword:
[1] This inside method: this return to object that call the method
[2] This inside regular function: this return to window object or undefined
Ex:/
let obj1 = {
  name: "mohammed",
  method: function (){
    console.log("method" ,this); // this = obj1
    return () => {
      console.log("method -> arrow" ,this); // this = obj1
      return function (){
        console.log("method -> arrow -> function" ,this); // this = window object || undefined
        return () => {
          console.log("method -> arrow -> function -> arrow" ,this); // this = window object || undefined
        };
      };
    };
  },
};
obj1.method()()()();
(() => {
  console.log(this);
})(); // this = window object || undefined
(function (){
  console.log(this);
})(); // this = window object || undefined


Function Methods: [call(), apply(), bind()]
Method Borrowing: if the other object have same properties and the method have this, can use it in the object
let person1 = {
  name: "Ali",
  age: 22,
  method: function (msg1, msg2){
    console.log(`${msg1} ${msg2}, your name is ${this.name} and your age is ${this.age}`);
  },
};
person1.method("Good", "morning");
let person2 = {
  name: "Omar",
  age: 33,
};
person1.method.apply(person2, ["Good", "morning"]); // Good morning, your name is Omar and your age is 33

- bind(): save the method with the arguments in variable 
!!bind variable method will not change if the real method changed!!
Ex:/
let person1 = {
  name: "Ali",
  age: 22,
  method: function (msg1, msg2){
    console.log(`${msg1} ${msg2}, your name is ${this.name} and your age is ${this.age}`);
  },
};
person1.method("Good", "morning"); // Good morning, your name is Ali and your age is 22
let person2 = {
  name: "Omar",
  age: 33,
};
let bindMethod = person1.method.bind(person2, "Good", "morning");
person1.method = function (msg1, msg2){
  console.log(`${msg1} ${msg2},@ name is ${this.name},@ age is ${this.age},@`);
};
person1.method("Good", "morning"); // Good morning,@ name is Ali,@ age is 22,@
bindMethod(); // Good morning, your name is Omar and your age is 33


Objects Inheritance: objects can inherit form each other without use classes
let cat = {
  name: "Cat",
  type: "animal",
  walk: function (){
    console.log(`${this.name} Can Walk`);
  },
};
cat.walk();
let bird = {
  name: "Bird",
  fly: function (){
    console.log(`${this.name} Can Fly`);
  },
};
bird.__proto__ = cat;
bird.fly();
bird.walk();
let commonloonBird = {
  swim: function (){
    console.log(`${this.name} Can Swim`);
  },
};
commonloonBird.__proto__ = bird;
commonloonBird.fly();
commonloonBird.walk();
commonloonBird.swim();



. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. Inheritance                             _______________________                                               .     
.                                        |                       |                                              .
.                         ------------>  |         OBJECT        |  <------------                               .
.                         |              |    Object.prototype   |              |                               .
.                         ^              |_______________________|              ^                               .
.                         |                                                     |                               .
.                         |                                                     |                               .
.              _______________________                             _______________________                      .
.             |                       |                           |                       |                     .
.             |         ARRAY         |                           |        FUNCTION       |                     .
.             |    Array.prototype    |                           |   Function.prototype  |                     .
.             |_______________________|                           |_______________________|                     .
.                                                                                                                .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                .




*/

/*  class works

1-  // simple card shopping:

var list = document.querySelectorAll(".list li"),
    totalItems = document.getElementById("total"),
    btn = document.getElementById("btn"),
    totalPrices = document.getElementById("totalPrices"),
    price = 0; // at first total price is 0
btn.style.display = "none"; // the price button show after choose a product

list.forEach(function(ele){  // foreach method use to get array items , ele is a parameter for items in the array
  ele.onclick = function (){ // event for li product
    totalItems.innerHTML += ele.textContent + " | "; // add clicked product name to totalItems div
    price += parseInt(ele.getAttribute("data-prices")); // add products prices ,  parseInt use transfer string to number

    if (totalItems != ""){ // if totalItems div not empty
      btn.style.display = "block"; // show btn 
    }
  };
});
btn.onclick = function() {
  totalPrices.innerHTML = price; // print total price in totalPrices p
}



2- // show product details:

var product = document.querySelectorAll("ul li"),
    btn = document.getElementById("btn"),
    details = document.getElementById("details");
    
product.forEach(function(ele){
  ele.addEventListener("click", function(){
    details.innerHTML = ele.getAttribute("color") + " | " + 
    ele.getAttribute("dis") + " | " + ele.getAttribute("prices") + "$";
  });
});
*/

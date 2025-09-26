/* 

<script>document.write(“hello world”);</script> => to print in html page 
<script src=“main.js”></script>; => to add js file in html head or body 
document.write(“hello world”); => print in html page
console.log(“hello world”); => print in console 
window.alert(“hello world”); => print in popup window in the browser
document.querySelector("h1").style.color = "red"; => target element in html page

DATA TYPE :
1- primitive:
string : "text"
number :   19  
boolean :  true 1 / false 0 
undefined : undefined
null : null 


VARIABLE :
1- var
var x = 2;
x = 4 ; 
var x = 1;

2- let
let x = 2;
x = 4;

3- const
const x = 2;

CONCATENATION :
- old code :
console.log("my name is" + " " + name + " " + "and my age is " + age);
-ecma 6 :
console.log(`my name is ${name} and my age is ${age}`);
!! + with any string value = concatenation !!


NUMBERS :
-METHOD
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);

num1 = 20;
num1 = num1 + 33;
num1 += 25;
num1 -= 25;
num1++;
num1--;
console.log( ++num1 );

console.log( num1++ );
console.log( num1 );

- STRING => NUMBER:
let x = +‘5’;   !!only number string without text!!
let x = –‘5’; 
let x = –‘ALI’;
let x = +true; 
let x = +null;  !!all math operation use string as number accept + operation must add + or - before string!!

let x = Number(‘5’); !!only number string without text in the beginning!!
let x = parsInt(‘5’);  !!only number string without text in the beginning!! output without float number
let x = parsFloat(‘5’); !!only number string without text in the beginning!! output can be float number

NUMBER OBJECT :
console.log(Number.MAX_VALUE); => max value j.s can handel
console.log(Number.MAX_SAFE_INTEGER); max saved value j.s can handel 
console.log(Number.MIN_SAFE_INTEGER); min saved value j.s can handel 
console.log(Number.isSafeInteger(86538653)); does this value is save?
console.log(Number.isInteger(5)); does this value is integer 1 43 74 7783
console.log(Number.isNaN(+"ahmed" + 10)); does this value is NAN (nan a number)


MATH OBJECT :
console.log(Math.abs(-42)); => return negative value to positive
console.log(Math.sqrt(9)); => get the square root of the value
console.log(Math.pow(2, 4)); => first number multiply second number times
console.log(Math.round(6.49)); => more than .499...ect go to the up number
console.log(Math.ceil(6.2)); => more than ect...001 go to the up number
console.log(Math.floor(6.9)); => less than .999...ect go to the down number
console.log(Math.max(6.9, 6.4, 6.7)); => choose the largest number
console.log(Math.min(6.9, 6.4, 6.7)); => choose the minimum number

STRING :
- number => string :
console.log(String(87));
console.log(num.toString());
console.log(87..toString());
console.log((93).toString());

console.log(mohammed.repeat(5)); => repeat the name 5 times 
console.log(mohammed.length); => count the digits of the string

console.log(mohammed[4]); => the value of the fourth index 
!![100] if this index not found output:undefined!!
console.log(mohammed.charAt(2)); => the value of the second index
!!charAt(100) if it not found output: nothing!!
console.log(mohammed.indexOf(e, 2)); => begin count from 0 and and find the index of the value e
console.log(mohammed.lastIndexOf(m, 3)); => => begin count from last index and and find the index of the value e

console.log(mohammed.slice(2, 5)); => output from third index to fourth index 
console.log(mohammed.slice(-5, 0)); => output fourth index from the last  to the last index
console.log(mohammed.substring(2,5)); => output from third index to fourth index 
!!substring can't use negative numbers !!
console.log(mohammed.substr(2,5));  => output from third index to seventh index 
console.log(mohammed.spilt(m, 3)); => cut first three m and put the cuts in a array




CONDITION

let gmail = window.prompt("Enter Your Gmail") ; 
let askGmail = "moha@gmail.com";
console.log(gmail.trim().toLowerCase() == askGmail);

window.prompt("Enter Your Gmail") ;  => popup ask input window

==   value
===  value and datatype
!=   not equal 
<    less than
>    bigger than 
<=   less than or equal
>=   bigger than or equal
&&   and
||   or


old code :
let experience = prompt("experience");
if (experience == 0 ) 
{
  document.write("Fresh");
}
else if (experience <= 2 && experience != 0 ) 
{
  document.write("junior");
}
else if (experience <= 4 ) 
{
  document.write("Med Senior");
}
else if (experience <= 6 ) 
{
  document.write("Senior");
}
else
{
  document.write("Team Leader");
}

new code :
let experience = prompt("experience");
experience == 0?
  document.write("Fresh")
  :experience <= 2 && experience != 0?
    document.write("junior")
  :experience <= 4?
    document.write("Med Senior")
  :experience <= 6?
    document.write("Senior")
  :document.write("Team Leader");

new code with saving data in console:
let experience = prompt("experience");
let whatType = 
experience == 0?"Fresh"
  :experience <= 2 && experience != 0?"junior"
  :experience <= 4?"Med Senior"
  :experience <= 6?"Senior"
  :"Team Leader";
console.log(whatType);

new code with saving data in console:
let experience = prompt("experience");
let whatType = 
experience == 0?"Fresh":experience <= 2 && experience != 0?"junior":experience <= 4?"Med Senior":experience <= 6?"Senior":"Team Leader";
console.log(whatType);



SWITCH

let experience = prompt("experience");
switch(experience)
{
  case !!== default!! 0:
      document.write("Fresh");
      break;
  case "1":
      document.write("junior");
      break;
  case "2":
      document.write("junior");
      break;
  case "3":
      document.write("Med Senior");
      break;
  case "4":
      document.write("Med Senior");
      break;
  case "5":
      document.write("Senior");
      break;
  case "6":
      document.write("Senior");
      break;
  case "7":
      document.write("Senior");
      break;
  default :
      document.write("Team Leader");
}



ARRAY

Ex:
let names = ["mohammed", "elfatih", "ahmed", "hamed", [1, [2, 2.3, 2.6, 2.9], 3]];
names[0] = "hamed";
names[1] = "ahmed";
names[2] = "elfatih";
names[3] = "mohammed";
console.log(names);
console.log(names[4][1][1]);



Add And Delete Index In Array:
names.unshift("ali", "ibrahim"); => add index in the first of the array
names.shift(); => delete first index in array
names.push("ali", "ibrahim"); => add index in the last of the array
names.pop(); => delete last index in array
!!names.shift(); and names.pop(); => you call back deleted index using console.log()or ...ect!!
names.splice(1, 2, "messi"); => 1 == index start , 2 == two index will be deleted [1] + [2] , "messi" added in index [1]
!!splice effects in array!!
names.slice(1, 2); => take a pice of copy from the array without effect in the array


Search In Array:
console.log(names.indexOf("mohammed", 1)); => 1 is index of searching
console.log(names.lastIndexOf("mohammed", -1)); => -1 is index of searching
!!output if not found: -1!!

console.log(names.includes("mohammed", 1)); => 1 is index of searching



Arrangement Array:
console.log(names.reverse()); => reverse array indexes
console.log(names.sort()); => order the array indexes alphabetic 


Edit Array:
console.log(array1.concat(array2, array3, "messi", [1, 2, 3])); => concatenation between arrays and can add more indexes
console.log(array1.join("-|-")); => convert array to string and can add -|- or any thing als between the strings




Function:

Ex:\
function proSalary(salary){
  return salary;
} let product = proSalary(200);

function proTaxes(taxes){
  product = product + (product * taxes);
  return product;
} let salaryAndTaxes = proTaxes(0.15);

function proDelivery(delivery){
  product = salaryAndTaxes + delivery;
  return product;
} let salaryAndTaxesAndDelivery = proDelivery(30);

console.log(salaryAndTaxesAndDelivery);


Hosting: return var declaration and declaration function at first of the code

type of function:
declaration function => function start with function if it not start with function 
that calls exepretion function

!!for calling function must call the name with ()!!

Ex:/
function x(name = "user", age = 0) {
  age = age * 365;
  console.log(`hallo ${name} your age is ${age} days`);
}x("mohammed" , 26.7);

Ex:/
function calc( ...numbers ) {
  let result = 0;
  for (i = 0 ; i< numbers.length ; i++) {
    result += numbers[i];
  } console.log(result);
}calc(4,4,3,35,3553,5,35); => undefined input user

Arrow function:

Ex:/ 
let x = (???) => {               
  return "hallo";            ==        let x = _ ??? or (??? * ???) => "hallo";
} console.log(x());                      



Object:

Ex:/
let a = true;
let x = "object";
let  y = 2;
let  z = ["red", "blue","yellow"];

let objectName = {
  // property
  object_name:x,
  object_number:y,
  object_color:z,
  // method
  object_function:function(){
  objectName.object_number >= 18 ? console.log( "available") : console.log( "unavailable")
  }(),
};
console.log(objectName.object_number);
console.log(objectName["object_number"]);



Nested Object:

Ex:/
let x = "mohammed"
let y = 9;
let form = {
  Name : {
    firstName : x,
    lastName : "elfatih",
  },
  age : y,
  skills : ["html","css","js"],
  address : {
    block : {
      blockNumber : "block 61",
    },
    street : {
      streetName : "alsallam street",
    },
  },
  hallo : function(){
    if (form.age >= 18) {
      return  `hallo ${x}`;
    } else {
      return `not available`;
    }
  },
};
console.log(form.hallo());
console.log(form.address.block.blockNumber);
console.log(form["address"]["street"]["streetName"]);



Create outside object properties:

EX:/
let newObject = {};

newObject.type = "string";
newObject["value"] = {};
newObject["value"["num1"]] = "mohammed";
newObject["value"]["num2"] = "elfatih";

console.log(newObject["type"]);
console.log(newObject.value.num2);

!!"use strict"; => use for clean code!!




DOM:
document. => use to target document or page of html

document.getElementById(); => target element by id
document.getElementsByClassName(); => target element by class name
document.getElementsByTagName(); => target element by tag name
document.querySelector(); => target element by selector
document.querySelectorAll(); => target all selectors with same name
direct target
document
.body .title .images .links .form


Attribute:
let m = document.getElementsByTagName("img");
// set or create attribute
m.alt = "m&m";
// or
m.setAttribute("alt","m&m");
// remove attribute
m.remove.Attribute("alt");
// check if the element have attribute
console.log(m.hasAttributes());
// check if the element have main attribute
console.log(m.hasAttribute("alt"));
// show element attribute
console.log(m.attribute());


inner and outer in HTML:
let container = document.getElementById("container");
container.outerHTML = "<p>HALLO</p>"; => change the target element
container.outerText = "<p>HALLO</p>"; => change the target element with a text
container.innerHTML = "<p>HALLO</p>"; => change inside the target element
container.innerText = "<p>HALLO</p>"; => change inside the target element with a text
container.textContent = "<p>HALLO</p>"; same as innerText


Previous Sibling and Next Sibling:
use to control before and after target element and his parent  
let child = document.getElementById("con");
child.previousElementSibling.remove(); => only element before target element
child.previousSibling.remove(); =>  => anything  before target element
child.nextElementSibling.remove(); => only element after target element
child.nextSibling.remove(); => anything after target element
child.parentElement.style.background = "red"; =>  target element parent


Js With Css:
let h3_1 = document.getElementById("con1");
let h3_2 = document.getElementById("con2");
let h3_3 = document.getElementById("con3");
//1-   element.style.property = "";
// element.style.removeProperty("property");
h3_1.style.backgroundColor = "red";
h3_1.style.color = "white";
h3_1.style.paddingLeft = "20px";
//2-   element.style.cssText = ``;
h3_2.style.cssText = `
background-color: red;
color: white;
padding-left: 20px;
`;
//3-   element.style.setProperty("property","","");
h3_3.style.setProperty("background-color","red","important");
h3_3.style.setProperty("color","white");
h3_3.style.setProperty("padding-left","20px");


Create Element In Js And Styling:

parentElement.appendChild(childElement);
Ex:/
let container = document.createElement("div"); // create elements
let head = document.createElement("h2");
let image = document.createElement("img");

let headContent = document.createTextNode("Hallo World"); // content element
head.appendChild(headContent);
image.src = "/course/image_course/lll.png";

container.appendChild(head);  // childing the element and styling
head.style.backgroundColor = "red";
head.style.color = "blue";
container.appendChild(image);
image.style.width = "100px";
image.style.margin = "auto";
document.body.append(container);
container.style.textAlign = "center";
!!the order of childing is important!!


Ex:/Advanced
let names = ["Ahmed","Osman","Ali","Omer"];
let namesAges = [22,45,12,42];
let con = document.createElement("div");

function cards(names = "user",namesAges = "??"){


let card = document.createElement("div");
let head = document.createElement("h2");
let age = document.createElement("p");
let image = document.createElement("img");

let headNames = document.createTextNode(names);
head.appendChild(headNames);
let theAge = document.createTextNode(`Your Age Is ${namesAges}` );
age.appendChild(theAge);
image.src = "/course/image_course/lll.png";

container.style.margin = "auto";
card.style.backgroundColor = "#ddd";
card.style.width = "250px";
card.style.margin = "5px";
card.style.display = "inline-block";
card.style.textAlign = "center";
image.style.width = "100%";

card.appendChild(head);
card.appendChild(age);
card.appendChild(image);
con.appendChild(card);
document.content.appendChild(con);


}
for (i = 0; i < 7; i++){
  cards(names[i],namesAges[i]);
}



On Click And Add Event:

on click proses one order !!the last event!!
add event proses all order !!all events!!

Ex:/
let button1 = document.getElementById("btn1");

button1.onclick = function (){
  button1.style.color = "red"
}
button1.onclick = function (){
  button1.style.backgroundColor = "blue"
}
button1.onclick = function (){
  document.body.style.backgroundColor = "yellow"
}

button1.addEventListener("click", function (){
  button1.style.color = "red"
})
button1.addEventListener("click", function (){
  button1.style.backgroundColor = "blue"
})
button1.addEventListener("click", function (){
  document.body.style.backgroundColor = "yellow"
})

Mouse Events:
onclick => work only when start and end the click in the button
onmouseup => work only when end the click in the button
onmousedown => work only when start the click in the button without end the click
onmouseover => work only when get over the button
onmousemove => start count only when moving over the button

Keyboard Events:
onkeyup => work only when start and end the prase in the keyboard
onkeydown => work only when start praising in the keyboard
Form Events:
onfocus => work only when click in the input
onblur => work only when click out of the input
window Events:
onload => when the web page load
onresize => when the web page resize
addEventListener => make more than one function on same element
Ex:/
let btn = document.getElementById("button");
btn.addEventListener("click", function hallo(){
  document.body.style.background = "blue";
})
Ex:/
let btn = document.getElementById("button");
btn.addEventListener("click", function (){
  document.body.style.background = "blue";
})
btn.addEventListener("click", function (){
  btn.style.background = "red";
})
btn.addEventListener("click", function (){
  btn.style.color = "white";
})

Ex:/
let input = document.getElementById("key");
input.onfocus = function() {
  console.log("input");
}  

Ex:/
let btn = document.getElementById("button");
function hallo(){
  console.log("hallo");
}  
btn.onclick = hallo;

Ex:/Advanced
let dollar = document.getElementById("dollar");
let sd = document.getElementById("SudanPound");
dollar.onkeyup = function(){
  sd.value = dollar.value * 595;
}
sd.onkeyup = function(){
  dollar.value = sd.value / 595;
}
!! .value => return the value of the input, it use with input elements only!!


Before, After and Append:
moving the element between them in document 
Ex:/
let after = document.getElementById("after");
let before = document.getElementById("before");
let append = document.getElementById("append");
let container = document.getElementById("container");
let content = document.getElementById("content");
container.style.height = "50px";
container.style.backgroundColor ="gold";
container.style.margin ="5px";
container.style.padding ="5px";
after.onclick = function(){
  container.after(content);
}
before.onclick = function(){
  container.before(content);
}
append.onclick = function(){
  container.append(content);
}

Add And Remove Classes , Toggle:
classList.add("class name")
classList.remove("class name")
=> classList.toggle("class name")
Ex:/
let content = document.getElementById("content");
content.onclick = function (){
  content.classList.add("layout");
}
content.oncontextmenu = function (){
  content.classList.remove("layout");
}
content.onclick = function(){
  content.classList.toggle("layout");
} 
Ex:/
let btnOpen = document.getElementById("open");
let btnClose = document.getElementById("close");
let ball = document.getElementById("ball");
let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
btnOpen.onclick = function (){
  container2.classList.remove("hidden");
  ball.classList.remove("hidden");
  container1.classList.add("hidden");
}
btnClose.onclick = function (){
  container2.classList.add("hidden");
  container1.classList.remove("hidden");
  ball.classList.add("hidden");
}



BOM :


Scroll :

window.scrollBy({
  left:100,
  top:100,
})

window.scroll(100, 100)
window.scrollTo(100,100) => same as window.scroll(100, 100)
window.scrollBy(100,100) => add agin every process
window.scrollX(100) => scroll from top
window.scrollY(100) => scroll from left

SCROLL BUTTON :
Ex:/
let btn = document.getElementById("scroll");
window.onscroll = function (){
  if (scrollY >= 400){
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}
btn.onclick = function (){
  window.scroll({
    left:0,
    top:0,
    behavior:"smooth"
  })
}


Screen :

console.log(screen.width); => screen width
console.log(screen.height); => screen height
console.log(screen.availWidth); => screen available width
console.log(screen.availHeight); => screen available height
console.log(screen.colorDepth); => screen color depth
console.log(screen.pixelDepth); => screen pixel depth
console.log(screen.orientation.type); => screen the way to show



location object :

https://  => protocol
location.protocol
wwww.instagram.com  => host name
location.host
location.hostname
/mohd.fcb10/  => path name
location.pathname
https://www.instagram.com/mohd.fcb10/  => href
location.href
reload => reload the page(refresh)
location.reload  
location.assign("https://www.instagram.com/mohd.fcb10/") => go to the link with saving last page and data
location.replace("https://www.instagram.com/mohd.fcb10/")  => go to the link without saving last page and data


Set Time and Interval (delay):

setTimeout => make function one time after delay
let hallo = setTimeout(function(){
  console.log("hallo")
},1000);
clearTimeout(hallo)

setInterval => make function many time after delay
let i = 1;
let olla = setInterval(() => {
  console.log(i++)
  if (i == 4){
    clearInterval(olla)
  }
}, 1000);
*/









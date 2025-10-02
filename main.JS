let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
my.splice(4);
my = my.reverse();
my = my.slice(++zero, counter);
my = my[0].slice(--zero, --counter) + my[++zero].slice(counter);
++counter;
console.log(my.slice(++counter));

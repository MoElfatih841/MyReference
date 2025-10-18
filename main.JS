let chosen = 1;
let myFriends = [
  { title: "osama", age: "39", available: true, skills: ["HTML", "CSS"] },
  { title: "ahmed", age: "25", available: false, skills: ["python", "django"] },
  { title: "sayed", age: "33", available: true, skills: ["php", "laravel"] },
];

if (chosen > 0 && chosen <= myFriends.length) {
  chosen -= 1;
  let {
    title: t,
    age: a,
    available: av,
    skills: [, skOne],
  } = myFriends[chosen];
  console.log(t);
  console.log(a);
  av === true ? console.log("available") : console.log("not available");
  console.log(skOne);
} else {
  console.error("not valid");
}

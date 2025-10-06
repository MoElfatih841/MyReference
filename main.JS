function showDetails(a, b, c) {
  let theName;
  let theAge;
  let available;
  typeof a === "string"
    ? (theName = a)
    : typeof a === "number"
    ? (theAge = a)
    : (available = a);
  typeof b === "string"
    ? (theName = b)
    : typeof b === "number"
    ? (theAge = b)
    : (available = b);
  typeof c === "string"
    ? (theName = c)
    : typeof c === "number"
    ? (theAge = c)
    : (available = c);
  available === true
    ? console.log(`Hello ${theName}, Your Age Is ${theAge}, Available To Hire`)
    : console.log(
        `Hello ${theName}, Your Age Is ${theAge}, Not Available To Hire`
      );
}
showDetails(false, 44, "Ahmed");

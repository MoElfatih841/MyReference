let a = "Me Elzero Web School You";

console.log(a.slice(2, 3).toUpperCase() + a.slice(3, 6)); // Zero

console.log(a.substr(13, 1).toUpperCase().repeat(8)); // HHHHHHHH

console.log(a.substring(0, 7).split()); // [Elzero]

console.log(`${a.substr(0, 7)}${a.substr(-6)}`); // Elzero School

console.log(
  `${a[0].toLowerCase()}${a.slice(1, a.length - 1).toUpperCase()}${a
    .slice(a.length - 1)
    .toLowerCase()}`
); // eLZERO WEB SCHOOl

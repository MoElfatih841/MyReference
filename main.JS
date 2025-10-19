let myMap = new Map([
  [10, "number"],
  ["10", "string"],
  [[1, 2, 3], "array"],
  [{ a: "A", b: "B" }, "object"],
  [
    function () {
      return 100;
    },
    "function",
  ],
]);

console.log(myMap);
console.log(myMap.get("10"));

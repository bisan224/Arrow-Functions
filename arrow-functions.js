//Arrow functions*************************************************************
//task #1

const addExclamation = (str) => str + "!";
console.log(addExclamation("Hi")); // Output: "Hi!"
console.log(addExclamation("Hello")); // Output: "Hello!"

//task #2
const reverseWords = (sentence) => sentence.split(" ").reverse().join(" ");
console.log(reverseWords("Coding is fun")); // Output: "fun is Coding"

//task #3
const squareAll = (arr) => arr.map((num) => num * num);
console.log(squareAll([4, 5, 6])); // ➜ [16, 25, 36]

//task #4
const filterNames = (names, minLength) =>
  names.filter((name) => name.length > minLength);
console.log(filterNames(["Anna", "Bob", "Christopher"], 4));
// Output: ["Christopher"]

//task #5
const allPositive = (numbers) => numbers.every((num) => num > 0);
console.log(allPositive([10, 22, 3])); // true
console.log(allPositive([-1, 2, 3])); // false

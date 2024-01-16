/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
function greet(name) {
    console.log("Hello, " + name);
  }
greet("Nicklaus");
  

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: 
console.log("Function declarations are named and defined before use, while function expressions are defined when assigned to a variable or invoked.")

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
const calculateArea = function(length, width) {
    return length * width;
  }
  
  const length = 5;
  const width = 10;
  const area = calculateArea(length, width);
  
  console.log("Area: ", area);
  
// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: 
console.log("A callback function is a function passed as an argument to another function, with the intent of being executed later upon completion of a certain task or event.")

function greetAfterDelay(callback) {
  setTimeout(() => {
    console.log("Hello, World!");
    callback();
  }, 2000); 
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greetAfterDelay(sayGoodbye); // Pass sayGoodbye as the callback

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here

function modifyArray(array, modifierFunction) {
    return array.map(modifierFunction);
  }
  
  const numbers = [1, 2, 3, 4, 5];
  
  const incrementByOne = function(number) {
    return number + 1;
  };
  
  const modifiedArray = modifyArray(numbers, incrementByOne);
  console.log("Original Array:", numbers)
  console.log("Modified array:", modifiedArray);  

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
import { add, PI } from "./mathUtils.js";

const result = add(2, 3);
console.log("The sum is:", result);

console.log("The value of PI is:", PI);

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
import isPalindrome from "./isPalindrome.js";

let str = "rar";
console.log(isPalindrome(str));

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: 
console.log("require and module.exports are older ways to import and export modules in Node.js, while import and export are newer and preferred, more flexible options for most JavaScript projects. We should use the new ones, but stick with the old ones for legacy or specific Node.js needs.")

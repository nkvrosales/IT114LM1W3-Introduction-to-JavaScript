/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here

const x = 51;

if (randomNumber > 50) {
  console.log(randomNumber,`is more than fifty.`);
}


// TODO 2.2 Display whether the random number is odd or even
// Your code here
if (randomNumber % 2 == 0) {
    console.log(randomNumber,`is even.`);
  } else {
    console.log(randomNumber,`is odd.`);
  }
// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
if (randomNumber % 3 == 0 && randomNumber % 5 == 0) {
    console.log("fizzbuzz");
  } else if (randomNumber % 3 == 0) {
    console.log("fizz");
  } else if (randomNumber % 5 == 0) {
    console.log("buzz");
  } else{
    console.log(randomNumber,`is the number.`);
  }

// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
const toDisplay = randomNumber % 2 === 0 ? "Even" : "Odd";
console.log("toDisplay", toDisplay);


// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: A switch statement in JavaScript is used to perform different actions based on different conditions. It provides a concise and readable way to compare a single expression against multiple cases, making it useful when you want to execute different code blocks based on the value of a variable or an expression, particularly when you have a limited number of possible values or want to avoid long if-else chains.
console.log("A switch statement in JavaScript is used to perform different actions based on different conditions. It provides a concise and readable way to compare a single expression against multiple cases, making it useful when you want to execute different code blocks based on the value of a variable or an expression, particularly when you have a limited number of possible values or want to avoid long if-else chains.")
// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10;


// Your code here
for (let i = 1; i <= n; i++) {
    console.log(i);
  }

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
let a = 0;
while (a < list.length) {
  console.log(list[a]);
  a++;
}
// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: The difference between a while loop and a do-while loop is that the while loop checks the condition before executing the loop statements, while the do-while loop executes the loop statements at least once before checking the condition    .  
 console.log("The difference between a while loop and a do-while loop is that the while loop checks the condition before executing the loop statements, while the do-while loop executes the loop statements at least once before checking the condition.")
// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
for (const item of list) {
    console.log(item);
  }
// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
for (let index in list) {
    console.log(list[index]);
}
// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
list.forEach(function(value) {
    console.log(value);
  });
// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: for of loop: Use this loop when you want to iterate over the values of an iterable object, such as an array or a string, and you don't need to access the index of each element. forin loop: Use this loop when you want to iterate over the properties of an object, such as object keys or enumerable properties. .forEach method: Use this method when you want to iterate over each element in an array and perform a specific action on each element, and you don't need to break out of the loop prematurely.
console.log("for of loop: Use this loop when you want to iterate over the values of an iterable object, such as an array or a string, and you don't need to access the index of each element. forin loop: Use this loop when you want to iterate over the properties of an object, such as object keys or enumerable properties. .forEach method: Use this method when you want to iterate over each element in an array and perform a specific action on each element, and you don't need to break out of the loop prematurely.")
// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing


try {
  if (denominator === 0) {
    throw new Error("Division by zero error");
  } else {
    console.log(numerator / denominator);
  }
} catch (error) {
  console.error(error);
} finally {
  console.log("Cleaning up resources");
}



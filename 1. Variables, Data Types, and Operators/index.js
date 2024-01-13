/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var val = 1.1;

console.log(val);
// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let num = 1.2;
console.log(num);

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
// there is an error if you try reassinging the constant value of the variable.
const val1 = 1.3;

console.log(val1);
console.log("There is an error if you try reassinging the constant value of the variable.")
// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 
console.log("In JavaScript, var, let, and const are used to declare variables. The main difference between them is how they handle variable scope and reassignment. var is globally scoped or function/locally scoped, can be re-declared and updated. let is block-scoped, meaning it is only available within the block it is declared in. const is also block-scoped and cannot be reassigned after it is declared.")
// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
const sum = 1 + .4;
console.log(sum);
// Checkpoint 1.2 What operators did you use?
// Answer: Addition
// Your code here
console.log("I used Addition operator.")
// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
let str1 = "1";
let str2 = ".6";
let result = str1 + str2;
console.log(result);
// Checkpoint 1.3 What operators did you use?
// Answer: Concatenation
console.log("I used Concatenation")
// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
let a = true;
let b = false;

console.log(a && b);
console.log(a || b); 
console.log(!a);

// Checkpoint 1.4 What operators did you use?
// Answer: AND, OR, and NOT
console.log("I used AND, OR, and NOT")

// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
let c = 5;
let d = 10;

console.log(c > d);

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: In JavaScript, [] == false evaluates to true. This happens because the == operator coerces both operands to a common type before comparison. An empty array [] is a falsy value, and when compared to a boolean false, it is coerced to 0, which is also false, hence the comparison returns true.
// Your code here
console.log("In JavaScript, [] == false evaluates to true. This happens because the == operator coerces both operands to a common type before comparison. An empty array [] is a falsy value, and when compared to a boolean false, it is coerced to 0, which is also false, hence the comparison returns true")
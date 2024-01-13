/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here

console.log(numbers[0], numbers[4], numbers[numbers.length - 1]);

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
console.log("Min",Math.min(...numbers));
console.log("Max",Math.max(...numbers));
const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;
console.log("Average:", average);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: In Python, lists can store elements of different data types, while arrays in JavaScript typically store elements of the same data type. In JavaScript, comparing arrays can be more complex because the equality operator (== or ===) checks for reference equality rather than value equality.
console.log("In Python, lists can store elements of different data types, while arrays in JavaScript typically store elements of the same data type. In JavaScript, comparing arrays can be more complex because the equality operator (== or ===) checks for reference equality rather than value equality.")

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
let it114l = {
    courseCode: "IT114L",
    name: "WEB SYSTEMS AND TECHNOLOGIES (LABORATORY)",
    units: 1,
    numberOfStudents: 40
  };
  console.log(it114l)

  // Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
it114l.professorName = "Job Lipat";
console.log("Professor Name:", it114l.professorName);

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here

let courses = [
    {
        courseCode: "IT114L",
        name: "WEB SYSTEMS AND TECHNOLOGIES (LABORATORY)",
        units: 1,
        numberOfStudents: 40,
        professorName: "Job Lipat"
    },
    {
        courseCode: "IT114",
        name: "WEB SYSTEMS AND TECHNOLOGIES",
        units: 2,
        numberOfStudents: 40,
        professorName: "Job Lipat"
    },
];
    console.log(courses)

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
let totalUnits = courses.reduce((total, course) => total + course.units, 0);
console.log("Total Number of Units:", totalUnits)

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: Python and JavaScript both organize code with objects, but Python wraps everything in objects while JavaScript has special primitive types. They share key features like inheritance, but differ in default object comparison and how classes are defined.
console.log("Python and JavaScript both organize code with objects, but Python wraps everything in objects while JavaScript has special primitive types. They share key features like inheritance, but differ in default object comparison and how classes are defined.")

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
let newNumbers = [...numbers, 100];

console.log("Original array: ",numbers);
console.log("Copy of array: ",newNumbers);

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
let { courseCode, units } = { ...it114l };

console.log("Course code: ",courseCode);
console.log("Units: ",units);
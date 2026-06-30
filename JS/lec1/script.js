alert("heloooooo"); // to give alert on window

// number, alphabet, _ and dollar sign are allowed in variable names

// fullName="John Doe"; 


// var - can be re-declared and updated
// let - can be updated but not re-declared
// const - cannot be updated or re-declared

// var age = 20;
// var age = 30; // re-declared

// let age = 20;
// age = 30; // updated

// const age = 20; // cannot be updated or re-declared

// string - sequence of characters
// let name = "John Doe"; // double quotes
// let name = 'John Doe'; // single quotes

// console.log(typeof name); // output: string


let undefinedVariable; // variable declared but not assigned a value
// console.log(undefinedVariable);

let nullVariable = null; // variable assigned a null value
// console.log(nullVariable);


let isActive = true; // boolean value
// console.log(isActive);   

let myArray = [1, 2, 3, 4, 5]; // array
// console.log(myArray); // output: [1, 2, 3, 4, 5]

let myObject = { name: "John", age: 30 }; // object
// console.log(myObject); // output: { name: "John", age: 30 }


const name = "jay";
const age = 20;
// console.log(`My name is ${name} and I am ${age} years old.`); // output: My name is jay and I am 20 years old.


//operators
// Arithmetic operators: +, -, *, /, %, ++, --
// Assignment operators: =, +=, -=, *=, /=, %=
// Comparison operators: ==, ===, !=, !==, >, <, >=, <=
// Logical operators: &&, ||, !
// Ternary operator: condition ? value1 : value2

// conditional statements
// if, else if, else, switch

// if (age >= 18) {
//     // console.log("You are an adult.");
// }else {
//     // console.log("You are a minor.");
// }

// switch (age) {
//     case 18:
//         // console.log("You are 18 years old.");
//         break;
//     case 20:
//         // console.log("You are 20 years old.");
//         break;
//     default:
//         // console.log("Age is not 18 or 20.");
// }
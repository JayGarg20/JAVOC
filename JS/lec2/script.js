// loops

// initialization
//condition check
// increment/decrement

// for loop
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// while loop
// let j = 0;
// while (j < 5) {
//     console.log(j);
//     j++;
// }

// do while loop
// let k = 0;
// do{
//     console.log(k);
//     k++;
// }while(k < 5)

// array methods
let myArray = [1, 2, 3, 4, 5];

// push() - adds an element to the end of the array
myArray.push(6); // output: [1, 2, 3, 4, 5, 6]

// pop() - removes the last element from the array
myArray.pop(); // output: [1, 2, 3, 4, 5]

// length - returns the number of elements in the array
// console.log(myArray.length); // output: 5        

// unshift() - adds an element to the beginning of the array
myArray.unshift(0); // output: [0, 1, 2, 3, 4, 5]

// shift() - removes the first element from the array   
myArray.shift(); // output: [1, 2, 3, 4, 5]

// indexOf() - returns the index of the first occurrence of an element in the array
// console.log(myArray.indexOf(3)); // output: 2

// includes() - checks if an element is present in the array
// console.log(myArray.includes(3)); // output: true

// types of for loop 
// for of loop
// for (let value of myArray) {
//     // console.log(value); // output: 1, 2, 3, 4, 5
// }

// for in loop
// for (let index in myArray) {
//     // console.log(index); // output: 0, 1, 2, 3, 4
// }

// forEach() - executes a provided function once for each array element
// myArray.forEach(function(value, index) {
//     // console.log(`Index: ${index}, Value: ${value}`); // output: Index: 0, Value: 1 ... Index: 4, Value: 5
// });

// map() - creates a new array with the results of calling a provided function on every element in the array
let newArray = myArray.map(function(value) {
    return value * 2;
});

// console.log(newArray); // output: [2, 4, 6, 8, 10]

// filter() - creates a new array with all elements that pass the test implemented by the provided function 
let filteredArray = myArray.filter(function(value) {
    return value > 2;
});

// console.log(filteredArray); // output: [3, 4, 5]

// reduce() - applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
let sum = myArray.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
// console.log(sum); // output: 15

// find() - returns the value of the first element in the array that satisfies the provided testing function
let foundValue = myArray.find(function(value) {
    return value > 3;
});
// console.log(foundValue); // output: 4

// functions
// function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// console.log(greet("John")); // output: Hello, John!

// function expression
const greetExpression = function(name) {
    return `Hello, ${name}!`;
};

// console.log(greetExpression("Jane")); // output: Hello, Jane!

// arrow function
const greetArrow = (name) => {
    return `Hello, ${name}!`;
};

// console.log(greetArrow("Bob")); // output: Hello, Bob!


let b = prompt("Enter a number: ");
if (b % 2 === 0) {
    alert(`${b} is an even number.`);
} else {
    alert(`${b} is an odd number.`);
}
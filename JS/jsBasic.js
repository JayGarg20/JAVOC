// your code goes here
// Intriduction of JS
// What can javascript do?
// Js is programming language of web and it can calculate,manipulate and validate data ,it can update  and change html and css

// JS can change HTML content,HTML Attribute values,HTML styles css,it can hide HTML element ,it can show HTML elements


// Where we can use JS
// <script>tag
// In Html ,Js code is inserted in between <script>and</script> tag


// Js functions and events
// js in <head>or <body>
// External Js
// it separates HMLT and code
// it make HTML and js easier to read and maintain
// chached js file can speed up the page load


// External References
// with a full url(a full web address)
// with a file path (like /js/)
// without any path


// javascript Display possibities

// writing into an HTMl elements ,using innerHTML,innerText
// witting into HTML output using document.write()
// writting into an alert box ,using window.alert()
// writting into browser console,using console.log()


// Note->using document.write() after an HTML socument is loaded ,will delete all existing HTML

// window.print()

// js Syntax

// js syntax two types of values
// Literals(fixed values)
// variable(variable values)

// 10
// 10.33

// 'John'
// "John"


// keywords
// Js keywords are used to define actions to perform 
// const ,let,var, if,switch,for,return,function,try

// case sensitive
// eg js does not interpret LET or Let as keyword let

// Define a variable
// let x; 
// assign  the value 6 to x
// x=6;
// console.log(x)

// Js Identifiers
// Must start with letter _,$
// can contain digits after the first character
// cannot be reserve keyword(let,const)
// Are case-sensitive


// Names="hello hii"
// names="kjfn jsb"
// console.log(names)
// console.log(Names)

// Js Operators(=)

// */-+
// console.log(5+9)
// console.log("akjfln"+"  "+ "ajlanf")

/*
console.log(5+5);
console.log('5'+5);
console.log(4+5+'5')
*/

// let $="hello"
// let $$=4;
// console.log($)
// console.log($$)

// // upper camelcase
// FirstName
// LastName
// // lower camelcase
// firstName
// lastName


// Js variable
// Js variable are container for data or these are label for data values

// let x=45;
// let y=35;
// let z=x+y;
// console.log(z);

// const x=5;
// const y=56;
// const z=x+y;
// console.log(z)

// let x;
// console.log(x);

// var x=5;
// var y=45;
// var z=x+y;
// console.log(z);

// x=5;
// y=45;
// z=x+y;

// console.log(z)
// <!--<!DOCTYPE html>-->
// <!--<html>-->
// <!--<head>-->
// <!--<script>-->
// <!--function myFunction() {-->
// <!--  document.getElementById("demo").innerHTML = "Paragraph changed.";-->
// <!--}-->
// <!--</script>-->
// <!--</head>-->
// <!--<body>-->
// <!--<h2>Demo JavaScript in Head</h2>-->

// <!--<p id="demo">A Paragraph</p>-->
// <!--<button type="button" onclick="myFunction()">Try it</button>-->

// <!--</body>-->
// <!--</html-->


// <!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<button onclick="window.print()">
    print this page
</button>
</body>
</html>
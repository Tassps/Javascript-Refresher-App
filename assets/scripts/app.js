// import { apiKey } from "./util.js";

// import apiKey from "./util.js";
// import { apiKey, abc as content } from "./util.js";
// import * as util from "./util.js";

// console.log(util.apiKey);
// console.log(content);

// const userMessage = "Hello World!!!";

// console.log(userMessage);
// console.log(userMessage);

// Variables, Values and Operators

// console.log(10 + 5); // I used the + operator to add values
// console.log(10 / 5); // I useed the / operator to devide values
// console.log(10 - 5); // I used the - operator to subtract values
// console.log(10 * 5); // I used the * operator to multiply values

// console.log("Hello" + " world"); // I used the + operator to concatenate the two strings
// console.log(10 === 5); // I used the === sign to check for equality
// console.log(10 === 10); // I used the === sign to check for equality
// console.log(10 < 10); // I used the <, > operators to check if the values are smaller or greater
// console.log(10 > 10);
// console.log(10 <= 10); // I used the <=, => operators to check if the values are greater or equal or smaller or equal
// console.log(10 >= 10);

// Functions and parameters

// function greet() {
//   console.log("Hello!"); // Defined a function for demonstration purposes
// }

// function greetUser(userName, message = "Hello!") {
//   // I added a default value for purposes of demonstration
//   console.log(userName); // I defined the function greetUser and added 2 parameters to it
//   console.log(message);
// }

function createGreeting(userName, message = "Hello!") {
  // console.log(userName);
  // console.log(message);
  return "Hi, I am" + userName + ". " + message;
}

// greet(); // Calling or invoking the function greet

// greetUser("Max"); // I called the function greetUser and placed 2 input values in it
// greetUser("Manuel", "Hello, what's up?"); // I called the function greetUser and placed a new set of input values in it

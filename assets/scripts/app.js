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

// This function creates a greeting string now for a user
// function createGreeting(userName, message = "Hello!") {
//   // console.log(userName);
//   // console.log(message);
//   return "Hi, I am " + userName + ". " + message;
// }

// greet(); // Calling or invoking the function greet

// greetUser("Kostas"); // I called the function greetUser and placed 2 input values in it
// greetUser("George", "Hello, what's up?"); // I called the function greetUser and placed a new set of input values in it

// const greeting1 = createGreeting("Kostas"); // I stored the fuction return value in a constant variable for a readability perspective
// console.log(greeting1);

// const greeting2 = createGreeting("George", "Hello, what's up?"); // I stored the function return value in a constant variable for a readability perspective
// console.log(greeting2);

// Arrow functions

// I made an anonymous arrow function, which is exported by default and carries no name
// export default (userName, message) => {
//   console.log("Hello");
//   return userName + message;
// };

//Exercise: Working with Functions

// My task is to write a new function that should be named combine and have the following characteristics:
// 1. Accept three input values
// 2. Calculate anew value based on the three input values: a * b / c (if a, b & c are the input values)
// 3. Return the calculated result

// function combine(a, b, c) {
//   const result = (a * b) / c; // I made a const variable called result where I placed the the parameters which will be calculated
//   return "The combined number is " + result; // The function when called will return a string plus the result variabels value
// }

// const sum = combine(10, 10, 10); // I made a const variable called sum which has as value the combine function where I passed my desired values to the parameters
// console.log(sum); // I will be console logging the value of the sum variable in the console

// Objects and Classes

// I made an object called user which contains the values of name and age
// const user = {
//   name: "Kostas",
//   age: 30
// };

// const user = {
//   name: "Kostas",
//   age: 30,
//   greet() {
//     console.log("Hello!"); // I made a method called greet inside the object
//     console.log(this.age); // Inside the greet method which bellongs to the user object, I can use the this. keyword to access the properties and methods that bellong to the user object
//   },
// };

// console.log(user); // I'm calling the object user in the console
// console.log(user.name); // I'm accessing the name field of the user object in the console. The . is to access any values in the object
// user.greet();

// I created a blueprint, a class called User, which be later be used to create the actual objects
// class User {
//   // I added a constructor function inside the class, and used it to accept parameters, input values
//   constructor(name, age) {
//     // With the help of this. keyword I store the parameter values inside properties of the object that will be created based on the class
//     this.name = name;
//     this.age = age;
//   }
// The greet method is a part of the blueprint
//   greet() {
//     console.log("Hi!");
//   }
// }

// I'm using the class blueprint by instantiating it with help of the new keyword, which creates a new object based on the User blueprint class.
// const user1 = new User("John", 31);
// console.log(user1);
// user1.greet(); // I called the greet method of the new object, user1, which comes from the blueprint class User

// Arrays & Array Methods like map()

// Where objects allow you to group values together with key-values pairs, the idea behind arrays is to have just values, which are stored in a certain order and which can be accessed by their position in that list.

const hobbies = ["Jogging", "Chess", "Series"]; // I made an array of hobbies

console.log(hobbies[0]); // I accessing the value with the index 0 in the hobbies arrray

hobbies.push("Gym"); // I'm using the built-in utility method called push for the hobbies array
console.log(hobbies);

// What this code here does is, it executes the function inside the method automatically behind the scenes for every item in the hobbies array, including the "Gym" item.
// const index = hobbies.findIndex((item) => {
//   return item === "Jogging"; // Here, for every item, it compares that item with the help of the comparison operator. If those two are equal, this function returns true.
// });

// I shorten the code above and defined the arrow function inline
const index = hobbies.findIndex((item) => item === "Jogging");

console.log(index);

// The map method allows you to transform every item in an array to another item.
hobbies.map((item) => item + "!");

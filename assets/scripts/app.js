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

// const hobbies = ["Jogging", "Chess", "Series"]; // I made an array of hobbies

// console.log(hobbies[0]); // I accessing the value with the index 0 in the hobbies arrray

// hobbies.push("Gym"); // I'm using the built-in utility method called push for the hobbies array
// console.log(hobbies);

// What this code here does is, it executes the function inside the method automatically behind the scenes for every item in the hobbies array, including the "Gym" item.
// const index = hobbies.findIndex((item) => {
//   return item === "Jogging"; // Here, for every item, it compares that item with the help of the comparison operator. If those two are equal, this function returns true.
// });

// I shorten the code above and defined the arrow function inline
// const index = hobbies.findIndex((item) => item === "Jogging");

// console.log(index);

// The map method allows you to transform every item in an array to another item.
// const editedHobbies = hobbies.map((item) => item + "!"); // This adds an ! to every string inside the hobbies array, and it returns a new array called editedHobbies.

// In the code below, I can create any kinds of values using map, any objects for any shapes, numbers, strings, booleans, whatever I want.
// Bellow, in that example, I'll in the end, create a new array that's full of JavaScript objects, where every object has a text key, which value is the value from the old hobbies array.
// const editedHobbies = hobbies.map((item) => ({ text: item }));

// console.log(editedHobbies);

// Coding exercise 2: Array methods

// My task is to add the missing logic to a transformToObjects() fucntion that should transform a list of numbers into a list of JavaScript objects.
// In the newly returned array, every object must have a val key and the input array's number as value.
// For example, for the provided input [1, 2, 3] the transformToObjects([1, 2, 3]) function should return [{val: 1}, {val: 2}, {val: 3}].

// Inside the transformToObjects() function, I used the map() method to transform all values of the received numberArray parameter (which will be an array of numbers).
// The code bellow uses an arrow function. Of course, I could also use a "normal function" (with the function keyword).
// function transformToObjects(numberArray) {
// map() takes a function as an argument - this arrow function bellow will be executed for every array item.
//   return numberArray.map((number) => {
//     return { val: number };
//   });
// }

// Destucturing

// Related to Arrays and Objects, there are two crucial, relatively new and modern JavaScript features.
// The first feature is about destructuring Arrays and Objects.

// const userNameData = ["Kostas", "Petrakis"];
// In the code above we wanna work with both the first and the last name. For that reason we could create a new constant or variable.

// const firstName = userNameData[0]; // With this I extract the first name of the Array userNameData
// const lastName = userNameData[1]; // with this one I extract the last name of the Array userNameData

// The code above can be shorthened
// Instead of using the code above to and create new constants, we could create these two constants or variables in one single step.

// By adding [] on the left side of the equal sign below, we shorten it.
// On the right side, they will create a new Array. On the left side they will destructure that Array, which simply means that the syntax bellow can be used to pull values out of the right side Array.
// const [firstName, lastName] = ["Kostas", "Petrakis"]; // The first constant or variable on the left side will be mapped to the first Array element on the right side, the second one to the second element, and so on.

// console.log(firstName);
// console.log(lastName);

// Now, this destructuring syntax exists also for Objects, not only for Arrays.

// For example, let's say we had a user that looks like the code bellow.
// const user = {
//   name: "Kostas",
//   age: 31,
// };

// Now again, we might want to store the values above in separate constants or variables.
// For that, of course, we could create again two constants.
// const name = user.name;
// const age = user.age;

// The code above would work, but again, it can be shorthened, destructured.
// In the case bellow, since we're dealing with an object, we write {} on the left side of the equal sign.
// On the right side, the {} will be used to create an object. On the left side, the {} are used for destructuring. The same way as we used the [] for destructuring an Array before.

// On the left side of the equal now, I can pull out name and age. Though, these names are now not up to me.
// Instead I have to use the field names that are defined in the object.
// For the Array destructuring above, these names were up to me because the elements were pulled out by position.
// For the Object they are pulled by name, so by property name. And therefore I have to use the same property names in the {} on the left side.
// Though, I could assign an alias by using a colon and then defining my alias name on the right side of the colon {name: userName}.
// const { name: userName, age } = {
//   name: "Kostas",
//   age: 31,
// };

// console.log(userName);
// console.log(age);

// Destructuring in Function Parameter Lists

// The destructuring syntax explained in the previous examples can also be used in function parameter lists.
// For example, if a function accepts a parameter that will contain an object it can be destructured to "pull out" the object properties and make them available as locally scoped variables.
// Locally scoped variables, meaning variables only available inside the function body.
// Bellow I will present an example:

// I define a function called storeOrder that takes one parameter (order)
// function storeOrder(order) {
//   localStorage.setItem("id", order.id); // In this line, I store the id property of the order object in the browser's local storage. The setItem method is used to save the data with the key "id".
//   localStorage.setItem("curency", order.currency); // In this line, I store the currency property of the order object in the browser's local storage. The setItem method is used to save the data with the key "currency".
// }
// localStorage is a web storage object that allows me to save key/value pairs in a web browser. Data stored here persists even when the browser is closed and reopened.

// Instead of accessing the order properties via the "dot notation" inside the storeOrder function body, I could use destructuring like this:
// I defined a function called storeOrder again to store an order's details in local storage
// function storeOrder({ id, currency }) {
// Destructuring
// The line above extracts the 'id' and 'currency' properties from the passed object directly
//   localStorage.setItem("id", id); // I store the id in local storage under the key "id"
//   localStorage.setItem("currency", currency); // I store the currency in local storage under the key "currency"
// }
// The destructuring syntax is the same as I did in the previous examples - just without creating a constant or variable manually.
// Instead, id and curency are "pulled out" of the incoming object (i.e., the object passed as an argument to storeOrder).
// It's very important to understand, that storeOrder still only takes one parameter on the example above! It does not accept two parameters.Instead, it's one single parameter - an object which then just is destructured internally.

//Finally, the function above would be called like this:
// storeOrder({ id: 5, currency: "USD" }); // The function extracts id and currency from the provided object.
// The argument passed to storeOrder function is an object with properties: id and currency. The argument is an object literal.
// Although the object contains multiple properties, it is still considered a single argument because it is a single object.
// In JavaScript, functions can accept objects as arguments, which allows me to pass multiple related values together.

// Spread operator

// Now, the other crucial concept that's related to array and objects about which I should know is the special spread operator that exists in JavaScript.
// For that, I will be merging for an example two hobbies lists.

// const hobbies = ["Basketball", "Singing"];

// const newHobbies = ["Philosophy"];

// If I would want to create a merged list, I could do that by creating a new list with the [].
// Insde the [] I'm using the special spread operator which looks like this [...].
// The 3 dots ... is a JavaScript syntax. Next to them I will add the name of the first array I wanna merge into the new Array.

// const mergedHobbies = [...hobbies]; // These three dots will pull out all the elements of the hobbies Array, and add them as separate, comma separated values to this new list.

// If I would just add hobbies, and new hobbies like in the example bellow, I would get a new Array, which when output to the console, will look like an Array with two nested arrays inside it.
// const mergedHobbies = [hobbies, newHobbies];
// console.log(mergedHobbies);

// If instead I use the ... in front of the arrays to use this spread operator, I will pull out the values from the Arrays hobbies and newHobbies and add them as standalone values to the mergedHobbies Array.
// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// I can also use the spread operator on objects.
// For example on the user and extendedUser objects.

// const user = {
//   name: "Kostas",
//   age: 30,
// };

// Bellow, the spread operator will pull out all the key vallue pairs from the user object, and add them as key values pairs to the extendedUser object.
// const extendedUser = {
//   isAdmin: true,
//   ...user,
// };

// console.log(extendedUser);

// Control structures

// if statements
// if statement is called a control structure which code gets executed
// The idea here is that I compare values and then I execute the code inside of the if statement only if this condition is met.
// Now the if statement also allows me to add an else statement to define the code that should be executed if the condition is not met.
// It also allows me to add else if statements if I want to check for more condintions if the first condition wasn't met.
// And I can add as many else if statements there as I want, but only one else branch.

// if (10 === 10) {
//   //...
// } else if (5 === 5) {
//   //...
// } else if (2 === 2) {
// } else {
// }

// Now of course, checking for hard-coded values like in the example above makes absolutely no sense. The first condition will always be true for example.
// Instead, typically, of course, I'll use if statements to check content I don't know in advance.
// For example bellow:

// const password = prompt("Mine password"); // Here, I can get some dummy password by using the built-in prompt funciton. This a function provided by the browser which will prompt the user for input.

// So, with the constant above I'm now fetching the "Mine password" and I could now check if the password is equal.
// For example:

// if (password === "Hello") {
//   // Here I check if the password is equal to "Hello" and I log it into the console if that's the case.
//   console.log("Hello works");
// } else if (password === "hello") {
//   // If the first condition doesn't met, I check here in the second one if the password is equal to "hello" and log it into the console.
//   console.log("hello works");
// } else {
//   // If the second condition is not the case too, then here I execute a fallback code where I say "Access not granted.".
//   console.log("Access not granted.");
// }

// For loop

// JavaScript knows different types of for loops, but in the example here I will code the for loop where I loop through an Array.
// For loops are about executing the same piece of code multiple times.
// For example:

// const hobbies = ["Gym", "Chess"];

// Now, if I want to execute some code, for every entry of the hobbies Array, I will create a for loop.
// For example:

// I create a constant called hobby that will be recreated for every iteration of that for loop.
// for (const hobby of hobbies) {
// With the special of keyword, I tell JavaScript that it should create a new constant for every item in the hobbies Array and it should execute the code between the {} as often as needed to go through all the elements of the hobbies Array. So 2 times.
//   console.log(hobby); // In the console I will see "Gym" and "Chess" being output, because of this line of code being executed multiple times.
// }

// Using functions as Values

// Here I will pass functions as values to other functions. For example:

// function handleTimeout() {
//   console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//   console.log("Timed out ... again!");
// };

// And now I can also pass the first function or the constant that contains a function as a value. For example:

// setTimeout(handleTimeout, 2000); // In this line I omit the parantheses here "handleTimeout()", because I don't want to execute this function right away. I instead pass the function as a value to setTimeout.
// The second argument defines the number of milliseconds JavaScript should wait until it executes the function which is the first argument.

// setTimeout(handleTimeout2, 3000); // I do the same with the function handleTimeout2.

// setTimeout(() => {
// Here, I essentialy do the same as in the previous timers by defining the function in the place where it's needed. I still only defining it. I'm not executing it immediately.
//   console.log("More timing out...");
// }, 4000);

// I can also pass functions as values to functions that I build, and that are not necessarily built-in functions like setTimeout.
// For example:

// function greeter(greetFn) {
// greeter function here accepts a greet function parameter, so a regular parameter in the end, but a parameter which expects to get a function as value.
//   greetFn(); // Inside of greeter I can execute  greet function like this, calling it as a function by adding ().
// }

// greeter(() => console.log("Hi")); // The arrow function is being executed because I'm passing it as value for the greetFn parameter to the greeter function.
// And inside of that greeter function I'm then executing the greetFn parameter, the value that's received on that parameter, which is the arrow function.

// Defining functions inside of functions

// This makes sense in the context of React. For example:

// Here I defined a function called init
// function init() {
// init contains another function defined inside of it, called greet, which console log "Hi!".
// function greet() {
//   console.log("Hi!");
// }
// greet(); // Inside of init I execute greet. I can't execute greet outside of init though, because it's scoped this init function. Same happens with a variable I define inside init.
// }

// init(); // Here I can execute init because it scoped to the overall file since init is not nested into another function.

// References vs Primitive Values
// Strings, numbers, booleans are all primitives. What's special about them in JavaScript is that we can't edit them.
// I can overwrite them of course and store something else, but that would be a brand new primitive. The previous primitive will simply be thrown away. It's not edited to be the new primitive.
// For example:

// let userMessage = "Hello!"; // This here is considered a primitive value

// userMessage = "Hello there!"; // Here I overwrite the value of the variable. I don't edit it. That's a brand new string. The old string, which was stored in memory, will be just thrown away, it's not edited to be this string in this line.

// userMessage = userMessage.concat("!!!"); // Even if I execute a method on userMessage, this will produce a new string again and not edited.

// When it comes to arrays and objects though, these ones I can edit. Because arrays are objects and objects in JavaScript are so-called reference values.
// For example:

// const hobbies = ["Gym", "Chess"];

// hobbies.push("Basketball"); // Here I edited the original Array. Push indeed edited the original array, it mutated the original array.

// console.log(hobbies);

// In the end, the process of editing in the code above simply means that in a variable I don't store the value, but instead the address of that value in memory.
// So that array is stored somewhere in memory, so in the memory of my computer, and it's the address of that place in memory that's stored in the hobbies constant.
// When I call push, JavaScript will reach out to that address, open the value in that address, and add the item "Basketball" to the existing array in memory.
// So the array in memory changes, the address does not.
// The address matters only when I deal with objects. There, it's the address that's being stored, and that's all the reason why I can edit the hobbies array despite using constant.
// const technically does not mean that the value can't be edited, but that the variable can't be overwritten.

// JS Array functions

// Not really next-gen JavaScript, but also important: JavaScript array functions like map(), filter(), reduce() etc.
// map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
// For example:

// const array2 = [2, 3, 5, 7]; // I declared a constant called array2 which contains an array with four numbers.

// const map2 = array2.map((x) => x + 4); // In this new constant I call the map method on the array2. The map method creates a new array by calling a provided function on every element in the calling array. The function takes a single parameter (x) and returns x + 4.

// console.log(map2);

// find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
// For example:

// const array2 = [3, 7, 9, 21, 15]; // In this line I declare a constant variable named array2 and assign it an array with 5 elements.

// const foundNumb = array2.find((num) => num > 10); // In this line I declare a constant variable named foundNumb. After I call the .find() method on the array2, which takes an arrow function as its argument. This function is executed on each element of the array until it finds the first element that satisfies the provided condition.
// If an element greater than 10 is found, it is returned by the .find() method and assigned to the foundNumb variable. If no such element is found, undefined is returned.

// console.log(foundNumb); // Here, since the .find() method found the value 21 as the first element greater than 10 in the array2 array, 21 is printed to the console.

// findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
// For example:

const array2 = [3, 10, 18, 20, 7]; // In this line I defined an array named array2 with a set of 5 elements.

const isEvenNumb = (element) => element % 2 === 0; // Here I defined a function called isEvenNumb using an arrow function. This function I used takes an argument element and returns true if the element is an even number.
// The function isEvenNumb checks if a number is even by using the modulus operator (%).

console.log(array2.findIndex(isEvenNumb)); // Here I'm using the findIndex() method on array2. Pass the isEvenNumb function as a callback to findIndex.
// findIndex iterates over array 2 and applies isEvenNumb to each element. It returns the index of the first element that satisfies the condition in 'isEvenNumb'.
// // 8. 'console.log' prints the result to the console, which is expected to be 1 because the element at index 1 (10) is the first even number in the array.

// indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.
// For example:

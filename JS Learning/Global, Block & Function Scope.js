// Global scope: Accessible anywhere in the entire program
// File or module scope: Limited to the current file or module
// Function scope: Limited to the function where it's defined
// Block scope: Limited to the code block where it's defined

// ----------------------------------|Global scope|---------------------------------------

// Variable declared globally
const color = "blue";
function printColor() {
  console.log(color);
}
printColor(); // Prints: blue

// ----------------------------------|Block scope|---------------------------------------

const isLoggedIn = true;
if (isLoggedIn == true) {
  const statusMessage = "User is logged in.";
}
console.log(statusMessage);
// Uncaught ReferenceError: statusMessage is not defined

// ----------------------------------|Function scope|---------------------------------------

function myFunction() {
  var pizzaName = "Volvo";
  // Code here can use pizzaName
}
// Code here can't use pizzaName

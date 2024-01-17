// ----------------------------------------------------|Recursion|----------------------------------------------------------
/*
Recursion is a function solving a problem by breaking it into smaller parts and helping itself.
It stops when it knows the answer (base case) and continues breaking down the problem otherwise (recursive case).
*/

// Factorial
// 10*9*8*7*6*5*4*3*2*1 > the product of all numbers from nth to 1
const factorial = (n) => {
  // Base Case
  if (n === 0) {
    return 1;
    // Recursive case
  } else {
    return n * factorial(n - 1);
  }
};
console.log(factorial(10));

// Fibonacci
// 1 1 2 3 5 8 13 21 34 55 > The sum of previous two numbers
const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(10));

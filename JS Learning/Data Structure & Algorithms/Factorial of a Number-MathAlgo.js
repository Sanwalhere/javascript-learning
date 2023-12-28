//--------------------------------------------------|Math Algorithm|----------------------------------------------

/*
Fabonacci Sequence
Factorial of number
Prime number
Power of two
Recursion
Fabonacci Sequence with Recursion
Factorial of number with Recursion
*/

//--------------------------------------------------|Factorial of a Number|----------------------------------------------

// What I wrote

function factorial(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result = result * i;
  }
  return result;
}
console.log(factorial(5));

// The Actual Code

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(5));

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

//--------------------------------------------------|Recursive Factorial of a Number|----------------------------------------------

function recursiveFactorial(n) {
  if (n < 1) return 1;
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(5));

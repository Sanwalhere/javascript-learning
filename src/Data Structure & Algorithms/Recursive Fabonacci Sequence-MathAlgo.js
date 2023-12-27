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

//--------------------------------------------------|Recursive Fabonacci Sequence|----------------------------------------------

function recursiveFibonacci(n) {
  if (n < 2) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(9));

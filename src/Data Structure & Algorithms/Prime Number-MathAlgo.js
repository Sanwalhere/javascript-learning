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

//--------------------------------------------------|Prime Number|----------------------------------------------

// What I wrote

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime());

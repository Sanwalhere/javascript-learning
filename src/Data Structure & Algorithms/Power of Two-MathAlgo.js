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

//--------------------------------------------------|Power of Two|----------------------------------------------

// What I wrote

function isPowerOfTwo(n) {
  for (let i = 0; i < n; i++) {
    if (n === 1) return true;
    if (n === 2 ** i) return true;
  }
  return false;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(16));

// The Actual Code

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(16));

// More Efficient Way

function isPowerOfTwoBitWise(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitWise(1));
console.log(isPowerOfTwoBitWise(2));
console.log(isPowerOfTwoBitWise(5));
console.log(isPowerOfTwoBitWise(8));
console.log(isPowerOfTwoBitWise(16));

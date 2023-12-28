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

//--------------------------------------------------|Fabonacci Sequence|----------------------------------------------

// What I wrote

let value = 7;

function fibonacci(value) {
  let sequence = [];
  for (let i = 0; i < value; i++) {
    if (i <= 1) {
      sequence.push(i);
    } else sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

console.log(fibonacci(value));

// The Actual Code

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(7));

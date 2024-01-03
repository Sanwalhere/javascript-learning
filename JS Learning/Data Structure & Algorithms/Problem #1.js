/*
  > PROBLEMS:
  1) Finding the GCD(Greatest Common Divisor) using Euclidian Algoritm.
  2) Finding permutations and combinations of a list of numbers.
  3) Finding the longest common substring of a given string.
  4) Knapsack problem.
*/

//------------------------------------------------|PROBLEM #1|---------------------------------------------------

// Experiment:

function findingGCD(a, b) {
  let isEqualOfAB = a / b;
  let remainder = a % b;
  while (a % b === 0) {
    let divisible = b / remainder;
    if (divisible % 2 === 0) {
      console.log(remainder);
    }
  }
}

let a = 123 % 36;
console.log(a);

let b = 36 % 15;
console.log(b);

let c = 15 % 6;
console.log(c);

let d = 6 % 3;
console.log(d);

// Actual Solution:

function ab(a, b) {
  if (b === 0) {
    return a;
  } else {
    let remainder = a % b;
    return ab(b, remainder);
  }
}

console.log(ab(123, 36));

//--------------------------------------------------|Misc. Problems|----------------------------------------------

/*
Certesian Product
Climbing Staircase
Tower od Hanoi
*/

//--------------------------------------------------|Climbing Staircase|----------------------------------------------

// What I Wrote - Time complexity = O(2^n)

function climbingStairCase(n) {
  if (n < 2) {
    return 1;
  }
  return climbingStairCase(n - 1) + climbingStairCase(n - 2);
}

console.log(climbingStairCase(1));
console.log(climbingStairCase(2));
console.log(climbingStairCase(3));
console.log(climbingStairCase(4));
console.log(climbingStairCase(5));

//// Actual Code - Time complexity = O(n)

function climbingStaircase(n) {
  const noOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n - 1];
}

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));

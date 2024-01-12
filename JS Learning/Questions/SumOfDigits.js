// --------------------------------------------|Sum of digits|--------------------------------------------------

// Question 1: Sum of digits of a number
// 1287: 1+2+8+7 = 18

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

let result = sumOfDigits(1287);
console.log(result);

// --------------------------------------------|Count Number Of Digits|--------------------------------------------------

// Question 3: Count number of digits of a number
// 44388 = 5
// -7451 = 4
// 93 = 2

// O(n)
function countDigits(num) {
  num = Math.abs(num);
  let count = 0;

  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);

  return count;
}
console.log(countDigits(12345));

//O(1)
function countDigits(num) {
  num = Math.abs(num);
  return num === 0 ? 1 : Math.floor(Math.log10(num)) + 1;
}
console.log(countDigits(12345));

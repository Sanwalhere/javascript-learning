// --------------------------------------------|Sum of all natural numbers|--------------------------------------------------

// Question 2: sum of all natural numbers fror
// sum of 1 to 5 = 15

// O(n)
function sumOfNaturalNumbers(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfNaturalNumbers(5));

//O(1)
function sumOfNaturalNumbers(num) {
  return (num * (num + 1)) / 2;
}
console.log(sumOfNaturalNumbers(5));

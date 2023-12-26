//--------------------------------------------------|Count Values|------------------------------------------------------

const numbers = [1, 2, 3, 4, 5, 3, 2, 1, 1, 2, 99];
function countOccurences(numbers, searchElement) {
  let count = 0;
  numbers.reduce(function (accumulator, currentValue) {
    if (currentValue === searchElement) {
      count++;
    }
    return accumulator;
  }, 0);
  return count;
}
console.log(countOccurences(numbers, 1));

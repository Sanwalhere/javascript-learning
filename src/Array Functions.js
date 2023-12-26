//--------------------------------------------------|Array Functions|---------------------------------------------------------

const numbers = [-4, 5, 3, 4, 5, 6.3];
const isPositiveEvery = numbers.every(function (value) {
  return value >= 3;
});
const isPositiveSome = numbers.some(function (value) {
  return value <= 0;
});
const sorting = numbers.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log(numbers);
console.log(isPositiveEvery);
console.log(isPositiveSome);

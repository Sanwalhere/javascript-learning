//--------------------------------------------------|Function Overloading|---------------------------------------------------

function sum(...value) {
  if (value.length === 1 && Array.isArray(value[0])) {
    value = [...value[0]];
  }
  return value.reduce((a, c) => a + c);
}
console.log(sum([10, 2, 5, 5, 1]));

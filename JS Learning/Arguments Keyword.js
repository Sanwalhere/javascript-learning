//--------------------------------------------------|Arguments Keyword|----------------------------------------------

// Represents an array-like object containing the arguments passed to a function

function sum() {
  let total = 0;
  for (let value of arguments) {
    total += value;
  }
  return total;
}
console.log(sum(2, 43, 23, 54, 65));

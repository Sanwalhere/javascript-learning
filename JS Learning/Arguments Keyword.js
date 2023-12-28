//--------------------------------------------------|Arguments Keyword|----------------------------------------------

function sum() {
  let total = 0;
  for (let value of arguments) {
    total += value;
  }
  return total;
}
console.log(sum(2, 43, 23, 54, 65));

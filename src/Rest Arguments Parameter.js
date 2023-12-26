//--------------------------------------------------|Rest Arguments Parameter|----------------------------------------

function sum(...args) {
  return args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 4, 7, 4));

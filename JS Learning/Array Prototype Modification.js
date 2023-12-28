//--------------------------------------------------|Array Prototype Modification|-----------------------------------------

// Extending Array prototype with a sum method
Array.prototype.sum = function () {
  return this.reduce((a, c) => a + c, 0);
};

let nums = [1, 2, 3, 4, 5];
let sum = nums.sum();
console.log(sum);

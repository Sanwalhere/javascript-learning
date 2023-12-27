//--------------------------------------------------|Array Prototype Modification|-----------------------------------------

// Extending Array prototype with a sum method
Array.prototype.sum = function () {
  return this.reduce((a, c) => a + c, 0);
};

let nums = [1, 2, 3, 4, 5];
let sum = nums.sum();
console.log(sum);

//--------------------------------------------------|Array prototype Logic Calculation|----------------------------------------------

// --- We setted the calculate area function in Array prototype
// it works similar to: const calculate4 = radius.map(area)

let a = [33, 34, 3, 54, 65, 43];

let area = function (radius) {
  return Math.PI * radius * radius;
};

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

const calculate4 = a.map(area);

console.log(calculate4);
console.log(a.calculate(area));

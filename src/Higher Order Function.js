//--------------------------------------------------|Higher Order Function|----------------------------------------------

// --- Higher Order Function: A Function which takes another function as an argument or returns
// a function from it is known as higher order function.

let radius = [3, 1, 3, 8, 9, 5];

let area = function (radius) {
  return Math.PI * radius * radius;
};

let circumference = function (radius) {
  return 2 * Math.PI * radius;
};
// --- Short Similar Code 1
const calculate1 = function (radius, logic) {
  let output = [];
  for (let index of radius) {
    output.push(logic(index));
  }
  return output;
};
// --- Short Similar Code 2
const calculate2 = function (radius, logic) {
  return (output = radius.map((value) => logic(value)));
};
// --- Short Similar Code 3
const calculate3 = (radius, logic) =>
  (output = radius.map((value) => logic(value)));
// --- Short Similar Code 4
const calculate4 = radius.map(area);

console.log(calculate1(radius, area));
console.log(calculate2(radius, area));
console.log(calculate3(radius, area));
console.log(calculate4);

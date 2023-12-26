//--------------------------------------------------|Compound Assignment Operator|-----------------------------------------

let num = 5;
num %= 5;
console.log(num);

//--------------------------------------------------|Equality Check Operator|----------------------------------------------------------

console.log(10 == "10");

//--------------------------------------------------|Logical Operator|--------------------------------------------------------

let value = 107;
console.log(value > 100 && value < 200);

//--------------------------------------------------|Nullish Coalescing Operator|----------------------------------------

console.log(false ?? "Mo");

//--------------------------------------------------|Rest & Spread Operator |-----------------------------------------------

//--- In Object:
let obj = {
  name: "sanwal",
  age: 23,
  gender: "male",
  weight: 60,
};

let dataUpdate = {
  ...obj,
  age: 29,
  weight: 44,
};
console.log(dataUpdate);

//--- In Array:
let arr = ["Me", "Ahmed", 12, 66, "We Played!"];
console.log(arr);
console.log(...arr);

//--------------------------------------------------|Rest & Spread Operator|-----------------------------------------------

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

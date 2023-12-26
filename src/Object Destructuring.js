//--------------------------------------------------|Object Destructuring|-----------------------------------------------

// --- Def: Short way to extract values from objects and assign them to variables.

let obj = {
  name: "Sanwal",
  class: "12",
  subject: "JavaScript",
  dob: "12-June-2004",
  gender: "Male",
  exp: "beginner",
  age: 19,
};
console.log(obj);

// --- Without destructuring

let objName = obj.name;
let objdob = obj.dob;
let objGender = obj.gender;
console.log(objName, objdob, objGender);

// --- With destructuring

let { name, dob, gender } = obj;
console.log(name, dob, gender);

// --- To modify a single property and copy rest of properties

let newObj = {
  ...obj,
  class: "16",
  exp: "Expert",
};
console.log(newObj);

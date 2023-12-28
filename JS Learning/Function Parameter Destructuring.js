//--------------------------------------------------|Function Parameter Destructuring|-----------------------------------------------

// --- Def: It makes you to grab only the needed parts from object and passed to a function.

let person = {
  name: "Sanwal",
  class: "12",
  age: 19,
  subject: "JavaScript",
  dob: "12-June-2004",
  gender: "Male",
  exp: "beginner",
};
function printPersonDetails({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}

printPersonDetails(person);

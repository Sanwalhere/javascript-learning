//--------------------------------------------------|Function Parameter Destructuring|-----------------------------------------------

// Extract values from objects or arrays into distinct variables using syntax within function parameters

//EXAMPLE 1
let person = {
  name: "Sanwal",
  classs: "12",
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

//EXAMPLE 2
function information({ name, classs, age, exp }) {
  console.log(
    `He is ${name}, ${exp} in Programming, he study in ${classs}th grade, he is ${age} year old.`
  );
}
information(person);

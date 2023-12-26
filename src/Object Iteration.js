//--------------------------------------------------|Object Iteration|--------------------------------------------------------

let person = {
  name: "ali",
  dob: 30,
  class: 12,
};
for (let key in person) {
  console.log(person[key]);
}

//--------------------------------------------------|Object Iteration|--------------------------------------------------------

const aliBaba = {
  contact: 3182732495,
  dob: 33,
  fatherName: "Sanwal",
  passion() {
    console.log("Photoshop Artist");
  },
};
console.log(aliBaba.passion);
for (let key in aliBaba) {
  console.log(key, aliBaba[key]);
}
for (let key of Object.keys(aliBaba)) {
  console.log(key, aliBaba[key]);
}
for (let key of Object.entries(aliBaba)) {
  console.log(key, aliBaba[key]);
}

//--------------------------------------------------|Object Iteration and Find|--------------------------------------------

let library = [
  { name: "Adnan", id: 642717 },
  { name: "Sanwal", id: 237843 },
  { name: "Asad", id: 806544 },
];
console.log(students);
let findID = 237843;
let kid = library.find((library) => typeof library.name === "string");
console.log(kid);

//--------------------------------------------------|Object Iteration for Salary Calculation|--------------------------------

let salaries = {
  John: 100,
  Ann: 160,
  Peter: 130,
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}
console.log(`Total Salary : ${sum}`);

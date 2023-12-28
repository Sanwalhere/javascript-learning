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

//--------------------------------------------------|Iterating Array of Objects|----------------------------------------------

let std = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Smith",
    gender: "Female",
    dob: "1998-05-15",
    age: 24,
    grade: 3,
    subjects: ["Mathematics", "English", "Science"],
    interests: ["Reading", "Coding", "Music"],
    hobbies: ["Painting", "Chess"],
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Johnson",
    gender: "Male",
    dob: "1996-08-23",
    age: 26,
    grade: 4,
    subjects: ["History", "Physics", "Spanish"],
    interests: ["Photography", "Traveling", "Technology"],
    hobbies: ["Hiking", "Cooking"],
  },
  {
    id: 3,
    firstName: "Charlie",
    lastName: "Williams",
    gender: "Non-Binary",
    dob: "2000-03-10",
    age: 22,
    grade: 2,
    subjects: ["Art", "Biology", "Physical Education"],
    interests: ["Sports", "Writing", "Nature"],
    hobbies: ["Gardening", "Dancing"],
  },
  {
    id: 4,
    firstName: "David",
    lastName: "Jones",
    gender: "Male",
    dob: "1999-11-05",
    age: 23,
    grade: 5,
    subjects: ["Chemistry", "Computer Science", "Economics"],
    interests: ["Gaming", "Programming", "Finance"],
    hobbies: ["Playing Guitar", "Swimming"],
  },
  {
    id: 5,
    firstName: "Emma",
    lastName: "Brown",
    gender: "Female",
    dob: "1998-02-18",
    age: 24,
    grade: 3,
    subjects: ["French", "Mathematics", "Psychology"],
    interests: ["Art", "Reading", "Traveling"],
    hobbies: ["Drawing", "Listening to Music"],
  },
  {
    id: 6,
    firstName: "Frank",
    lastName: "Davis",
    gender: "Male",
    dob: "1995-09-30",
    age: 27,
    grade: 4,
    subjects: ["Geography", "Literature", "Music"],
    interests: ["History", "Technology", "Writing"],
    hobbies: ["Playing Piano", "Cooking"],
  },
  {
    id: 7,
    firstName: "Grace",
    lastName: "Miller",
    gender: "Female",
    dob: "2001-07-12",
    age: 21,
    grade: 2,
    subjects: ["Chemistry", "Physics", "Spanish"],
    interests: ["Science", "Photography", "Cycling"],
    hobbies: ["Painting", "Hiking"],
  },
  {
    id: 8,
    firstName: "Henry",
    lastName: "Wilson",
    gender: "Male",
    dob: "1999-04-25",
    age: 23,
    grade: 5,
    subjects: ["Computer Science", "Economics", "Mathematics"],
    interests: ["Gaming", "Programming", "Finance"],
    hobbies: ["Playing Guitar", "Swimming"],
  },
  {
    id: 9,
    firstName: "Ivy",
    lastName: "Moore",
    gender: "Female",
    dob: "2002-01-08",
    age: 20,
    grade: 3,
    subjects: ["Art", "Biology", "Physical Education"],
    interests: ["Sports", "Writing", "Nature"],
    hobbies: ["Gardening", "Dancing"],
  },
  {
    id: 10,
    firstName: "Jack",
    lastName: "Taylor",
    gender: "Male",
    dob: "1997-06-20",
    age: 26,
    grade: 4,
    subjects: ["History", "Physics", "Spanish"],
    interests: ["Photography", "Traveling", "Technology"],
    hobbies: ["Hiking", "Cooking"],
  },
];

let hobby = [];
for (let key of std) {
  hobby.push(key["hobbies"]);
  console.log(key["hobbies"]);
}
let subjects = [];
for (let key of std) {
  hobby.push(key["hobbies"]);
  console.log(key["hobbies"]);
}

function getdata1(hobbyInfo1) {
  return hobbyInfo1.map((value) => value["interests"][0]);
}
function getdata2(hobbyInfo2) {
  return hobbyInfo2.map((value) => value["interests"][1]);
}

let loopedArrayOfHobbies = [];

for (let i = 0; i <= 9; i++) {
  loopedArrayOfHobbies.push(getdata1(std)[i]);
  loopedArrayOfHobbies.push(getdata2(std)[i]);
}

console.log(loopedArrayOfHobbies);

const favouriteHobby = std.flatMap((v) => v.hobbies[0]);
const favouriteInterest = std.flatMap((v) => v.interests[0]);
let favouriteSubject = std.flatMap((v) => v.subjects[0]);

for (let i = 0; i <= std.length - 1; i++) {
  let presentation = `My name is ${(
    std[i].firstName +
    " " +
    std[i].lastName
  ).toUpperCase()}, I'm ${std[i].age} year old. My favourite subject is ${
    favouriteSubject[i]
  }, so I'm interested in ${favouriteInterest[i]} but my hobby is ${
    favouriteHobby[i]
  }. Thank You! ~ From Grade: ${std[i].grade}`;
  console.log(presentation);
}

//--------------------------------------------------|Getting FisrtName based on age|----------------------------------------------

let array = [
  { firstname: "John", lastname: "Doe", age: 25 },
  { firstname: "Jane", lastname: "Smith", age: 43 },
  { firstname: "Alex", lastname: "Johnson", age: 41 },
  { firstname: "Emily", lastname: "Davis", age: 43 },
  { firstname: "Michael", lastname: "Brown", age: 35 },
  { firstname: "Olivia", lastname: "Jones", age: 43 },
  { firstname: "Daniel", lastname: "Taylor", age: 43 },
  { firstname: "Sophia", lastname: "Miller", age: 43 },
  { firstname: "Matthew", lastname: "Wilson", age: 54 },
  { firstname: "Ava", lastname: "Anderson", age: 25 },
];

let output = array.reduce((a, c) => {
  c.age > 40 ? a.push(c.firstname) : 0;
  return a;
}, []);
console.log(output);

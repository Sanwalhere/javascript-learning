//--------------------------------------------------|Array Filter, Map, and Reduce|----------------------------------------

let array = [1, 2, 3, 4, 5, -3, -7, "s"];

let items = array
  .filter((value) => value >= 0)
  .map((value) => "" + value + "")
  .filter((value) => value >= 5)
  .map((value) => (value = Math.floor(value).toString()));

console.log(items);

let reduced = array.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(Math.floor(reduced));

//--------------------------------------------------|Filtering Negative Numbers|--------------------------------------------

const array1 = [1, 5, -3, -6, 3, -66, -12, 4, -23];
function returnMinus(value) {
  return value.filter((value) => value < 0);
}
console.log(returnMinus(array1));

//--------------------------------------------------|Practice .filter .map .reduce|-----------------------------------------------

let students = [
  { name: "Ali", age: 22, id: 2544, skill: { lvl: 2, ex: 12 } },
  { name: "Ahmed", age: 20, id: 4568, skill: { lvl: 5, ex: 12 } },
  { name: "Faheem", age: 16, id: 8863, skill: { lvl: 9, ex: 12 } },
  { name: "Aqib", age: 17, id: 9845, skill: { lvl: 1, ex: 12 } },
  { name: "Kayyum", age: 15, id: 7843, skill: { lvl: 23, ex: 12 } },
  { name: "Panda", age: 19, id: 2366, skill: { lvl: 11, ex: 12 } },
  { name: "Babar", age: 18, id: 4322, skill: { lvl: 6, ex: 12 } },
  { name: "Kumail", age: 17, id: 6834, skill: { lvl: 19, ex: 12 } },
];

let Names = students
  .filter((value) => value.skill.lvl > 5)
  .map((value) => value.name);
console.log(Names);

let sumOfAge = students.reduce((total, current) => {
  return total + current.age;
}, 0);

console.log(sumOfAge);

const data = [{ info: { a: 1 } }, { info: { b: 2 } }];

let merged = data.reduce((a, c) => ({ ...a, ...c.info }), {});
console.log(merged);

//--------------------------------------------------|Find Max in Array|-----------------------------------------------------

const numbers = [1, 2, 3, 4, 3, 2, 1, 1, 2, 99];
function getMax(arr) {
  return arr.reduce((acc, curr) => (curr > acc ? curr : acc));
}
let max = getMax(numbers);
console.log(max);

//------------------------------------------------------------------------------------------

let studentInfo = [
  { id: 1, firstName: "Alice", lastName: "Smith", age: 20, grade: 3 },
  { id: 2, firstName: "Bob", lastName: "Johnson", age: 22, grade: 4 },
  { id: 3, firstName: "Charlie", lastName: "Williams", age: 19, grade: 2 },
  { id: 4, firstName: "David", lastName: "Jones", age: 21, grade: 5 },
  { id: 5, firstName: "Emma", lastName: "Brown", age: 20, grade: 3 },
  { id: 6, firstName: "Frank", lastName: "Davis", age: 23, grade: 4 },
  { id: 7, firstName: "Grace", lastName: "Miller", age: 19, grade: 2 },
  { id: 8, firstName: "Henry", lastName: "Wilson", age: 21, grade: 5 },
  { id: 9, firstName: "Ivy", lastName: "Moore", age: 20, grade: 3 },
  { id: 10, firstName: "Jack", lastName: "Taylor", age: 22, grade: 4 },
  { id: 11, firstName: "Sophia", lastName: "Young", age: 19, grade: 2 },
  { id: 12, firstName: "Elijah", lastName: "Wang", age: 21, grade: 5 },
  { id: 13, firstName: "Mia", lastName: "Li", age: 20, grade: 3 },
  { id: 14, firstName: "Liam", lastName: "Zhang", age: 22, grade: 4 },
  { id: 15, firstName: "Ava", lastName: "Chen", age: 19, grade: 2 },
  { id: 16, firstName: "Noah", lastName: "Wu", age: 21, grade: 5 },
  { id: 17, firstName: "Olivia", lastName: "Liu", age: 20, grade: 3 },
  { id: 18, firstName: "Isabella", lastName: "Xu", age: 22, grade: 4 },
  { id: 19, firstName: "Sophie", lastName: "Lin", age: 19, grade: 2 },
  { id: 20, firstName: "Jackson", lastName: "Huang", age: 21, grade: 5 },
  { id: 21, firstName: "Ethan", lastName: "Cheng", age: 20, grade: 3 },
  { id: 22, firstName: "Emily", lastName: "Wang", age: 22, grade: 4 },
  { id: 23, firstName: "Alexander", lastName: "Zhang", age: 19, grade: 2 },
  { id: 24, firstName: "Madison", lastName: "Wu", age: 21, grade: 5 },
  { id: 25, firstName: "Aiden", lastName: "Liu", age: 20, grade: 3 },
  { id: 26, firstName: "Avery", lastName: "Xu", age: 22, grade: 4 },
  { id: 27, firstName: "Sofia", lastName: "Lin", age: 19, grade: 2 },
  { id: 28, firstName: "Benjamin", lastName: "Huang", age: 21, grade: 5 },
  { id: 29, firstName: "James", lastName: "Cheng", age: 20, grade: 3 },
  { id: 30, firstName: "Ella", lastName: "Wang", age: 22, grade: 4 },
  { id: 31, firstName: "Daniel", lastName: "Zhang", age: 19, grade: 2 },
  { id: 32, firstName: "Lily", lastName: "Wu", age: 21, grade: 5 },
  { id: 33, firstName: "Matthew", lastName: "Liu", age: 20, grade: 3 },
  { id: 34, firstName: "Oliver", lastName: "Xu", age: 22, grade: 4 },
  { id: 35, firstName: "Chloe", lastName: "Lin", age: 19, grade: 2 },
  { id: 36, firstName: "Logan", lastName: "Huang", age: 21, grade: 5 },
  { id: 37, firstName: "Jackson", lastName: "Cheng", age: 20, grade: 3 },
  { id: 38, firstName: "Abigail", lastName: "Wang", age: 22, grade: 4 },
  { id: 39, firstName: "David", lastName: "Zhang", age: 19, grade: 2 },
  { id: 40, firstName: "Grace", lastName: "Wu", age: 21, grade: 5 },
  { id: 41, firstName: "Lucas", lastName: "Liu", age: 20, grade: 3 },
  { id: 42, firstName: "Sophie", lastName: "Xu", age: 22, grade: 4 },
  { id: 43, firstName: "Aiden", lastName: "Lin", age: 19, grade: 2 },
  { id: 44, firstName: "Scarlett", lastName: "Huang", age: 21, grade: 5 },
  { id: 45, firstName: "Wyatt", lastName: "Cheng", age: 20, grade: 3 },
  { id: 46, firstName: "Madison", lastName: "Wang", age: 22, grade: 4 },
  { id: 47, firstName: "Elijah", lastName: "Zhang", age: 19, grade: 2 },
  { id: 48, firstName: "Liam", lastName: "Wu", age: 21, grade: 5 },
  { id: 49, firstName: "Ava", lastName: "Liu", age: 20, grade: 3 },
  { id: 50, firstName: "Noah", lastName: "Xu", age: 22, grade: 4 },
  { id: 51, firstName: "Emma", lastName: "Lin", age: 19, grade: 2 },
  { id: 52, firstName: "Olivia", lastName: "Huang", age: 21, grade: 5 },
  { id: 53, firstName: "Mia", lastName: "Cheng", age: 20, grade: 3 },
  { id: 54, firstName: "Liam", lastName: "Wang", age: 22, grade: 4 },
  { id: 55, firstName: "Sophia", lastName: "Zhang", age: 19, grade: 2 },
  { id: 56, firstName: "Jackson", lastName: "Wu", age: 21, grade: 5 },
  { id: 57, firstName: "Ella", lastName: "Liu", age: 20, grade: 3 },
  { id: 58, firstName: "Ethan", lastName: "Xu", age: 22, grade: 4 },
  { id: 59, firstName: "Avery", lastName: "Lin", age: 19, grade: 2 },
  { id: 60, firstName: "Madison", lastName: "Huang", age: 21, grade: 5 },
  { id: 61, firstName: "Lucas", lastName: "Cheng", age: 20, grade: 3 },
  { id: 62, firstName: "Chloe", lastName: "Wang", age: 22, grade: 4 },
  { id: 63, firstName: "Daniel", lastName: "Zhang", age: 19, grade: 2 },
  { id: 64, firstName: "Grace", lastName: "Wu", age: 21, grade: 5 },
  { id: 65, firstName: "Oliver", lastName: "Liu", age: 20, grade: 3 },
  { id: 66, firstName: "Sophie", lastName: "Xu", age: 22, grade: 4 },
  { id: 67, firstName: "Aiden", lastName: "Lin", age: 19, grade: 2 },
  { id: 68, firstName: "Scarlett", lastName: "Huang", age: 21, grade: 5 },
  { id: 69, firstName: "Wyatt", lastName: "Cheng", age: 20, grade: 3 },
  { id: 70, firstName: "Madison", lastName: "Wang", age: 22, grade: 4 },
  { id: 71, firstName: "Elijah", lastName: "Zhang", age: 19, grade: 2 },
  { id: 72, firstName: "Liam", lastName: "Wu", age: 21, grade: 5 },
];

let filteredStudents = studentInfo
  .filter((student) => student.age > 20)
  .map((value) => value.firstName);

console.log(filteredStudents);

for (let key of filteredStudents) {
  if (key.length === 4) {
    console.log(key);
  }
}

//--------------------------------------------------|WeakMap() in JavaScript|-----------------------------------------------

// --- The key must be an object, It can only stores objects, and we cannot iterate it:

let myWeakMap = new WeakMap();

let key = { itsKey: "itsValue" };
let key2 = { itsSecKey: "itsSecValue" };

myWeakMap.set(key, "value");
myWeakMap.set(key2, "value2");

myWeakMap.delete(key);
console.log(myWeakMap.get(key));
console.log(myWeakMap.get(key2));
console.log(myWeakMap.has(key2));
console.log(myWeakMap.has(key));
console.log(myWeakMap.get(key));
console.log(myWeakMap);

for (let key of key) {
  console.log(key);
}

//--------------------------------------------------|WeakMap() Practical use|-----------------------------------------------

let studentInfo = new WeakMap();

function enrollStudent(student, details) {
  studentInfo.set(student, details);
}

let student1 = {};
let student2 = {};

enrollStudent(student1, { grade: "A", attendance: "Good" });
enrollStudent(student2, { grade: "B", attendance: "Excellent" });

console.log(studentInfo.get(student1));
console.log(studentInfo.get(student2));

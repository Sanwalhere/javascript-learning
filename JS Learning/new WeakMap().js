//--------------------------------------------------|WeakMap() in JavaScript|-----------------------------------------------

// Example 1
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

// for (let key of key) {
//   console.log(key);
// }

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

// Example 2
// A WeakMap in JavaScript is a collection of key-value pairs where the keys must be objects,
// and the values can be arbitrary values. Unlike Map, WeakMap has some limitations, such as not
// allowing iteration over its keys or values. Also, the keys in a WeakMap are weakly held, meaning they
// do not prevent the objects used as keys from being garbage collected if there are no other references to those objects.

// Creating a new WeakMap
const weakMap = new WeakMap();

// Creating objects to be used as keys
const keyOne = {};
const keyTwo = {};

// Adding key-value pairs to the WeakMap
weakMap.set(keyOne, "value1");
weakMap.set(key2, "value2");

// Retrieving values from the WeakMap
const value1 = weakMap.get(keyOne);
const value2 = weakMap.get(key2);

// Checking if a key exists in the WeakMap
const hasKey1 = weakMap.has(keyOne);

// Deleting a key-value pair from the WeakMap
weakMap.delete(keyOne);

// Creating a new WeakMap (Note: WeakMap cannot be iterated over directly)

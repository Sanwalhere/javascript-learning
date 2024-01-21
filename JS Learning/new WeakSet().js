//--------------------------------------------------|WeakSet() in JavaScript|-----------------------------------------------

// Example 1
//--- It can only stores objects, and we cannot iterate it:

let mySet = new WeakSet();

let object1 = { objKey: "object1" };
let object2 = { objKey: "object2" };

mySet.add(object1);
mySet.add(object2);
mySet.delete(object2);
console.log(mySet.has(object2));
console.log(mySet);

for (let key of mySet) {
  console.log(key);
}

// Example 2
// Similar to WeakMap, a WeakSet in JavaScript is a collection of objects where the objects must be unique.
// Unlike Set, WeakSet has some limitations, such as not allowing iteration over its elements, and the objects
// in a WeakSet are weakly held, meaning they do not prevent those objects from being garbage collected if there
// are no other references to them.

// Creating a new WeakSet
const myWeakSet = new WeakSet();

// Creating objects to be added to the WeakSet
const obj1 = {};
const obj2 = {};

// Adding objects to the WeakSet
myWeakSet.add(obj1);
myWeakSet.add(obj2);

// Checking if an object exists in the WeakSet
const hasObj1 = myWeakSet.has(obj1);

// Deleting an object from the WeakSet
myWeakSet.delete(obj1);

// Creating a new WeakSet (Note: WeakSets cannot be iterated over directly)

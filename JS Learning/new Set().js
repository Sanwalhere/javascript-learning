//--------------------------------------------------|new Set() in JavaScript|-----------------------------------------------

// Example 1
//--- It contains only unique values, the duplicate values will not be appeared:

let array = [1, 2, 3, 4, 5];

let object = new Set(array);
object.add({ 1: "a" });
object.add(6);
object.add("Hi");
object.add("Bhai");
object.delete(6);
console.log(object.has("Bhai"));
console.log(object);

object.forEach((element) => {
  if (typeof element === "object") {
    console.log(element);
  }
});

object.clear();
console.log(object);

// Example 2
// A Set in JavaScript is another built-in data structure that allows you to store unique values.

// Creating a new Set
const mySet = new Set();

// Adding values to the set
mySet.add("value1");
mySet.add("value2");

// Checking if a value exists in the set
const hasValue = mySet.has("value1");

// Deleting a value from the set
mySet.delete("value1");

// Clearing all values from the set
mySet.clear();

// Creating a new Set and iterating over its values
console.log("Set Values:");
for (const value of mySet) {
  console.log(value);
}

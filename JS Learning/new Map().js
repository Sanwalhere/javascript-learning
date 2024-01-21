//--------------------------------------------------|new Map() in JavaScript|-----------------------------------------------

// Example 1
//--- It stores key-value pairs, the duplicate values will not be appeared:

let array = [[1, 2]];

let mapArray = new Map(array);
mapArray.set("key1", "value1");
mapArray.set(2, "value2");
mapArray.set(3, "value2");
mapArray.set({ key: "objKey" }, "value3");
console.log(mapArray);
console.log(mapArray.get("key1"));
console.log(mapArray.get(2));
mapArray.delete(3);
console.log(mapArray.get(1));
console.log(mapArray.has(3));
console.log(mapArray);

for (let [key, value] of mapArray) {
  console.log(`${key}: ${value}`);
}

mapArray.forEach((key, value) => {
  console.log(key, value);
});

console.log(mapArray);

// Example 2
// Creating a new map in JavaScript typically refers to using the Map object, which is a built-in data
// structure that allows you to store key-value pairs.

// Creating a new Map
const myMap = new Map();

// Adding key-value pairs to the map
myMap.set("key1", "value1");
myMap.set("key2", "value2");

// Retrieving values from the map
const value1 = myMap.get("key1");
const value2 = myMap.get("key2");

// Checking if a key exists in the map
const keyExists = myMap.has("key1");

// Deleting a key-value pair from the map
myMap.delete("key1");

// Clearing all key-value pairs from the map
myMap.clear();

console.log("\nMap Key-Value Pairs:");
for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

//--------------------------------------------------|new Map() in JavaScript|-----------------------------------------------

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

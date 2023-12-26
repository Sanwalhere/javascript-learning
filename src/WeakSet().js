//--------------------------------------------------|WeakSet() in JavaScript|-----------------------------------------------

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

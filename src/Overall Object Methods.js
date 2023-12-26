//--------------------------------------------------|Overall Object Methods in JavaScript|-----------------------------------------------

const obj1 = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj1));

const obj2 = { x: "apple", y: "banana", z: "cherry" };
console.log(Object.values(obj2));

const obj3 = { name: "John", age: 30, city: "New York" };
console.log(Object.entries(obj3));

const obj4 = { a: 1, b: 2 };
const obj5 = { b: 3, c: 4 };
const mergedObject = Object.assign(obj4, obj5);
console.log(mergedObject);

const frozenObject = Object.freeze({ key: "value" });
// Attempting to modify a frozen object will result in an error:
console.log(frozenObject);

const sealedObject = Object.seal({ key: "value" });
// Attempting to add or delete properties from a sealed object will result in an error:
console.log(sealedObject);

const prototypeObject = {
  greet: function () {
    console.log("Hello!");
  },
};
const newObj = Object.create(prototypeObject);
newObj.name = "Alice";
console.log(newObj);

const obj9 = { x: "apple", y: "banana" };
console.log(Object.getOwnPropertyNames(obj9));

const obj10 = { a: 1 };
const protoObj = Object.getPrototypeOf(obj10);
console.log(protoObj === Object.prototype);

const descriptorObject = { x: 1 };
const descriptors = Object.getOwnPropertyDescriptors(descriptorObject);
console.log(descriptors);
console.log(Object.is(1, "1"));

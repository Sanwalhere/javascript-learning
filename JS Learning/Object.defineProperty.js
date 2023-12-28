//--------------------------------------------------|Object.defineProperty Configuration|-------------------------------------------

let person = { name: "Sanwal", age: 23 };
console.log(person);

Object.defineProperty(person, "name", {
  writable: false,
  configurable: false,
  enumerable: false,
});

delete person.name;
person.name = "Ali";

console.log(person);

// ------------------------------------------------------------------

let obj = { name: "sanwal" };
Object.getPrototypeOf(obj);

Object.getOwnPropertyDescriptor(obj, "propertyName");

Object.defineProperty(obj, "propertyName", {
  configurable: false,
  writable: false,
  enumerable: false,
});

Object.prototype === Object.getPrototypeOf({});
Array.prototype === Object.getPrototypeOf([]);

const x = {};
const y = {};
Object.getPrototypeOf(x) === Object.getPrototypeOf(y);

let obj = { name: "sanwal" };
Circle.prototype.draw = function () {};
Object.keys(obj);
for (let key in obj) {
}

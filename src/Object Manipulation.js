//--------------------------------------------------|Object Manipulation|-------------------------------------------------------

let obj = {};

obj.name = "John";
obj.surname = "Smith";
obj.name = "Pete";

delete obj.name;

console.log(obj);

function isEmpty(obj) {
  for (let key in obj) {
    return obj[key];
  }
  return true;
}
console.log(isEmpty(obj));

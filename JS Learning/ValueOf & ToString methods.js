//--------------------------------------------------|Object with ValueOf and ToString Methods|-------------------------------

const obj = {
  valueOf() {
    return 50;
  },
  toString() {
    return "Hello, world!";
  },
};
console.log("Object as string:", obj + ""); // Output: Object as string: Hello, world!
console.log("Object as number:", obj * 9); // Output: Object as number: 84

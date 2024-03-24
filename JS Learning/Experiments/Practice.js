let str = "b6vh564hvv67bvhv89hh45hh3hvh5454613313bj54n0n56n4j534j";

let aa = str.includes("hv");
console.log(aa); // true (checks if "hv" is present in the string)

let arr1 = [];
let string = "";

for (let i = 0; i < str.length; i++) {
  if (!isNaN(parseInt(str[i]))) {
    string += str[i];
  }
}

console.log(str[1]); // 6 (accesses the character at index 1 in the string)
console.log(string); // "656467894533545613313545640564"

var aaa = 1;
function a() {
  function b() {
    function c() {
      let bbb = 1;
      const ccc = 1;
    }
    c();
  }
  b();
}

a();

console.log(["hello"][0][0][0][0][0][0][0][0]); // "h" (accesses the first character in the nested array)

console.log("HELLO".length); // 5 (returns the length of the string "HELLO")

let str1 = "t, a person sanwal here  ";

let aa1 = str1.lastIndexOf("");
console.log(aa1); // 23 (returns the index of the last occurrence of an empty string)

let k = "4545";
let kk = k.padStart(8, "*");
console.log(kk); // "****4545" (pads the string with "*" to a total length of 8 characters)

let jj = k.padEnd(8, "*");
console.log(jj); // "4545****" (pads the string with "*" to a total length of 8 characters)

let v = str1.charCodeAt();
console.log(v); // 116 (returns the Unicode value of the first character in the string)

let x = str1.toLocaleLowerCase("tr");
console.log(x); // "t, a person sanwal here  " (converts the string to lowercase with "tr" locale)

console.log(2 ** 0); // 1 (2 raised to the power of 0)
console.log(2 ** 1); // 2 (2 raised to the power of 1)
console.log(2 ** 2); // 4 (2 raised to the power of 2)
console.log(2 ** 3); // 8 (2 raised to the power of 3)
console.log(2 ** 4); // 16 (2 raised to the power of 4)
console.log(2 ** 5); // 32 (2 raised to the power of 5)
console.log(2 ** 6); // 64 (2 raised to the power of 6)
console.log(2 ** 7); // 128 (2 raised to the power of 7)
console.log(2 ** 8); // 256 (2 raised to the power of 8)
console.log(2 ** 9); // 512 (2 raised to the power of 9)
console.log(2 ** 10); // 1024 (2 raised to the power of 10)
console.log(2 ** 11); // 2048 (2 raised to the power of 11)
console.log(2 ** 12); // 4096 (2 raised to the power of 12)
//.
//.
//.
console.log(2 ** 63); // 9223372036854776000 (2 raised to the power of 63)

console.log(Math); // Math object

Math.PI = 344; // Attempting to change the value of Math.PI, which is read-only and won't change

console.log(Math.PI); // 3.141592653589793 (unchanged value of Math.PI)

//
//
//
//
console.log(typeof Boolean); // "function" (returns the data type of Boolean)
console.log(typeof Number); // "function" (returns the data type of Number)
console.log(typeof String); // "function" (returns the data type of String)
console.log(typeof Array); // "function" (returns the data type of Array)
console.log(typeof Object); // "function" (returns the data type of Object)
console.log(typeof Date); // "function" (returns the data type of Date)
console.log(typeof Function); // "function" (returns the data type of Function)
console.log(typeof Error); // "function" (returns the data type of Error)

let arr2 = [1, 3, 5, 7, 0, null, -1];

let map = arr2.map(Boolean);
let filter = arr2.filter(Boolean);
console.log(map); // [true, true, true, true, false, false, true] (maps each element to its Boolean value)
console.log(filter); // [1, 3, 5, 7, -1] (filters out falsy values)

let map2 = arr2.map(Number);
let filter2 = arr2.filter(Number);
console.log(map2); // [1, 3, 5, 7, 0, NaN, -1] (maps each element to its Number value, NaN for non-numeric values)
console.log(filter2); // [1, 3, 5, 7, -1] (filters out non-numeric values)

let map3 = arr2.map(String);
let filter3 = arr2.filter(String);
console.log(map3); // ["1", "3", "5", "7", "0", "null", "-1"] (maps each element to its String value)
console.log(filter3); // [1, 3, 5, 7, 0, -1] (filters out empty string and null)

let map4 = arr2.map(Array);
let filter4 = arr2.filter(Array);
console.log(map4); // [Array(1), Array(3), Array(5), Array(7), Array(0), Array(null), Array(-1)] (maps each element to an array)
console.log(filter4); // [] (no array elements to filter)

let map5 = arr2.map(Object);
let filter5 = arr2.filter(Object);
console.log(map5); // [Object, Object, Object, Object, Object, Object, Object] (maps each element to an object)
console.log(filter5); // [] (no object elements to filter)

let map6 = arr2.map(Date);
let filter6 = arr2.filter(Date);
console.log(map6); // [Date, Date, Date, Date, Date, Date, Date] (maps each element to a date object)
console.log(filter6); // [] (no date elements to filter)

let map8 = arr2.map(Error);
let filter8 = arr2.filter(Error);
console.log(map8); // [Error, Error, Error, Error, Error, Error, Error] (maps each element to an Error object)
console.log(filter8); // [] (no Error elements to filter)

console.log(parseInt(null)); // NaN (parses null as NaN)
console.log(parseInt("")); // NaN (parses empty string as NaN)
console.log(parseInt(false)); // NaN (parses false as NaN
console.log(parseInt(true)); // 1 (parses true as 1)
console.log(parseInt(undefined)); // NaN (parses undefined as NaN)
console.log(parseInt(null)); // NaN (parses null as NaN)

let c = [1];
if (typeof c === "object") {
  console.log("Hello");
}

let myString = "sanwal";
let myString1 = "sanwal";

const constString = "adnaan";
const constString1 = "adnaan";

console.log(myString === myString1); // true (compares two strings for equality)

let myObject = { name: "sanwal" };
let myObject1 = { name: "sanwal" };

console.log(myObject === myObject1); // false (compares two different object references)

let myArray = [1, 3, 5, 8, 9, 4];
let myArray1 = [1, 3, 5, 8, 9, 4];

console.log(myArray === myArray1); // false (compares two different array references)

let myFunction = () => {
  return "Hello World";
};

let myFunction1 = () => {
  return "Hello World";
};

console.log(myFunction === myFunction1); // false (compares two different function references)

let p = "parwaan";
e = p;
l = e;

console.log(p === l); // true (compares two string variables with the same value)

let obj11 = {
  name: "sanwal",
  age: 19,
  intro() {
    console.log("Hey");
  },
};

console.log("sanwal" in obj11); // true (checks if "sanwal" is a property in obj11)

//
//
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet.counter = 0;

let myFunc = greet;
myFunc("Alice"); // "Hello, Alice!"
console.log(greet.counter); // 0 (accesses the counter property of the greet function)

//
//
let arr4 = [];

arr4.name = "sanwal";

console.log(arr4); // [name: "sanwal"] (adds a property to the array)

//
//
console.log(typeof arr4); // "object" (returns the data type of arr4)
console.log(arr4 instanceof Array); // true (checks if arr4 is an instance of Array)
console.log(Array.isArray(arr4)); // true (checks if arr4 is an array)

//
//
let arrs = [1, 3, 5, 7, 76];
arrs.unshift(6);
console.log(arrs); // [6, 1, 3, 5, 7, 76] (adds an element to the beginning of the array)

let r = arrs.sort();
console.log(r); // [1, 3, 5, 6, 7, 76] (sorts the array in ascending order)
console.log(arrs); // [1, 3, 5, 6, 7, 76] (sorts the original array in place)

let obb = {
  name: "sanwal",
  info: {
    pta: "kya btaunn apko",
  },
};

// Shallow Copy

let obbTwo = { ...obb };
console.log(obbTwo); // {name: "sanwal", info: {pta: "kya btaunn apko"}} (creates a shallow copy of obb)

// Deep Copy
let deepCopy = JSON.parse(JSON.stringify(obb));
console.log(deepCopy); // {name: "sanwal", info: {pta: "kya btaunn apko"}} (creates a deep copy of obb using JSON)

let rra = ["ali", "adnan", "mudassir", "shehzad", "zaidi"];
for (let i = 0; i < rra.length; i++) {
  let sum = 0;
  for (let j = 0; j < rra[i].length; j++) {
    sum += rra[i][j].charCodeAt();
  }
  rra[i] = sum;
}
console.log(rra); // [314, 394, 840, 807, 484] (replaces each string element with the sum of its character codes)

let arrrrr = ["hello"];

let fdfdf = [..."hello"];
console.log(fdfdf); // ["h", "e", "l", "l", "o"] (spreads the string into an array of characters)

let count = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    count++;
  }
}
console.log(count); // 50 (counts the number of even numbers from 1 to 100)

let i = 5;

do {
  i++;
} while (i < 3);

console.log(i); // 6 (increases i by 1 and logs the value)

function ifUndefined(name1, name2, name3, name4 = "Sanwal") {
  if (name1 === undefined) {
    name1 = "Sanwal";
    console.log(name1);
  }
  if (!name2) {
    name2 = "Sanwal";
    console.log(name2);
  }
  console.log(`${name3 || "Sanwal"}`); // "Sanwal" (logs the default value if name3 is undefined)
  console.log(name4); // "Sanwal" (logs the default value of name4)
}
ifUndefined();

console.log(Boolean()); // false (converts undefined to boolean)
console.log(Number()); // 0 (converts undefined to number)
console.log(String()); // "" (converts undefined to string)
console.log(Array()); // [] (creates an empty array)
console.log(Object()); // {} (creates an empty object)
console.log(Date()); // current date and time (creates a new Date object)
console.log(Function()()); // undefined (creates an anonymous function and calls it, resulting in undefined)

console.log(1 + Boolean()); // 1 (adds 1 to the boolean conversion of undefined, which is 0)
console.log(1 + Number()); // 1 (adds 1 to the numeric conversion of undefined, which is 0)
console.log(1 + String()); // "1" (concatenates 1 with the string conversion of undefined, which is "")
console.log(1 + Array()); // "1" (concatenates 1 with the string representation of an empty array)
console.log(1 + Object()); // "1" (concatenates 1 with the string representation of an empty object)
console.log(1 + Date()); // "1" (concatenates 1 with the string representation of the current date)
console.log(1 + Function()()); // NaN (adds 1 to the result of calling an anonymous function, which is undefined)

console.log(false == Boolean()); // true (compares false to the boolean conversion of undefined, which is false)
console.log(false == Number()); // true (compares false to the numeric conversion of undefined,
// is false equal to the string conversion of undefined, which is "false"
console.log(false == String()); // true

// is false equal to the array conversion of undefined, which is an empty array, []
console.log(false == Array()); // true

// is false equal to the object conversion of undefined, which is an empty object, {}
console.log(false == Object()); // true

// is false equal to the date conversion of undefined, which is the string representation of the current date
console.log(false == Date()); // false

// is false equal to the result of calling an anonymous function, which is undefined
console.log(false == Function()()); // false

console.log("1" + "2"); // "12" (concatenates two strings)
console.log([1, 2] + [3, 4] + [4, 6]); // "1,23,44,6" (converts arrays to strings and concatenates them)
console.log(String([1, 2] + [3, 4] + [4, 6])); // "1,23,44,6" (converts the concatenated array to a string)
console.log({ a: 1 }.a + { b: 2 }.b); // NaN (adds two objects, which is not a valid operation)
console.log({ a: 1 } + { b: 2 }); // "[object Object][object Object]" (converts objects to strings and concatenates them)
console.log(String({ a: 1 } + { b: 2 })); // "[object Object][object Object]" (converts the concatenated object to a string)

console.log(1 == "1"); // true (compares with type coercion)
console.log(1 === "1"); // false (compares without type coercion)

console.log(typeof undefined); // "undefined" (returns the data type of undefined)
console.log(typeof {} + typeof {}); // "objectobject" (converts data types to strings and concatenates them)

console.log({ valueOf: () => 1 } + {}); // "1[object Object]" (uses valueOf method for conversion)
console.log({ toString: () => "hello" } + {}); // "hello[object Object]" (uses toString method for conversion)

console.log(true && "hello"); // "hello" (returns the second operand since the first is true)
console.log(false || "world"); // "world" (returns the second operand since the first is false)

console.log(1 + undefined); // NaN (adds 1 to the numeric conversion of undefined, which is NaN)
console.log(1 + null); // 1 (adds 1 to null, which is treated as 0 in numeric operations)

const sym1 = Symbol("key");
const sym2 = Symbol("key");
const obj = {};
obj[sym1] = "value1";
obj[sym2] = "value2";
console.log(obj[sym1]); // "value1" (accesses the property using the symbol key)
console.log(obj[sym2]); // "value2" (accesses the property using the symbol key)

console.log([] + []); // "" (converts arrays to empty strings and concatenates them)
console.log([] + {}); // "[object Object]" (converts array to string and concatenates with object)
console.log(1 + {}); // "1[object Object]" (converts object to string and concatenates with number)
console.log([] + 123); // "123" (converts array to string and concatenates with number)
console.log([] + 123); // "123" (converts array to string and concatenates with number)
console.log([] + true); // "true" (converts array to string and concatenates with boolean)
console.log({} + {}); // "[object Object][object Object]" (converts objects to strings and concatenates them)
console.log({} + []); // "[object Object]" (converts object to string and concatenates with array)
console.log({} + 123); // "[object Object]123" (converts object to string and concatenates with number)
console.log({} + true); // "[object Object]true" (converts object to string and concatenates with boolean)

console.log(Boolean("")); // false (converts empty string to boolean)
console.log(Boolean(0)); // false (converts 0 to boolean)
console.log(Boolean(undefined)); // false (converts undefined to boolean)
console.log(Boolean(null)); // false (converts null to boolean)
console.log(Boolean(NaN)); // false (converts NaN to boolean)
console.log(Boolean("hello")); // true (converts non-empty string to boolean)
console.log(Boolean(123)); // true (converts non-zero number to boolean)

console.log(1 + ""); // "1" (concatenates 1 with empty string, converting 1 to string)
console.log("2" + 3); // "23" (concatenates two strings)
console.log(true + true); // 2 (converts true to 1 and adds them)
console.log(4 + true); // 5 (adds 4 to the numeric conversion of true, which is 1)

console.log(1 + "2"); // "12" (concatenates 1 with string "2")
console.log("2" + 3); // "23" (concatenates string "2" with number 3)
console.log(true + true); // 2 (adds true converted to 1 twice)
console.log(4 + true); // 5 (adds 4 to true converted to 1)

console.log("5" - 2); // 3 (subtracts 2 from string "5", converting it to a number)
console.log("5" - "2"); // 3 (subtracts 2 from 5, both are converted to numbers)
console.log(5 - "2"); // 3 (subtracts 2 from 5, converting "2" to a number)
console.log(5 - true); // 4 (subtracts true converted to 1 from 5)

console.log(5 / 0); // Infinity (divides by zero)
console.log(-5 / 0); // -Infinity (divides negative number by zero)
console.log(null == undefined); // true (compares null and undefined with type coercion)
console.log(null === undefined); // false (compares null and undefined without type coercion)
console.log(null == null); // true (compares null to itself)
console.log(null === null); // true (compares null to itself)
console.log(undefined == undefined); // true (compares undefined to itself)
console.log(undefined === undefined); // true (compares undefined to itself)

console.log("10" == 10); // true (compares with type coercion)
console.log("10" === 10); // false (compares without type coercion)

console.log("hello" && "world"); // "world" (returns the second operand since the first is truthy)
console.log("" || "world"); // "world" (returns the second operand since the first is falsy)

console.log("foo" ? "bar" : "baz"); // "bar" (returns "
console.log("foo" ? "bar" : "baz"); // "bar" (returns "bar" because the condition "foo" is truthy)

console.log("" ? "bar" : "baz"); // "baz" (returns "baz" because the condition "" is falsy)

let experiment = "10";
console.log(++experiment); // 11 (increments and logs the value)
console.log(experiment++); // 11 (logs the value and then increments)
console.log(experiment); // 12 (logs the updated value)

a();

function a() {
  console.log("hi");
}

const bbbb = function () {
  console.log("hi");
};
bbbb(); // "hi" (calls the function)

var cccc = function () {
  console.log("hi");
};
cccc(); // "hi" (calls the function)

// lexical scope of grandChild - grandchild has access to the outer function's variables till global scope's variables
let functionName = "Function";
function parent() {
  let parentName = "Parent";
  console.log(functionName); // "Function" (accesses the variable from the global scope)
  function child() {
    let childName = "Child";
    console.log(parentName); // "Parent" (accesses the variable from the parent function's scope)
    function grandChild() {
      let grandChildName = "GrandChild";
      console.log(childName); // "Child" (accesses the variable from the child function's scope)
      console.log(grandChildName); // "GrandChild" (accesses its own variable)
    }
    grandChild();
  }
  child();
}
parent(); // "Function", "Parent", "Child", "GrandChild" (calls the parent function)

// closure
function x() {
  const a = 10;
  const b = 5;
  function y() {
    console.log(a, b); // 10, 5 (accesses variables from the outer function's scope)
  }
  return y;
}
let closure = x();
closure(); // 10, 5 (calls the returned function, maintaining access to its closure)

// filter
let arr3 = [1, 0, "", null, "sdsd", undefined, true, "df"];
let abab = arr3.filter((item) => item);
console.log(abab); // [1, "sdsd", true, "df"] (filters out falsy values)

//filter - behind the scene
let arr4 = [];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i]) {
    arr4.push(arr3[i]);
  }
}
console.log(arr4); // [1, "sdsd", true, "df"] (achieves the same result using a loop)

let arr5 = [
  [
    1,
    2,
    3,
    4,
    [5, 6, 7, 8, [9, 10, 11, 12, [13, 14, 15, 16, [17, 18, 19, 20]]]],
  ],
];

let collection = [];

function flatter(arr5) {
  arr5.forEach((elem) => {
    if (Array.isArray(elem)) {
      return flatter(elem); // recursively flattens nested arrays
    } else {
      collection.push(elem); // adds non-array elements to the collection
    }
  });
}
flatter(arr5);
console.log(collection); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] (flattened array)

let arary = [
  [
    1,
    2,
    3,
    4,
    [5, 6, 7, 8, [9, 10, 11, 12, [13, 14, 15, 16, [17, 18, 19, 20]]]],
  ],
];

// Custom flattening function for nested arrays
let arr11 = [
  [
    1,
    2,
    3,
    4,
    [5, 6, 7, 8, [9, 10, 11, 12, [13, 14, 15, 16, [17, 18, 19, 20]]]],
  ],
];

let collection3 = [];

function flatter(arr11) {
  arr11.forEach((elem) => {
    if (Array.isArray(elem)) {
      return flatter(elem); // Recursively call flatter function for nested arrays
    } else {
      collection3.push(elem); // Push non-array elements into the collection array
    }
  });
}
flatter(arr11);
console.log(collection3); // Output the flattened array

let collected = arary.flat(Infinity); // This line has a typo, should be 'array' instead of 'arary'

console.log(collected); // Output the flattened array using the flat method

let arr6 = [1, 0, "", null, "sdsd", undefined, true];
let a = arr6.map(Array); // Map each element of arr6 to an array, but this doesn't seem correct

console.log(a); // Output the mapped array

let b1 = arr6.filter(Array); // Filter elements of arr6 using Array as the filter function, which is not valid
console.log(b1); // Output the filtered array

let ar = [1, 4];

function a(b) {
  console.log(b); // Output the value of b
  b(); // Execute b as a function
}

a(function () {
  console.log("hello"); // Output "hello" when the function passed to a is called
});

const sumFunction = ar.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(typeof sumFunction); // Output the data type of sumFunction

function parent() {
  let a = 10;
  let b = 5;
  function child() {
    console.log(a + b); // Output the sum of a and b when child function is called
  }
  return child; // Return the child function from parent
}

let childClosure = parent(); // Call parent function to get the child function
console.dir(childClosure); // Output the details of the child function

function parent1() {
  let a = 10;
  let b = 5;
  return () => console.log(a + b); // Return an arrow function that adds a and b
}
console.dir(parent1()); // Output the arrow function returned by parent1
console.dir(parent1()); // Output the arrow function returned by parent1

let fruitsArr = ["apple", "banana", "mango", "peach", "pineapple"];
let salami = "salam";
let object1 = {
  name: "sanwal",
  age: 89,
  class: 10,
};

for (fruit of fruitsArr) {
  console.log(fruit); // Output each fruit in fruitsArr
}

for (salam of salami) {
  console.log(salam); // Output each character in salami
}

for (obb in object1) {
  console.log(`${obb}: ${object1[obb]}`); // Output each property and value of object1
}

fruitsArr.forEach((x) => {
  console.log(10); // Output 10 for each element in fruitsArr
});

fruitsArr.forEach((x, y) => {
  console.log(x, y); // Output each fruit and its index in fruitsArr
});

let fruitsArray = ["apple", "banana", "mango", "peach", "pineapple"];

let fruit = fruitsArray.map(function (item) {
  console.log(item); // Output each item in fruitsArray
  return item; // Return each item unchanged
});

console.log(fruit); // Output the mapped array

let fruitObjects = fruitsArray.map((item) => ({ item })); // Map each item in fruitsArray to an object with property 'item'
console.log(fruitObjects); // Output the array of objects

let fruitObjects1 = fruitsArray.map((item, index) => ({
  name: item,
  index: index,
}));
console.log(fruitObjects1); // Output an array of objects with name and index properties

let fruitObjects11 = fruitsArray.map((item, index) => ({ item, index })); // Shorter syntax for creating objects
console.log(fruitObjects11); // Output the array of objects

let fruitBoolean = fruitsArray.map((item) => item.startsWith("p")); // Map each item to a boolean indicating if it starts with 'p'
console.log(fruitBoolean); // Output the boolean array

let fruitBoolean1 = fruitsArray.map((item) => item.endsWith("e")); // Map each item to a boolean indicating if it ends with 'e'
console.log(fruitBoolean1); // Output the boolean array

let fruits = ["apple", "banana", "mango", "peach", "pineapple"];

function transformFruit(item) {
  return `${item} is delicious!`; // Transform each item by appending ' is delicious!'
}

let fruitFunction = fruits.map(transformFruit); // Map each item using the transformFruit function
console.log(fruitFunction); // Output the transformed array

let fruitFunction1 = fruits.map((item) => `${item} is delicious!`); // Shorter syntax for transformation
console.log(fruitFunction1); // Output the transformed array

let arr7 = ["", 0, null, undefined, false, true, 1, "hi", {}, []];
let a = arr7.filter((item) => item); // Filter out falsy values from arr7
console.log(a); // Output the filtered array

let months = ["Jan", "Feb", "March", "April", "May"];
let f = months.filter((month) => month.startsWith("M")); // Filter months starting with 'M'
console.log(f); // Output the filtered array

let students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 18 },
  { name: "Charlie", age: 21 },
  { name: "Diana", age: 16 },
  { name: "Eve", age: 15 },
];

let a = students.filter((student) => student.age >= 18); // Filter students aged 18 or older
console.log(a); // Output the filtered array

let random = [
  "apple",
  "banana",
  "mango",
  "peach",
  "pineapple",
  null,
  "",
  0,
  undefined,
  [],
  {},
  1,
];
let evenIndexFruits = random.filter((item, index) => index % 2 === 0); // Filter elements with even indexes
console.log(evenIndexFruits); // Output the filtered array

let values = [1, 2, 3, 3, 4, 4, 5, 5];
let uniqueValues = values.filter(
  (value, index, self) => self.indexOf(value) === index
); // Filter out duplicate values
console.log(uniqueValues); // Output the filtered array

let data1 = [
  { id: 1, scores: [85, 90, 95] },
  { id: 2, scores: [75, 80, 85] },
  { id: 3, scores: [95, 100, 98] },
];

let topPerformers = data1.filter((item) =>
  item.scores.every((score) => score >= 90)
); // Filter top performers with all scores >= 90
console.log(topPerformers); // Output the filtered array

let arrayy = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let a = arrayy.reduce((acc, curr) => {
  return acc + curr; // Calculate the sum of arrayy using reduce
}, 0);
console.log(a); // Output the sum

let arr8 = [1, 0, "", null, "Hi", undefined, true, 56, false];

console.log(
  arr8.some((i) => i),
  arr8.some((i) => ""),
  arr8.some((i) => null),
  arr8.some((i) => i > 1),
  arr8.some((i) => i === undefined),
  arr8.some((i) => i === 56),
  arr8.some((i) => typeof i === "string"),
  arr8.some((i) => typeof i === "boolean"),
  arr8.some((i) => Array.isArray(i)),
  arr8.some((i) => i === 0),
  arr8.some((i) => isNaN(i)),
  arr8.some((i) => !isNaN(i)),
  arr8.some((i) => i === false),
  arr8.some((i) => i !== null && typeof i === "object")
); // Check various conditions using some method

let arr9 = [1, 0, "", null, "Hi", undefined, true, 56, false];

console.log(
  arr9.every((i) => i !== undefined),
  arr9.every((i) => i !== null),
  arr9.every((i) => typeof i === "number" && i > 0),
  arr9.every((i) => typeof i === "string"),
  arr9.every((i) => typeof i === "boolean"),
  arr9.every((i) => Array.isArray(i)),
  arr9.every((i) => i === 0 || isNaN(i)),
  arr9.every((i) => typeof i === "object" && i !== null),
  arr9.every((i) => i),
  arr9.every((i) => !i),
  arr9.every((i) => i === ""),
  arr9.every((i) => i === true || i === false)
); // Check various conditions using every method

let add = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum; // Calculate sum of arguments using rest parameter
};

add();

function product(a, b) {
  return a * b; // Return product of a and b
}
console.log(product(1)); // Output NaN since b is undefined

function product(a, b = 1) {
  return a * b; // Return product of a and b with default value for b
}
console.log(product(1, undefined)); // Output 1 since b is explicitly undefined
console.log(product(1, null)); // Output 0 since b is null
console.log(product(1, {}.prop)); // Output NaN since {}.prop is undefined

function product1(a, b = 1) {
  return a * b; // Return product of a and b with default value for b
}
console.log(product1(1)); // Output 1 since default parameter is used

function product(a, b = [500654]) {
  return a * b; // Return product of a and b (b is an array)
}
console.log(product(5)); // Output 2503270

console.log(4 * [15]); // Output 60

function product(a, b) {
  return a * b; // Return product of a and b
}
console.log(product(5)); // Output NaN since b is undefined

let aray = [1, 3, 5, 7, 9];
console.log([99, ...aray]); // Output [99, 1, 3, 5, 7, 9]

let colors = ["yellow", "orange", "white", "black", "blue"];

let [y, o, , , b] = colors; // Destructure colors array
console.log(y, b); // Output "yellow" and "blue"
console.log([y, o, , , b]); // Output array with "yellow", "orange", and "blue"

let object3 = {
  name: "sanwal",
  age: 19,
  qualification: {
    college: "NCR-CET",
    schools: {
      recent: "Allied School",
      previous: "Al Hadeed",
    },
  },
};

let {
  qualification: { schools: destructuredSchool },
} = object3; // Destructure object3 to get nested property 'schools'
console.log(destructuredSchool); // Output the 'schools' object

function destructuring({
  qualification: {
    schools: { previous },
  },
}) {
  console.log(previous); // Output the 'previous' school name
}

function destructuring({
  qualification: {
    schools: { previous },
  },
}) {
  console.log(previous);
}

destructuring(object3);

function destructure({ name, age }) {
  console.log(age, name);
}

destructure(object3);

// Factory function Code: (Abstraction)

function createUser(firstName, lastName, age) {
  const user = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    getFullName() {
      return this.firstName + " " + this.lastName;
    },
    getAgeYear() {
      return new Date().getFullYear() - this.age;
    },
  };
  return user;
}

// Factory function Short Code: (Abstraction):

function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getFullName() {
      return this.firstName + " " + this.lastName;
    },
    getAgeYear() {
      return new Date().getFullYear() - this.age;
    },
  };
  return user;
}

// Factory function Shorter Code: (Abstraction):

function createUser(firstName, lastName, age) {
  return {
    firstName,
    lastName,
    age,
    getFullName() {
      return this.firstName + " " + this.lastName;
    },
    getAgeYear() {
      return new Date().getFullYear() - this.age;
    },
  };
}
let user6 = createUser("Shehzad", "Ahmed", 22);
let user2 = createUser("Ahsan", "Iqbal", 16);

console.log(user6);
console.log(user2);
console.log(user6.getAgeYear === user2.getAgeYear); // method duplication on each user object creation

// example of no memory duplication
let arr = [1, 3, 5];
let arr10 = [2, 6, 8];
console.log(arr.pop === arr10.pop); // true, pop method is using from the same memory location

function sayHi() {
  return "Hello";
}
new sayHi(); // Creates an instance of the function

// Birth: constructor Function
function starting() {
  return "Starting";
}
new starting(); // Creates an instance of the function

// youngAge: constructor Function
function youngAge(firstName) {
  this.firstName = firstName;
}
new youngAge("Adnan"); // Creates an instance of the function

// maturity: constructor Function
function maturity(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
new maturity("Muhammad", "Sanwal", 19); // Creates an instance of the function

// gettingBigger: constructor Function
function Maturity(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
let user4 = new Maturity("Muhammad", "Sanwal", 19); // Creates an instance of the function

// experiment: constructor Function
function Maturity(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Maturity.prototype.getBirthYear = function () {
  return new Date().getFullYear() - this.age;
};
Maturity.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

let user7 = new Maturity("Muhammad", "Sanwal", 19); // Creates an instance of the function

// experiment: Class
class Maturity {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let user8 = new Maturity("Ali", "Adnan", 66); // Creates an instance of the class
let user9 = new Maturity("Muhammad", "Sanwal", 19); // Creates an instance of the class

// experiment: Static keyword in Class
class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static sayHelloToClassFunction() {
    return "Hello Class";
  }

  static {
    this.sayHi = "Hi";
    this.callMe = function () {
      return "I'm CreateUser";
    };
    this.returnMe = function () {
      return this;
    };
  }
  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let user = new CreateUser("Ali", "Adnan", 66); // Creates an instance of the class
let user1 = new CreateUser("Muhammad", "Sanwal", 19); // Creates an instance of the class

// Getter Setter

let object = {
  firstName: "Ali",
  lastName: "Akbar",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },

  set fullName(value) {
    let splitted = value.split(" ");
    this.firstName = splitted[0];
    this.lastName = splitted[1];
  },
};
object.fullName = "Muzamil Jameel"; // Sets fullName using the setter

// Extend
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}
class Employee extends User {
  constructor(firstName, lastName, age, company) {
    super(firstName, lastName, age);
    this.company = company;
  }
}
class Student extends User {
  constructor(firstName, lastName, age, standard) {
    super(firstName, lastName, age);
    this.standard = standard;
  }
}

let employee1 = new Employee("Ali", "Adnan", 66, "Google"); // Creates an instance of the Employee class
let student1 = new Student("Muhammad", "Sanwal", 19, "BBA"); // Creates an instance of the Student class

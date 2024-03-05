/*
// Object.freeze() example
let obj = { name:"FreeCodeCamp", review:"Awesome" };
Object.freeze(obj);


obj.review = "bad";  // Error: Cannot assign to read only property 'review' of object '#<Object>'
obj.newProp = "Test"; // Error: Cannot add property 'newProp', object is not extensible
console.log(obj); // { name: "FreeCodeCamp", review: "Awesome" }


// Destructuring Assignment example
const user = { name: 'John Doe', age: 34 };
const { name: userName, age: userAge } = user;


// Nested Object Destructuring example
const userNested = { johnDoe: { age: 34, email: 'johnDoe@freeCodeCamp.com' }};
const { johnDoe: { age, email }} = userNested;


// Destructuring with Specific Nested Properties
const LOCAL_FORECAST = { 
    yesterday: { low: 61, high: 75 }, 
    today: { low: 64, high: 77 }, 
    tomorrow: { low: 68, high: 80 }
};
const {today:{low: lowToday, high: highToday}} = LOCAL_FORECAST;


// Destructuring Assignment with Arrays
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // Output: 1, 2


// Destructuring with specific indices
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // Output: 1, 2, 5


Use destructuring assignment to swap the values of a and b so that a receives the
value stored in b, and b receives the value stored in a.

let a = 8, b = 6;
// Only change code below this line
 
 [b,a] = [a,b]

*/

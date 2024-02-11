// Arrow function: A concise way to write anonymous functions in JavaScript

// arrow func:
const add = (a, b) => {
  return a + b;
};

// normal func:
function add1(a, b) {
  return a + b;
}

// Difference:
const myObj = {
  data: "abc",
  loggerA: () => {
    console.log(this.data);
  },
  loggerB() {
    console.log(this.data);
  },
};

myObj.loggerA(); // undefined
myObj.loggerB(); // 'abc'

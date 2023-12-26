//--------------------------------------------------|Promises in JavaScript|-----------------------------------------------

let promise6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let a = 20;
    if (false) {
      resolve("Hey There");
    } else {
      reject("Bye");
    }
  }, 3000);
})
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

console.log(promise);

let promise7 = new Promise((resolve, reject) => {
  let name = "Sanwal";
  if (name == "Sanwal") {
    console.log("I am in resolve Console");
    resolve("I am in resolve");
  } else {
    reject(new Error("Not found"));
  }
});
promise.then((value) => {
  console.log(value);
});

function sum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved");
    }, 1001);

    setTimeout(() => {
      reject("Rejected");
    }, 1000);
  });
}
sum()
  .then((value) => {
    console.log("I am " + value);
  })
  .catch((value) => {
    console.log("I am " + value);
  });

let promise8 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
  setTimeout(reject, 50, "one failed");
});
let promise9 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2])
  .then((value) => console.log(value))
  .catch((val) => console.log(val));

// -------------------------------------------------------------------------------

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let cel = 34;
    resolve(cel);
  }, 300);
  setTimeout(() => {
    reject("I'm a Rejected!");
  }, 500);
});

promise.then((c) =>
  console.log(`Today's Fahrenheit is : ` + Math.round((c * 9) / 5 + 32))
);

console.log(typeof Promise);

let promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 200);
})
  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 2
    return result * 3;
  })
  .then(function (result) {
    console.log(result); // 6
    return result * 4;
  })
  .then((result) => console.log(result));

console.log(promise3);

console.log(undefined + 2);
console.log(null + 2);
console.log(NaN + 2);
console.log(typeof ("22 + 22" - 0));
console.log(typeof "22 + 22");
console.log(typeof +"22 + 22");
console.log(false + 2);

// Promise Chaining

var promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 600, "one");
});
var promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 400, "two");
});
var promise10 = new Promise(function (resolve, reject) {
  setTimeout(reject, 300, 3);
});

// Async
async function logger() {
  let data = await fetch("http://google.com"); // pause until fetch returns
  console.log(data);
}
logger();

Promise.race([promise1, promise2]).then((value) => console.log(value));
("two"); // Both promises will resolve, but promise2 is faster

// Promise.all is a promise that takes an array of promises as an input
// (an iterable), and it gets resolved when all the promises get resolved
// or any one of them gets rejected. For example, the syntax of promise.all
// method is below,

// Promise.all([promise1, promise2, promise3])
//  .then(result => console.log(result))
//  .catch(error => console.log(`Error in promises ${error}`))

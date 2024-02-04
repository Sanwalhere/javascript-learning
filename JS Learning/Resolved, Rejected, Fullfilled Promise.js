// Resolved: When a promise successfully completes its operation
// Rejected: When a promise fails to complete its operation
// Fulfilled: A synonym for "resolved," indicating successful completion of a promise

// Resolved Promise:
const resolvedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved successfully!");
  }, 1000);
});

resolvedPromise.then((result) => {
  console.log(result);
});

//Rejected Promise:
const rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Promise rejected!"));
  }, 1000);
});

rejectedPromise.catch((error) => {
  console.log(error.message);
});

// Fulfilled Promise:
const fulfilledPromise = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("Promise resolved successfully!");
  } else {
    reject(new Error("Promise rejected!"));
  }
});

fulfilledPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });

// then(): Attaches callbacks to a promise for success cases
// catch(): Attaches a callback to a promise for error cases
// finally(): Attaches a callback to a promise that is invoked regardless of its state

// .then()
const promiseOne = new Promise((resolve) => {
  setTimeout(() => resolve("Resolved!"), 500);
});
promiseOne.then((result) => console.log(result));

// .catch()
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Rejected!")), 500);
});
promiseTwo.catch((error) => console.error(error.message));

// .finally()
const promiseThree = new Promise((resolve) => {
  setTimeout(() => resolve("Resolved!"), 500);
});
promiseThree.finally(() => console.log("Finished."));

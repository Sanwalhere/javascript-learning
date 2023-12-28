//--------------------------------------------------|Promise.all|----------------------------------------------

/*
If all promises fullfilled it will give collected result or if there is an
error in single promise it will throw error imidiately. Iw will not wait for the
other promises.
*/

let promise1 = new Promise((res, rej) => {
  if (true) res("resolved");
  else rej("rejected");
});
promise1.then((v) => console.log(v)).catch((v) => console.log(v));

let promise2 = new Promise((res, rej) => {
  if (true) res("resolved");
  else rej("rejected");
});
promise1.then((v) => console.log(v)).catch((v) => console.log(v));

let promise3 = new Promise((res, rej) => {
  if (true) res("resolved");
  else rej("rejected");
});
promise1.then((v) => console.log(v)).catch((v) => console.log(v));

let allPromises = Promise.all([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((rej) => console.error(rej));
console.log(allPromises);

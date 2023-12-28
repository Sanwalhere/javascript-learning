//--------------------------------------------------|Promise.any|----------------------------------------------

/*
It will wait for the first successful promise to be resolved . If the starting two
promises rejected, it will wait for the third promise, if it resolved then it will
print the third promise known as the first successful promise.
*/

let promise10 = new Promise((res, rej) => {
  if (true) res("resolved");
  else rej("rejected");
});
promise10.then((v) => console.log(v)).catch((v) => console.log(v));

let promise11 = new Promise((res, rej) => {
  if (false) res("resolved");
  else rej("rejected");
});
promise11.then((v) => console.log(v)).catch((v) => console.log(v));

let promise12 = new Promise((res, rej) => {
  if (false) res("resolved");
  else rej("rejected");
});
promise12.then((v) => console.log(v)).catch((v) => console.log(v));

let allPromises4 = Promise.any([promise10, promise11, promise12])
  .then((res) => console.log(res))
  .catch((rej) => console.error(rej));
console.log(allPromises4);

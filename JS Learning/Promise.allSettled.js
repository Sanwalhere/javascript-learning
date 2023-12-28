//--------------------------------------------------|Promise.allSettled|----------------------------------------------

/*
If all promises fullfilled it will give collected result or if there is an
error in single promise it won't be stop. After all the promises settled it will
give an array with the error of promise.
*/

let promise4 = new Promise((res, rej) => {
  if (false) res("resolved");
  else rej("rejected");
});
promise4.then((v) => console.log(v)).catch((v) => console.log(v));

let promise5 = new Promise((res, rej) => {
  if (false) res("resolved");
  else rej("rejected");
});
promise5.then((v) => console.log(v)).catch((v) => console.log(v));

let promise6 = new Promise((res, rej) => {
  if (false) res("resolved");
  else rej("rejected");
});
promise6.then((v) => console.log(v)).catch((v) => console.log(v));

let allPromises2 = Promise.allSettled([promise4, promise5, promise6])
  .then((res) => console.log(res))
  .catch((rej) => console.error(rej));
console.log(allPromises2);

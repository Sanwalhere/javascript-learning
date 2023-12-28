//--------------------------------------------------|Promise.race|----------------------------------------------

/*
If one of them from given promise will fullfilled, it will give us the result of
the first successful promise. What if the result of winner promise was an error,
so it will give us the error.
*/

let promise7 = new Promise((res, rej) => {
  if (false) res("resolved");
  else rej("rejected");
});
promise7.then((v) => console.log(v)).catch((v) => console.log(v));

let promise8 = new Promise((res, rej) => {
  if (true) res("resolved");
  else rej("rejected");
});
promise8.then((v) => console.log(v)).catch((v) => console.log(v));

let promise9 = new Promise((res, rej) => {
  if (false) res("resolved");
  else rej("rejected");
});
promise9.then((v) => console.log(v)).catch((v) => console.log(v));

let allPromises3 = Promise.race([promise7, promise8, promise9])
  .then((res) => console.log(res))
  .catch((rej) => console.error(rej));
console.log(allPromises3);

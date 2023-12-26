//--------------------------------------------------|Asynchronous Programming|-----------------------------------------------

// --- Def: Actions that we initiate now and they finish later.

console.log("Hello");

setTimeout(() => {
  console.log("Im busy right now");
}, 2000);

console.log("World");

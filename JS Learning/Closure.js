// -----------------------------------------------|Closures|---------------------------------------------------
/*
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state
(the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
In JavaScript, closures are created every time a function is created, at function creation time.
*/

function returnFunc() {
  let a = 1;
  console.log(a);

  const x = () => {
    console.log(a);

    const y = () => {
      console.log(a);

      const z = () => returnFunc();
      console.log(a);
    };
    y();
  };
  a = 999;
  x();
  return x;
}

const a = returnFunc();
a();

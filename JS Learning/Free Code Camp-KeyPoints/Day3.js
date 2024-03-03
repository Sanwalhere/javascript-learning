/*


Recursion is the concept that a function can be expressed in terms of itself.To help understand
this, start by thinking about the following task: multiply the first n elements of an array to
create the product of those elements. Using a for loop, you could do this:

function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}

However,
notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1].
That means you can rewrite multiply in terms of itself and never need to use a loop.

function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}

--------------------------------------------------------------------

Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an
array arr.

function sum(arr, n) {
  if(n<=0){
    return 0
  }else{
    return sum(arr, n-1) + arr[n-1]
  }
}
*/

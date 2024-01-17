//--------------------------------------------------------|Sum of Array using recursion|-------------------------------------------------------

/*
The base case if (arr.length === 0) returns 0 when the array is empty. This is a constant time operation.
The recursive call sumOfArrays(arr.slice(0, arr.length - 1)) reduces the array size by one element in each
recursive call until it reaches the base case. Each recursive call performs a constant amount of work.
*/

function sumOfArrays(arr) {
  if (arr.length === 0) {
    return 0;
  }
  // regular code
  // return arr[arr.length - 1] + sumOfArrays(arr.slice(0, arr.length - 1));
  // better version
  return arr.pop() + sumOfArrays(arr);
}

console.log(sumOfArrays([1, 3, 4, 5, 6]));

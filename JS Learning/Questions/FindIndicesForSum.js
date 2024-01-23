// Find Indices For Sum
// target 4, arr[0] + arr[1] = 4

let array = [1, 3, 5, 7, 9];

function sum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return -1;
}

console.log(sum(array, 10));

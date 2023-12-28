//--------------------------------------------------|Truthy Values Count Function|--------------------------------------------

let data = ["ali", 12, null, undefined, 6.1];

function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) count++;
  }
  return count;
}

console.log(countTruthy(data));

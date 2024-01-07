//-------------------------|Finding Diagonal Difference|------------------------------  

let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Declaring variables to store the Diagonal values
let sum1 = 0;
let sum2 = 0;
// For loop to iterate over the values to get the array of arrays diagonal values
for (let i = 0; i < array.length; i++) {
  // Storing 1,5,9 in value1
  let value1 = array[i][i];
  // Storing 3,5,7 in value2
  let value2 = array[i][array.length - i - 1];
  console.log(value1);
  console.log(value2);
  // Storing the sum of 1,5,9 value1 in sum1
  sum1 += value1;
  // Storing the sum of 3,5,7 value2 in sum2
  sum2 += value2;
}
// Absoluting the values to do not get the negative value
let difference = Math.abs(sum1 - sum2);
// Consoling the difference
console.log(difference);

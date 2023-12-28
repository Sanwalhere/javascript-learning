//--------------------------------------------------|Merging two arrays for-loop|----------------------------------------------

let arrayOne = [1, 2, 6, 9, 43, 71, 34, 8, 4];
let arrayTwo = [5, 8, 13, 98, 44, 1, 7, 4, 3];

let mergedArray = [];

for (let i = 0; i < arrayOne.length; i++) {
  mergedArray[i] = arrayOne[i];
}
for (let i = 0; i < arrayTwo.length; i++) {
  mergedArray[mergedArray.length] = arrayTwo[i];
}

console.log(mergedArray);

//--------------------------------------------------|Sorting Algorithm|----------------------------------------------

/*
Bubble sort
Insertion Sort
Quick sort
Merg sort
*/

//--------------------------------------------------|Merg Sort|----------------------------------------------

let arr = [-6, 20, 8, -2, 4];

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  const sortedArr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  const resultArr = [...sortedArr, ...left, ...right];
  return resultArr;
}
console.log(mergeSort(arr));

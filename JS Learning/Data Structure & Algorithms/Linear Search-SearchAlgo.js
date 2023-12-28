//--------------------------------------------------|Search Algorithm|----------------------------------------------

/*
Linear Search
Binary Search
Recursive Binary Search
*/

//--------------------------------------------------|Linear Search|----------------------------------------------

// What I wrote

let arr = [-5, 2, 10, 4, 6];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch(arr, 10));

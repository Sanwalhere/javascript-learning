//--------------------------------------------------|Misc. Problems|----------------------------------------------

/*
Certesian Product
Climbing Staircase
Tower od Hanoi
*/

//--------------------------------------------------|Certesian Product|----------------------------------------------

// What I wrote

let arrOne = [1, 2];
let arrTwo = [3, 4];

function certesianProduct(arrOne, arrTwo) {
  let traversed = [];
  for (let i = 0; i < arrOne.length; i++) {
    for (let j = 0; j < arrTwo.length; j++) {
      let indexArr = [];
      indexArr.push(arrOne[i], arrTwo[j]);
      traversed.push(indexArr);
    }
  }
  return traversed;
}
console.log(certesianProduct(arrOne, arrTwo));

// Actual Code

let arr1 = [1, 2];
let arr2 = [3, 4];

function certesianProduct(arr1, arr2) {
  let traversed = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      traversed.push([arr1[i], arr2[j]]);
    }
  }
  return traversed;
}
console.log(certesianProduct(arr1, arr2));

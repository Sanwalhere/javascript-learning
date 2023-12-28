//--------------------------------------------------|Sorting Algorithm|----------------------------------------------

/*
Bubble sort
Insertion Sort
Quick sort
Merg sort
*/

//--------------------------------------------------|Bubble sort|----------------------------------------------

// Actual Code

let arr = [-5, -8, 4, 2, 8, 1, 5];

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements if they are in the wrong order
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
bubbleSort(arr);
console.log(arr);

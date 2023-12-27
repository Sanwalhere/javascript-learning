//--------------------------------------------------|Array Traversing(Iterating)|----------------------------------------------
/*
Checking out the each of single element.
*/

let currArray = document.getElementById("currArray");
let input = document.getElementById("input");
let search = document.getElementById("search");
let result = document.getElementById("result");

let arr = [1, 4, 3, 66, 8, 33];
currArray.textContent = `[${arr}]`;

function onClickSearch() {
  let element = +input.value;
  if (!isNaN(element) && element > 0) {
    if (element <= arr.length) {
      result.textContent = arr[element];
    } else {
      alert("Reached array length");
    }
  } else {
    alert("Please enter a valid positive number");
  }
}

//--------------------------------------------------|Deleting Element in Array|----------------------------------------------

let element = document.getElementById("element");
let button = document.getElementById("button");

let arr = [1, 4, 66, 1, 2, 34, 9, 55, 7, 49, 13];
console.log(arr);

function click() {
  let position = +element.value;
  for (let i = position; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  13;
  arr.length = arr.length - 1;
  1;

  console.log(arr);
}

button.addEventListener("click", click);

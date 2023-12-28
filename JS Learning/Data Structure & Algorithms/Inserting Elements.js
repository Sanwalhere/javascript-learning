//--------------------------------------------------|Inserting Element in Array|----------------------------------------------

let place = document.getElementById("place");
let element = document.getElementById("element");
let button = document.getElementById("button");

let arr = [1, 4, 66, 1, 2, 34, 9, 55, 7, 49, 13];
function click() {
  let position = +place.value;
  let insertElement = +element.value;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= position) {
      arr[i + 1] = arr[i];
      if (i === position) {
        arr[i] = insertElement;
      }
    }
  }
  console.log(arr);
}
button.addEventListener("click", click);

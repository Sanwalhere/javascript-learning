//--------------------------------------------------|Searching Element in Array|----------------------------------------------

let element = document.getElementById("element");
let button = document.getElementById("button");

let arr = [1, 4, 66, 1, 2, 34, 9, 55, 7, 49, 13];

function clickk() {
  let item = +element.value;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === item) {
      console.log(arr.indexOf(item));
      break;
    } else {
      console.log("Not Found");
    }
  }
}

button.addEventListener("click", clickk);

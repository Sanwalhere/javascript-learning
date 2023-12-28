//--------------------------------------------------|Includes function|---------------------------------------------------------

let array = [1, 2, 3, 4, 5, -3, -7, "s"];

function includes(arr, searchElem) {
  for (let index of arr) if (index === searchElem) return true;
  return false;
}
console.log(includes(array, 1));

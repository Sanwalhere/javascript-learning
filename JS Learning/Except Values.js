//--------------------------------------------------|Except Values|-----------------------------------------------------------

let array = [1, 2, 3, 4, 5, -3, -7, "s"];
function except(array, toDelete) {
  const output = [];
  for (let index of array) {
    if (!toDelete.includes(index)) {
      output.push(index);
    }
  }
  return output;
}
console.log(except(array, [-7, 1]));

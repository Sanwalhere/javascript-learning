//--------------------------------------------------|Array Manipulation|------------------------------------------------------

let array = [3, 4, 5, 3, "a", "b", "c"];

array.push("d", "e");
array.unshift(1, 2);
array.splice(3, 1, 4);
let check = array.includes(9);
let check2 = array.indexOf("z");
let check3 = array.lastIndexOf(3, 2);

console.log(array);
console.log(check);
console.log(check2);
console.log(check3);

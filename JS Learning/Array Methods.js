//--------------------------------------------------|Array Methods|-------------------------------------------------------

let arr = ["a", "b", "c", "d", 1, 2, 3, 4];
console.log(arr);

arr.push(5, 6, 7);
arr.pop();
arr.unshift("aa", "bb");
arr.shift();
arr.splice();
arr.splice(3, 1);
arr.splice(6, 3);
let a = Array.from(arr);
console.log(a);
console.log(arr);

//--------------------------------------------------|Array Methods in JavaScript|-----------------------------------------------

const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(arr1.concat(arr2));

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.filter((num) => num % 2 === 0));

console.log(numbers.map((num) => num * 2));

const fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit) => console.log(fruit));

console.log(fruits.indexOf("banana"));

let array = [1, 2, 3, 4, 5];
console.log(array.at(-1) + array.at(0));

fruits.push("grape");
console.log(fruits);

const removedFruitPop = fruits.pop();
console.log(fruits, removedFruitPop);

const shiftedFruitShift = fruits.shift();
console.log(fruits, shiftedFruitShift);

fruits.unshift("kiwi");
console.log(fruits);

console.log(fruits.slice(1, 3));

fruits.splice(1, 1, "pear");
console.log(fruits);

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

console.log(fruits.includes("orange"));

const foundFruit = fruits.find((fruit) => fruit.length > 5);
console.log(foundFruit);

console.log(numbers.every((num) => num % 2 === 0));

console.log(numbers.some((num) => num % 2 === 0));

const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);

const reversedNumbers = numbers.reverse();
console.log(reversedNumbers);

const numbersString = numbers.toString();
console.log(numbersString);

const sumRight = numbers.reduceRight((acc, num) => acc + num, 0);
console.log(sumRight);

const repeatedNumbers = [1, 2, 3, 4, 5, 2];
console.log(repeatedNumbers.lastIndexOf(2));

const nestedArray = [1, [2, [3, 4]]];
console.log(nestedArray.flat(2));

const flatMappedArray = numbers.flatMap((num) => [num, num * 2]);
console.log(flatMappedArray);

const indexFound = numbers.findIndex((num) => num > 3);
console.log(indexFound);

const copiedArray = numbers.copyWithin(1, 0, 2);
console.log(copiedArray);

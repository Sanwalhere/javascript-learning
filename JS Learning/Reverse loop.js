// A for loop can iterate in reverse by initializing the loop variable to the starting value,
// testing for when the variable hits the ending value, and decrementing the loop variable at
// each iteration.

let array = ["banana", "apple", null, "blue", 98, { age: 13 }, [1, 5, 50]];

for (let i = array.length - 1; i >= 0; i--) {
  console.log(`${i}: ${array[i]}`);
}

// fixed [object object] issue:
let arr = ["banana", "apple", null, "blue", 98, { age: 13 }, [1, 5, 50]];

for (let i = arr.length - 1; i >= 0; i--) {
  if (typeof arr[i] === "object" && arr[i] !== null) {
    arr[i] = JSON.stringify(arr[i]);
  }
  console.log(`${i}: ${arr[i]}`);
}

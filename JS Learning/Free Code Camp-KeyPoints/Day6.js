/*


You can use the rest syntax in array destructuring to collect the remaining elements into a separate array:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];

console.log(a, b); // Output: 1 2
console.log(arr); // Output: [3, 4, 5, 7]

Here, a and b capture the first and second elements of the array, while arr collects the rest of the elements as an array.
Remember, the rest element must be the last in the destructuring assignment.

----------------------------------------------------------------------------------

Use a destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice().
removeFirstTwo() should return a sub-array of the original array list with the first two elements omitted.

function removeFirstTwo(list) {
  const [a,b, ...arr] = list
  return arr
}
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

----------------------------------------------------------------------------------

You can destructure an object directly within a function's parameter list like this:

const profileUpdate = ({ name, age, nationality, location }) => {
  // Use name, age, nationality, and location here
}
This way, when you call profileUpdate with an object as an argument, its properties are automatically extracted and
available within the function body.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max, min}) => (max + min) / 2.0; 

*/

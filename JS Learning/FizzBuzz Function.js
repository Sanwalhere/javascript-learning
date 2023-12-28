//--------------------------------------------------|FizzBuzz Function|----------------------------------------------------------

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  else if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input;
}
console.log(fizzBuzz(15));

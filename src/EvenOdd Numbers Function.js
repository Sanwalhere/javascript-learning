//--------------------------------------------------|EvenOdd Numbers Function|-----------------------------------------------------

let limit = showNumbers(3);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    i % 2 !== 0 ? console.log(i, "ODD") : console.log(i, "EVEN");
  }
}
console.log(limit);

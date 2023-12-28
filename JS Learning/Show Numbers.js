//--------------------------------------------------|Print Even Numbers|--------------------------------------------------------

for (let i = 1; i < 10; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

//--------------------------------------------------|Show Prime Numbers Function|--------------------------------------------

function showPrime(limit) {
  for (let i = 2; i <= limit; i++) {
    if (i % 2 !== 0 && limit) {
      console.log(i);
    }
  }
}
console.log(showPrime(30));

//--------------------------------------------------|Function Checking for Divisibility|-----------------------------------

function isDivisible(value) {
  return value % 2 === 0;
}
console.log(isDivisible(13));

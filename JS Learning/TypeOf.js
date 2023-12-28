//--------------------------------------------------|Checking Typeof Elements in an Array|-------------------------------

let arr = ["sanwal", "ali", "ahmed", 2, 3, 6, [], {}];
for (let value of arr) {
  if (Array.isArray(value)) console.log("array");
  else console.log(typeof value);
}

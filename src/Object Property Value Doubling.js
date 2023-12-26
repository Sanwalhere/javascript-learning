// --------------------------------------------------|Object Property Value Doubling|-----------------------------------------

let obj = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}
console.log(multiplyNumeric(obj));

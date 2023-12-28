//--------------------------------------------------|Default Parameter|-----------------------------

let data = function (name, year, gender = "he") {
  console.log(
    `${name} is ${year} years old and ${gender} is studing from ${year}`
  );
};
data("Sanwal", 19);

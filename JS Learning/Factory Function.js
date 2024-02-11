//--------------------------------------------------|Factory Function|-------------------------------------------------------

// A function that returns objects, typically used to create multiple instances of similar objects

let addressObject = factoryFunc(6, "Karachi", 7004);

function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}
showAddress(addressObject);

//-------------------------------------------------------------------------------------------------------

function factoryFunc(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}
console.log(addressObject);

// ------------------------------------------------------------

// A factory function that accepts 'name',
// 'age', and 'breed' parameters to return
// a customized dog object.
const dogFactory = (name, age, breed) => {
  return {
    name: name,
    age: age,
    breed: breed,
    bark() {
      return "Woof!";
    },
  };
};

let a = dogFactory("jack", 33, "german");
console.log(a.bark());

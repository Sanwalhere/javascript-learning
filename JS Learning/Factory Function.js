//--------------------------------------------------|Factory Function|-------------------------------------------------------

let addressObject = factoryFunc(6, "Karachi", 7004);
function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}
showAddress(addressObject);

//--------------------------------------------------|Factory Function|-------------------------------------------------------

function factoryFunc(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}
console.log(addressObject);

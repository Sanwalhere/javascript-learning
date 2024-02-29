/*

------------------------------------------
Tabular Data: In JavaScript, you can represent tabular data using arrays of objects or
multidimensional arrays. 

var data = [
  { name: "John", age: 30, city: "New York" },
  { name: "Alice", age: 25, city: "San Francisco" },
  { name: "Bob", age: 35, city: "Los Angeles" },
];
-----------------------------------------------
Modify the function checkObj to test if the object passed to the function parameter obj
contains the specific property passed to the function parameter checkProp. If the property
passed to checkProp is found on obj, return that property's value. If not, return Not Found.

function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp]
  }else{
    return 'Not Found'
  }
}
------------------------------------------------

*/

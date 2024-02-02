//--------------------------------------------------|Callback function|-----------------------------------------------

// A function passed as an argument to another function,
// to be executed or called back at a later point in time
// e.g, "Hey, when you're done, call this next."

hello(goodbye);

function hello(callback) {
  console.log("Hello!");
  callback();
}

function goodbye() {
  console.log("Goodbye!");
}
function message() {
  console.log("Addition done successfully");
}

//----------------------------------------------------------

function addition(value1, value2, callback) {
  console.log(value1 + value2);
  callback();
}

addition(5, 6, message);

//--------------------------------------------------|Callback function|-----------------------------------------------

// --- Def: Function which are passed as an argument to another function.

function message() {
  console.log("Addition done successfully");
}

function addition(value1, value2, callback) {
  console.log(value1 + value2);
  callback();
}

addition(5, 6, message);

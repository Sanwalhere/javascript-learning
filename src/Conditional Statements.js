//--------------------------------------------------|Conditional Statements with prompt|-------------------------------------

let valuePrompt = prompt("Enter Value", "");
if (valuePrompt > 0) {
  alert(1);
} else if (valuePrompt < 0) {
  alert(-1);
} else {
  alert(0);
}

//--------------------------------------------------|Nested Conditional Statements with prompt|------------------------------

let userName = prompt("Who's there", "");
if (userName === "Admin") {
  let pass = prompt("Enter Password", "");
  if (pass === "TheMaster") {
    alert("Welcome!");
  } else if (pass === "" || pass === null) {
    alert("Cancelled!");
  } else {
    alert("Wrong Password");
  }
} else if (userName === "" || userName === null) {
  alert("Canceled!");
} else {
  alert("I don't know you!");
}

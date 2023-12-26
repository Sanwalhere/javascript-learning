//--------------------------------------------------|Switch Statement|--------------------------------------------------------

let key = 1;
switch (key) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Leg Day");
}

//--------------------------------------------------------------------------------------------

let animal = "dog";

if (animal === "cat") {
  console.log("cats are cute");
} else if (animal === "dog") {
  console.log("dogs are good friend");
} else if (animal === "shark") {
  console.log("shark are dangerous");
} else {
  console.log("I wat to know about this animal");
}

switch (animal) {
  case "cat":
    console.log("cats are cute");
    break;
  case "dog":
    console.log("dogs are good friend");
    break;
  case "shark":
    console.log("shark are dangerous");
    break;
  default:
    console.log("I wat to know about this animal");
}

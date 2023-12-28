//--------------------------------------------------|Object Property Difference|---------------------------------------------

let gender = "gender"; // Assuming gender is a variable defined elsewhere
let dob = "dob"; // Assuming dob is a variable defined elsewhere

let obj2 = {
  name: "sanwal",
  class: "G2M2",
  phone: "03182732495",
  try2: "Entered",
  [gender]: "Male",
  [dob]: () => {
    let dobValue = prompt("Enter dob: ");
    dobValue < 18 ? alert("You are a Kid") : alert("You are Young");
  },
};

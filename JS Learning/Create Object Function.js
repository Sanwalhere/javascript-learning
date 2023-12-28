//--------------------------------------------------|Create Object Function|----------------------------------------------------

function createDataFunction(phone, laptop, water) {
  return {
    phone,
    laptop,
    water,
    temperature() {
      console.log("300 Degree");
    },
  };
}
const aliData = createDataFunction(2, "hp", 2);
console.log(aliData);
const adnanData = createDataFunction(6, "lenovo", 0);
console.log(adnanData);
console.log(adnanData.temperature);
console.log(aliData.temperature);

//--------------------------------------------------|Optional Chaining|--------------------------------------------------------

let user = {
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    eyeColor: "red",
  },
};
console.log(user?.address?.eyeColor);

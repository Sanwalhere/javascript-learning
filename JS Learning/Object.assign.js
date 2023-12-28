//--------------------------------------------------|Object Cloning with Object.assign|---------------------------------------

let user = {
  name: "John",
  sizes: {
    height: 183,
    width: 50,
  },
};

let clone = Object.assign({}, user);

console.log(clone.sizes.height);
console.log(user.sizes.width);

const person = {
  name: "John",
  dob: 30,
};
const person2 = {
  name: "Ali",
  dob: 30,
};
const person3 = {
  name: "Adnan",
  dob: 30,
};
let clone2 = Object.assign({}, person, person2, person3);
for (let key in clone) {
  console.log(clone);
}
console.log(clone);

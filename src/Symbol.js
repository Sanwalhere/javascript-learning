//--------------------------------------------------|Symbol Description|--------------------------------------------------------

let id = Symbol("ID");
console.log(id.description);

//--------------------------------------------------|Symbol Equality|-----------------------------------------------------------

let id1 = Symbol.for("id");
let id2 = Symbol.for("id");
console.log(id1 === id2);

//--------------------------------------------------|Symbol Uniqueness|---------------------------------------------------------

let gender = Symbol("id");
let dob2 = Symbol.for("id");
let dob = Symbol("id");

console.log(gender === dob);

//--------------------------------------------------|Object Method with Symbol|--------------------------------------------

let obj = {
  name: "sanwal",
  class: "G2M2",
  phone: "03182732495",
  gender: "Male",
  dob: () => {
    let dob = prompt("Enter dob: ");
    dob < 18 ? prompt("You are Kid") : prompt("You are Young");
  },
};
console.log(obj.dob());

//--------------------------------------------------|Symbol|-------------------------------------------------------------------

const _draw = Symbol();
const _name = Symbol();

class Circle {
  constructor(name, radius, diameter) {
    this[_name] = name;
    this.radius = radius;
    this.diameter = diameter;
  }
  [_draw]() {
    console.log("drawing");
  }
  sketch() {
    console.log("sketching");
  }
  sayName() {
    console.log(Circle.toUpperCase2(this.name));
  }

  static toUpperCase2(naam) {
    return naam.charAt(0).toUpperCase() + naam.substr(1, naam.length);
  }
}

let c1 = new Circle("Sanwal", 2, 6);
console.log(c1);
const symbol = Object.getOwnPropertySymbols(Circle.prototype)[0];
console.log(symbol);

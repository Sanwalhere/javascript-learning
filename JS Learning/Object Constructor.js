//--------------------------------------------------|Object Constructor with Arrow Functions|--------------------------------

function Calculator() {
  (this.read = () => {
    (this.a = +prompt("Enter Value 1", 0)),
      (this.b = +prompt("Enter Value 2", 0));
  }),
    (this.sum = () => {
      return this.a + this.b;
    }),
    (this.mul = () => {
      return this.a * this.b;
    });
}
let calculator = new Calculator();
calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

//--------------------------------------------------|Object Constructor with Accumulator|-------------------------------------

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = () => {
    this.value += +prompt("How much to add?", 0);
  };
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);

//--------------------------------------------------|Object Constructor|-----------------------------------------------------

function Trying(name, dob, height) {
  (this.name = name), (this.dob = dob), (this.height = height);
}
let man = new Trying("sanwal", 109, 6.1);
for (let i = 0; i < man.length; i++) {
  if (man.length[i] === "number") {
    [i].reduce(man[i]);
  }
}
console.log(man);

//--------------------------------------------------|Constructor Function|---------------------------------------------------

function CreateObject(street, city, zipCode) {
  (this.street = street), (this.city = city), (this.zipCode = zipCode);
}

let address1 = new CreateObject(1, 2, 5);
let address2 = new CreateObject(1, 2, 5);

function areSame(address1, address2) {
  return address1 === address2;
}
console.log(areSame(address1, address2));

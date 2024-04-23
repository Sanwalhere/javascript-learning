//--------------------------------------------------|Bind() Method|----------------------------------------------
/*
The .bind() method is bit simmiler to .call() method but instead it's create a
copy of the function, which will be invoked later. Means it will give you a 
copy which will be invoked later wherever it needs.
*/

const person = {
  firstName: "John",
  lastName: "Doe",
};

function greet() {
  console.log(`Hello, ${this.firstName} ${this.lastName}!`);
}

// Creating a bound function
const greetPerson = greet.bind(person);

// Calling the bound function
greetPerson();

//------------------------------------------------

let man = {
  fullName(city, country) {
    return this.firstName + " " + this.lastName + " " + city + " " + country;
  },
};

const man2 = {
  firstName: "John",
  lastName: "Doe",
};

let a = man.fullName.bind(man2, "karachi", "isl");

console.log(a());

// ----------------------------------------------------------

const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const module2 = {
  x: 9374,
};

const unboundGetX = module.getX;
console.log(unboundGetX);
console.log(unboundGetX()); // The function gets invoked at the global scope

const boundGetX = unboundGetX.bind(module);
const boundGetX2 = unboundGetX.bind(module2);
console.log(boundGetX());
console.log(boundGetX2());

// --------------------------------------------------------

let intro = function (clg = "ncr") {
  console.log(this.name + " " + this.class + " " + clg);
};
let obj = {
  name: "sanwal",
  class: "g3m3",
};
let obj1 = {
  name: "ali",
  class: "e3m1",
};

let objIntro = intro.bind(obj1, "national");
objIntro();

let objIntro1 = intro.bind(obj1);
objIntro1();

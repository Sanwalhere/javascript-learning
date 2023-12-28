//--------------------------------------------------|.Call() Method|----------------------------------------------

/*
The .call() method is particularly useful when you want to borrow a method from
another object. OR you can write a method that can be used on different objects.
It can be used to invoke(call) a method with an owner object as an argument
(parameter). With call(), an object can use a method belonging to another object.
*/

let obj = {
  name: "Sanwal",
  age: 19,
  patient: "Software Engineer",
  intro() {
    console.log(
      `My name is ${this.name} Im ${this.age} year old & Im a ${this.patient}`
    );
  },
};

obj.intro();

let obj2 = {
  name: "Adnan",
  age: 17,
  patient: "Gamer",
};

obj.intro.call(obj2);

//----------------------------------------------------------------------

const person = {
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

person.fullName.call(person1);
person.fullName.call(person2);

// -----------------------------------------------------------------------
// The call() method can accept arguments:

const man = {
  fullName: function (city, country) {
    console.log(
      this.firstName + " " + this.lastName + ", " + city + ", " + country
    );
  },
};

const man1 = {
  fullName(city, country) {
    console.log(
      this.firstName + " " + this.lastName + ", " + city + ", " + country
    );
  },
};

const man2 = {
  firstName: "John",
  lastName: "Doe",
};

man.fullName.call(man2, "Oslo", "Norway");

// --------------------------------------------------------

let intro = function (clg = "ncr") {
  console.log(this.name + " " + this.class + " " + clg);
};
let obj3 = {
  name: "sanwal",
  class: "g3m3",
};
let obj4 = {
  name: "ali",
  class: "e3m1",
};

intro.call(obj3, "national");
intro.call(obj4, "national");

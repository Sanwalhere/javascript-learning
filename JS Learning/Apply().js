//--------------------------------------------------|Apply() Method|---------------------------------------------
/*
The apply() method is similar to the call() method.
The difference is:
The call() method takes arguments separately.
The apply() method takes arguments as an array.
The apply() method is very handy if you want to use an array instead
of an argument list.
*/

const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

person.fullName.apply(person1, ["Oslo", "Norway"]);

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

intro.apply(obj, ["national"]);
intro.apply(obj1);

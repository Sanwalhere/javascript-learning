//--------------------------------------------------|Class and Static Method|-----------------------------------------------

class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(this.name + " walking...");
  }
  static isPerson(obj) {
    console.log(obj.constructor.name);
    return obj.constructor.name == Person.name;
  }
}

var raza = new Person("raza");
raza.walk();

var ali = new Person("ali");
ali.walk();

var obj1 = {};
var obj2 = new Person("person object");

console.log(Person.isPerson(obj1));
console.log(Person.isPerson(obj2));
Array.isArray();

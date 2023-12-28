//--------------------------------------------------|Getter and Setter in Object|-------------------------------------------

// Getter: A "getter" is a special type of method that is used to access the value of an object's property.
// Setter: A "setter" is a special type of method that is used to set the value of an object's property.

const person = {
  firstName: "Muhammad",
  lastName: "Sanwal",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    let parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
person.fullName = "Muhammad Ali";
console.log(person.fullName);

//--------------------------------------------------|Getter|-------------------------------------------

const circle = {
  radius: 2,
  // Getter for area
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};
circle.radius = 1;
console.log(circle.area);

//--------------------------------------------------|Setter|-------------------------------------------

const circle1 = {
  _radius2: 2,
  // Getter for area
  get area() {
    return Math.PI * this._radius2 * this._radius2;
  },
  // Setter for area
  set area(newRadius) {
    this._radius2 = newRadius;
  },
};
// Setting radius using the setter
circle1.area = 7;
// Logging the updated area using the getter
console.log(circle1.area);

//--------------------------------------------------|Getter|-------------------------------------------

const obj = {
  firstName: "Muhammad",
  lastName: "Sanwal",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};
console.log(obj.fullName);

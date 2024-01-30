//--------------------------------------------------|Getter and Setter in Object|-------------------------------------------

// Getter: A method that retrieves the value of a property
// Setter: A method that sets the value of a property

// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// ---------- EXAMPLE 1 ----------

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error("Width must be a positive number");
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("Height must be a positive number");
    }
  }

  get width() {
    return `${this._width.toFixed(1)}cm`;
  }

  get height() {
    return `${this._height.toFixed(1)}cm`;
  }

  get area() {
    return `${(this._width * this._height).toFixed(1)}cm`;
  }
}

const rectangle = new Rectangle(2, 3);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

// ---------- EXAMPLE 2 ----------
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("First name must be a non-empty string");
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("Last name must be a non-empty string");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error("Age must be a non-negative number");
    }
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }

  get age() {
    return this._age;
  }
}

const person = new Person("Spongebob", "Squarepants", 30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);

//--------------------------------------------------|Practice|-------------------------------------------

const person1 = {
  firstName: "Muhammad",
  lastName: "Sanwal",
  get fullName() {
    return `${person1.firstName} ${person1.lastName}`;
  },
  set fullName(newFullName) {
    let parts = newFullName.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
person1.fullName = "Muhammad Ali";
console.log(person1.fullName);

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

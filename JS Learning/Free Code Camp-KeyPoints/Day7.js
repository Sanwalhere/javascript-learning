/*

ES6 provides a new syntax to create objects, using the class keyword.
In ES5, an object can be created by defining a constructor function and using the new keyword to instantiate the object.
In ES6, a class declaration has a constructor method that is invoked with the new keyword. If the constructor method is not
explicitly defined, then it is implicitly defined with no arguments.


// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// Implicit constructor
class Rocket {
  launch() {
    console.log("To the moon!");
  }
  destroy() {
    console.log("911");
  }
}

const zeus = new SpaceShuttle("Jupiter");
zeus.takeOff();

const atlas = new Rocket();
atlas.launch();
atlas.destroy();

-------------------------------------------------------------------------

// Define a Book class with a constructor that sets the author.
// It includes a getter and setter for the author property.
// Getters return the value of the private _author variable,
// and setters update the _author variable with a new value.

class Book {
  constructor(author) {
    this._author = author;
  }

  // Getter for the author property
  get writer() {
    return this._author;
  }

  // Setter for the author property
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}

// Create a new instance of the Book class with 'anonymous' as the initial author.
const novel = new Book('anonymous');

// Display the initial author using the getter.
console.log(novel.writer);

// Update the author using the setter.
novel.writer = 'newAuthor';

// Display the updated author using the getter.
console.log(novel.writer);



*/

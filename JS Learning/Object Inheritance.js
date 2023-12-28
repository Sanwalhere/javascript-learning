//--------------------------------------------------|Object Inheritance|-------------------------------------------------------

// Step 1: Define the Shape constructor
function Shape() {}
// Step 2: Define the Circle constructor
function Circle(radius) {
  this.radius = radius;
}
// Step 3: Define the Square constructor, fix the typo in "diaminetions"
function Square(dimensions) {
  this.dimensions = dimensions;
}
// Step 4: Define the extend function
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
// Step 5: Extend Shape with Square
extend(Square, Shape);
// Step 6: Add a draw method to Circle prototype
Circle.prototype.draw = function () {
  console.log("draw");
};
// Step 7: Create instances of Circle and Shape
let c = new Circle(3);
let s = new Square(4);
// Step 8: Log the instances to the console
console.log(c);
console.log(s);

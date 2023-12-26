//--------------------------------------------------|Prototypes and Prototype Chain|----------------------------------------

// Prototype for Shape
function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};
Shape.prototype.shapes = function () {
  console.log("Square, Rectangle, Diamond");
};

// Prototype chain setup for Circle
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  console.log("draw");
};
Circle.prototype.erase = function () {
  console.log("I erase");
};

// Instances of Circle
let circle1 = new Circle(2);
let circle2 = new Circle(8);

console.log(circle1);
console.log(circle2);

circle1.draw(); // Outputs "draw"
circle1.duplicate(); // Outputs "duplicate"
circle1.shapes(); // Outputs "Square, Rectangle, Diamond"

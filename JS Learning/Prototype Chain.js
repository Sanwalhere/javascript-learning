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

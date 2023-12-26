//--------------------------------------------------|Object with Methods|-------------------------------------------------------

let calculator = {
  read() {
    this.a = 5;
    this.b = 5;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
console.log(calculator.read());
console.log(calculator.sum());
console.log(calculator.mul());

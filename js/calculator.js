function Calculator (num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
}

Calculator.prototype.addition = function() {
  return this.num1 + this.num2;
};

Calculator.prototype.subtraction = function() {
  return this.num1 - this.num2;
};

Calculator.prototype.multiplication = function() {
  return this.num1 * this.num2;
};

Calculator.prototype.division = function() {
  return this.num1 / this.num2;
};

exports.calculatorModule = Calculator;

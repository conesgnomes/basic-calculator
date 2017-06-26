function Calculator (num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
}

Calculator.prototype.addition = function(num1, num2) {
  return this.num1 + this.num2;
}

Calculator.prototype.subtraction = function(num1, num2) {
  return this.num1 - this.num2;
}

Calculator.prototype.multiplication = function(num1, num2) {
  return this.num1 * this.num2;
}

Calculator.prototype.division = function(num1, num2) {
  return this.num1 / this.num2;
}

exports.calculatorModule = Calculator;

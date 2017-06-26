(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function(){
  $('form.add-form').submit(function(e){
    e.preventDefault();
    var userNumber1 = parseInt($('input.first-num-add').val());
    var userNumber2 = parseInt($('input.second-num-add').val());
    var newCalculator = new Calculator(userNumber1, userNumber2);

    var addResult = newCalculator.addition();
    $(".add-results").append("<h3>" + addResult + "</h3>");
  });

  $('form.sub-form').submit(function(e){
    e.preventDefault();
    var userNumber1 = parseInt($('input.first-num-sub').val());
    var userNumber2 = parseInt($('input.second-num-sub').val());
    var newCalculator = new Calculator(userNumber1, userNumber2);

    var subResult = newCalculator.subtraction();
    $(".sub-results").append("<h3>" + subResult + "</h3>");
  });

  $('form.mult-form').submit(function(e){
    e.preventDefault();
    var userNumber1 = parseInt($('input.first-num-mult').val());
    var userNumber2 = parseInt($('input.second-num-mult').val());
    var newCalculator = new Calculator(userNumber1, userNumber2);

    var multResult = newCalculator.multiplication();
    $(".mult-results").append("<h3>" + multResult + "</h3>");
  });

  $('form.div-form').submit(function(e){
    e.preventDefault();
    var userNumber1 = parseInt($('input.first-num-div').val());
    var userNumber2 = parseInt($('input.second-num-div').val());
    var newCalculator = new Calculator(userNumber1, userNumber2);

    var divResult = newCalculator.division();
    $(".div-results").append("<h3>" + divResult + "</h3>");
  });
});

},{"./../js/calculator.js":1}]},{},[2]);

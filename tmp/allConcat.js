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

var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function(){
  var userNumber1 = parseInt($('#first-num-input').val());
  var userNumber2 = parseInt($('#second-num-input').val());
  var newCalculator = new Calculator(userNumber1, userNumber2);

  $('#add').click(function(){
    var result = newCalculator.addition();
    $(".results").append("<h3>" + result + "</h3>");
  });

});

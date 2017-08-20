var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
    zero = element(by.css("#number0"));
    one = element(by.css("#number1"));
    two = element(by.css("#number2"));
    three = element(by.css("#number3"));
    four = element(by.css("#number4"));
    five = element(by.css("#number5"));
    six = element(by.css("#number6"));
    seven = element(by.css("#number7"));
    eight = element(by.css("#number8"));
    nine = element(by.css("#number9"));
    add = element(by.css("#operator_add"));
    subtract = element(by.css("#operator_subtract"));
    multiply = element(by.css("#operator_multiply"));
    divide = element(by.css("#operator_divide"));
    equals = element(by.css("#operator_equals"));
    runningTotal = element(by.css("#running_total"));
  });

  // write integration tests here in the form of "it should do something..."
  it("should have working number buttons", function() {
    one.click();
    nine.click();
    expect(running_total.getAttribute("value")).to.eventually.equal("19");
  });

  // Do the number buttons work to update the display of the running total?
  // Do each of the arithmetical operations work to update the display with the result of the operation?
  // Can we chain multiple operations together?
  // Does it work as expected for a range of numbers? (positive, negative, decimals, very large numbers)
  // What does the code do in exceptional circumstances?

  // If you divide by zero, what is the effect?
  // Can you write a test to describe what you'd prefer to happen, and then correct the code to make that test pass.

});
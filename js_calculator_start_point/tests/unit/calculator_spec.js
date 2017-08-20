var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it("should be able to add", function() {
   calculator.add(5);
    assert.strictEqual(calculator.runningTotal, 5);
  });

  it("should be able to subtract", function() {
    calculator.subtract(5);
     assert.strictEqual(calculator.runningTotal, -5);
  });

  it("should be able to mulitply", function() {
    calculator.previousTotal = 5;
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 25);
  });

  it("should be able to divide", function() {
    calculator.previousTotal = 5;
    calculator.divide(5);
    assert.strictEqual(calculator.runningTotal, 1);
  });

  it("should register number clicks", function() {
    calculator.numberClick(0);
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(4);
    calculator.numberClick(5);
    calculator.numberClick(6);
    calculator.numberClick(7);
    calculator.numberClick(8);
    calculator.numberClick(9);
    assert.strictEqual(calculator.runningTotal, 0123456789);
  });

  it("should respond to operator clicks", function() {
    calculator.numberClick(2);
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.operatorClick("-");
    calculator.numberClick(2);
    calculator.operatorClick("*");
    calculator.numberClick(2);
    calculator.operatorClick("/");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.strictEqual(calculator.previousTotal, 2)
  });

  it("should clear on clear button click", function() {
    calculator.numberClick(2);
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal, 0);
    assert.strictEqual(calculator.previousTotal, 2);
  })
});

const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
  describe('sum', function() {
    it('should return the sum of the rounded arguments', function() {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
      assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
      assert.equal(calculateNumber('SUM', -1, -3), -4);
      assert.equal(calculateNumber('SUM', -1, -3.7), -5);
      assert.equal(calculateNumber('SUM', -1.2, -3.7), -5);
      assert.equal(calculateNumber('SUM', -1.5, -3.7), -5);
    })
  });

  describe('subtract', function() {
    it('should return the subtraction of the rounded arguments', function () {
      assert.equal(calculateNumber('SUBTRACT', 4, 2), 2);
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.equal(calculateNumber('SUBTRACT', 4.5, 2.7), 2);
      assert.equal(calculateNumber('SUBTRACT', 4.1, 2), 2);
      assert.equal(calculateNumber('SUBTRACT', -4, 2), -6);
      assert.equal(calculateNumber('SUBTRACT', -4, -2), -2);
      assert.equal(calculateNumber('SUBTRACT', -4.5, 2.7), -7);
      assert.equal(calculateNumber('SUBTRACT', 1.6, 2), 0);
      assert.equal(calculateNumber('SUBTRACT', -1.5, -2.5), 1);
    })
  });

  describe('divide', function () {
    it('should return the division of the rounded arguments', function () {
      assert.equal(calculateNumber('DIVIDE', 4, 0), 'Error');
      assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
      assert.equal(calculateNumber('DIVIDE', 4.1, 2), 2);
      assert.equal(calculateNumber('DIVIDE', 4, 2.3), 2);
      assert.equal(calculateNumber('DIVIDE', 4.5, 2), 2.5);
      assert.equal(calculateNumber('DIVIDE', 5.5, 2.5), 2);
      assert.equal(calculateNumber('DIVIDE', -4, 2), -2);
      assert.equal(calculateNumber('DIVIDE', -4, -2), 2);
      assert.equal(calculateNumber('DIVIDE', -4.4, -2.4), 2);
      assert.equal(calculateNumber('DIVIDE', -4.5, -2.5), 2);
      assert.equal(calculateNumber('DIVIDE', -6, -2.8), 2);
      assert.equal(calculateNumber('DIVIDE', -1.4, -2), 0.5);
    })
  })
})

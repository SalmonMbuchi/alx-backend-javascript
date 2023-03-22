const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
  describe('sum', function() {
    it('should return the sum of the rounded arguments', function() {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
      expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
      expect(calculateNumber('SUM', -1, -3.7)).to.equal(-5);
      expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
      expect(calculateNumber('SUM', -1.5, -3.7)).to.equal(-5);
    })
  });

  describe('subtract', function() {
    it('should return the subtraction of the rounded arguments', function () {
      expect(calculateNumber('SUBTRACT', 4, 2)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 4.5, 2.7)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 4.1, 2)).to.equal(2);
      expect(calculateNumber('SUBTRACT', -4, 2)).to.equal(-6);
      expect(calculateNumber('SUBTRACT', -4, -2)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', -4.5, 2.7)).to.equal(-7);
      expect(calculateNumber('SUBTRACT', 1.6, 2)).to.equal(0);
      expect(calculateNumber('SUBTRACT', -1.5, -2.5)).to.equal(1);
    })
  });

  describe('divide', function () {
    it('should return the division of the rounded arguments', function () {
      expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
      expect(calculateNumber('DIVIDE', 4.1, 2)).to.equal(2);
      expect(calculateNumber('DIVIDE', 4, 2.3)).to.equal(2);
      expect(calculateNumber('DIVIDE', 4.5, 2)).to.equal(2.5);
      expect(calculateNumber('DIVIDE', 5.5, 2.5)).to.equal(2);
      expect(calculateNumber('DIVIDE', -4, 2)).to.equal(-2);
      expect(calculateNumber('DIVIDE', -4, -2)).to.equal(2);
      expect(calculateNumber('DIVIDE', -4.4, -2.4)).to.equal(2);
      expect(calculateNumber('DIVIDE', -4.5, -2.5)).to.equal(2);
      expect(calculateNumber('DIVIDE', -6, -2.8)).to.equal(2);
      expect(calculateNumber('DIVIDE', -1.4, -2)).to.equal(0.5);
    })
  })
})

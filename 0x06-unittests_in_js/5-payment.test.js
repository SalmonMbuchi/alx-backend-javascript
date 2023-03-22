const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', function () {
  const sandbox = sinon.createSandbox();
  
  beforeEach(function () {
    sandbox.spy(Utils, 'calculateNumber');
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('should return the sum of 100 and 20', function () {
    sendPaymentRequestToApi(100, 20); 
    sandbox.assert.calledOnce(Utils.calculateNumber);
  });
  
  it('should return the sum of 10 and 10', function () {
    sendPaymentRequestToApi(10, 10); 
    sandbox.assert.calledOnce(Utils.calculateNumber);
  });
})

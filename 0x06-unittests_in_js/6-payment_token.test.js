const chai = require('chai');
const expect = chai.expect;
const { describe, it } = require('mocha');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getpaymentTokenFromAPI', function () {
  it('should return an object if true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.be.an('object')
          .with.property('data', 'Successful response from the API');
      })
    done();
  });
});

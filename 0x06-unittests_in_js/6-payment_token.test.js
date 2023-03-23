const chai = require('chai');
const expect = chai.expect;
const getpaymentTokenFromAPI = require('./6-payment_token.js');



describe('getpaymentTokenFromAPI', function () {
  it('should return an object if true', function (done) {
    return getpaymentTokenFromAPI(true).
      then(obj => {
        expect(obj).to.equal({data: 'Successfully response from the API'});
        done();
      });
  })
})

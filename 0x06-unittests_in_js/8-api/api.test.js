const chai = require('chai');
const expect = chai.expect;
const request = require('request');
const {describe, it} = require('mocha');


describe('Index page', function () {
  it('test Express API', function (done) {
    request.get('http:localhost:7865/', function(err, res, body) {
      if (!err) {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
      }
      done();
    });
  });
});

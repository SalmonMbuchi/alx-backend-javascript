const chai = require('chai');
const expect = chai.expect;
const request = require('request');
const app = require('./api.js');


describe('Index page', function () {
  it('should return OK status', function () {
    return request.get('http://localhost:7865/')
      .on('response', function(response) {
        expect(response.statusCode).to.equal(200);
      })
  });

  it('should have text as the content type', function () {
    return request.get('http://localhost:7865/')
      .on('response', function (response) {
        expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
      })
  });

  it.skip('should return a message', function () {
    return request.get('http://localhost:7865/')
      .on('response', function (response) {
        expect(response.body).to.equal('Welcome to the payment system');
      })
  })
})

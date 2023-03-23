const chai = require('chai');
const expect = chai.expect;
const request = require('request');


describe('Index page', function () {
  const params = {
    url: 'http://localhost/7865/',
    method: 'GET'
  } 
  
  it('should return OK status', function (done) {
    request(params, function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    })
  });

  it('should have text as the content type', function (done) {
    request(params, function (err, res, body) {
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    })
  });

  it('should return a message', function (done) {
    request(params, function(err, res, body) {
      expect(body).to.contain('Welcome to the payment system');
      done();
    })
  })
})

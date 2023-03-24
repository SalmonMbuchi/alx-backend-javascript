module.exports = function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({data: 'Succesful response from API'});
  }
}

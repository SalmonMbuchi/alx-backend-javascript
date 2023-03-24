module.exports = function getPaymentTokenFromAPI(success) {
  if (success === 'true') {
    return new Promise((resolve) => {
      const obj = {data: 'Succesful response from the API'};
      resolve(obj);
    })
  }
}

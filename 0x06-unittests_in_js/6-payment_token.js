module.exports = function getPaymentTokenFromAPI(success) {
  if (success === 'true') {
    //return new Promise((resolve, reject) => {
    //  const obj = {data: 'Succesful response from the API'};
    //  resolve(obj);
    //})
    return Promise.resolve({data: 'Succesful response from API'});
  }
}

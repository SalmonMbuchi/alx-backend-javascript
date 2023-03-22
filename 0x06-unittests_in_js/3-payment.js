const Utils = require('./utils.js');

module.exports = function sendPaymentRequestToApi(totalAmount, totalShipping) {
  let sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${sum}`);
};

const randomstring = require('randomstring');
const utils = require('../utils');
module.exports = {
  getAllAccounts: function(defaultAccountID) {
    const res = []
    const n = utils.randomIntegerBetween(5,15);
    res.push({
      "accountID": defaultAccountID,
      "type": "DEFAULT",
      "service": Math.floor(Math.random()*2) ? "MASTERCARD" : "VISA",
      "balance": utils.randomIntegerBetween(20, 150) * 1000000,
    })
    for (let i = 1; i < n; i += 1) {
      res.push({
        "accountID": randomstring.generate({ length: 16, charset: 'numeric'}),
        "type": "SAVING",
        "service": Math.floor(Math.random()*2) ? "MASTERCARD" : "VISA",
        "balance": utils.randomIntegerBetween(20, 150) * 1000000,
      })
    }
    return {
      "data": res,
    }
  }
}
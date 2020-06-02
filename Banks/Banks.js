const randomstring = require('randomstring');
const faker = require('faker');
const utils = require('../utils');
const mongoid = require('mongoid-js');
module.exports = {
  getAllBanks: function(bank) {
    const res = []
    const n = bank.length
    for (let i = 0; i < n; i += 1) {
      res.push({
        "id": bank[i].id,
        "name": bank[i].name,
      })
    }
    return {
      "data": res,
    }
  },
  validateAccount: function(bankID, accountID) {
    if (accountID === '1234123412341234') {
      return {
        "valid": true,
        "accountName": faker.name.findName(),
      }
    }
    return {
      "valid": false,
    }
  },
  getAccountInfo: function(accountID, bankID, bank) {
    return {
      "valid": true,
      "data": {
        "accountName": faker.name.findName(),
        "accountID": accountID,
        "bankID": bankID,
        "bankName": bank.find((e) => e.id === bankID).name,
      }
    }
  }
}
const randomstring = require('randomstring');
const faker = require('faker');
const utils = require('../utils');
const mongoid = require('mongoid-js');
const bank = [
  {
    id: "5ed0d40504cce42690000002",
    name: "ACB"
  },
  {
    id: "5ed0d40504cce42690000003",
    name: "Agribank"
  },
  {
    id: "5ed0d40504cce42690000004",
    name: "BIDV"
  },
  {
    id: "5ed0d40504cce42690000005",
    name: "TechcomBank"
  },
  {
    id: "5ed0d40504cce42690000006",
    name: "VPBank"
  }
]
module.exports = {
  getAllBanks: function() {
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
  }
}
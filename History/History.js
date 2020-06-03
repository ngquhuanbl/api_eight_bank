const randomstring = require('randomstring');
const faker = require('faker');
const utils = require('../utils');
const mongoid = require('mongoid-js');

const status = ['SUCCESS', 'FAILED', 'REFUND']

const bank = [
  {
    id: "5ed0d40504cce42690000001",
    name: "EIGHT.Bank"
  },
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
  getReceive: function() {
    const res = []
    const n = utils.randomIntegerBetween(10, 30)
    for (let i = 0; i < n; i += 1) {
      res.push({
        "senderID": randomstring.generate({ length: 16, charset: 'numeric'}),
        "senderName": faker.name.findName(),
        "amount": utils.randomIntegerBetween(2, 15) * 1000000,
        "bankName": bank[utils.randomIntegerBetween(0, 5)].name,
        "date": new Date(faker.date.recent()).getTime(),
      })
    }
    return {
      "data": res,
    }
  },
  getTransfer: function() {
    const res = []
    const n = utils.randomIntegerBetween(10, 30)
    for (let i = 0; i < n; i += 1) {
      res.push({
        "receiverID": randomstring.generate({ length: 16, charset: 'numeric'}),
        "receiverName": faker.name.findName(),
        "amount": utils.randomIntegerBetween(2, 15) * 1000000,
        "bankName": bank[utils.randomIntegerBetween(0, 5)].name,
        "status": status[utils.randomIntegerBetween(0, 2)],
        "date": new Date(faker.date.recent()).getTime(),
      })
    }
    return {
      "data": res,
    }
  },
  getDebtRepay: function(yourID, yourName) {
    const res = []
    const n = utils.randomIntegerBetween(10, 30)
    for (let i = 0; i < n; i += 1) {
      const isLoan = Math.floor(Math.random() * 2)
      res.push({
        "lenderID": (isLoan ? yourID : randomstring.generate({ length: 16, charset: 'numeric'})),
        "lenderName": (isLoan ? yourName : faker.name.findName()),
        "borrowerID": (!isLoan ? yourID : randomstring.generate({ length: 16, charset: 'numeric'})),
        "borrowerName": (!isLoan ? yourName : faker.name.findName()),
        "amount": utils.randomIntegerBetween(2, 15) * 1000000,
        "status": status[utils.randomIntegerBetween(0, 2)],
        "date": new Date(faker.date.recent()).getTime(),
      })
    }
    return {
      "data": res,
    }
  },
}
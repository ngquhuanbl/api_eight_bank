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
  getAllReceivers: function() {
    const res = []
    const n = utils.randomIntegerBetween(5,15);
    for (let i = 0; i < n; i += 1) {
      const bankIndex = utils.randomIntegerBetween(0, 5)
      res.push({
        "id": mongoid(),
        "nickname": Math.floor(Math.random()*2) ? faker.name.findName() : faker.name.title(),
        "accountID": randomstring.generate({ length: 16, charset: 'numeric'}),
        "bankID": bank[bankIndex].id,
        "bankName": bank[bankIndex].name,
      })
    }
    return {
      "data": res,
    }
  }
}
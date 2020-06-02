const randomstring = require('randomstring');
const faker = require('faker');
const utils = require('../utils');
const mongoid = require('mongoid-js');
module.exports = {
  getAllReceivers: function(bank) {
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
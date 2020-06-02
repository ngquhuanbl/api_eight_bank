const randomstring = require('randomstring');
const faker = require('faker');
const utils = require('../utils');
const mongoid = require('mongoid-js');

const status = ['UNPAID', 'PAID', 'CANCELLED']

module.exports = {
  getCreatedByYou: function(yourID, yourName) {
    const res = []
    const n = utils.randomIntegerBetween(10, 30)
    for (let i = 0; i < n; i += 1) {
      const statusIndex = utils.randomIntegerBetween(0,2)
      let reasonOfCancel = ""
      if (statusIndex === 2) reasonOfCancel = faker.lorem.paragraph()
      res.push({
        "id": mongoid(),
        "lenderID": yourID,
        "lenderName": yourName,
        "borrowerName": faker.name.findName(),
        "borrowerID": randomstring.generate({ length: 16, charset: 'numeric'}),
        "status": status[statusIndex],
        "amount": utils.randomIntegerBetween(2, 15) * 1000000,
        "message": faker.lorem.paragraph(),
        "reasonOfCancel": reasonOfCancel,
      })
    }
    return {
      "data": res,
    }
  },
  getReceivedFromOthers: function(yourID, yourName) {
    const res = []
    const n = utils.randomIntegerBetween(10, 30)
    for (let i = 0; i < n; i += 1) {
      const statusIndex = utils.randomIntegerBetween(0,2)
      let reasonOfCancel = ""
      if (statusIndex === 2) reasonOfCancel = faker.lorem.paragraph()
      res.push({
        "id": mongoid(),
        "lenderName": faker.name.findName(),
        "lenderID": randomstring.generate({ length: 16, charset: 'numeric'}),
        "borrowerName": yourName,
        "borrowerID": yourID,
        "status": status[statusIndex],
        "amount": utils.randomIntegerBetween(2, 15) * 1000000,
        "message": faker.lorem.paragraph(),
        "reasonOfCancel": reasonOfCancel,
      })
    }
    return {
      "data": res,
    }
  },
}
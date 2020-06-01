const express = require('express');
const cors = require('cors');
const faker = require('faker')
const Accounts = require('./Accounts/Accounts')
const Receivers = require('./Receivers/Receivers')
const Banks = require('./Banks/Banks')
const Debts = require('./Debts/Debts')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Open endpoints
app.post('/api/login', function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const validCaptcha = true || Math.floor(Math.random() * 2)
  setTimeout(function() {
    if (email !== 'johndoe@gmail.com' || password !== '123456789') {      
      res.status(418).json({
        "error": "Invalid email or password"
      })
    } else if (!validCaptcha) {
      res.status(419).json({
        "error": "Invalid captcha"
      })
    } else {
      res.status(200).json({
        "token": "93144b288eb1fdccbe46d6fc0f241a51766ecd3d",
        "name": faker.name.findName(),
      })
    }
  }, 5000)
})

app.post('/api/forgot-password', function(req, res) {
  const email = req.body.email;
  const otp = req.body.otp;
  setTimeout(() => {
    if (!otp) {
      const beAbleToSendEmail = true || Math.floor(Math.random() * 2);
      if (beAbleToSendEmail) {
        res.status(200).end()
      } else {
        res.status(500).json({
          "error": "Failed to send email! Try again..."
        })
      }
    } else {
      if (email === 'johndoe@gmail.com' && otp === '123456') {
        res.status(200).json({
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        })
      } else {
        res.status(418).json({
          "error": "Invalid OTP"
        })
      }
    }
  }, 5000)
})

app.post('/api/reset-password', function(req, res) {
  const token = req.body.token;
  const password = req.body.password;
  const serverError = true || Math.floor(Math.random() * 2);
  setTimeout(() => {
    if (!serverError) {
      res.status(200).end()
    } else {
      res.status(500).json({
        "error": "Server error! Please try again ..."
      })
    }
  }, 5000)
})

app.post('/api/otp/send', function(req, res) {
  setTimeout(() => {
    const email = req.body.email;
    console.log(email)
    res.status(200).json({})
  }, 5000)
})

app.post('/api/otp/validate', function(req, res) {
  setTimeout(() =>  {
    const email = req.body.email;
    const otp = req.body.otp;
    console.log(email, otp)
    res.status(200).json({
      "valid": true
    })
  }, 5000)
})

// Endpoints that require Authentication

// Accounts

app.get('/api/accounts', function(req, res) {
  console.log(req.header('Authorization'))
  setTimeout(() => {
    res.status(200).json(Accounts.getAllAccounts())
  }, 5000)
})

// Receivers

app.get('/api/receivers', function(req, res) {
  console.log(req.header('Authorization'))
  setTimeout(() => {
    res.status(200).json(Receivers.getAllReceivers())
  }, 5000)
})

app.post('/api/receivers/create', function(req, res) {
  console.log(req.header('Authorization'))
  setTimeout(() => {
    const bankID = req.body.bankID;
    const accountID = req.body.accountID;
    const nickname = req.body.nickname;
    console.log(bankID, accountID, nickname)
    if (accountID === '1234123412341234') {
      res.status(200).json({})
    } else {
      res.status(500).json({
        "error": "Server error"
      })
    }
  }, 5000)
})

app.post('/api/receivers/edit', function(req, res) {
  console.log(req.header('Authorization'))
  setTimeout(() => {
    const id = req.body.id;
    const nickname = req.body.name;
    console.log(id, nickname)
    res.status(200).json({})
  }, 5000)
})

app.delete('/api/receivers/remove', function(req, res) {
  console.log(req.header('Authorization'))
  setTimeout(() => {
    const id = req.query.id;
    console.log(id)
    res.status(200).json({})
  }, 5000)
})

// Banks

app.get('/api/banks', function(req, res) {
  console.log(req.header('Authorization'))
  setTimeout(() => {
    res.status(200).json(Banks.getAllBanks())
  }, 5000)
})

app.post('/api/banks/validate', function(req, res) {
  console.log(req.header('Authorization'))
  setTimeout(() => {
    const bankID = req.body.bankID;
    const accountID = req.body.accountID;
    res.status(200).json(Banks.validateAccount(bankID, accountID))
  }, 5000)
})

app.get('/api/banks/account', function(req, res) {
  console.log(req.header('Authorization'))
  setTimeout(() => {
    const accountID = req.query.accountID;
    const bankID = req.query.bankID;
    console.log(accountID, bankID)
    res.status(200).json(Banks.getAccountInfo(accountID, bankID))
  }, 5000)
})

// Transfer

app.post('/api/transfer', function(req, res) {
  setTimeout(() => {
    console.log(req.header('Authorization'))
    const senderAccountID = req.body.senderAccountID
    const receiverAccountID = req.body.receiverAccountID
    const receiverBankID = req.body.receiverBankID
    const amount = req.body.amount
    const detail = req.body.amount
    const chargedBySender = req.body.chargedBySender
    console.log('senderAccountID: ',senderAccountID)
    console.log('receiverAccountID: ',receiverAccountID)
    console.log('receiverBankID: ',receiverBankID)
    console.log('amount :',amount)
    console.log('detail :',detail)
    console.log('chargedBySender :', chargedBySender)

    res.status(200).json({
      "success": true
    })

    // res.status(500).json({
    //   "error": "Server error! Please try again later ..."
    // })

  }, 5000)
})

// Debts

app.get('/api/debts/created-by-you', function(req,res) {
  console.log(req.header('Authorization'))
  setTimeout(() => {
    res.status(200).json(Debts.getCreatedByYou())
  }, 5000)
})

app.get('/api/debts/received-from-others', function(req,res) {
  console.log(req.header('Authorization'))
  setTimeout(() => {
    res.status(200).json(Debts.getReceivedFromOthers())
  }, 5000)
})

app.post('/api/debts/remove', function(req, res) {
  console.log(req.header('Authorization'))
  setTimeout(() => {
    console.log('Debt ID: ',req.body.id)
    console.log('Reason of cancellation: ',req.body.reasonOfCancel)
    res.status(200).json({})
  }, 5000)
})

app.post('/api/debts/repay', function(req, res) {
  console.log(req.header('Authorization'))
  setTimeout(() => {
    console.log('Account ID: ',req.body.accountID)
    console.log('Debt ID: ',req.body.debtID)
    res.status(200).json({})
  }, 5000)
})

app.post('/api/debts/create', function(req, res) {
  console.log(req.header('Authorization'))
  setTimeout(() => {
    console.log('Borrower ID: ',req.body.borrowerID)
    console.log('Debt amount: ',req.body.amount)
    console.log('Debt message: ',req.body.message)
    res.status(200).json({})
  }, 5000)
})

const PORT = process.env.PORT || 3002;
app.listen(PORT, function () {
    console.log(`API running on port ${PORT}`);
})

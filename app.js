const express = require('express');
const cors = require('cors');
const Accounts = require('./Accounts/Accounts')
const Receivers = require('./Receivers/Receivers')
const Banks = require('./Banks/Banks')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Sign in
app.post('/api/login', function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const validCaptcha = Math.floor(Math.random() * 2)
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
        "token": "93144b288eb1fdccbe46d6fc0f241a51766ecd3d"
      })
    }
  }, 5000)
})

app.post('/api/forgot-password', function(req, res) {
  const email = req.body.email;
  const otp = req.body.otp;
  setTimeout(() => {
    if (!otp) {
      const beAbleToSendEmail = Math.floor(Math.random() * 2);
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
  const serverError = Math.floor(Math.random() * 2);
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

app.get('/api/accounts', function(req, res) {
  console.log(req.header('Authorization'))
  setTimeout(() => {
    res.status(200).json(Accounts.getAllAccounts())
  }, 5000)
})

app.get('/api/receivers', function(req, res) {
  console.log(req.header('Authorization'))
  setTimeout(() => {
    res.status(200).json(Receivers.getAllReceivers())
  }, 5000)
})

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
    const id = req.body.id;
    console.log(id)
    res.status(200).json({})
  }, 5000)
})

const PORT = process.env.PORT || 3002;
app.listen(PORT, function () {
    console.log(`API running on port ${PORT}`);
})
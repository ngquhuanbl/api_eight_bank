# # RESTful API Specification
Designed for ***EIGHT.Bank Internet Banking***, a final project of Team Eight for the subject Advance Web Programming, HCM Universiry of Sciences, Vietnam, 2020

## Open Endpoints

Open endpoints require no Authentication.

* [Login](SignIn/login.md) : `POST /api/login/`
* [Send OTP](OTP/send.md) : `POST /api/otp/send`
* [Validate OTP](OTP/validate.md) `POST /api/otp/validate`
* [Reset password](SignIn/resetPassword) : `POST /api/reset-password/`
 

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above.

### Accounts
* [Get all accounts of a customer](Accounts/getAllAccounts.md): `GET /api/accounts`

### Receiver
* [Get all receivers of a customer](Receivers/getAllReceivers.md): `GET /api/receivers`
* [Create new receiver](Receivers/createNewReceiver.md) `POST /api/receivers/create`
* [Edit a receiver](Receivers/editReceiver.md) `POST /api/receivers/edit`
* [Delete a receiver](Receivers/removeReceiver.md) `DELETE /api/receivers/remove`

### Bank
* [Get all associated banks](Banks/getAllBanks.md) `GET /api/banks`
* [Get an account information of a bank](Banks/getAccountInfo.md) `GET /api/banks/account`
* [Validate account id of a bank](Banks/validateAccountID.md) `POST /api/banks/validate`

### Transfer
* [Make a money transfer](Transfer/transfer.md) `POST /api/transfer`



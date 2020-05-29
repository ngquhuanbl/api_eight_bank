# # RESTful API Specification
Designed for ***EIGHT.Bank Internet Banking***, a final project of Team Eight for the subject Advance Web Programming, HCM Universiry of Sciences, Vietnam, 2020

## Open Endpoints

Open endpoints require no Authentication.

* [Login](SignIn/login.md) : `POST /api/login/`
* [Forgot password](SignIn/forgotPassword.md) : `POST /api/forgot-password/`
* [Reset password](SignIn/resetPassword) : `POST /api/reset-password/`
 

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above.

### Account

* [Get all accounts of a customer](Accounts/getAllAccounts.md): `GET /api/accounts`
* [Get all receivers of a customer](Receivers/getAllReceivers.md): `GET /api/receivers`
* [Get all associated banks](Banks/getAllBanks.md) `GET /api/banks`
* [Validate account id](Banks/validateAccountID.md) `POST /api/banks/validate`
* [Create new receiver](Receivers/createNewReceiver.md) `POST /api/receivers/create`
* [Edit a receiver](Receivers/editReceiver.md) `POST /api/receivers/edit`
* [Delete a receiver](Receivers/removeReceiver.md) `DELETE /api/receivers/remove`



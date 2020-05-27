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






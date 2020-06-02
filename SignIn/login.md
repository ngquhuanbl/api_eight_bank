# Login 

Used to collect a Token for a registered User.

**URL** : `/api/login/`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
  "email": "[valid email address]",
  "password": "[password in plain text]",
  "reCaptchaKey": "[reCaptcha key in plain text]",
}
```

**Data example**

```json
{
  "email": "johndoe@gmail.com",
  "password": "123456789",
  "reCaptchaKey": "03AGdBq27Isbn2T9Quh0wvDKevUsGMWsyQQQphPB5iF1wMwWIFn6slZMO",
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "name": "Joaquin Phoenix",
  "accountID": "1234567891234567",
  "bankID": "5ed0d40504cce42690000001",
}
```

## Error Response

>**Condition 1** : If 'username' and 'password' combination is wrong.

**Code** : `418 FAILED LOGIN`

**Content** :

```json
{
  "error": "Invalid email or password"
}
```

>**Condition 2** : If reCaptchaKey fail the servervalidation

**Code** : `419 FAILED CAPTCHA`

**Content** :

```json
{
    "error": "Invalid captcha"
}
```
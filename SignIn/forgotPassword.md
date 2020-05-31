# Forgot password

Used to verify a valid user that will be allowed to reset their password.

**URL** : `/api/forgot-password/`

**Method** : `POST`

**Auth required** : NO

**Data constraints**
* __Step 1__: Get the email to which the OTP code will be sent
    ```json
    {
      "email": "[valid email address]"
    }
    ```

  *Data example*
  ```json
  {
    "email": "johndoe@gmail.com"
  }
  ```
* __Step 2__: Verify the OTP code
    ```json
    {
      "email": "[valid email address]",
      "otp": "[valida corresponding OTP code]"
    }
    ```

  *Data example*
  ```json
  {
    "email": "johndoe@gmail.com",
    "otp": "123456"
  }
  ```

## Success Response

**Code** : `200 OK`

**Content example**
* __Step 1__

```json
{}
```
* __Step 2__
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

## Error Response

>**Condition 1** : Failed to send email

**Code** : `500 SERVER ERROR`

**Content** :

```json
{
  "error": "Failed to send email! Try again..."
}
```

>**Condition 2** : Invalid OTP code

**Code** : `418 INVALID OTP`

**Content** :

```json
{
    "error": "Invalid OTP"
}
```
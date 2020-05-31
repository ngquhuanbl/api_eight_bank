# Validate an OTP code

Used to validate a OTP code

**URL** : `/api/otp/validate`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
  "otp": "[valid otp in plain text]",
  "email": "[corresponding email in plain text]",
}
```

**Data example**

```json
{
  "otp": "123456",
  "email": "johndoe@gmail.com",
}
```

## Success Response

**Code** : `200 OK`

**Content example**
>**Condition 1** : Valid OTP code
```json
{
  "valid": true,
}
```
>**Condition 2** : Invalid OTP code
```json
{
  "valid": false,
}
```

## Error Response


**Condition** : Server error

**Code** : `500 SERVER ERROR`

**Content** : 
```json
{
  "error": "Server error!"
}
```
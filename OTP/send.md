# Send an OTP code

Used to offer an email that need to be sent an OTP code for validation purpose

**URL** : `/api/otp/send`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
  "email": "[corresponding email in plain text]",
}
```

**Data example**

```json
{
  "email": "johndoe@gmail.com",
}
```

## Success Response

**Code** : `200 OK`

**Content example**
```json
{}
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
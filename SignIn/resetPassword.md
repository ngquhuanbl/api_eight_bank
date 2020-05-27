# Reset password

Used to collect a Token for a registered User.

**URL** : `/api/reset-password/`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "password": "[password in plain text]",
    "token": "[token in plain text]",
}
```

**Data example**

```json
{
    "password": "123456789",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
}
```

## Success Response

**Code** : `200 OK`
```json
{}
```

## Error Response

>**Condition 1** : Failed to change password

**Code** : `500 SERVER ERROR`

**Content** :

```json
{
  "error": "Server error! Please try again ..."
}
```

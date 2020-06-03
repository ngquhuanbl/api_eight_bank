# Validate a account id of a specific bank

Used to check whether a account id of a bank is valid

**URL** : `/api/account/change-password`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : YES

**Data constraints**

```json
{
  "currentPassword": "[old password in plain text]",
  "newPassword": "[new password in plain text]",
}
```

**Data example**

```json
{
  "currentPassword": "123456789",
  "newPassword": "987654321",
}
```

## Success Response

**Code** : `200 OK`
```json
{}
```


## Error Response

>**Condition 1** : Incorrect current password

**Code** : `400 CLIENT ERROR`

**Content** :

```json
{
  "error": "Incorrect current password"
}
```

>**Condition 2** : Failed to change password due to server error

**Code** : `500 SERVER ERROR`

**Content** :

```json
{
  "error": "Server error! Please try again ..."
}
```

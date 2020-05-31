# Create new receiver for an account

Used to create new receiver for an account

**URL** : `/api/receivers/create`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : YES

**Data constraints**

```json
{
  "bankID": "[receiver's bank id in plain text]",
  "accountID": "[receiver's account id in plain text]",
  "nickname": "[receiver's nickname in plain text]",
}
```

**Data example**

```json
{
  "bankID": "5ed0d40504cce42690000002",
  "accountID": "0987098709870987",
  "nickname": "Ross The Friends Character"
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

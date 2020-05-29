# Validate a account id of a specific bank

Used to check whether a account id of a bank is valid

**URL** : `/api/banks/validate`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : YES

**Data constraints**

```json
{
    "bankID": "[bank id in plain text]",
    "accountID": "[account id in plain text]",
}
```

**Data example**

```json
{
    "bankID": "5ed0d40504cce42690000002",
    "accountID": "0987098709870987",
}
```

## Success Response

**Code** : `200 OK`
>**Case 1** : Valid account ID
```json
{
  "valid": true,
  "accountName": "Jaiden Armstrong",
}
```
>**Case 2** : Invalid account ID
```json
{
  "valid": false,
}
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

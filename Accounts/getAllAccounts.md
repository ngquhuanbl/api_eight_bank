# Get all accounts of a customer

Get the list of accounts that belongs to a customer

**URL** : `/api/accounts`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : YES

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
  "data": [
    { "accountID": "1234123412341234", "type": "DEFAULT", "service": "MASTERCARD", "balance": 1500000 },
    { "accountID": "5678567856785678", "type": "SAVING", "service": "VISA", "balance": 2500000 },
    { "accountID": "7890789078907890", "type": "SAVING", "service": "VISA", "balance": 3500000 },
    { "accountID": "0987098709870987", "type": "SAVING", "service": "MASTERCARD", "balance": 1500000 },
  ]
}
```

## Error Responses

**Condition** : Server error

**Code** : `500 SERVER ERROR`

**Content** : 
```json
{
  "error": "Server error!"
}
```

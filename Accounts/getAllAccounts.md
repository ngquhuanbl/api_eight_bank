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
    { "id": "395b2361", "type": "DEFAULT", "service": "MASTERCARD", "balance": 1500000 },
    { "id": "2f8eae94", "type": "SAVING", "service": "VISA", "balance": 2500000 },
    { "id": "495b2364", "type": "SAVING", "service": "VISA", "balance": 3500000 },
    { "id": "995b2361", "type": "SAVING", "service": "MASTERCARD", "balance": 1500000 },
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

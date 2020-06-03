# Get account infomation for customer (customer information)

Get the list of accounts that belongs to a customer

**URL** : `/api/account`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : YES

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
  "data": {
    "name": "John Doe",
    "email": "email@gmail.com",
    "phone": "0381373419"
  }
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

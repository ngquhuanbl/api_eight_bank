# Get debt repaying transaction history of the customer

Get debt repaying transaction history of the customer

**URL** : `/api/history/debt-repaying`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : YES

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
  "data": [
    {
      "lenderID": "1104963398267708",
      "lenderName": "John Doe",
      "borrowerID": "0865582529799566",
      "borrowerName": "Dr. Abbey Boyle",
      "amount": 15000000,
      "status": "PAID",
      "date": 1591029070625
    },
    {
      "lenderID": "1104963398267708",
      "lenderName": "John Doe",
      "borrowerID": "1665960427612285",
      "borrowerName": "Kathlyn Sauer PhD",
      "amount": 10000000,
      "status": "UNPAID",
      "date": 1591076076933
    },
    {
      "lenderID": "7587121232280889",
      "lenderName": "Alvina Gulgowski",
      "borrowerID": "1104963398267708",
      "borrowerName": "John Doe",
      "amount": 6000000,
      "status": "PAID",
      "date": 1591108461616
    },
    {
      "lenderID": "7024499688513004",
      "lenderName": "Elisabeth Heidenreich",
      "borrowerID": "1104963398267708",
      "borrowerName": "John Doe",
      "amount": 14000000,
      "status": "UNPAID",
      "date": 1591069173867
    },
    {
      "lenderID": "1764690491582971",
      "lenderName": "Mrs. Ludie Daniel",
      "borrowerID": "1104963398267708",
      "borrowerName": "John Doe",
      "amount": 10000000,
      "status": "CANCELLED",
      "date": 1591065124512
    },
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

# Get debt repaying transaction history of the customer

Get debt repaying transaction history of the customer

**URL** : `/api/history/debt-repay`

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
      "senderID": "1104963398267708",
      "senderName": "John Doe",
      "receiverID": "0865582529799566",
      "receiverName": "Dr. Abbey Boyle",
      "amount": 15000000,
      "status": "PAID",
      "date": 1591029070625
    },
    {
      "senderID": "1104963398267708",
      "senderName": "John Doe",
      "receiverID": "1665960427612285",
      "receiverName": "Kathlyn Sauer PhD",
      "amount": 10000000,
      "status": "UNPAID",
      "date": 1591076076933
    },
    {
      "senderID": "7587121232280889",
      "senderName": "Alvina Gulgowski",
      "receiverID": "1104963398267708",
      "receiverName": "John Doe",
      "amount": 6000000,
      "status": "PAID",
      "date": 1591108461616
    },
    {
      "senderID": "7024499688513004",
      "senderName": "Elisabeth Heidenreich",
      "receiverID": "1104963398267708",
      "receiverName": "John Doe",
      "amount": 14000000,
      "status": "UNPAID",
      "date": 1591069173867
    },
    {
      "senderID": "1764690491582971",
      "senderName": "Mrs. Ludie Daniel",
      "receiverID": "1104963398267708",
      "receiverName": "John Doe",
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

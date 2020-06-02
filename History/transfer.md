# Get money transfer transaction history of the customer

Get money transfer transaction history of the customer

**URL** : `/api/history/transfer`

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
      "receiverID": "0916216517332967",
      "receiverName": "Wanda Metz",
      "amount": 14000000,
      "bankName": "Agribank",
      "status": "CANCELLED",
      "date": 1591062129549
    },
    {
      "receiverID": "1523775374091895",
      "receiverName": "Kavon Kuvalis DVM",
      "amount": 8000000,
      "bankName": "TechcomBank",
      "status": "UNPAID",
      "date": 1591079969840
    },
    {
      "receiverID": "6790870562420505",
      "receiverName": "Kailee Harris",
      "amount": 5000000,
      "bankName": "TechcomBank",
      "status": "PAID",
      "date": 1591031303724
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

# Get money receive transaction history of the customer

Get money receive transaction history of the customer

**URL** : `/api/history/receive`

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
      "senderID": "4950013786648667",
      "senderName": "Allene Sanford",
      "amount": 15000000,
      "bankName": "BIDV",
      "date": 1591053304653
    },
    {
      "senderID": "6891685319333234",
      "senderName": "Elvera Witting",
      "amount": 10000000,
      "bankName": "Agribank",
      "date": 1591095542445
    },
    {
      "senderID": "0117490583992076",
      "senderName": "Adelia Conn",
      "amount": 12000000,
      "bankName": "ACB",
      "date": 1591088025468
    },
    {
      "senderID": "9515930931016860",
      "senderName": "Cordie White",
      "amount": 5000000,
      "bankName": "BIDV",
      "date": 1591040616486
    },
    {
      "senderID": "9386385145157447",
      "senderName": "Mrs. Otilia Conroy",
      "amount": 15000000,
      "bankName": "Agribank",
      "date": 1591087451525
    },
    {
      "senderID": "1510284891455409",
      "senderName": "Addie Fritsch III",
      "amount": 10000000,
      "bankName": "TechcomBank",
      "date": 1591061609487
    },
    {
      "senderID": "7506124176177394",
      "senderName": "Haleigh Borer",
      "amount": 8000000,
      "bankName": "BIDV",
      "date": 1591083082939
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

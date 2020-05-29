# Get all receivers of a customer

Get the list of receivers of a customer

**URL** : `/api/receivers`

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
      "id": "5ed0d7e57c1fc8085c000001",
      "nickname": "Asia Bosco",
      "accountID": "1040202411476579",
      "bankID": "5ed0d40504cce42690000002",
      "bankName": "ACB"
    },
    {
      "id": "5ed0d7e57c1fc8085c000002",
      "nickname": "Regional Infrastructure Analyst",
      "accountID": "7890921383797220",
      "bankID": "5ed0d40504cce42690000004",
      "bankName": "BIDV"
    },
    {
      "id": "5ed0d7e57c1fc8085c000003",
      "nickname": "Jaiden Armstrong",
      "accountID": "5067799030975816",
      "bankID": "5ed0d40504cce42690000005",
      "bankName": "TechcomBank"
    },
    {
      "id": "5ed0d7e57c1fc8085c000004",
      "nickname": "Investor Integration Officer",
      "accountID": "1620292001946065",
      "bankID": "5ed0d40504cce42690000002",
      "bankName": "ACB"
    }
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

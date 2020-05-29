# Get all associated banks

Get the list of all associated banks

**URL** : `/api/banks`

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
      "id": "5ed0d40504cce42690000002",
      "name": "ACB"
    },
    {
      "id": "5ed0d40504cce42690000003",
      "name": "Agribank"
    },
    {
      "id": "5ed0d40504cce42690000004",
      "name": "BIDV"
    },
    {
      "id": "5ed0d40504cce42690000005",
      "name": "TechcomBank"
    },
    {
      "id": "5ed0d40504cce42690000006",
      "bankName": " VPBank"
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

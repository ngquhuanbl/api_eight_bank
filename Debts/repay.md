# Repay a debt

Used to repay a debt of the customer

**URL** : `/api/debts/repay`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : YES

**Data constraints**

```json
{
  "accountID": "[customer's account id in plain text]",
  "debtID": "[debt id in plain text]",
}
```

**Data example**

```json
{
  "accountID": "1234123412341234",
  "debtID": "5ed0d40504cce42690000002",
}
```

## Success Response

**Code** : `200 OK`
```json
{}
```

## Error Response

**Code** : `500 SERVER ERROR`

**Content** :

```json
{
  "error": "Server error! Please try again ..."
}
```

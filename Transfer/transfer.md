# Make a money transfer

Used to make a money transfer

**URL** : `/api/transfer`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : YES

**Data constraints**

```json
{
  "senderAccountID": "[account id of the sender in plain text]",
  "receiverAccountID": "[account id of the receiver in plain text]",
  "receiverBankID": "[bank id of the receiver in plain text]",
  "amount": "[total amount of the money transfer in number]",
  "detail": "[detail of the money transfer in plain text]",
  "chargedBySender": "[a boolean value indicating whether the payment will be charged by the sender or not]"
}
```

**Data example**

```json
{
  "senderAccountID": "3872972539262257",
  "receiverAccountID": "4684283657928466",
  "receiverBankID": "5ed0d40504cce42690000002",
  "amount": 150000000,
  "detail": "Ipsum aliqua ex consequat anim culpa non pariatur duis cillum. Pariatur elit eu consectetur quis culpa est. Proident do sunt ea aliquip pariatur veniam quis est non consectetur ea. Culpa eu cupidatat id magna et sint ut voluptate Lorem culpa adipisicing adipisicing. Velit velit pariatur ipsum dolore.",
  "chargedBySender": false,
}
}
```

## Success Response

**Code** : `200 OK`
```json
{
  "success": true,
}
```

## Error Response

>**Condition 1** : Failed to change password

**Code** : `500 SERVER ERROR`

**Content** :

```json
{
  "error": "Server error! Please try again ..."
}
```

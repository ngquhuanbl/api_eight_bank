# Get list of debts that the customer was received from others

Get list of debts the customer received from others

**URL** : `/api/debts/received-from-others`

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
      "id": "5ed494e6e918910760000001",
      "lenderName": "Kaia Leuschke",
      "lenderID": "4058363347454299",
      "borrowerName": "Jonh Doe",
      "borrowerID": "1368058766999758",
      "status": "UNPAID",
      "amount": 4000000,
      "message": "Porro culpa voluptatem aut voluptatibus. Illo nobis quam non. Architecto dolorem odit iste. Ex assumenda molestiae dolorem ipsum.",
      "reasonOfCancel": ""
    },
    {
      "id": "5ed494e6e918910760000003",
      "lenderName": "Felipe Muller",
      "lenderID": "8924737729617537",
      "borrowerName": "Jonh Doe",
      "borrowerID": "1368058766999758",
      "status": "PAID",
      "amount": 2000000,
      "message": "Qui similique consequatur. Nihil sapiente earum maxime a facilis veniam tenetur ex molestiae. Ipsa dolorum optio occaecati veritatis in consequatur aut dolorum. Dolorem dolorem beatae provident itaque aut ullam quo. Sed ea et ducimus. Tempore et dolor maiores quia dolor consectetur quas.",
      "reasonOfCancel": ""
    },
    {
      "id": "5ed494e6e918910760000007",
      "lenderName": "Joey Kemmer",
      "lenderID": "7794143339865845",
      "borrowerName": "Jonh Doe",
      "borrowerID": "1368058766999758",
      "status": "CANCELLED",
      "amount": 12000000,
      "message": "Ducimus est et vel. Similique nihil voluptas quo sed similique. Non sit id odit. Vitae recusandae quaerat itaque atque qui esse.",
      "reasonOfCancel": "Atque architecto ipsa repudiandae quae odit. Magni laudantium sapiente ipsum iusto. Ullam veniam veniam ea enim qui adipisci qui modi molestias. Nihil sequi rerum aperiam consequatur laudantium illum. Mollitia nesciunt voluptas. Recusandae ut esse ut animi."
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

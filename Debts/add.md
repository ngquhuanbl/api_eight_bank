# Create a new debt reminder

Used to create a new debt reminder

**URL** : `/api/debts/create`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : YES

**Data constraints**

```json
{
  "borrowerID": "[borrower's account id in plain text]",
  "amount": "[debt amount in number]",
  "message": "[debt message in plain text]",  
}
```

**Data example**

```json
{
  "borrowerID": "1368058766999758",
  "amount": 500000,
  "message": "Culpa tempor nulla magna aute magna elit in excepteur ea tempor culpa proident cillum nisi. Nostrud qui non aliquip aute. Qui ipsum nisi ad amet ipsum ut eu duis irure. Laborum do ea magna cupidatat pariatur nulla aliqua reprehenderit enim. Elit magna irure nulla ad est culpa mollit sunt excepteur. Reprehenderit minim elit sunt culpa ullamco aute officia sint mollit sint aliqua aliquip ullamco.",  
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

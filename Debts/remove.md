# Reomve a debt reminder

Used to delete a receiver of an account

**URL** : `/api/debts/remove`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : YES

**Data constraints**

```json
{
  "id": "[bank id in plain text]",
  "reasonOfCancel": "[reason of cancellation in plain text]",
}
```

**Data example**

```json
{
  "id": "5ed0d40504cce42690000002",
  "reasonOfCancel": "Culpa ullamco est enim quis occaecat id aliqua aliquip. Nisi est tempor laborum excepteur eu anim irure voluptate ullamco. Mollit commodo exercitation deserunt cupidatat et do irure minim sunt. Reprehenderit tempor nulla laborum aute anim enim officia labore excepteur. Voluptate cupidatat dolore velit irure cillum aliqua elit. Aute dolore sint officia est voluptate sunt culpa ullamco adipisicing exercitation id. Officia consectetur aliquip ex culpa adipisicing.",
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

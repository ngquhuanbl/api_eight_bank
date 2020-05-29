# Delete a receiver of an account

Used to delete a receiver of an account

**URL** : `/api/receivers/remove`

**Method** : `DELETE`

**Auth required** : YES

**Permissions required** : YES

**Data constraints**

```json
{
    "id": "[receiver's id in plain text]",
}
```

**Data example**

```json
{
    "id": "0987098709870987",
}
```

## Success Response

**Code** : `200 OK`
```json
{}
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

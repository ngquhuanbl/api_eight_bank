# Edit a receiver of an account

Used to edit the information belongs to a receiver of an account

**URL** : `/api/receivers/edit`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : YES

**Data constraints**

```json
{
  "id": "[receiver's id in plain text]",
  "nickname": "[receiver's new nickname in plain text]",
}
```

**Data example**

```json
{
  "id": "0987098709870987",
  "nickname": "Ross The Friends Character"
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

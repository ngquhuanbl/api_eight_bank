# Delete a receiver of an account

Used to delete a receiver of an account

**URL** : `/api/receivers/remove?id={receiver_id}`

**URL Parameters** : `id=[string]` where `id` is the ID of the receiver that is about to be delete.

**Method** : `DELETE`

**Auth required** : YES

**Permissions required** : YES

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

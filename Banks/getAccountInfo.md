# Get a internal account information

Used to retrieve the information of an account

**URL** : `/api/banks/account?accountID={account_id}&&bankID={bank_id}`

**URL Parameters** : 
* `accountID=[string]` where `accountID` is the ID of the account
* `bankID=[string]` where `bankID` is the ID of the corresponding bank

**Method** : `GET`

**Auth required** : YES

**Permissions required** : YES

## Success Response

**Code** : `200 OK`
>**Condition 1** : Valid account
```json
{
  "valid": true,
  "data": {
    "accountName": "Asia Bosco",
    "accountID": "1040202411476579",
    "bankID": "5ed0d40504cce42690000002",
    "bankName": "ACB"
  }
}
```
>**Condition 1** : Invalid account
```json
{
  "valid": false,
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

---
Title: '.getItem(key)'
Description: 'Returns the value of the key of the data item passed as an argument or null if it does not exist, from the storage object'
Subjects: 
  - 'Web Development'
  - 'Computer Science'
Tags: 
  - 'APIs'
  - 'Data'
  - 'Methods'
  - 'Objects'
  - 'Storage'
  - 'Values'
CatalogContent: 
  - 'user-authentication-authorization-express/modules/session-authentication-express/cheatsheet'
  - 'user-authentication-authorization-express'
  - 'paths/securing-express-applications'
  - 'paths/back-end-engineer-career-path'
---

The **.getItem()** method takes the key of the data item as an argument and returns the value of the data if it is in the `Storage` object, otherwise it returns `null`.

The `Storage` Object, which can be either a `localStorage` object or a `sessionStorage` object.

## Syntax

```javascript
localStorage.getItem(keyName)
```
or
```javascript
sessionStorage.getItem(keyName)
```

The `keyName` parameter is required and it's a string containing the name of the key you want to retrieve the value of.

> You could also use `Storage.length` to test whether the storage object is empty or not.

## Codebyte Example

Get the value of the specified local storage item:

```codebyte/javascript
const currentUserName = localStorage.getItem("userName");
console.log(currentUserName);

```

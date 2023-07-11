---
Title: '.getItem(key)'
Description: 'Returns the value of the key on the given data item.'
Subjects: 
  - 'Web Development'
  - 'Computer Science'
Tags: 
  - 'APIs'
  - 'Data'
  - 'Methods'
  - 'Storage'
  - 'Values'
CatalogContent: 
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.getItem()`** method takes a key as an argument and returns the associated value. If the key is not present in the `Storage` object, it returns `null`.

The `Storage` Object, which can be either a `localStorage` object or a `sessionStorage` object.

## Syntax

```pseudo
localStorage.getItem(keyName)

sessionStorage.getItem(keyName)
```

The `keyName` parameter is required and it's a string containing the name of the key you want to retrieve the value of.

> **Note:** The `Storage.length` property can be used to test whether the storage object is empty or not.

## Example

Get the value of the specified local storage item:

```codebyte/javascript
const currentUserName = localStorage.getItem("userName");

console.log(currentUserName);
```

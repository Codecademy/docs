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

The `Storage` object can be either a `localStorage` object or a `sessionStorage` object.

## Syntax

```pseudo
localStorage.getItem(keyName)

sessionStorage.getItem(keyName)
```

The `keyName` parameter is required and it's a string containing the name of the key to retrieve the value of.

> **Note:** The `Storage.length` property can be used to test whether the storage object is empty or not.

## Example

Below is a basic example of implementing the `.getItem()` method to retrieve the value of a local storage item:

```js
localStorage.setItem('userName', 'Luigi');

console.log(localStorage.getItem('userName'));
```

The code above results in the following output:

```shell
Luigi
```

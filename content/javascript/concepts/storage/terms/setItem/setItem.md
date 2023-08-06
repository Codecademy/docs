---
Title: '.setItem()'
Description: 'Updates the value to the specified storage object key, if it exists, else adds the key to the object.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Storage'
  - 'Objects'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.setItem()`** method updates the value to the specified storage object key, if it exists, else adds the key to the specified storage object and returns `undefined`.

## Syntax

```pseudo
localStorage.setItem(key, value);
sessionStorage.setItem(key, value);
```

Both `key` and `value` are required parameters.

- The `key` is the name of the key to create.
- The `value` is the value to create/update the `key`.

## Example

This example demonstrates a basic implementation of the `.setItem()` method:

```js
console.log(localStorage.setItem('name', 'mark'));
localStorage.setItem('gender', 'male');
console.log('Gender : ', localStorage.gender);
```

The output will be:

```shell
undefined
Gender : male
```

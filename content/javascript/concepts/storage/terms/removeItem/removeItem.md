---
Title: '.removeItem()'
Description: 'Removes a key-value pair from the local storage based on the specified key.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Parameters'
  - 'Arguments'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

**`.removeItem()`** is a method provided by the Web Storage API in JavaScript. It allows you to remove a specific key-value pair from the local storage or session storage based on the specified key.

## Syntax

```pseudo
localStorage.removeItem('keyName');
```

When called, the `.removeItem()` method takes a single parameter, `keyName`, which is the key of the item to be removed. The function removes the associated key-value pair from storage, if found. If the key does not exist, the method does nothing and the storage remains unchanged.

## Example

The following code demonstrates the application of `.removeItem()` to modify `localStorage`:

```js
localStorage.setItem('username', 'JohnDoe');

localStorage.removeItem('username');
```

In the example above, a key-value pair (`username`, `JohnDoe`) is added to the `localStorage` using `.setItem()`, and removed using `.removeItem()`.

The same can be done with the session storage:

```js
sessionStorage.setItem('username', 'JohnDoe');

sessionStorage.removeItem('username');
```

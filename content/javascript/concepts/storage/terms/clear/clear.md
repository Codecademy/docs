---
Title: '.clear()'
Description: 'Removes all keys in a Storage object.'
Subjects:
  - 'Data Visualization'
  - 'Web Development'
Tags:
  - 'APIs'
  - 'Browsers'
  - 'Data Types'
  - 'Methods'
  - 'Tuples'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

**`.clear()`** removes all keys in a `Storage` object.

## Syntax

```pseudo
Storage.clear()
```

The method does not accept arguments. It will clear all storage keys and their respective values.

## Example

In this example, new items are added to `sessionStorage` and `localStorage` from console. The `.clear()` method then removes all data.

```js
// Add items to session storage.
sessionStorage.setItem('tab-item1', 'TI-1');
sessionStorage.setItem('tab-item2', 'TI-2');

// Add items to local storage.
localStorage.setItem('domain-item1', 'DI-1');
localStorage.setItem('domain-item2', 'DI-2');

// Remove all items from both local and session storage.
sessionStorage.clear();
localStorage.clear();

// Output storage.
console.log(sessionStorage.length);
console.log(localStorage.length);
```

This example results in the following output:

```shell
0
0
```

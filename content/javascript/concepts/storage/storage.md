---
Title: 'Storage'
Description: 'A Storage object allows the storage of items based on a key name.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Browsers'
  - 'Objects'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

A **`Storage`** object allows the addition, modification, and deletion of stored key/value pairs. The keys and values stored are always UTF-16 strings. Integer keys are converted to strings. The session storage for a domain is called from an object named `sessionStorage`. Local storage is stored in an object called `localStorage`.

The two `Storage` objects are as follows:

1. `localStorage`: Data is saved for the document's origin, and persists across browser sessions. The data has no expiration date.
2. `sessionStorage`: Data is saved for the document's origin, but persists only for the duration of the browser session.

> **Note:** The `Storage` object is particular to the protocol of the document. The `localStorage` or `sessionStorage` object for `http://codecademy.com` will be a different object than the `localStorage` or `sessionStorage` object returned for `https://codecademy.com`.

<!-- blank -->

> **Note:** The behavior of `Storage` objects for documents loaded from the local filesystem (i.e. `file:`) is undefined. Many browsers define a separate `Storage` object for each `file:` URL, but it is not best practice to rely on this behavior.

## Example

The following example shows adding a key/value pair to `localStorage`, retrieving it, and removing it.

```js
localStorage.setItem('dataKey', 'dataValue');
const data = localStorage.getItem('dataKey');
console.log(data);
localStorage.removeItem('dataKey');
```

The example results in the following output:

```shell
dataValue
```

Below is a list of the `Storage` object's methods and properties:

---
Title: 'window'
Description: 'The window object is the global object of JavaScript and represents the browser window.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Browsers'
  - 'DOM'
  - 'Objects'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`window`** object is the global object of JavaScript when run within a browser and represents the browser window. All browsers support it. It contains as members all global JavaScript objects, functions, and variables. Such variables become properties of the `window` object, such functions become methods of the `window` object.

> **Note:** If a browser window contains [`<iframe>`](https://www.codecademy.com/resources/docs/html/elements/iframe) tags, there will be one `window` object for the page containing the `<iframe>` tags, and an additional `window` object for the page in each `<iframe>`.

## Syntax

Below shows the use of a `window` method, `.alert()`, to display a message to the user:

```js
window.alert('Hello World!');
```

Because the `window` object is global, the "window." portion can also be omitted:

```js
alert('Hello World!');
```

The `window` object has a number of properties and methods, some of which are listed below:

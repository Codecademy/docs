---
Title: '.querySelectorAll()'
Description: 'Returns a static (non-live) NodeList of all elements in the document that match the specified CSS selectors.'

Subjects:
  - 'Code Foundations'
  - 'Developer Tools'
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Node'
  - 'Selectors'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

# Document: querySelectorAll() method

The document method **`querySelectorAll()`** returns a static (not live) `NodeList` of all elements that match the specified group of selectors.

## Syntax

```pseudo
querySelectorAll(selectors);
```
- **`selectors`**:
This is a string representing one or more CSS selectors used to identify the elements you want to select from the document. You can use any valid CSS selector, including element selectors (e.g., `div`, `p`), class selectors (e.g., `.class-name`), id selectors (e.g., `#id-name`), and complex selectors (e.g., `div > p.class-name`). If multiple selectors are provided, they should be separated by commas (e.g., `'.class-name, #id-name'`).

## Example

In this example, a `NodeList` of all `<p>` elements in the document is obtained:

```js
const matches = document.querySelectorAll("p");
```

This example returns a list of all `<div>` elements in the document with a class of either `note` or `alert`:

```js
const matches = document.querySelectorAll("div.note, div.alert");
```

In this example, we get a list of `<p>` elements whose immediate parent is a `<div>` with the class `highlighted`, and which are inside a container with the ID `test`:

```js
const container = document. querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");
```

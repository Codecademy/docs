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

The document method **`querySelectorAll()`** returns a static (not live) `NodeList` of all elements that match the specified group of selectors.

## Syntax

```pseudo
querySelectorAll(selectors);
```

- `selectors`: A string containing one or more CSS selectors used to match elements in the document. It follows the same rules as CSS [selectors](https://www.codecademy.com/resources/docs/css/selectors) and can include:
  - Type selectors (`div`, `p`, `span`)
  - Class selectors (`.class-name`)
  - ID selectors (`#id-name`)
  - Attribute selectors (`[type="text"]`, `[disabled]`)
  - Combinations (`div p`, `.container > p`, `ul > li:first-child`)

## Examples

### Example 1

In this example, a `NodeList` of all `<p>` elements in the document is obtained:

```js
const matches = document.querySelectorAll("p");
```

### Example 2

This example returns a list of all `<div>` elements in the document with a class of either `note` or `alert`:

```js
const matches = document.querySelectorAll("div.note, div.alert");
```

### Example 3

In this example, we get a list of `<p>` elements whose immediate parent is a `<div>` with the class `highlighted`, and which are inside a container with the ID `test`:

```js
const container = document. querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");
```

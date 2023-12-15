---
Title: '.selectAll()'
Description: 'A brief definition and examples of using selectAll()'
Subjects: 
  - 'Data Visualization'
  - 'Web Design'
Tags:
  - 'D3'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

`selectAll()`is a function within the d3 library that selects all elements matching the provided parameter. selectAll() will match against all elements that meet the parameter, as opposed to `select()`, which only matches the first element.

## Syntax

```pseudo
d3.selectAll(item)
```

+ The item can be a string version of an element
+ The item can also be a saved node or array of nodes

## Examples

The following code selects all paragraph elements within the document using the `.selectAll()` method.

```js
const p = d3.selectAll("p")
```

This code selects the entire document body and applies the style change.

```js
d3.select(document.body).style("background", "red");
```

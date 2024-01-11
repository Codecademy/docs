---
Title: '.selectAll()'
Description: 'A brief definition and examples of using selectAll()'
Subjects: 
  - 'Data Visualization'
  - 'Web Design'
Tags:
  - 'D3'
CatalogContent:
  - 'learn-d3' 
  - 'paths/data-science'
---

The **`.selectAll()`** is a function within the d3 library that selects all elements matching the provided parameter. selectAll() will match against all elements that meet the parameter, as opposed to `.select()`, which only matches the first element.

## Syntax

```pseudo
d3.selectAll(selector)
```

- `selector`: Its a string version of an element, a saved node, or an array of nodes.

## Example

The following code selects all paragraph elements within the document using the `.selectAll()` method.

```js
const p = d3.selectAll("p")
```
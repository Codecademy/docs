---
Title: 'selectAll()'
Description: A brief definition and examples of using selectAll()
Subjects: 
  - 'Data Visualization'
  - 'Web Design'
Tags:
  - 'D3'
CatalogContent:
---

**selectAll()** is a function within the d3 library that selects all elements matching the provided parameter. The parameter can be a string to match, or a pre-existing reference to a node. selectAll() will match against all elements that meet the criteria, as opposed to select(), which only matches the first element.

## Syntax

```pseudo
d3.selectAll([string]|[node])
```

## Examples

```js
const p = d3.selectAll("p")
```

```js
d3.select(document.body).style("background", "red");
```

## Additional Resources
[d3 documentation](https://d3js.org/d3-selection/selecting#selectAll "Official documentation")

[d3 code](https://github.com/d3/d3-selection/blob/main/src/selectAll.js "GitHub Repository")
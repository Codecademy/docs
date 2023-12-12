---
Title: '.style()'
Description: 'Used to get or set inline properties of selected elememts.'
Subjects:
  - 'Data Visualization'
  - 'Computer Science'
Tags:
  - 'D3'
  - 'Style'
  - 'Graphs'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/computer-science'
---

the **`.style()`** method is used to set or get the inline style properties of selected elements. This method is useful for applying CSS styles to elements.

## Syntax

```pseudo
selection.style("property", "value");
```

`.style()` funtion takes two arguements,

- `property`: name of the property or style name.
- `value`: value of property to set to it.

## Example

```js
d3.select('text').style('color', 'red');
```

In the given example above, the `color` property of `text` is set to `red`.

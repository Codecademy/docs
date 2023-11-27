---
Title: '.attr()'
Description: 'Used to get or set attributes of selected elements.'
Subjects:
  - 'Data Visualization'
  - 'Computer Science'
Tags:
  - 'D3'
  - 'Style'
CatalogContent:
  - 'learn-d3'
  - 'paths/computer-science'
---

The **`.attr()`** method is used to set or get attributes of selected elements. This method is commonly used for styling elements by setting their attributes.

## Syntax

```pseudo
selection.attr("attributeName", "attributeValue");
```

The `.attr()` function takes two parameters, first is the name of attribute and second is the corresponding value or a callback function.

## Example

```js
d3.select('circle').attr('radius', 5);
```

In the example given above, the value `5` is set to the attribute `radius`

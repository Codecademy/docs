---
Title: 'd3.scaleOrdinal()'
Description: 'Used to build an ordinal scale with identified domain and range values.'
Subjects:
  - 'Data Visualization'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'D3'
  - 'Data'
  - 'Charts'
CatalogContent:
  - 'learn-d3'
  - 'paths/data-science'
---

The `**d3.scaleOrdinal()**` function creates an ordinal scale with a defined domain (input values) and range (output values). If no values are provided:

- The domain defaults to an empty array.
- The range defaults to a set of categorical colours (`d3.schemeCategory10`).

Ordinal scales are primarily used for names and categorical data with a distinct set of values (e.g., categories, colours, or labels). The output values can be strings, numbers, or other types. The scale maps a discrete set of input values (the **domain**) to corresponding output values (the **range**). The order of the data is significant.

## Syntax

```pseudo
d3.scaleOrdinal([[domain, ]range]);
```

- `domain`: The input values to be mapped, defining the minimum and maximum values for the scale.
- `range`: The output values that correspond to the domain. Each value in the domain matches a value in the range.

## Example

The following code example demonstrates how to map discrete categories (race positions) to specific values (runner's finish times) using `d3.scaleOrdinal()`:

```js
const positionScale = d3
  .scaleOrdinal()
  .domain(['First', 'Second', 'Third'])
  .range([5.33, 5.45, 6.03]);
```

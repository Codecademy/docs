---
Title: 'Styling'
Description: 'Methods that apply values determining the aesthetic parameters of a chart.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Graphs'
  - 'Classes'
  - 'Functions'
CatalogContent:
  - 'learn-d3'
  - 'paths/computer-science'
---

**Styling** methods assign values that determine the rendered form and content of chart components, such as the text displayed, or the color and opacity of a given symbol. These methods belong to the `d3-selection` class but are addressed separately based on their specialized role in the chart-making process.

## Modifying Elements

The methods collected here are used to apply values to a given selection, such as in the following code:

```js
const path = svg.append("g")
  .attr("fill", "none")
  .attr("stroke", "steelblue")
  .attr("stroke-width", 1.5)
  .attr("stroke-linejoin", "round")
  .attr("stroke-linecap", "round")
  ...
```

In this excerpt, a `path` is declared and followed by a series of chained `.attr()` calls that set the various properties that will be applied to the `path` such as the color (`"steelblue"`), and the width of the path (`1.5`).

## D3 Style Methods

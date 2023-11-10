---
Title: 'Anatomy'
Description: 'The anatomy or structure of D3 chart is built through the use of a range of methods to manipulate data and aesthetic parameters applied to an SVG object.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Graphs'
  - 'Libraries'
  - 'Structure'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/computer-science'
---

The **anatomy** or structure of a D3 chart is built through the use of a range of methods to manipulate data and aesthetic parameters applied to an SVG object. A chart can be seen as a meta-function, within it are objects and methods that generate the various components of a chart (e.g., paths, axes, labels, etc.) and at the end of it the result, or return, is an SVG that is the sum of all these intermediate operations.

## Syntax

In broad strokes, a chart definition will often take the following form:

```pseudo
const marginTop = val;          // The top of the definition is generally
const marginRight = val;        // used to set values such as margins,
...                             // chart dimensions, and scales

const svg = d3.create("svg")    // An svg container is declared and attributes
  .attr("viewbox", [0,0, w, h]) // are added to specify the base parameters
  ...

svg.append("g")                 // Additional sections are chained to add data
  .selectAll("element")         // as well as more peripheral elements
  .data(source)                 // that may include text and interactivity
  .join("element")
    .attr("x", d => d / 2)
    ...

container.append(svg.node())     // Append the final chart object
```

Traditionally, a chart definition will be set within a `<script>` tag in an HTML document. By convention the first declarations describe all of the base parameters, which includes the margins and dimensions of the chart. Next, an svg "container" is declared and assigned the arguments defined in the previous section.

Each block that follows are functions that serve to create some aspect of the chart by operating on data and applying properties specified through attributes (`.attr()`).

At the end of the definition an `.append()` call adds the graphic result of the processing to a `<div>`, which is often named "container".

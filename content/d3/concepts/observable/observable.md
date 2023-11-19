---
Title: 'Observable'
Description: 'A platform and notebook for data analysis and visualization.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Graphs'
  - 'Libraries'
  - 'IDE'
CatalogContent:
  - 'interactive-data-visualization-with-generative-ai'
  - 'paths/computer-science'
---

**Observable** is a platform and notebook, similar to [Jupyter](https://www.codecademy.com/resources/docs/general/data-science/jupyter-notebook), for conducting data analysis, and creating visualizations. Observable the [platform](https://observablehq.com) is an online repository that provides tools for conducting and sharing studies. The notebook is a cell-based IDE for working with data in JavaScript. In addition to D3 there is also the Observable [Plot](https://observablehq.com/plot/?utm_source=d3js-org&utm_medium=nav&utm_campaign=try-observable) library, which was designed specifically for generating charts quickly during exploratory analysis.

## Traditional D3 vs Observable D3

D3 visualizations were originally developed to be defined within a `<script>` tag inside an HTML doc. Now, there are several alternative environments for creating D3 charts, and an Observable notebook is one of the most accessible ways to get started with D3. However, there are some differences in implementation to consider. The following sections highlight a few of the elements that must be addressed when creating or transferring a chart to an Observable notebook.

### Notebook Cells

An Observable notebook consists of a number of cells that can support a variety of content: images, text, code, etc. Each cell can be thought of as a code block or independent function, each cell should return a value. Therefore, the elements of a typical chart may be allocated somewhat differently within a notebook. There often will be one or more cells dedicated to addressing the data coming in, this may involve a short script to create some data or an import cell followed by cells to clean and reshape the data as needed.

### Data Access

Notebooks provide a variety of ways to bring in data, allowing for flexibility and customization, but some alternatives may require more setup. Perhaps the easiest option is having a local Excel or CSV file which can be added straightforwardly via drag-and-drop. However, there's also the ability to pull directly from a database, to import data from another notebook, and many other options.

### Observable JS

One of the principal differences between D3 in an HTML file and Observable is the syntax. Observable notebooks use a JavaScript variant specific to this environment. For example, top-level variables in a notebook are not prefixed by keywords such as `const` or `let`. And all top-level variables are also immutable by default.

```pseudo
totalX = Math.sqrt(100) // A basic top-level variable declaration
```

Often a chart definition itself will be confined to one cell and will use a syntax similar to that of a JavaScript function, as seen below:

```pseudo
chart = {                         // In a notebook the chart definition is enclosed in
  const marginTop = val;          // curly braces and assigned to a variable
  const marginRight = val;
  ...

  const svg = d3.create("svg")
    .attr("viewbox", [0,0, w, h])
    ...

  svg.append("g")
    .selectAll("element")
    .data(source)
    .join("element")
      .attr("x", d => d / 2)
      ...

  return svg.node()               // The traditional syntax would append
}                                 // the svg to a div but here it's a return value
```

For most information on Observable notebooks see their [documentation](https://observablehq.com/collection/@observablehq/intro-to-observable) for details.

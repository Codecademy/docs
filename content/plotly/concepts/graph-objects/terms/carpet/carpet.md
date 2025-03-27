---
Title: '.Carpet()
Description: 'Creates a carpet plot in Plotly.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Plotly'
  - 'Graphs'
  - 'Data'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`Carpet()`** is a metheod of graph_objects class which shows the interaction between one or two independent varables and one or more dependent variables in a two-dimensional plot. The carpet plot accurately interpolate data points compared to other plots.

## Syntax
```pseudo
plotly.graph_objects.Carpet(a = None, carpet = None, x = None, y = None)
```
- `a` : An array containing values of the first parameter.
- `b` : An array containing value of the first parameter.
- `x` : A two-dimensional array of x-coordinates at each carpet point. If ommitted, the plot is a cheater plot and the x-axis is hidden by default.
- `y` :  A two-dimensional array of y-coordinates at each carpet point.
- `carpet` : An identifier for this carpet, so that scattercarpet and contourcarpet traces can specify a carpet plot on which they lie
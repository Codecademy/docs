---
Title: '.Carpet()'
Description: 'Creates a grid-based reference for visualizing data in a non-Cartesian coordinate system.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Data'
  - 'Data Visualization'
  - 'Finance'
  - 'Graphs'
  - 'Plotly'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-visualization'
---

The **`.Carpet()`** function in Plotly is used to create a carpet plot, which provides a grid-based reference for visualizing the relationship between one or more independent variables and one or more dependent variables in a two-dimensional, non-Cartesian coordinate system.

## Syntax

```pseudo
plotly.graph_objects.Carpet(a=None,b=None,x=None, y=None, ...)

```

- `a`: First independent variable values as an array.
- `b`: Second independent variable values as an array.
- `x` (optional): Specifies the x-coordinates of the carpet grid in Cartesian space. If omitted, the plot becomes a cheater plot, and the x-axis is hidden by default.
- `y` (optional): Specifies the y-coordinates of the carpet grid in Cartesian space.

- The ellipses is an indication of optional paratemeters that can be added.

## Example

The example below demonstrates the use of `.Carpet()` function:

```py
from plotly import graph_objects as go


fig = go.Figure(go.Carpet(
    a = [4, 4, 4, 6.5, 6.5, 6.5, 5, 5, 5, 8, 8, 8],
   b = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
   y = [2, 3.5, 4, 3, 4.5, 5, 5.5, 6.5, 7.5, 8, 8.5, 10],
))

fig.show()
```

The above code generates the following output:

![The output of the .Carpet() plot](../../../../../../media/carpet_plot.png)

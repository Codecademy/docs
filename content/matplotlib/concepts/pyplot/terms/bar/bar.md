---
Title: '.bar()'
Description: 'Returns a chart/graph that represents categorical data with vertical bars.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Graphs'
  - 'Libraries'
  - 'Matplotlib'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

A **`.bar()`** function returns a chart/graph that represents categorical data with vertical bars with heights proportional to the values that they represent. Bars can be plotted as stacked or grouped.

## Syntax

```pseudo
plt.bar(x, height, width, bottom, align)
```

The parameters to the function are:
- `x`: Float or array-like values (may be an index and is not required to be scalar).
- `height`: Float or array-like values designating the heights of the bars.
- `width`: Float or array-like values designating the widths of the bars (the default is 0.8).
- `bottom`: Float or array-like values to designate the y coordinates of the bars (default: 0).
- `align`: Keyword (‘center’ or ‘edge’) designating the bar alignment (default: ‘center’).

## Example

Goal: Return the value of "X", "Y" und "Z" in a graph representation. The `x` represnts the x-axis while the `y` represnts the y-axis. In the X-axis, we define the "X", "Y" and "Z" parameters that we want to represent. In the y-axis, we define the value of each parameter. The last piece of code specifies the bar color and displays the graph.

```py
import matplotlib.pyplot as plt
import numpy as np

x = np.array(["X", "Y", "Z"])
y = np.array([10, 25, 15])

plt.bar(x, y, color = "green")
plt.show()
```

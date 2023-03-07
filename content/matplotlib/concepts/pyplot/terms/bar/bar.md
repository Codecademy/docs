---
Title: 'bar'
Description: 'A bar is a chart/graph that represents categorical data with rectangular bars.'
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

A **`bar()`** function returns a chart/graph that represents categorical data with rectangular bars with heights and lengths proportional to the values that they represent. Bars can be plotted vertically or horizontally.

## Syntax

```plt.bar(x, height, width, bottom, align)```

The parameters to the function are:
  - `x`: The x coordinates of the bars. 
  - `height`: The height(s) of the bars.
  - `width`: The width(s) of the bars default: 0.8  - 
  - `bottom`: The y coordinate(s) of the bars default: 0
  - `align`: {‘center’, ‘edge’}, optional, default: ‘center’

## Example

Goal: Return the value of "X", "Y" und "Z" in a graph representation. The `x` represnts the x-axis while the `y` represnts the y-axis. In the X-axis, we define the "X", "Y" and "Z" parameters that we want to represent. In the y-axis, we define the value of each parameter. The last piece of code specifies the bar color and shows it.

```import matplotlib.pyplot as plt
import numpy as np

x = np.array(["X", "Y", "Z"])
y = np.array([10, 25, 15])

plt.bar(x, y, color = "green")
plt.show()```

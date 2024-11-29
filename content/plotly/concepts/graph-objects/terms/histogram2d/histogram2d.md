---
Title: '.Histogram2d()'
Description: 'Generates a 2D histogram to show the distribution and relationship between two variables, with color intensity representing the frequency of data points.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
  - 'Machine Learning'
Tags:
  - 'Data'
  - 'Data Structures'
  - 'Data Visualization'
  - 'Graphs'
  - 'Histograms'
  - 'Plotly'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.Histogram2d()`** method in Plotly's [`graph_objects`](https://www.codecademy.com/resources/docs/plotly/graph-objects) module creates a 2D histogram to display the joint distribution of two variables. It uses a grid where color intensity represents the count or aggregated values within each cell, making it useful for visualizing relationships and density in bivariate data.

## Syntax

```pseudo
plotly.graph_objects.Histogram2d(x=None, y=None, nbinsx=None, nbinsy=None, colorscale=None, ...)
```

- `x`: Input data for the x-axis, representing the values plotted along the horizontal axis.
- `y`: Input data for the y-axis, representing the values plotted along the vertical axis. 
- `nbinsx` (Optional): The number of bins (intervals) to use for the x-axis. If not specified (`None`), Plotly automatically calculates an appropriate number of bins based on the data.
- `nbinsy` (Optional): The number of bins (intervals) to use for the y-axis. If not specified (`None`), Plotly automatically calculates an appropriate number of bins based on the data.
- `colorscale` (Optional): Defines the color scale for bin intensities (e.g., `'Viridis'`, `'Blues'`). You can also define custom color scales.

> **Note**: The ellipsis in the syntax (...) indicates that there are additional optional parameters beyond those listed here to customize the scatter plot on polar axes.

## Example

The following example showcases the use of the `.Histogram2d()`:

```py
import numpy as np
import matplotlib.pyplot as plt

# Generate sample data for X and Y
x = np.random.normal(5, 1, 1000)  # X values (mean=5, std=1, 1000 samples)
y = np.random.normal(3, 0.5, 1000)  # Y values (mean=3, std=0.5, 1000 samples)

# Compute the 2D histogram
hist, x_edges, y_edges = np.histogram2d(x, y, bins=20)

# Visualize the histogram
plt.figure(figsize=(6, 5))
plt.imshow(hist.T, origin='lower', aspect='auto', 
           extent=[x_edges[0], x_edges[-1], y_edges[0], y_edges[-1]], 
           cmap='Blues')
plt.colorbar(label='Frequency')
plt.title('2D Histogram Example')
plt.xlabel('X values')
plt.ylabel('Y values')
plt.show()

```
This example demonstrates how to use numpy.histogram2d() to compute a two-dimensional histogram and visualize it as a heatmap.

The above code generates the following output:

![Barpolar example Plotly](https://raw.githubusercontent.com/Codecademy/docs/main/media/.histogram2d-example.png)

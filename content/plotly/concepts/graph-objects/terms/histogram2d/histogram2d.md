---
Title: '.Histogram2d()'
Description: 'Generates a 2D histogram to show the relationship between two variables with color intensity.'
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

The **`.Histogram2d()`** method in Plotly's `graph_objects` module creates a 2D histogram to display the joint distribution of two variables. It uses a grid where color intensity represents the count or aggregated values within each cell, making it useful for examining relationships and density in bivariate data.

## Syntax

```pseudo
plotly.graph_objects.Histogram2d(x=data_x, y=data_y, nbinsx=10, nbinsy=10, colorscale='Viridis')

```

- `x`: (Required) It represents the input data for the x-axis, representing the values plotted along the horizontal axis.
- `y`: (Required) It represents the input data for the y-axis, representing the values plotted along the vertical axis. 
- `nbinsx`: (Optional) Number of bins (intervals) for the x-axis. By default it is automatic.
- `nbinsy`: (Optional) Number of bins (intervals) for the y-axis. By default it is automatic.
- `colorscale`: (Optional) This parameter sets the color scale for bin intensities (e.g., 'Viridis', 'Blues') or allows custom mappings.

## Example

The following example showcases the use of the `.histogram2d()`

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

![Barpolar example Plotly](https://raw.githubusercontent.com/Codecademy/docs/main/media/.histogram2d()-example.png)

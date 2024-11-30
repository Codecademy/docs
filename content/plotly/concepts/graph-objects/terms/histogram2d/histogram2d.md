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
import plotly.graph_objects as go

# Sample data
x = [1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 9, 10, 10]
y = [10, 9, 8, 7, 6, 6, 5, 5, 4, 3, 2, 2, 1, 1, 0]

# Create the 2D histogram
fig = go.Figure(
    data=go.Histogram2d(
        x=x,
        y=y,
        colorscale='Blues',  # Color scale
        colorbar=dict(title="Frequency"),  # Customize the color bar
    )
)

# Add layout details
fig.update_layout(
    title="Example of a 2D Histogram",
    xaxis_title="X Axis",
    yaxis_title="Y Axis",
    template="plotly_white"  # Use a clean template
)

# Display the figure
fig.show()
```

This example demonstrates how to use `plotly.graph_objects.Histogram2d` to create a two-dimensional histogram and visualize it as a heatmap.

The above code generates the following output:

![Barpolar example Plotly](https://raw.githubusercontent.com/Codecademy/docs/main/media/.histogram2d-example.png)

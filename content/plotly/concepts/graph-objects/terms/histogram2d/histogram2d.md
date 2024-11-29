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

This example demonstrates how to use `plotly.graph_objects.Histogram2d` is used to create a two-dimensional histogram and visualize it as a heatmap.

The above code generates the following output:

![Barpolar example Plotly](https://raw.githubusercontent.com/Codecademy/docs/main/media/.histogram2d-example.png)

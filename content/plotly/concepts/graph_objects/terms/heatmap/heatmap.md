---
Title: 'heatmap'
Description: 'Creates a heatmap visualization from a 2D array of numerical data.'
Subjects:
  - 'Data Visualization'
Tags:
  - 'Plotly'
  - '2D Data'

CatalogContent:
'paths/data-scientist-career-path'
---


Heatmaps are graphical representations of data where values are encoded as colors. Plotly's `heatmap` function allows you to create heatmaps from 2D arrays of numerical data. This is a powerful tool for visualizing trends and patterns in your data.

## Syntax

```python
from plotly.express import heatmap

fig = heatmap(
    z,  # 2D array of numerical data
    x=x_labels,  # Optional labels for x-axis
    y=y_labels,  # Optional labels for y-axis
    coloraxis="colormax",  # Optional color axis configuration
    # Additional arguments for customization
)

fig.show()
```

## Example

This example demonstrates creating a basic heatmap using Plotly Express:

```python
import plotly.express as px

# Sample sales data for different products across months
sales_data = [[100, 120, 150],
              [110, 130, 140],
              [90, 115, 135]]

# Product names
products = ["Product A", "Product B", "Product C"]

# Month labels
months = ["Jan", "Feb", "Mar"]

# Create the heatmap
fig = px.heatmap(
    z=sales_data,
    x=months,
    y=products,
    title="Product Sales by Month",
    labels={
        x="Month",
        y="Product",
    },
    # Color scale customization (optional)
    coloraxis_colorbar=dict(title="Sales")
)

fig.show()
```
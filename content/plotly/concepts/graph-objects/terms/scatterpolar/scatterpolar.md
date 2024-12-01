---
Title: '.Scatterpolar()'
Description: 'Creates a scatter plot on polar axes.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Data'
  - 'Graphs'
  - 'Plotly'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.Scatterpolar()`** function in Plotly creates scatter plots on polar axes. Scatter plots are used to visualize data points in a two-dimensional space, and polar axes are circular axes often used to represent periodic data.

## Syntax

```pseudo
plotly.graph_objects.Scatterpolar(r=None, theta=None, ...)
```

- `r`: It is a list of values representing the radial coordinates of the data points.
- `theta`: It is a list of values representing the angular coordinates of the data points.

> **Note:** The ellipsis in the syntax (...) indicates that there are additional optional parameters beyond those listed here to customize the scatter plot on polar axes.

## Example

The following example demonstrates the use of the `.Scatterpolar()` function to create a scatter plot on polar axes:

```py
import plotly.graph_objects as go

fig = go.Figure(data=go.Scatterpolar(
  r=[1, 2, 3, 4, 5],
  theta=[0, 45, 90, 135, 180],
  mode='markers'
))

fig.update_layout(
  polar=dict(
    radialaxis=dict(
      visible=True,
      range=[0, 6]
    )
  )
)

fig.show()
```

This example creates a scatter plot on polar axes with five data points. The `r` parameter specifies the radial distance of each data point from the center, and the `theta` parameter specifies the angular position of each data point. The `mode` parameter is set to `'markers'` to display the data points as markers. The `polar` layout is used to customize the radial axis range and visibility.

The above code generates the following output:

![Output of the above example on scatter plots on polar axes in Plotly](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-scatterpolar-example.png)

In the output, the scatter plot is displayed on polar axes with the specified data points and radial axis range. The circular layout of the polar axes provides a unique way to visualize data points in a circular or periodic manner.

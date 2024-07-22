---
Title: '.Heatmap()'
Description: 'Creates a plot with data visualized as colored tiles.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Plotly'
  - 'Graphs'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.Heatmap()`** function in Plotly is utilized to generate heatmap visualizations, which are graphical representations of data where the individual values contained in a matrix are represented as colors.

## Syntax

The basic syntax for creating a heatmap in Plotly is:

```pseudo
plotly.graph_objects.Heatmap(x=None, y=None, z=None, colorscale=None, ...)
```

- `x`: A list of values to be used as the x-axis labels.
- `y`: A list of values to be used as the y-axis labels.
- `z`: The data to be visualized as a heatmap.
- `colorscale`: The color scale to be used for the heatmap. This can be an array of colors mapped to normalized values or a string representing a built-in color scale.

> Note: The ellipsis in the syntax (...) indicates that there can be additional optional parameters beyond those listed here to customize the heatmap.

## Example

The following example showcases the use of the `.Heatmap()` function:

```py
import plotly.graph_objects as go

fig = go.Figure(data=go.Heatmap(
    z=[[1, None, 30],
       [20, 1, 60],
       [30, 60, 1]],
    x=['Monday', 'Tuesday', 'Wednesday'],
    y=['Morning', 'Afternoon', 'Evening'],
    colorscale='Viridis')
)
        
fig.update_layout(title='Activity Heatmap')

fig.show()
```

This example creates a heatmap representing hypothetical activity levels during different times of the day across three days of the week. `None` values can be used to create gaps in the data, and `colorscale` is used to customize the color scheme of the heatmap.

The above code generates the following output:

![Plotly Heatmap example](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-heatmap-example.png)

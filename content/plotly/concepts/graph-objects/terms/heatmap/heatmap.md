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

```python
import plotly.graph_objects as go

fig = go.Figure(data=go.Heatmap(
    z=[[1, 20, 30],
    [20, 1, 60],
    [30, 60, 1]])
)

fig.show()
```

## Example

An example showcasing more options:

```python
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
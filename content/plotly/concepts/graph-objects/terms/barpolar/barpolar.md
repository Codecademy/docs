---
Title: '.Barpolar()'
Description: 'Creates a polar bar chart in Plotly.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Plotly'
  - 'Graphs'
  - 'Data'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.Barpolar()`** method in the `graph_objects` module in Plotly is used to plot bar charts in a polar coordinate system, where each point is defined by two values:

1. Radial distance - This is the distance from the center or origin.
2. Angle - This indicates the position of the bar around the circle.

An example use case is visualizing activity or events over a repeating time period. This includes patterns like time-of-day activity, day-of-week trends, or seasonal variations.

## Syntax

```pseudo
plotly.graph_objects.Barpolar(arg=None, r=None, theta=None, width=None, marker=None, ...)
```

- `arg`: (Optional) A dictionary of keyword arguments that can be passed to customize the bar polar chart.
- `r`: (Required) A list or array of radial distances.
- `theta`: (Required) A list or array of angles corresponding to the bar's positions around the polar coordinate system.
- `width`: (Optional) The width of each bar. This defines how thick the bars will appear on the chart.
- `marker`: (Optional) A dictionary specifying the appearance of the bars, such as color, line properties, and other styling options.

## Example

The following example showcases the use of the `.Barpolar()` method:

```py
import plotly.graph_objects as go

fig = go.Figure(data=go.Barpolar(
    r=[1, 2, 3, 4, 5, 6, 7, 8, 9],
    theta=[69, 141, 213, 285, 357, 429, 501, 573, 645],
    width=[20, 20, 100, 20, 20, 20, 20, 20, 20],
    marker=dict(
        color=['#E6A157', '#F57B42', '#9DC3E6', '#55A868', '#F5DE50',
               '#FF6F61', '#6B5B95', '#88B04B', '#D65076'],
        opacity=0.8
    )
))

fig.show()

```

This example creates a simple polar bar chart using `.Barpolar()`. The bars are positioned using radial distances and angular values. Each bar is styled using custom colors and slight a slight opacity for a visually appealing effect.

The above code generates the following output:

![Barpolar example Plotly](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-barpolar-example.png)

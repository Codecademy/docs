---
Title: '.Barpolar()'
Description: 'Used to create polar bar charts using Plotly.'
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

The **`.Barpolar()`** class is used to plot bar charts on the polar coordinate system, where each point on the system is defined by two values:

1. Radial distance - distance from the center/origin.

2. Angle - The position of the bar around the circle.

Example use case: Visualizing activity or events over a repeating time period, such as time-of-day patterns, day-of-week activity, or seasonal trends.

## Syntax

```pseudo
plotly.graph_objects.Barpolar(arg=None, r=None, theta=None, width=None, marker=None)
```

- `arg`: (Optional) This can be used to pass an existing figure configuration (e.g., copying another polar chart). It’s generally not needed for most cases.

- `r`: List of values, representing the length of each bar from the center.

- `theta`: List of values angular positions for each bar. Angles can be in degrees or radians.

- `width`: Specifies the angular width of each bar in degrees or radians

- `marker`: A dictionary that controls the color, opacity, and other styling elements of the plot.

## Example

The following example showcases the use of the `.Barpolar` class:

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

This example creates a simple polar bar chart using `Barpolar` from Plotly. The bars are positioned using radial distances and angular values, with each bar styled using custom colors and slight transparency.

The above code generates the following output:

![Barpolar example Plotly](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-barpolar-example.png)

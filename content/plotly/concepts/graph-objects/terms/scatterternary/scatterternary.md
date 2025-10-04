---
Title: '.Scatterternary()'
Description: 'Creates ternary scatter plots in Plotly to visualize data with three components that sum to a constant.'
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

The **`.Scatterternary()`** function in Plotly’s [`graph_objects`](https://www.codecademy.com/resources/docs/plotly/graph-objects) module is used to create ternary scatter plots, which are particularly useful for visualizing compositional data. Ternary plots are commonly used in geology, chemistry, economics, and machine learning to represent datasets where three variables are interdependent and sum to a constant (often 1 or 100%).

Unlike Cartesian plots, which use `(x, y)` coordinates, ternary plots use a triangular coordinate system, where each data point is represented by three values `(a, b, c)`. These values correspond to proportions or fractions of a whole, and their sum remains fixed. The `.Scatterternary()` function allows users to plot individual points, lines, or marker-based representations within a ternary diagram.

## Key Features

- Visualizes compositional data where three variables sum to a constant.
- Supports custom styling with `marker` properties.
- Works within Plotly’s interactive framework, enabling zooming and hovering.

## Syntax

```pseudo
import plotly.graph_objects as go

go.Scatterternary(a=None, b=None, c=None, mode=None, marker=None)
```

- `a`, `b`, `c` (lists/arrays): Values representing the three components of each point.
- `mode` (str, optional): Defines how points are displayed (e.g., `"markers"`, `"lines"`).
- `marker` (dict, optional): A dictionary that customizes the appearance of markers, including properties like size, color, opacity, symbol, and line properties.

## Example 1

The following example demonstrates how to plot a simple ternary scatter plot with three points, each represented by three values summing to one.

```py
import plotly.graph_objects as go

fig = go.Figure(go.Scatterternary(
    a=[0.3, 0.1, 0.6],
    b=[0.3, 0.7, 0.2],
    c=[0.4, 0.2, 0.2],
    mode="markers",
    marker=dict(size=10, color="blue")
))

fig.update_layout(title="Ternary Scatter Plot")
fig.show()
```

The output will be an interactive ternary scatter plot with three blue markers, each representing a point whose components sum to one.

![A ternary scatter plot with three blue markers, each representing a point whose components sum to one.](https://raw.githubusercontent.com/Codecademy/docs/main/media/ternary-scatter-plot-example.png)

## Example 2

Here's a complete example that generates a ternary scatter plot in Plotly, showcasing the proportions of three components in different data points.

```py
import plotly.graph_objects as go

# Sample data representing three-component proportions
fig = go.Figure()

fig.add_trace(go.Scatterternary(
    a=[0.6, 0.2, 0.4, 0.8, 0.3],  # Component A
    b=[0.3, 0.5, 0.4, 0.1, 0.6],  # Component B
    c=[0.1, 0.3, 0.2, 0.1, 0.1],  # Component C
    mode="markers",
    marker=dict(size=12, color=['red', 'blue', 'green', 'purple', 'orange']),
    text=["Point 1", "Point 2", "Point 3", "Point 4", "Point 5"],  # Hover labels
))

fig.update_layout(
    title="Ternary Scatter Plot Example",
    ternary=dict(
        sum=1,  # Ensures that A + B + C = 1
        aaxis=dict(title="Component A"),
        baxis=dict(title="Component B"),
        caxis=dict(title="Component C")
    )
)

fig.show()
```

The output will be:

![A ternary plot with five color-coded points representing three-component proportions.](https://raw.githubusercontent.com/Codecademy/docs/main/media/ternary-scatter-plot-example-2.png)

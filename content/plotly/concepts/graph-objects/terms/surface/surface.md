---
Title: '.Surface()'
Description: 'Creates a 3d plot using the `Surface` class of the `graph_objects` module in Plotly'
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

The **`Surface`** class creates a 3D surface plot using Plotly's `graph_objects` module. It allows for the visualization of data in three dimensions. This class enables the rendering of surfaces defined by `x`, `y`, and `z` coordinates, and can be customized with various parameters like colors, scales, and more to represent complex datasets.

## Syntax

```pseudo
plotly.graph_objects.Surface(
    z=None,           # 2D array-like, required.
    x=None,           # 1D array-like, optional.
    y=None,           # 1D array-like, optional.
    colorscale=None,  # list of tuples or named color scale, optional.
    cmin=None,        # float, optional.
    cmax=None,        # float, optional.
    opacity=None,     # float between 0 and 1, optional.
    surfacecolor=None, # 2D array-like, optional.
    **kwargs
)
```

- `z`: It defines the surface's `Z` coordinates (height/depth).
- `x`: It represents the `X` coordinates. If not provided, it defaults to the range of the number of columns in `z`.
- `y`: It represents the `Y` coordinates. If not provided, it defaults to the range of the number of rows in `z`.
- `colorscale`: Can be a named colour scale (e.g., `'Viridis'`) or a list of tuples that define custom colour mapping (optional).
- `cmin`: Minimum value of the colorscale range (optional).
- `cmax`: Maximum value of the colorscale range (optional).
- `opacity`: A float between 0 (completely transparent) and 1 (fully opaque), defining surface opacity (optional).
- `surfacecolor`: A 2D array of values used to colour the surface independent of the Z axis (optional).

## Example

This code creates a 3D surface plot using Plotly's `Surface` class from the `graph_objects` module. It defines a mathematical function $f(x, y) = x^2 + y^2$, where `x` and `y` form a mesh grid, and `z` represents the height of the surface:

```py
import plotly.graph_objects as go
import numpy as np

x = np.linspace(-5, 5, 50)
y = np.linspace(-5, 5, 50)
x, y = np.meshgrid(x, y)
z = x**2 + y**2

fig = go.Figure(data=[go.Surface(z=z, x=x, y=y)])

fig.update_layout(title='3D Surface Plot of f(x, y) = x^2 + y^2',
                  scene=dict(
                      xaxis_title='X',
                      yaxis_title='Y',
                      zaxis_title='f(x, y)'
                  ))
fig.show()
```

The above code generates the following output:

![Output from above code](https://raw.githubusercontent.com/Codecademy/docs/main/media/3d-surface-example-plotly.png)

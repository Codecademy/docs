---
Title: 'Surface'
Description: 'Creates a 3d plot using the Surface class of the graph_object_module in Plotly'
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

The **`Surface`** class creates a 3D surface plot using Plotly's `graph_objects` module. It allows for the visualization of data in three dimensions.


## Syntax

```pseudo
plotly.graph_objects.Surface(
    z=None,
    x=None,
    y=None,
    colorscale=None,
    cmin=None,
    cmax=None,
    opacity=None,
    surfacecolor=None,
    **kwargs
)
```

- `z` : 2D array-like, required. The Z coordinates for the surface plot.

- `x` : 1D array-like, optional. The X coordinates. Defaults to the range of the number of columns in z if not provided.

- `y` : 1D array-like, optional. The Y coordinates. Defaults to the range of the number of rows in z if not provided.

- `colorscale` : list of tuples, optional. Colorscale for the surface.

- `cmin` : float, optional. Minimum value for the color scale.

- `cmax` : float, optional. Maximum value for the color scale.

- `opacity` : float, optional. Opacity of the surface.

- `surfacecolor` : array-like, optional. An array of values to color the surface.


## Example

The following example showcases the use of the `Surface` class:

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

This example allows for a visual representation of a mathematical function, with customizable parameters like the color scale to highlight different levels on the surface. The z values create the height of the surface, while x and y form the base grid, enabling an intuitive understanding of how the function behaves across the input space.

The above code generates the following output:

![Output from above code](https://github.com/saldanhad/codeacademy-docs/blob/dev/media/3d-surface-example-plotly.png)
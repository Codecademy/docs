---
Title: '.create_streamline()' 
Description: 'Generates a streamline plot to visuallize flow behavior given certain attributes.' 
Subjects: 
  - 'Data Science'
  - 'Data Visualization'
Tags: 
  - 'Graphs'
  - 'NumPy'
  - 'Plotly'
  - 'Python'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.create_streamline()`** function is part of Plotly's [`figure_factory`](https://www.codecademy.com/resources/docs/plotly/figure-factory) module.

It generates **streamline** plots by using x-axis delimiter and y-axis delimiters along with **Horizontal Velocity** and **Vertical Velocity**, allowing for a clear visualization of flow behavior.

## Syntax

```pseudo
fig = figure_factory.create_streamline(x, y, u, v, kwargs ...)
```

- `x`: A one-dimensional, evenly spaced array representing the positions along the x-axis (the horizontal delimiter).
- `y`: A one-dimensional, evenly spaced array representing the positions along the y-axis (the vertical delimiter).
- `u`: Horizontal component of the velocity vector, describing the horizontal velocity of the flow's at each grid point.
- `v`: Vertical component of the velocity vector, describing the vertical velocity of the flow's at each grid point.
- `kwargs`: Optional argument passed through `plotly.graph_objects.Scatter` for further customization.

> **Note**: The ellipsis (...) in the syntax represents several optional parameters, which are automatically set to their default values, such as `density=1`, `angle=pi/9`, `arrow_scale=.09`.

## Example

This is a basic streamline plot that generates a figure representing the flow without additional keyword arguments.

```py
import numpy as np
import plotly.figure_factory as ff
import plotly.offline as pyo

# Generate evenly spaced points in the y and x axes.
x = np.linspace(-3, 3, 2) # x axis
y = np.linspace(-3, 3, 2) # y axis

# Create 2D arrays for the grid coordinates.
X, Y = np.meshgrid(x, y)

# Define the horizontal and vertical velocity components.
u = Y**2 - 1
v = X

# Create the streamline figure data.
streamline_data = ff.create_streamline(x, y, u, v)

# Create and display the figure.
fig = streamline_data.show()
```
The resulting output looks as follows:

![A streamline plot showing the flow of a vector field with evenly spaced grid points.](https://raw.githubusercontent.com/Codecademy/docs/main/media/streamline-example.png)

This is a basic streamline plot that generates a streamline figure representing the wind with the line-color being red.

```py
import numpy as np
import plotly.figure_factory as ff
import plotly.offline as pyo

# Generate evenly spaced points in the y and x axis.
x = np.linspace(-3, 3, 2) # x axis
y = np.linspace(-3, 3, 2) # y axis

# Create 2D arrays u, v for the horizontal and vertical velocity.
X, Y = np.meshgrid(x, y)
u = Y**2 - 1
v = X

# Create the streamline figure data with a red line color.
streamline_data = ff.create_streamline(x, y, u, v, line_color='red')

# Create and display the figure.
fig = streamline_data.show()
```

The resulting output looks as follows:

![A streamline plot similar to the first, but with red-colored streamlines.](https://raw.githubusercontent.com/Codecademy/docs/main/media/streamline-example-2.png)
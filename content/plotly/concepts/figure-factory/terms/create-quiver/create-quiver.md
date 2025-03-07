---
Title: '.create_quiver()'
Description: 'Generates quiver plots to visualize vector fields using arrows to indicate direction and magnitude.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Histograms'
  - 'NumPy'
  - 'Plotly'
  - 'Python'
  - 'Seaborn'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.create_quiver()`** function in Plotly's [`figure_factory`](https://www.codecademy.com/resources/docs/plotly/figure-factory) module generates a quiver plot, which is used to visualize vector fields. It is commonly applied in physics, fluid dynamics, and engineering to depict direction and magnitude of vectors in a given space.

## Syntax

```pseudo
import plotly.figure_factory as ff

quiver = ff.create_quiver(
    x, y, u, v,
    scale=0.1,
    arrow_scale=0.3,
    angle=math.pi/9,
    line=dict(color='blue', width=1)
)
```

**Parameters**:

- `x`: A list or NumPy array representing the x-coordinates of the arrow bases.
- `y`: A list or NumPy array representing the y-coordinates of the arrow bases.
- `u`: A list or NumPy array representing the x-components (horizontal) of the arrow vectors.
- `v`: A list or NumPy array representing the y-components (vertical) of the arrow vectors.
- `scale` (default=`0.1`): A scaling factor for the arrow lengths.
- `arrow_scale` (default=`0.3`): Determines the size of the arrowhead.
- `angle` (default=`math.pi/9`): The opening angle of the arrowhead.
- `line` (optional): A dictionary defining the line properties, such as color and width.

## Examples

### Basic Quiver Plot

In this example, a quiver plot is created to visualize a circular vector field where arrows radiate outward in a radial pattern:

```py
import plotly.figure_factory as ff
import numpy as np
import plotly.graph_objects as go

# Generate circular grid points
theta = np.linspace(0, 2 * np.pi, 20)
x = np.cos(theta) * 3
y = np.sin(theta) * 3

# Define vector components with radial pattern
u = -np.sin(theta)
v = np.cos(theta)

# Create quiver plot
fig = ff.create_quiver(x, y, u, v, scale=0.2, arrow_scale=0.5)
fig.update_layout(title="Circular Quiver Plot")
fig.show()
```

The output will be:

![The output is a quiver plot displaying arrows arranged in a circular pattern, illustrating directional vectors clearly.](https://raw.githubusercontent.com/Codecademy/docs/main/media/basic-quiver-plot.png)

### Customized Quiver Plot

This example demonstrates how to customize arrow styles in a quiver plot by modifying colors, line width, and scaling:

```py
import plotly.figure_factory as ff
import numpy as np
import plotly.graph_objects as go

# Generate structured grid
x, y = np.meshgrid(np.linspace(-5, 5, 10), np.linspace(-5, 5, 10))
u = -y / np.sqrt(x**2 + y**2)
v = x / np.sqrt(x**2 + y**2)

# Flatten arrays for plotting
x, y, u, v = x.flatten(), y.flatten(), u.flatten(), v.flatten()

# Create quiver plot with optimized arrow size
fig = ff.create_quiver(x, y, u, v, scale=1, arrow_scale=0.5, line=dict(color='red', width=2))
fig.update_layout(title="Grid-Based Quiver Plot")
fig.show()
```

![The output is a quiver plot with red arrows of increased size and width, making the vector field more distinct.](https://raw.githubusercontent.com/Codecademy/docs/main/media/custom-quiver-plot.png)

---
Title: '.create_streamline()'
Description: 'Creates streamline visualizations of 2D vector fields.'
Subjects:
  - 'Computer Science'
  - 'Data Visualization'
Tags:
  - 'Charts'
  - 'Plotly'
  - 'Vectors'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.create_streamline()`** function in Plotly's [`figure_factory`](https://www.codecademy.com/resources/docs/plotly/figure-factory) module creates visualizations of 2D vector fields as streamline plots. A **streamline** is a path that follows the direction of a vector field, representing the trajectory that a massless particle would take when placed in the field. This function is particularly useful for visualizing flow patterns, wind currents, electromagnetic fields, and other vector field data.

Streamline plots display vector field data as a series of curves that are tangent to the velocity field at every point. These visualizations help identify flow patterns, vortices, sources, and sinks within the data, making them valuable for analyzing complex fluid dynamics, meteorological patterns, and other physical phenomena.

## Syntax

```pseudo
plotly.figure_factory.create_streamline(x, y, u, v, density=1, angle=0.349066, arrow_scale=0.09, **kwargs)
```

**Parameters:**

- `x`: 1-dimensional, evenly spaced list or array representing the x-coordinates of the vector field grid.
- `y`: 1-dimensional, evenly spaced list or array representing the y-coordinates of the vector field grid.
- `u`: 2-dimensional array representing the x-component of the vector field at each grid point.
- `v`: 2-dimensional array representing the y-component of the vector field at each grid point.
- `density` (Optional): Controls the density of streamlines in the plot (default=`1`), multiplied by 30 to scale similarly to other streamline functions.
- `angle` (Optional): The angle of arrowhead in radians (default=`π/9`).
- `arrow_scale` (Optional): A value between `0` and `1` to scale the length of arrowheads (default=`0.09`).
- `**kwargs`: Additional keyword arguments passed to the function.

**Return value:**

Returns a representation of a streamline figure that can be displayed using `.show()` or integrated into more complex visualizations.

## Example 1: Creating Basic Streamline Plots

This example demonstrates how to create a simple streamline plot using mathematical expressions to define a vector field:

```py
import plotly.figure_factory as ff
import numpy as np

# Create a grid of x and y coordinates
x = np.linspace(-3, 3, 100)
y = np.linspace(-3, 3, 100)

# Create a meshgrid for vector field evaluation
Y, X = np.meshgrid(x, y)

# Define vector field components (u,v)
u = -1 - X**2 + Y
v = 1 + X - Y**2

# Create streamline figure
fig = ff.create_streamline(x, y, u, v, arrow_scale=.1)

# Display the figure
fig.show()
```

This example creates a streamline plot of a simple mathematical vector field. The vector field is defined by the equations `u = -1 - x² + y` and `v = 1 + x - y²`, where `u` and `v` represent the `x` and `y` components of the vector at each point. The `arrow_scale` parameter has been set to `0.1` to make the arrows slightly larger for better visibility.
This example will generate the following output:

![A streamline plot with curved flow lines following the vector field direction, showing velocity with arrows](https://raw.githubusercontent.com/Codecademy/docs/main/media/create_streamline_output1.png)

## Example 2: Streamline Plot with Source Point

This example shows how to visualize a radial vector field spreading out from a source point, which is useful for representing phenomena like electric fields or fluid sources:

```py
import plotly.figure_factory as ff
import plotly.graph_objects as go
import numpy as np

# Set up the grid
N = 50
x_start, x_end = -2.0, 2.0
y_start, y_end = -1.0, 1.0
x = np.linspace(x_start, x_end, N)
y = np.linspace(y_start, y_end, N)
X, Y = np.meshgrid(x, y)

# Define source point location and strength
source_strength = 5.0
x_source, y_source = -1.0, 0.0

# Compute the velocity field on the mesh grid
# Formula for radial field from a point source
u = (source_strength/(2*np.pi)) * ((X - x_source)/((X - x_source)**2 + (Y - y_source)**2))
v = (source_strength/(2*np.pi)) * ((Y - y_source)/((X - x_source)**2 + (Y - y_source)**2))

# Create streamline figure
fig = ff.create_streamline(x, y, u, v, name='streamline')

# Add source point as a marker
fig.add_trace(go.Scatter(
    x=[x_source],
    y=[y_source],
    mode='markers',
    marker=dict(size=14),
    name='source point'
))

# Set plot title and axis labels
fig.update_layout(
    title='Vector Field with Source Point',
    xaxis_title='X',
    yaxis_title='Y'
)

fig.show()
```

This example creates a visualization of a radial vector field emanating from a source point at `(-1, 0)`. The field strength is proportional to `1/r` (where `r` is the distance from the source), creating the classic pattern of a point source. The source point itself is added as a marker to highlight its position in the field. Here is how the output will look like:

![A radial streamline plot with arrows emanating from a source point at (-1,0), illustrating field strength](https://raw.githubusercontent.com/Codecademy/docs/main/media/create_streamline_output2.png)

## Example 3: Customizing Streamline Density and Appearance

This example illustrates how to create a more complex vector field visualization with customized streamline density and styling options:

```py
import plotly.figure_factory as ff
import numpy as np

# Create grid
x = np.linspace(-3, 3, 120)
y = np.linspace(-3, 3, 120)
Y, X = np.meshgrid(x, y)

# Create a more complex vector field (circular flow with perturbation)
u = -Y + 0.5*np.sin(X)
v = X + 0.5*np.cos(Y)

# Create streamline with custom parameters
fig = ff.create_streamline(
    x, y, u, v,
    density=1.5,        # Higher density of streamlines
    arrow_scale=0.15,   # Larger arrows
    angle=np.pi/7,      # Custom arrow angle
    name='Custom Streamlines'
)

# Customize layout
fig.update_layout(
    title='Customized Streamline Plot',
    xaxis_title='X-axis',
    yaxis_title='Y-axis',
    plot_bgcolor='rgb(240, 240, 240)',  # Light gray background
    width=800,
    height=600
)

# Customize streamline appearance
fig.update_traces(
    line=dict(color='rgba(50, 100, 220, 0.8)', width=2),
    selector=dict(name='Custom Streamlines')
)

fig.show()
```

This example demonstrates how to create a circular flow pattern with a sinusoidal perturbation and customize various aspects of the streamline visualization. By increasing the `density` parameter to `1.5`, more streamlines are displayed, providing a more detailed view of the vector field. The appearance of the streamlines is further customized using `update_traces()` to change the color and line width, and `update_layout()` to modify the overall plot appearance. The output of this code will be as follows:

![A high-density circular streamline plot with sinusoidal variations, customized arrows, and enhanced colors](https://raw.githubusercontent.com/Codecademy/docs/main/media/create_streamline_output3.png)

To improve your data visualization skills, check out our [Intro to Data Visualization with Python](https://www.codecademy.com/learn/intro-to-data-visualization-with-python) course, where you'll learn to create line, bar, and pie charts, scatterplots, histograms, and more. You'll also learn how to customize charts and annotate them with error bars and text.

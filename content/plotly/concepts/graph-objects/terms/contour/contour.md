---
Title: '.Contour()'
Description: 'Creates a contour plot, which represents 3D surface data in 2D using contour lines or filled color regions to show variations in value.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Data'
  - 'Data Structures'
  - 'Functions'
  - 'Plotly'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In Plotly, the **`.Contour()`** function creates a contour plot, which represents 3D surface data in a 2D projection using contour lines or filled color regions. This function is useful for visualizing gradual variations in a dataset over a 2D plane, such as temperature distributions, elevation maps, and probability density functions.

## Syntax

```pseudo
plotly.graph_objects.Contour(z=None, x=None, y=None, colorscale=None, contours=None, ...)
```

- `z`: A 2D array (list or [NumPy array](https://www.codecademy.com/resources/docs/numpy/ndarray)) representing the values to be contoured.
- `x`: A 1D or 2D array defining the x-coordinates corresponding to `z` values.
- `y`: A 1D or 2D array defining the y-coordinates corresponding to `z` values.
- `colorscale`: Defines the color scheme of the contour plot (e.g., `"Viridis"`, `"Jet"`, etc.).
- `contours`: Controls the contour levels with a dictionary containing:
  - `start`: The starting value of the contours.
  - `end`: The ending value of the contours.
  - `size`: The step size between contour levels.

> **Note:** The ellipsis (...) in the syntax indicates that there can be additional optional parameters beyond those listed here.

## Example

The following example demonstrates the usage of the `.Contour()` function:

```py
import plotly.graph_objects as go

# Define x and y coordinates
x = [-2, -1, 0, 1, 2]
y = [-2, -1, 0, 1, 2]

# Define a 2D list for z values
z = [[0.1, 0.2, 0.3, 0.2, 0.1],
     [0.2, 0.4, 0.6, 0.4, 0.2],
     [0.3, 0.6, 1.0, 0.6, 0.3],
     [0.2, 0.4, 0.6, 0.4, 0.2],
     [0.1, 0.2, 0.3, 0.2, 0.1]]

# Create a contour plot
fig = go.Figure(data=[go.Contour(z=z,  # Data values for contour levels
                                 x=x,  # X-coordinates
                                 y=y,  # Y-coordinates
                                 colorscale="Viridis",  # Color scheme
                                 contours=dict(start=0, end=1, size=0.1))])   # Define contour levels

# Display the plot
fig.show()
```

The above code generates the following output:

![The output for the above example](https://raw.githubusercontent.com/Codecademy/docs/main/media/contour-plot.png)

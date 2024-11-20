---
Title: '`.Mesh3d()`'
Description: 'Creates a 3D mesh plot in Plotly using the `graph_objects` module.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Graphics'
  - 'Graphs'
  - 'Plotly'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**`.Mesh3d()`** is a method in Plotly's [`graph_objects`](https://www.codecademy.com/resources/docs/plotly/graph-objects) module that generates 3D mesh plots by defining vertices and connecting them with faces (typically triangles).

## Syntax

```pseudo
plotly.graph_objects.Mesh3d( x=None, y=None, z=None, i=None, j=None, k=None, color=None, opacity=None, ...)
```

- `x`, `y`, `z`: Coordinates of the vertices in 3D space (arrays or lists).
- `i`, `j`, `k`: Indices that define the triangular faces, where each set of three indices corresponds to a triangle formed by the vertices defined by `x`, `y`, and `z`.
- `Color`: The color of the mesh, which can be a single color or an array of colors for each face.
- `opacity`: Controls the transparency of the mesh, ranging from 0 (fully transparent) to 1 (fully opaque).

> Note: There are many additional, optional parameters that are not listed here, as indicated by the ellipsis (...) in the syntax.

## Examples

### Example 1

This code displays a 3D mesh plot by defining the triangles that connect the vertices:

```python
import plotly.graph_objects as go

# Coordinates of vertices.
x = [0, 1, 2, 0]
y = [0, 0, 1, 2]
z = [0, 2, 0, 1]

# Indices of vertices forming triangles.
i = [0, 0, 0, 1]
j = [1, 2, 3, 2]
k = [2, 3, 1, 3]

# Create Mesh3d object.
mesh = go.Mesh3d(
    x=x,
    y=y,
    z=z,
    i=i,
    j=j,
    k=k,
    color='lightblue',
    opacity=0.5
)

# Generate figure.
fig = go.Figure(data=[mesh])

# Display plot.
fig.show()
```

> Note: If triangle indices (`i`, `j`, `k`) are not specified, the mesh will be automatically generated using algorithms like Delaunay triangulation. The `alphahull` parameter can be used to control the mesh generation process without the indices:

- `alphahull = -1`: Uses Delaunay triangulation.
- `alphahull = 0`: Computes the convex hull of the point set.
- `alphahull > 0`: Uses the alpha shape algorithm with the specified alpha value.

This example results in the following output:

![Example 2 Output]("https://raw.githubusercontent.com/Codecademy/docs/main/media/mesh3d-example-results.png")

### Example 2

The dataset information can be used to create a 3D mesh plot, as demonstrated in the example below, which visualizes a sphere using vertex and face data from a CSV file:

```python
import plotly.graph_objects as go
import pandas as pd

# Load dataset.
df = pd.read_csv('https://raw.githubusercontent.com/plotly/datasets/master/ply/sphere-ply.csv')

# Create mesh plot.
fig = go.Figure(data=go.Mesh3d(
    x=df['x'],
    y=df['y'],
    z=df['z'],
    i=df['i'],
    j=df['j'],
    k=df['k'],
    facecolor=df['facecolor']
))

fig.show()
```

This example results in the following output:

![Example 2 Output]("https://raw.githubusercontent.com/Codecademy/docs/main/media/mesh3d-dataset-sphere.png")

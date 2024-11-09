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
- 'paths/data-science'
- 'paths/data-science-foundations'
---

**`.Mesh3d()`** is a method in Plotly's `graph_objects` module that generates 3D mesh plots by defining vertices and connecting faces (triangles).

## Syntax

```pseudo
Mesh3d(
    x=x_values,
    y=y_values,
    z=x_values,
    i=indices_i,    # Optional
    j=indices_j,    # Optional
    k=indices_k,    # Optional
    color='color_value',    # Optional
    opacity=opacity_value,  # Optional
    (...)   # Optional
)
```

- `x`, `y`, `z`: Arrays of vertex coordinates
- `i`, `j`, `k`: Arrays defining the triangles via indices pointing to the vertex arrays
- `color`: Sets the mesh color
- `opacity`: Sets the mesh transparency (0 to 1)

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

# Generate figure
fig = go.Figure(data=[mesh])

# Display plot
fig.show()
```

>Note: If you don't specify the triangle indices, the mesh will automatically be generated using algorithms like Delaunay triangulation. You can also use the `alphahull` parameter to control the generation without the indices: `alphahull = -1` - Uses Delauney triangulation; `alphahull = 0` - Computes the convex hull of the point set; `alphahull > 0` - Uses the alpha shape algorithm with the specified alpha value.

This example results in the following output:

![Example 2 Output]("https://raw.githubusercontent.com/Codecademy/docs/main/media/mesh3d-example-results.png")

### Example 2

Dataset information can also be used to create the mesh. This visualizes a sphere by using vertex and face data from a CSV file:

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
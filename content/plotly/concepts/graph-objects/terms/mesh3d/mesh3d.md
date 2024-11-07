---
Title: '`.Mesh3d()`'
Description: 'Creates a 3D mesh plot in Plotly using the `.graph_objects` module.'
Subjects:
 - 'Data Science'
 - 'Data Visualization'
Tags:
 - 'Graphics'
 - 'Graphs'
 - 'Plotly'
 - 'Python'
CatalogContent:
 - 'paths/data-analyst'
 - 'paths/bi-data-analyst'
---

**`.Mesh3d()`** is a method in Plotly's `.graph_objects` module that generates 3D mesh plots by defining vertices and connecting faces (triangles).

## Syntax

```pseudo
Mesh3d(
    x=x_values,
    y=y_values,
    z=x_values,
    i=indices_i,
    j=indices_j,
    k=indices_k,
    color='color_value',
    opacity=opacity_value,
    **kwargs
)
```

- `x`, `y`, `z`: Arrays of vertex coordinates
- `i`, `j`, `k`: Arrays defining the triangles via indices pointing to the vertex arrays
- `color`: Sets the mesh color
- `opacity`: Sets the mesh transparency (0 to 1)
- `**kwargs`: Additional parameters

## Example

This code displays a 3D mesh plot composed of specified vertices and triangular faces:

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

This example results in the following output:

![`fig.show()` Output]("https://raw.githubusercontent.com/Codecademy/docs/main/media/mesh3d-example-results.png")

## Codebyte Example

This codebyte creates and displays a 3D tetrahedron mesh:

```codebyte/python
import plotly.graph_objects as go

# Vertices of a pyramid.
x = [0, 1, 2, 1]
y = [0, 0, 1, 2]
z = [0, 2, 0, 1]

# Faces of the pyramid (triangles).
i = [0, 0, 0, 1]
j = [1, 2, 3, 2]
k = [2, 3, 1, 3]

mesh = go.Mesh3d(
    x=x,
    y=y,
    z=z,
    i=i,
    j=j,
    k=k,
    color='cyan',
    opacity=0.7
)

fig = go.Figure(data=[mesh])
fig.show()
```

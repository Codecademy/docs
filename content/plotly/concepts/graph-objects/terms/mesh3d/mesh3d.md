---
Title: '.Mesh3d()'
Description: 'Creates 3D triangular mesh plots for visualizing 3D surfaces or volumetric data.'
Subjects:
- 'Data Science'
- 'Data Visualization'
Tags:
- 'Charts'
- 'Data'
- 'Plotly'
CatalogContent:
- 'learn-python-3'
- 'paths/computer-science'
---

The **`.Mesh3d()`** function in Plotly's graph-objects module is used to create 3D mesh plots. The surface is constructed from a set of vertices in 3D space `(x, y, z)` and triangles defined by three vertices. These triangles are specified using index arrays `(i, j, k)`, where each index refers to a vertex.

## Syntax

```pseudo
plotly.graph_objects.Mesh3d(x=None, y=None, z=None, i=None, j=None, k=None, color=None, opacity=None, ...)
```

- `x`: An array of X-coordinates of the vertices in 3D space.
- `y`: An array of Y-coordinates of the vertices in 3D space.
- `z`: An array of Z-coordinates of the vertices in 3D space.
- `i`: An array that defines the first vertex of each triangle by its index in the `x`, `y`, and `z` arrays.
- `j`: An array that defines the second vertex of each triangle by its index in the `x`, `y`, and `z` arrays.
- `k`: An array that defines the third vertex of each triangle by its index in the `x`, `y`, and `z` arrays.
- `color`: The color of the mesh surface.
- `opacity`: A float value between 0 and 1 that sets the transparency of the mesh surface.

> Note: The ellipsis in the syntax (...) indicates that there are additional optional parameters beyond those listed here to customize the 3D mesh.

## Example

The following example showcases the use of the `.Mesh3d()` function:

```py
import plotly.graph_objects as go

fig = go.Figure(data=[
go.Mesh3d(
x=[0, 1, 2, 0],
y=[0, 0, 1, 2],
z=[0, 2, 0, 1],
colorbar_title='z',
colorscale=[[0, 'gold'],
[0.5, 'mediumturquoise'],
[1, 'magenta']],
# Intensity of each vertex, which will be interpolated and color-coded
intensity=[0, 0.33, 0.66, 1],
# i, j, and k give the vertices of triangles
i=[0, 0, 0, 1],
j=[1, 2, 3, 2],
k=[2, 3, 1, 3],
name='y',
showscale=True
 )
])

fig.show()
```

This example creates a 3D mesh plot representing a triangular surface using Plotly. The mesh is defined with vertices specified by `x`, `y`, and `z` coordinates, forming triangular faces through the indices provided by `i`, `j`, and `k`. The `colorscale` parameter is used to apply a gradient from gold to magenta, representing the `intensity` values of each vertex, which are interpolated across the surface. The `colorbar_title` and `showscale` parameters control the appearance of the color bar and its display.

The above code generates the following output:
  
![Here is the link to the above example on mesh3D in Plotly](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-mesh3d-example.png)
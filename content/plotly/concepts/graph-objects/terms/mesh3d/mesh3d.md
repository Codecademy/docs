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
-  `x, y, z`: These are the coordinates of the vertices of the mesh in 3D space.

-  `i, j, k`: These specify how the vertices should be connected to form triangles. Each triangle is defined by a triplet of indices `(i[j], j[j], k[j]),` where each index refers to a vertex in the `x, y, z` arrays.

-  `color`: Specifies the color of the mesh.

-  `opacity`: Controls the transparency of the mesh (ranges from 0 to 1, where 1 is fully opaque and 0 is fully transparent).

-  `lighting`: Adds 3D lighting effects, making the mesh appear more realistic.

-  `intensity`: This can be used to apply a color scale to the mesh based on a data array, similar to a heatmap on the mesh surface

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

This example creates a 3D mesh representing a simple triangular surface. The mesh is defined using three vertices forming a triangular shape, each associated with `x, y,` and `z` coordinates. The `colorscale` is applied to the surface, giving it a smooth gradient from yellow to magenta, representing changes in elevation or value along the `z-axis`.

The above code generates the following output:
  
![Here is the link to the above example on mesh3D in Plotly](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-mesh3d-example.png)
---
Title: 'Express.md/Plotly express library'

Description: Plotly Express is a built-in part of the plotly library, and it is the starting point for creating most common figures. Every Plotly Express function uses graph objects. 

Codecademy Hub page: https://www.codecademy.com/docs/content/plotly/concepts/express/express.md

CatalogContent: 
- 'docs/content/python'
- 'docs/content'

Subjects:
- 'Computer Science'
- 'Data Science'
- 'Data Visualization'

Tags:
- 'Python'
- 'Functions'
- 'keywords'

** Plotly Express currently includes the following functions:

Basics: scatter, line, area, bar, funnel, timeline
Part-of-Whole: pie, sunburst, treemap, icicle, funnel_area
1D Distributions: histogram, box, violin, strip, ecdf
2D Distributions: density_heatmap, density_contour
Matrix or Image Input: imshow
3-Dimensional: scatter_3d, line_3d
Multidimensional: scatter_matrix, parallel_coordinates, parallel_categories
Tile Maps: scatter_mapbox, line_mapbox, choropleth_mapbox, density_mapbox
Outline Maps: scatter_geo, line_geo, choropleth
Polar Charts: scatter_polar, line_polar, bar_polar
Ternary Charts: scatter_ternary, line_ternary **


---

````Codebyte

import plotly.express as px
df = px.data.iris()
fig = px.scatter(df, x="sepal_width", y="sepal_length", color="species")
fig.show() ```
````

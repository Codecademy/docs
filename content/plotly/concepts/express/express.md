---
Title: 'Express.md/Plotly express library'

Description: Plotly Express is a built-in part of the plotly library, and it is the starting point for creating most common figures. Every Plotly Express function uses graph objects. 

Codecademy Hub page: https://www.codecademy.com/docs/content/plotly/concepts/express/express.md

CatalogContent: 
- 'docs/content/python'
- 'docs/content'

Tags:
- 'Python'
- 'Functions'
- 'keywords'

In Plotly, the **express** module is a high-level interface designed to simplify the creation of interactive and visually appealing plots by providing easy-to-use functions for a wide range of chart types, including line charts, scatter plots, bar charts, and more, allowing users to generate complex visualizations with minimal code.

---

````Codebyte

import plotly.express as px
df = px.data.iris()
fig = px.scatter(df, x="sepal_width", y="sepal_length", color="species")
fig.show() ```
````

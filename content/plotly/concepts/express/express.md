---
Title: 'express'
Description: 'The express module in Plotly is a high-level interface that simplifies the creation of interactive and visually appealing plots with minimal code.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Graphs'
  - 'Modules'
  - 'Plotly'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

In Plotly, the **express** module is a high-level interface designed to simplify the creation of interactive and visually appealing plots by providing easy-to-use functions for a wide range of chart types, including line charts, scatter plots, bar charts, and more, allowing users to generate complex visualizations with minimal code.

---

````Codebyte

import plotly.express as px
df = px.data.iris()
fig = px.scatter(df, x="sepal_width", y="sepal_length", color="species")
fig.show() ```
````

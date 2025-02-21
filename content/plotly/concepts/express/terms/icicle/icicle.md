---
Title: '.icicle()'
Description: 'Creates an icicle chart, a hierarchical visualization that displays data as nested rectangles, where each level represents a breakdown of the parent category.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Charts'
  - 'Data'
  - 'Functions'
  - 'Plotly'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Plotly, the **`.icicle()`** function under the [`plotly.express`](https://www.codecademy.com/resources/docs/plotly/express) module is used to create icicle charts, which are hierarchical visualizations similar to [sunburst charts](https://www.codecademy.com/resources/docs/plotly/express/sunburst) and [treemaps](https://www.codecademy.com/resources/docs/plotly/express/treemap). Icicle charts display hierarchical data with nested rectangles, where each level of the hierarchy is represented as a segment. This chart type is useful for visualizing multi-level categorical data in a structured and intuitive way.

## Syntax

```pseudo
plotly.express.icicle(data_frame=None, path=None, values=None, color=None, color_continuous_scale=None, title=None, ...)
```

- `data_frame`: The [Pandas DataFrame](https://www.codecademy.com/resources/docs/pandas/dataframe) containing hierarchical data.
- `path`: A list of column names representing different levels of the hierarchy.
- `values` (Optional): The column that defines the values of the segments.
- `color` (Optional): The column used for segment coloring.
- `color_continuous_scale` (Optional): A color scale for continuous data.
- `title` (Optional): The title of the icicle chart.

> **Note:** The ellipsis (...) indicates that there can be additional optional parameters beyond those listed here.

## Example

The following example demonstrates the usage of the `.icicle()` function:

```py
import plotly.express as px
import pandas as pd

# Create a sample hierarchical dataset
data = pd.DataFrame({
  "Region": ["World", "World", "World", "Asia", "Asia", "Europe", "Europe"],
  "Country": ["Asia", "Europe", "America", "China", "India", "Germany", "France"],
  "Population": [4600, 750, 1000, 1400, 1300, 83, 67]
})

# Create an icicle chart
chart = px.icicle(
  data_frame=data,
  path=["Region", "Country"],
  values="Population",
  color="Population",
  color_continuous_scale="Viridis",
  title="Population Distribution in Different Regions"
)

# Display the icicle chart
chart.show()
```

The above code produces the following output:

![The output for the above example](https://raw.githubusercontent.com/Codecademy/docs/main/media/icicle-chart.png)

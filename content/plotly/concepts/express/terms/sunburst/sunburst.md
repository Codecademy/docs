---
Title: '.sunburst()'
Description: 'Generates a sunburst chart to visualize hierarchical data using nested circular sectors.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Graphs'
  - 'Libraries'
  - 'Plotly'
  - 'Data'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.sunburst()`** method in the [Plotly](https://www.codecademy.com/resources/docs/plotly) `express` module creates sunburst charts, which are circular charts that represent hierarchical data. The chart uses sectors to represent levels in the hierarchy, with the root level at the centre and child levels radiating outward. Sunburst charts are particularly useful for visualizing nested data and their relationships.

## Syntax

```pseudo
plotly.express.sunburst(data_frame = None, names = None, parents = None, values = None, color = None, title = None, labels = None, ...)
```

- `data_frame`: A Pandas DataFrame containing the hierarchical data to be displayed. This can also accept a dictionary or array-like objects, which are internally converted into a DataFrame.
- `names`: The column name, Series, or array-like object that provides the labels for the sectors in the sunburst chart. This defines what each circular sector will represent.
- `parents`: The column name, Series, or array-like object that specifies the parent-child relationships in the hierarchy. The root node will have an empty string `""` as its parent.
- `values`: The column name, Series, or array-like object used to determine the size of each sector. Larger values result in larger sectors in the chart.
- `color`: Specifies the column name, Series, or array-like object whose values will be used to assign colors to the sectors. This is helpful for visual differentiation between groups.
- `title`: An optional title for the sunburst chart. If not provided, no title is displayed.
- `labels`: A dictionary that can be used to override the default labels for axis titles, legend entries, and hover information. This helps to customize the chart's display.

> **Note:** The ellipsis in the syntax (...) indicates that there are additional optional parameters beyond those listed here to customize the appearance and behavior of the sunburst chart.

## Example

Below is an example that demonstrates how to use the `.sunburst()` method with a hierarchical dataset in a [Pandas](https://www.codecademy.com/resources/docs/pandas) `DataFrame`:

```py
import plotly.express as px
import pandas as pd

# Creating a DataFrame for the sunburst chart
df = pd.DataFrame({
    "names": ["Company", "HR", "Sales", "Marketing", "Recruitment", "Operations", "Direct Sales", "Online Sales"],
    "parents": ["", "Company", "Company", "Company", "HR", "HR", "Sales", "Sales"],
    "values": [100, 40, 30, 30, 20, 20, 15, 15],
    "color": [1, 2, 3, 4, 1, 2, 3, 4]
})

# Creating a sunburst plot with the data
fig = px.sunburst(
    df,
    names="names",
    parents="parents",
    values="values",
    color="color",
    title="Company Hierarchy and Sales Distribution"
)

# Customizing layout and margins
fig.update_layout(margin=dict(t=50, l=25, r=25, b=25))

# Displaying the sunburst plot
fig.show()
```

The example above results in the following output:

![The output chart displays a circular hierarchy with the root at the centre and child nodes radiating outward. Each sector's size and color are proportional to its respective values and color attributes.](https://raw.githubusercontent.com/Codecademy/docs/main/media/sunburst-plotly.png)

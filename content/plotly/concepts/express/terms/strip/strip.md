---
Title: '.strip()'
Description: 'Strip charts are dot plots that visualize the distribution of a numerical variable for one or several groups.'
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

The **Strip charts** display individual data points as markers along a single axis, making them useful for visualizing distributions, especially with smaller datasets. They provide a clear view of data density, outliers, and the full range of values. In Plotly Express, strip charts are created using the `.strip()` function.

## Syntax

```pseudo
px.strip(data_frame=None, x=None, y=None, color=None, facet_row=None, facet_col=None, hover_name=None,
         hover_data=None, custom_data=None, animation_frame=None, animation_group=None, category_orders=None,
         labels=None, color_discrete_sequence=None, color_discrete_map=None, orientation=None, stripmode=None,
         log_x=False, log_y=False, range_x=None, range_y=None, title=None, template=None, width=None, height=None)
```

- `data_frame`: DataFrame or array-like object containing the data
- `x`, `y`: Columns in `data_frame` to be used as x and y coordinates
- `color`: Column to be used for color encoding
- `facet_row`, `facet_col`: Columns to create multiple subplots organized in rows and columns
- `hover_name`: Column with values displayed in bold in hover information
- `hover_data`: List of column names to include in hover information
- `stripmode`: Sets how points are arranged: 'group', 'overlay', or 'box'
- `orientation`: 'h' for horizontal, 'v' for vertical strip chart
- `log_x`, `log_y`: Boolean to transform respective axis to log scale
- `range_x`, `range_y`: List of two values to define axis range
- `title`: Title of the figure
- `template`: Template for figure styling

## Example

The following code creates a straightforward strip chart showing the distribution of sepal widths for different iris species. Each data point represents an individual flower measurement, allowing to see the full distribution pattern and any outliers within each species group:

```py
import plotly.express as px

# Load the built-in iris dataset
df = px.data.iris()

# Create a basic strip chart
fig = px.strip(
  df,
  x="species",
  y="sepal_width",
  color="species",
  title="Sepal Width Distribution by Species",
  height=500,
  width=700
)

# Customize layout
fig.update_layout(
  xaxis_title="Species",
  yaxis_title="Sepal Width (cm)",
  legend_title="Species"
)

fig.show()
```

The output for the above code is as follows:

![The output for the above Code](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly_strip_1.png)

---
Title: '.strip()'
Description: 'Creates a strip chart, which is a dot plot visualizing the distribution of a numerical variable for one or several groups.'
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

In Plotly Express, the **`.strip()`** function creates a strip chart, which displays individual data points as markers along a single axis, making it useful for visualizing distributions, especially with smaller datasets. They provide a clear view of data density, outliers, and the full range of values.

## Syntax

```pseudo
px.strip(data_frame=None, x=None, y=None, color=None, facet_row=None, facet_col=None, hover_name=None,
         hover_data=None, custom_data=None, animation_frame=None, animation_group=None, category_orders=None,
         labels=None, color_discrete_sequence=None, color_discrete_map=None, orientation=None, stripmode=None,
         log_x=False, log_y=False, range_x=None, range_y=None, title=None, template=None, width=None, height=None)
```

- `data_frame`: DataFrame or array-like object containing the data to be plotted.
- `x`: Column name or array of values to be used for the x-axis.
- `y`: Column name or array of values to be used for the y-axis.
- `color`: Column name or array of values used to assign colors to markers.
- `facet_row`: Column name to create multiple subplots arranged in rows.
- `facet_col`: Column name to create multiple subplots arranged in columns.
- `hover_name`: Column name to display in bold in the hover tooltip.
- `hover_data`: List or dict of column names to display in the hover tooltip.
- `custom_data`: List of column names to be extra data for callbacks or hover templates.
- `animation_frame`: Column name to be used for animation frames.
- `animation_group`: Column name to identify objects that should be animated together.
- `category_orders`: Dict mapping column names to lists defining the ordering of categorical values.
- `labels`: Dict mapping column names to display labels for axes, legends, and hover.
- `color_discrete_sequence`: List of colors to be used for discrete color values.
- `color_discrete_map`: Dict mapping categorical values to specific colors.
- `orientation`: Direction of the strip chart - `'h'` for horizontal or `'v'` for vertical.
- `stripmode`: How points are arranged - `'overlay'` (default), `'group'`, or `'box'`.
- `log_x`: Boolean indicating if x-axis should use log scale.
- `log_y`: Boolean indicating if y-axis should use log scale.
- `range_x`: List of two values defining the x-axis range.
- `range_y`: List of two values defining the y-axis range.
- `title`: Title text for the figure.
- `template`: Template name or template object for figure styling.
- `width`: Width of the figure in pixels.
- `height`: Height of the figure in pixels.

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

![The output for the above code](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-strip-1.png)

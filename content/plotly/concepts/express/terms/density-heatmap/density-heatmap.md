---
Title: '.density_heatmap()'
Description: 'Creates a 2D histogram visualization that shows the density of points in a dataset.'
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

The **`.density_heatmap()`** function generates a heatmap where the color intensity represents the concentration of data points in each bin. It's particularly useful for visualizing the relationship between two variables when there are many data points, identifying patterns, clusters, and outliers in large datasets. The density heatmap automatically bins data along both axes and uses color to represent the count or density within each bin.

## Syntax

```pseudo
px.density_heatmap(data_frame=None, x=None, y=None, z=None, color_continuous_scale=None,
                   nbinsx=None, nbinsy=None, histnorm=None, histfunc=None, facet_row=None,
                   facet_col=None, facet_col_wrap=None, marginal_x=None, marginal_y=None,
                   hover_name=None, hover_data=None, animation_frame=None, animation_group=None,
                   category_orders=None, labels=None, color_continuous_midpoint=None, range_x=None,
                   range_y=None, title=None, template=None, width=None, height=None)
```

- `data_frame`: DataFrame or array-like object containing the data
- `x`: Column name or array of values for the x-axis
- `y`: Column name or array of values for the y-axis
- `color`: Column name used for color encoding
- `facet_row`: Column to create multiple subplots arranged in rows
- `facet_col`: Column to create multiple subplots arranged in columns
- `hover_name`: Column to display in bold in hover tooltips
- `hover_data`: List of column names to include in hover tooltips
- `custom_data`: Columns passed to the figure but not visible
- `animation_frame`: Column to use for animation frames
- `animation_group`: Column to identify elements that should remain grouped during animations
- `category_orders`: Dictionary mapping column names to lists defining category order
- `labels`: Dictionary mapping column names to display labels
- `color_discrete_sequence`: List of colors for discrete mapping
- `color_discrete_map`: Dictionary mapping column values to colors
- `stripmode`: Determines strip arrangement, `'overlay'` (default) or `'group'`
- `orientation`: `'h'` for horizontal, `'v'` for vertical strips
- `log_x`: Boolean to transform the x-axis to log scale
- `log_y`: Boolean to transform the y-axis to log scale
- `range_x`: List of two values defining x-axis range
- `range_y`: List of two values defining y-axis range
- `title`: Title for the figure
- `template`: Template for figure styling
- `width`: Width of the figure in pixels
- `height`: Height of the figure in pixels

## Example

The following code creates a density heatmap showing the relationship between sepal width and length in the iris dataset. The intensity of color represents how many data points fall within each bin, making it easy to identify where measurements are most concentrated:

```py
import plotly.express as px

# Load the built-in iris dataset
df = px.data.iris()

# Create a basic density heatmap
fig = px.density_heatmap(
  df,
  x="sepal_width",
  y="sepal_length",
  color_continuous_scale="Viridis",
  nbinsx=15,
  nbinsy=15,
  title="Sepal Width vs Length Density"
)

# Update layout for better readability
fig.update_layout(
  xaxis_title="Sepal Width (cm)",
  yaxis_title="Sepal Length (cm)",
  coloraxis_colorbar_title="Count"
)

fig.show()
```

The above code results in the following output:

![The output for the above code](https://raw.githubusercontent.com/Codecademy/docs/main/media/density_heatmap_1.png)

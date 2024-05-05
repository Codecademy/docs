---
Title: '.scatter()'
Description: Creates a scatter plot by plotting markers on the plane
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Graphs'
  - 'Libraries'
  - 'Plotly'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The scatter function **scatter()** in the Plotly library that creates a scatter plot to visualize the relationship between variables using markers on the Cartesian plane.

## Syntax

```pseudo

plotly.express.scatter(data_frame, x, y, color, symbol, size, hover_name, hover_data, custom_data, text, facet_row, facet_col,
facet_col_wrap, facet_row_spacing, facet_col_spacing, error_x, error_x_minus, error_y, error_y_minus, animation_frame, animation_group,
category_orders, labels, orientation, color_discrete_sequence, color_discrete_map, color_continuous_scale, range_color, color_continous_midpoint,
symbol_sequence, symbol_map, opacity, size_max, marginal_x, marginal_y, trendline, trendline_options, trendline_color_override,
trendline_scope, log_x, log_y, range_x, range_y
render_mode, title, template, width, height)
```

Both 'x' and 'y' parameters are required, and represent str or int or Series or array-like objects. Other parameters are optional and modify plot features like marker size and/or color.
If data_frame is mising, a DataFrame gets constructed using other arguments.

`.scatter()` takes the following arguments:

- `data_frame`: Pandas DataFrame holding the data to visualize.
- `x` : Column name in `data_frame`, Series or array_like object for x-axis data.
- `y` : Column name in `data_frame`, Series or array_like object for y-axis data.
- `color`: Column name in `data_frame`, Series or array_like object specifying marker colors.
- `symbol`: Column in `data_frame`, Series or array_like object assigning marker symbols.
- `size`: Column in `data_frame`, Series or array_like object assgining marker sizes.
- `hover_name`: A column in `data_frame` or a Series or array_like object. Values from this column appear bold in hover tooltip.
- `hover_data`: A name or alist of names of columns in `data_frame`, or series or array_like object or dict used to assign hover labels to the data points.
- `custom_data`: Assign custom data associated with each data point.
- `text`: Column name(s) or index position(s) in the `data_frame_` for marker text labels.
- `facet_row`: Column name in `data_frame` used for creating facetted subplots in the row direction.
- `facet_col`: Column name in the `data_frame` used for creating facetted subplots in the column direction.
- `facet_col_wrap`: The maximum number of columns in the facetted subplot grid.
- `facet_row_spacing`: Adjust spacing between facet rows (between 0 and 1).
- `facet_col_spacing`: Adjust spacing between facet columns (between 0 and 1).
- `error_x`: The column name or array_like object used to size error bars on x-axis.
- `error_x_minus`: The column name in `data_frame`, Series or array_like object used to size x-axis bars in negative direction.
- `error_y` : The column name or array_like object used to size error bars on y-axis.
- `error_y_minus` : The column name in `data_frame`, Series or array_like object used to size y-axis bars in negative direction.
- `animation_frame` : The column name or index of the data frame used to group data points in the animated scatter plots.
- `animation_group` : Further control animation grouping (advanced)
- `category_orders` : Define custom order for categorical values.
- `labels` : Override default axis titles, legend entries and hover text.
- `orientation` : Set scatter plot layout to "v" (vertical) or "h" (horizontal)
- `color_discrete_sequence` : Define color sequences for discrete data.
- `color_discrete_map` : Define color maps for discrete data.
- `color_continous_scale` : Color scale for continuous data.
- `range_color` : Data range for continuous data.
- `color_continuous_midpoint` : Set midpoint in color scale for continuous data.
- `symbol_sequence`: Define symbol sequences for markers.
- `symbol_map`: Define symbol maps for markers.
- `opacity`: Set marker transparency (0-1, where 0 is fully transparent)
- `size_max`: Set upper limit for marker size.
- `marginal_x`: Include marignal histograms on x-axis.
- `marginal_y`: Include marginal histograms on y-axis
- `trendline`: Enable trendline fitting (linear, 'ols').
- `trendline_options`: Customize trendline appearance.
- `trendline_cover_override` : Advanced trendline control.
- `trendline_scope` : Advanced trendline control.
- `log_x` : Set log scale for x-axis.
- `log_y` : Set log scale for y-axis.
- `range_x` : Set data range for x-axis.
- `range_y` : Set data range for y-axis.
- `render_mode` : Choose rendering mode (eg. 'webgl' for large datasets).
- `title` : Set plot title.
- `template` : Apply Plotly layout template.
- `width` : Set plot width in pixels.
- `height` : Set plot height in pixels.

## Example

The example below demonstrates the use of `scatter()` to plot values.

```py
# x and y are array_like objects
import plotly.express as px
x = [1, 3, 5, 7, 9]
y = [4, 6, 5, 8, 2]

# Create a scatter plot
fig = px.scatter(x = x ,y = y)

# Display the plot
fig.show()
```

Output:

![Output of plotly scatter() example 1](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotlyScatterOutput1.png)

```py
import plotly.express as px

# Sample data with additional columns for color and symbol
x = [1, 3, 5, 7, 9]
y = [4, 6, 5, 8, 2]
color = ['red', 'green', 'blue', 'purple', 'orange']
symbol = ['circle', 'square', 'diamond', 'star', 'triangle-up']

# Create a scatter plot with color and symbol customization
fig = px.scatter(x, y, color=color, symbol=symbol, title = "Scatter Plot with Colors and Symbols")

# Display the plot
fig.show()
```

Output:

![Output of plotly scatter() example 2](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotlyScatterOutput2.png)

---
Title: '.scatter_3d()'
Description: 'Creates a 3D scatter plot to visualize data points across three dimensions (x, y, z) with options for color, size, and hover data.'
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

The **`.scatter_3d()`** method in the `plotly.express` module creates a 3D scatter plot to visualize the relationships between three variables using markers in a three-dimensional space. The data points are plotted based on their values on the `x`, `y`, and `z` axes. It also allows customizing marker colors, sizes, and symbols.

## Syntax

The `x`, `y`, and `z` parameters are required and accept values as a string, integer, `Series`, or array-like object, representing the data for each axis. Optional parameters, such as `color`, `symbol`, and `size`, customize the markers' appearance. If `data_frame` is not provided, a `DataFrame` will be constructed from other arguments.

```pseudo
plotly.express.scatter_3d(data_frame=None, x=None, y=None, z=None, color=None, symbol=None, size=None, ...)
```

- `data_frame`: The Pandas [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) containing the data to visualize.
- `x`: The column name in `data_frame`, `Series`, or array-like object for x-axis data.
- `y`: The column name in `data_frame`, `Series`, or array-like object for y-axis data.
- `z`: The column name in `data_frame`, `Series`, or array-like object for z-axis data.
- `color`: The column name in `data_frame`, `Series`, or array-like object to specify marker colors.
- `symbol`: The column name in `data_frame`, `Series`, or array-like object for assigning marker symbols.
- `size`: The column name in `data_frame`, `Series`, or array-like object to assign marker sizes.

> **Note:** The ellipsis in the syntax (...) indicates additional optional parameters that can be used to customize the plot further.

## Examples

The examples below demonstrate how the [`.scatter()`](https://www.codecademy.com/resources/docs/plotly/express/scatter) method creates a 2D scatter plot, while the `.scatter_3d()` method provides a more complex visualization in three dimensions, utilizing additional parameters for color and symbol customization.

### Example 1

The following example demonstrates the use of the `.scatter()` method:

```py
# Defining 'x' and 'y' as array-like objects
import plotly.express as px
x = [1, 3, 5, 7, 9]
y = [4, 6, 5, 8, 2]

# Creating a scatter plot
fig = px.scatter(x = x, y = y)

# Displaying the plot
fig.show()
```

The output for the above code is as follows:

![The output for the above example](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotlyScatter3dOutput1.png)

### Example 2

This example illustrates the use of the `.scatter_3d()` method, showcasing its capability to utilize more parameters for enhanced visualization:

```py
import plotly.express as px

# Sample Data
x = [1, 3, 5, 7, 9]
y = [4, 6, 5, 8, 2]
z = [7, 2, 9, 4, 8]
color = ['red', 'green', 'blue', 'purple', 'orange']
symbol = ['circle', 'square', 'diamond', 'star', 'triangle-up']

# Creating a 3D scatter plot
fig = px.scatter_3d(x=x, y=y, z=z, color=color, symbol=symbol, title="3D Scatter Plot with Colors and Symbols")

# Displaying the plot
fig.show()
```

The above code produces the following output:

![The output for the above example](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotlyScatter3dOutput2.png)

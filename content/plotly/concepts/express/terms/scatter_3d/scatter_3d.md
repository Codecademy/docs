---
Title: '.scatter_3d()'
Description: 'The .scatter_3d() method in the Plotly library creates a 3D scatter plot, displaying data points based on their values on the x, y, and z axes. This is a powerful tool for visualizing the relationships between three numerical variables in a three-dimensional space, with the option to add color, symbol, and size to the markers for more customization.'
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

The **`.scatter_3d()`** method in the Plotly Express module creates a 3D scatter plot to visualize the relationships between three variables using markers in a three-dimensional space. The data points are plotted based on their values on the `x` and `y` axes. It also allows customizing marker colors, sizes, and symbols.

## Syntax

```pseudo
plotly.express.scatter_3d(data_frame=None, x=None, y=None, z=None, color=None, symbol=None, size=None, ...)
```

- `data_frame`: The Pandas [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) holding the data to visualize.
- `x`: The column name in `data_frame`, `Series` or array_like object for x-axis data.
- `y`: The column name in `data_frame`, `Series` or array_like object for y-axis data.
- `z`: The column name in `data_frame`, `Series` or array_like object for z-axis data.
- `color`: The column name in `data_frame`, `Series` or array_like object specifying marker colors.
- `symbol`: The column name in `data_frame`, `Series` or array_like object assigning marker symbols.
- `size`: The column name in `data_frame`, `Series` or array_like object assgining marker sizes.

The parameters `x`, `y`, and `z` parameters are required and represent either a string, integer, `Series`, or array-like object. Other parameters such as `color`, `symbol`, and `size` are optional and can customize the appearance of the markers. If `data_frame` is missing, a `DataFrame` is constructed using the other arguments.

> Note: The ellipsis in the syntax (...) indicates additional optional parameters that can be used to further customize the plot.

## Example

The below example demonstrates the use of the `.scatter()` method:

```py
# Defining 'x' and 'y' as array_like objects
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

Here is another example that customizes the 3D scatter plot with colors and symbols for the data points:

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

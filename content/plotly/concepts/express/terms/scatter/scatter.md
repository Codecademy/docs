---
Title: '.scatter()'
Description: 'Creates a scatter plot, which displays data points based on their values on the x and y axes.'
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

The **`.scatter()`** method in the Plotly library creates a scatter plot to visualize the relationship between variables using markers on a Cartesian plane, with data points plotted based on their values on the `x` and `y` axes.

## Syntax

```pseudo
plotly.express.scatter(data_frame=None, x=None, y=None, color=None, symbol=None, size=None, ...)
```

- `data_frame`: The Pandas [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) holding the data to visualize.
- `x`: The column name in `data_frame`, `Series` or array_like object for x-axis data.
- `y`: The column name in `data_frame`, `Series` or array_like object for y-axis data.
- `color`: The column name in `data_frame`, `Series` or array_like object specifying marker colors.
- `symbol`: The column name in `data_frame`, `Series` or array_like object assigning marker symbols.
- `size`: The column name in `data_frame`, `Series` or array_like object assgining marker sizes.

Both the `x` and `y` parameters are required and represent either a string, integer, `Series`, or array-like object. Other parameters are optional and can modify plot features such as marker sizes and/or colors. If `data_frame` is missing, a `DataFrame` is constructed using the other arguments.

> Note: The ellipsis in the syntax (...) indicates that there can be additional optional parameters beyond those listed here to customize the scatter plot.

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

![The output for the above example](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotlyScatterOutput1.png)

Here is another example that customizes the previously created scatter plot by adding colors and symbols for each data point:

```py
import plotly.express as px

# Adding 'color' and 'symbol' columns to the already existing 'x' and 'y' columns
x = [1, 3, 5, 7, 9]
y = [4, 6, 5, 8, 2]
color = ['red', 'green', 'blue', 'purple', 'orange']
symbol = ['circle', 'square', 'diamond', 'star', 'triangle-up']

# Creating a scatter plot
fig = px.scatter(x=x, y=y, color=color, symbol=symbol, title = "Scatter Plot with Colors and Symbols")

# Displaying the plot
fig.show()
```

The above code produces the following output:

![The output for the above example](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotlysampleOutput2.png)

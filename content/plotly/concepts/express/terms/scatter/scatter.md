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
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **`scatter()`** function in the Plotly library creates a scatter plot to visualize the relationship between variables using markers on a Cartesian plane, with data points plotted based on their values on the x and y axes.

## Syntax

```pseudo

plotly.express.scatter(data_frame=None, x=None, y=None, color=None, symbol=None, size=None, ...)

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

> Note: The ellipsis (...) indicates that there can be additional optional parameters beyond those listed here to customize the scatter plot.

## Example

The example below demonstrates the use of the `.scatter()` method to plot values:

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

The above code produces the following output:

![Output of plotly scatter() example 1](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotlyScatterOutput1.png)

Let's customize the scatter plot created above by adding colors and symbols to each data point:

```py
import plotly.express as px

# Sample data with additional columns for color and symbol
x = [1, 3, 5, 7, 9]
y = [4, 6, 5, 8, 2]
color = ['red', 'green', 'blue', 'purple', 'orange']
symbol = ['circle', 'square', 'diamond', 'star', 'triangle-up']

# Create a scatter plot with color and symbol customization
fig = px.scatter(x=x, y=y, color=color, symbol=symbol, title = "Scatter Plot with Colors and Symbols")

# Display the plot
fig.show()
```

The code above produces the following output:

![Output of plotly scatter() example 2](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotlyScatterOutput2.png)

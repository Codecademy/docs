---
Title: '.histogram()'
Description: 'Creates a histogram, which is a graphical representation of the distribution of a dataset.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data'
  - 'Graphs'
  - 'Methods'
  - 'Libraries'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Plotly, the **`.histogram()`** method in the `plotly.express` module is used to create histogram, a graphical representation of data as a bar chart that shows the distribution of a dataset. The bars represent the count of data points within specified ranges (bins). This method also allows aggregation functions like sum, average, and count to be applied to visualize data on categorical, date, or linear axes.

The elements of the histogram graph are following:

- Title: Describes the information represented in the histogram.
- X-axis: Displays the intervals (bins) that represent the range of values in the data.
- Y-axis: Shows the frequency or count of data points that fall within each interval (bin) on the X-axis.
- Bars: The height of each bar represents the frequency or count of data points within that interval. The width of each bar corresponds to the interval's range on the X-axis.

## Syntax

```pseudo
plotly.express.histogram(data_frame=None, x=None, y=None, nbins=None, color_discrete_sequence=None, title=None, ...)
```

- `data_frame`: The dataset containing the variables to be plotted.
- `x`: The data for the X-axis.
- `y` (Optional): The data for the Y-axis.
- `nbins` (Optional): The number of bins (bars) in the histogram. This parameter should be a positive integer.
- `color_discrete_sequence` (Optional): Changes the color of the bars. The argument of this parameter can be a string like `'red'`, `'yellow'`, `'blue'`, or hexadecimal colors.
- `title` (Optional): The title of the figure.

> Note: The ellipsis (...) indicates that there can be additional optional parameters beyond those listed here.

## Example

The below example shows how to use the `.histogram()` method to create box plots:

```py
# Importing plotly.express as px
import plotly.express as px

# Loading a built-in DataFrame
df = px.data.tips()

# Creating the histogram with x set to "total_bill" and nbins set to the integer 20
fig = px.histogram(df, x="total_bill", nbins=20)

# Showing the histogram plot
fig.show()
```

By default, the number of bins is chosen so that this number is comparable to the typical number of samples in a bin. In this example, the number of bins can be customized.

The above code produces the following output:

![The output for the above example](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-express-histogram-example.png)

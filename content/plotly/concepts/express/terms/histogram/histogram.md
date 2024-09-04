---
Title: '.histogram()'
Description: 'Creates a histogram which is a graphical representation of the distribution of a dataset.'
Subjects: 
  - 'Computer science'
  - 'Data scinence'
Tags: 
  - 'Data'
  - 'Graphs'
  - 'Methods'
  - 'Libraries'
  - 'Plotly'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

In Plotly, the `**.histogram()**` method in the `plotly.express` module is used to create a graphical representation of data as a bar chart that shows the distribution of a dataset. The bars represent the count of data points within specified ranges (bins). This method also allows for aggregation functions like sum, average, and count, which can be applied to visualize data on categorical, date, or linear axes. 

The elements of the histogram graph are:
 - Title: Describes the information represented in the histogram.
 - X-axis: Displays the intervals (bins) that represent the range of values in the data.
 - Y-axis: Shows the frequency or count of data points that fall within each interval (bin) on the X-axis.
 - The bars: The height of each bar represents the frequency or count of data points within that interval. The width of each bar corresponds to the interval's range on the X-axis.

## Syntax

```pseudo
plotly.express.histogram(
    data_frame,    # Your DataFrame containing the data
    x,             # Column name for the x-axis (required)
    y=None,        # Optional column name for the y-axis
    color=None,    # Optional column name for color grouping
    facet_row=None,# Optional column name to split data into rows
    facet_col=None,# Optional column name to split data into columns
    hover_data=None,# Optional list of column names for hover info
    marginal=None, # Optional to add marginal plots (e.g., 'rug', 'box')
    opacity=None,  # Optional opacity for bars
    orientation=None,# 'v' or 'h' for vertical or horizontal bars
    barmode='relative', # Bar stacking mode: 'relative', 'overlay', etc.
    title=None,    # Optional title for the plot
    template=None, # Optional Plotly template (e.g., 'plotly_dark')
    width=None,    # Optional plot width
    height=None    # Optional plot height
)
```
The parameters recommended to learn are:
- `data_frame`: The dataset containing the variables to be plotted.
- `x`: The data for the x-axis.
- `nbins`: The number of bins (bars) in the histogram. This parameter should be a positive integer.
- `color_discrete_sequence`: The color of histogram. It changes the color of the bars. The argument of this parameter can be a string like ‘red‘, ‘yellow‘, or ‘blue‘, or hexadecimal colors.
- `title`: The title of the figure.

## Example

The below example shows how to use the `.histogram()` method to create box plots:

```py
# Importing plotly.express as px
import plotly.express as px

# Loading a built-in data frame
df = px.data.tips()

# Creating the histogram with the total_boll as the x variable and integer "20" as nbins
fig = px.histogram(df, x="total_bill", nbins=20)

# Showing the histogram plot
fig.show()
```
By default, the number of bins is chosen so, that this number is comparable to the typical number of samples in a bin. In this example the number of bins can be customized.

The above code produces the following output:

![The output for the above example](<https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-express-histogram-example.png>)

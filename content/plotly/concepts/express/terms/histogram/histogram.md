---
Title: '.histogram()'
Description: 'Creates histogram - a graphical representation of the distribution of data in the form of bars, that represent the frequency of occurrence of individual values in a data set.'
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

In Plotly, the **`.histogram()`** method as a part of the `plotly.express` interface, is used to make a graphical representation of data as an accumulated bar chart where, each stocked data is counted and represented. This method offers several functions like sum, average, count and more, which can be used to visualize data on categorical and date axes or linear axes. The elements of histogram graph are:
 - The title: describes the information represented in the histogram.
 - X-axis: intervals that show the scale of values which measures all fall under.
 - Y-axis: the number of times that the values occurred within the intervals set by the X-axis.
 - The bars: The height of the bar shows the number of times that the values occurred within the interval, width of the bar shows the interval that is covered.

## Syntax

```pseudo
plotly.express.histogram(data_frame=None, x=None, y=None, color=None, pattern_shape=None, facet_row=None, facet_col=None, facet_col_wrap=0, facet_row_spacing=None, facet_col_spacing=None, hover_name=None, hover_data=None, animation_frame=None, animation_group=None, category_orders=None, labels=None, color_discrete_sequence=None, color_discrete_map=None, pattern_shape_sequence=None, pattern_shape_map=None, marginal=None, opacity=None, orientation=None, barmode='relative', barnorm=None, histnorm=None, log_x=False, log_y=False, range_x=None, range_y=None, histfunc=None, cumulative=None, nbins=None, text_auto=False, title=None, template=None, width=None, height=None)
```
The parameters recommended to learn are:
- `data_frame`: The dataset containing the variables to be plotted.
- `x`: The data for the x-axis.
- `nbins`: The number of bins in the histogram (i.e., the number of bars). The argument of this parameter should be an positive integer.
- `color_discrete_sequence`: The color of histogram. It changes the color of the bars. The argument of this parameter can be a string like ‘red‘, ‘yellow‘, or ‘blue‘, or hexadecimal colors.
- `title`: The title of the figure.

## Example

The below example shows how to use the `.histogram()` method to create box plots:

```py
# Importing plotly.express as px
import plotly.express as px

# Loading a built-in data frame
df = px.data.tips()

# Creating the histogram with the variable time as the x variable and the variable total_bill as the y variable
fig = px.histogram(df, x="total_bill", nbins=20)

# Showing the histogram plot
fig.show()
```
By default, the number of bins is chosen so that this number is comparable to the typical number of samples in a bin. In this example the number of bins can be customized.

The above code produces the following output:

![The output for the above example](<https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-express-box()-example.png>)

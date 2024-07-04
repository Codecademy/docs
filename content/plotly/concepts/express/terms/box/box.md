---
Title: '.box()'
Description: 'Creates a box plot to visualize the distribution of data points through their quartiles.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data'
  - 'Graphs'
  - 'Methods'
  - 'Libraries'
  - 'Plotly'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

A box plot is a visual representation of the distribution of numeric data through quartiles. It uses boxes and lines to depict the distributions of one or more groups of numeric data. The box limits indicate the range of the central 50% of the data, with a central line marking the median value. In Plotly, the **`.box()`** method is present in the `plotly.express` high-level interface, is used to make box plots with one or two variables.

## Syntax

```pseudo
plotly.express.box(data_frame=None, x=None, y=None, color=None, labels=None, title=None, ...)
```

- `data_frame`: The dataset containing the variables to be plotted.
- `y`: The data for the y-axis.
- `x` (Optional): The data for the x-axis
- `color` (Optional): A column name in the data frame that determines the color of the boxes.
- `labels` (Optional): Key-value pairs with the original column names as the key and the custom column names as the value.
- `title` (Optional): The title of the box plot.

> **Note:** The ellipsis (...) indicates that there can be additional optional arguments beyond those listed here.

## Example

The below example shows how to use the `.box()` method to create box plots:

```py
# Importing plotly.express as px
import plotly.express as px

# Loading a built-in data frame
df = px.data.tips()

# Creating the box plot with the variable time as the x variable and the variable total_bill as the y variable
fig = px.box(data_frame=df, x="time", y="total_bill", title="The Total Bill Spent On Meals")

# Showing the box plot
fig.show()
```

In the example, a plot of total meal expenses ($) is generated from the data frame. The `x` axis corresponds to the `time` variable, which categorizes data into two distinct points: Dinner and Lunch. The `y` axis represents the `total_bill` variable, showing the distribution of expenses for each mealtime. Consequently, the output includes two box plots, each depicting the variability in total bills between Dinner and Lunch.

The above code produces the following output:

![The output for the above example](<https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-express-box()-example.png>)

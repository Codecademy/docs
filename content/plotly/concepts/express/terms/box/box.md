---
Title: '.box()'
Description: 'Creates box plots'
Subjects:
    -  'Computer Science'
    -  'Data Science'
Tags:
    - 'Methods'
    - 'Libraries'
    - 'Data'
    - 'Graphs'
    - 'Plotly'
CatalogContent:
    - 'learn-python-3'
    - 'paths/computer-science'
    - 'paths/data-science'
    - 'paths/data-science-foundations'
---

A box plot is a statistical representation of the distribution of a variable through its quartiles. The ends of the box represent the lower and upper quartiles, while the median(second quartile) is marked by a line inside the box. In Plotly, the **`.box()`** method is part of the high-level interface named `plotly.express`. It can create a box plot for one as well as two variables.

## Syntax

```pseudo
plotly.express.box(data_frame=None, x=None, y=None, color=None, labels=None, title=None, ...)
```
- `data_frame`: The dataset containing the variables to be plotted.
- `y`: The data for the y-axis.
- `x` (Optional): The data for x-axis
- `color` (Optional): A column name in the data frame that determines the color of the boxes.
- `labels` (Optional): Key-value pairs with the original column names as the key and the custom column names as the value.
- `title` (Optional): The title of the box plot.

> **Note:** The ellipsis (...) indicates that there can be additional optional arguments beyond those listed here.

## Example

Below are two examples that show how to use the `.box()` method to create box plots.

```python
# Importing plot.express as px
import plotly.express as px

# Loading a built-in data frame
df = px.data.tips()

# Creating the box plot with the variable time as the x variable and the variable total_bill as the y variable
fig = px.box(data_frame=df, x="time", y="total_bill", title="The Total Bill Spent On Meals")

# Showing the box plot
fig.show()
```

In the above example, a plot of the total bill spent on meals (in $) is plotted from the data frame. The `x` parameter is set to the `time` variable of the data frame, and the `y` parameter is set to the `total_bill` variable of the data frame. In the `time` variable of the data frame, there are two distinct data points: Dinner and Lunch. Therefore, the output has two box plots.

The above code produces the following output:

![The output for the above example](<https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-express-box()-example.png>)

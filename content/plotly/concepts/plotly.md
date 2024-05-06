---
Title: 'Plotly'
Description: 'Plotly is a Python library for creating interactive visualizations and charts.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Data'
  - 'Graphs'
  - 'Libraries'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**`Plotly`** is a Python library for interactive charts and graphics, offering a variety of visualization options like `line graphs`, `bar charts`, `heatmaps`, and `scatter plots`.

## Sintax

A general Plotly syntax is shown below:

```pseudo
# Import the Plotly library
import plotly.graph_objects as go

# Define the data for the graph
x_data = [...]  # List of x-axis values
y_data = [...]  # List of y-axis values

# Create the graph object
fig = go.Figure(...) # parameters depend on the kind of graph

# Add title and labels
fig.update_layout(
    title='Graph title',
    xaxis_title='X-axis Label',
    yaxis_title='Y-axis Label'
)

# Display the graph
fig.show()

```

> **Note:** The ellipsis (...) indicates that there are values and parameters to be filled in.

## Example

See how to use the Plotly library with a bar chart representing fruits and their quantities in the example below.

```python
# Import the Plotly library
import plotly.graph_objects as go

# Define the data for the graph
x = ['Apples', 'Pears', 'Grapes']
y = [10, 5, 3]

# Create the bar graph
fig = go.Figure(data=go.Bar(x=x, y=y))

# Add title and labels
fig.update_layout(title='Bar graph', xaxis_title='Fruit', yaxis_title='Quantity')

# Display the graph
fig.show()
```

The previous code produces the following output:

![Example output](<https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-output.png>)
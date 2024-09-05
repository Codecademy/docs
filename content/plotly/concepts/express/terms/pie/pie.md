---
Title: '.pie()'
Description: 'Creates a pie chart, a circular statistical graphic divided into slices to illustrate numerical proportions.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Data'
  - 'Graphs'
  - 'Libraries'
  - 'Plotly'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Plotly, the **`.pie()`** method is used to create a pie chart, which visually represents data proportions. This method helps transform data into an appealing visual format, making it easier for readers to understand the relationships between variables.

## Syntax

```pseudo
plotly.express.pie(data_frame=None, values=None, names=None, title=None, hole=None, color_discrete_sequence=None, hover_data=None, labels=None, ...)
```

- `data_frame`: The `DataFrame` to be used.
- `values`: The values to be used to define the pie slices.
- `names`: The labels for each pie slice.
- `title`: The title of the chart.
- `hole`: Creates a donut chart if value is between `0` and `1`.
- `color_discrete_sequence`: The color sequence for the pie slices.
- `hover_data`: The column name for the additional data to show on hover.
- `labels`: The custom labels to be used instead of column names in the figure.

> Note: The ellipsis (...) indicates that there can be additional optional parameters beyond those listed here.

## Example

The example below shows the usage of the `.pie()` method:

```py
# Import necessary libraries
import plotly.express as px
import pandas as pd

# Define example data
data = {
  'Category': ['A', 'B', 'C', 'D'],
  'Value': [45, 55, 30, 15]
}

# Create a DataFrame
df = pd.DataFrame(data)

# Create and display a pie chart
fig = px.pie(
  df,
  values='Value',
  names='Category',
  title='Example Pie Chart',
  hole=0.3,
  color_discrete_sequence=px.colors.sequential.RdBu,
  labels={'Category': 'Category Name'}
)

# Display the plot
fig.show()
```

The code above generates the following output:

![The output for the above example](https://raw.githubusercontent.com/Codecademy/docs/main/media/pieplot.png)

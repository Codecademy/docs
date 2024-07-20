# Plotly Pie Charts

## .pie()

---
Title: '.pie()'
Description: 'Creates a pie chart, a circular statistical graphic divided into slices to illustrate numerical proportions.'

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

In Python, the **`pie()`** method from the Plotly library is used to create a pie chart, which visually represents data proportions. This method helps transform data into an appealing visual format, making it easier for readers to understand the relationships between variables.

## Syntax
- values - The values that will define the pie slices
- names - The labels for each pie slice
- title - Title of the chart
- hole - Creates a donut chart if value is between 0 and 1
- color_discrete_sequence - Color sequence for the pie slices
- hover_data - Column name for additional data to show on hover
- labels - Custom labels

## Example
```
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

## Here is the output:

The example below shows the usage of the `.pie()` method as follows:


![alt text](newplot2.png)
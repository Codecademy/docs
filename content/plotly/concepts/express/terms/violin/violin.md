---
Title: '.violin()'
Description: 'Generates a violin plot that displays the distribution of numeric data across different categories.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Data'
  - 'Express'
  - 'Graphs'
  - 'Plotly'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

In Plotly, the **`.violin()`** method generates a violin plot. This plot uses kernel density estimation (KDE) to display the distribution of numeric data, providing a detailed view of data density across different values.

## Syntax

```pseudo
plotly.express.violin(data_frame=None, x=None, y=None, color=None, facet_row=None, facet_col=None, ...)
```

- `data_frame`: It is the input data as a Pandas DataFrame.
- `x`: It specifies the column name for the x-axis categories.
- `y`: It specifies the column name for the y-axis numeric data.
- `color`: It specifies the column name for color-coding categories.
- `facet_row`: It specifies the column name to create row-wise subplots.
- `facet_col`: It specifies the column name to create column-wise subplots.

> **Note:** The ellipsis (...) indicates that there can be additional optional parameters beyond those listed here.

## Example

Here is an example of creating a violin plot using the `.violin()` method of Plotly Express:

```py
# Import necessary libraries
import plotly.express as px  # Import Plotly Express for data visualization
import pandas as pd  # Import Pandas for data manipulation and analysis

# Create a sample dataset
data = {'Category': ['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C'],  # Define a dictionary with two keys: 'Category' and 'Value'
        'Value': [1, 2, 3, 4, 5, 6, 7, 8, 9]}
df = pd.DataFrame(data)  # Convert the dictionary into a Pandas DataFrame

# Create the violin plot
fig = px.violin(df, x="Category", y="Value")  # Use Plotly Express to create a violin plot with 'Category' on the x-axis and 'Value' on the y-axis
fig.show()  # Display the plot
```

The above code imports necessary libraries, creates a sample dataset, and generates a violin plot using the `.violin()` method to show the distribution of 'Value' across 'Category' levels, then displays the plot.

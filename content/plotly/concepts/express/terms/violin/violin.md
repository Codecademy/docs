---
Title: '.violin()'
Description: 'Generates a chart to show the distribution of numerical values.'
Subjects:
  - 'Data Visualization'
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Graphs'
  - 'Data'
  - 'Plotly'
  - 'Express'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The function **`.violin()`** generates a violin plot. Numeric data is plotted into a violin plot similar to a box plot however, it uses kernel density estimation (KDE) to display its distribution, providing a more in-depth view of the dataset, including the data density at different values.

## Syntax

The syntax for creating a violin plot using Plotly Express is as follows:

```pseudo
import plotly.express as px

px.violin(data, x, y, color, facet_row, facet_col, hover_name, hover_data, custom_data, animation_frame, animation_group, category_orders, labels, color_discrete_sequence, color_continuous_scale, range_color, range_x, range_y, title, template, width, height)
```

Here is an example of creating a violin plot using Plotly Express:

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

From this code a violin plot is created showing the distribution of the Value column for each category in the Category column.

## Datasets

To work with a specific set of data you can import a dataset for `px.violin()`. Various methods are utilized, depending on the format of the dataset. Here are a few examples:

How to import from a CSV file:

```pseudo
import pandas as pd

df = pd.read_csv('your_data.csv')
```

How to import from a JSON file:

```pseudo
import pandas as pd

df = pd.read_json('your_data.json')
```

How to import from an Excel file:

```pseudo
import pandas as pd

df = pd.read_excel('your_data.xlsx')
```

How to import an online dataset:

```pseudo
import pandas as pd

url = 'URL' # Paste the url and path to the dataset
df = pd.read_csv(url)
```

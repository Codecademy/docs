---
Title: '.create_table()'
Description: 'Creates a table visualization from a list of lists or a pandas DataFrame.'
Subjects:
- 'Computer Science'
- 'Data Science'
- 'Data Visulisation'
Tags:
- 'APIs'
- 'Data Structures'
- 'Documentation'
- 'Functions'
- 'Plotly'
- 'Python'
- 'Tables'
CatalogContent:
- 'learn-python-3'
- 'paths/computer-science'
---

The **`.create_table()`** is a function in the Plotly's [`figure_factory`](https://www.codecademy.com/resources/docs/plotly/figure-factory) module in Python. It accepts data in the form of a list of lists or a [Pandas DataFrame](https://www.codecademy.com/resources/docs/pandas/dataframe) and returns a Plotly Figure object representing the table.

## Syntax

```pseudo
plotly.figure_factory.create_table(table_text, index=False, font_colors=None, index_title=' ',**kwargs)
```

### Parameters
- `table_text` (list of lists or Pandas DataFrame): The table data to be displayed. If using a Pandas DataFrame, the table will automatically extract its values.
- `index` (bool): Whether to include an index column when using a Pandas DataFrame or use the first element of each inner list as an index when passing a list of lists. Default value is `False`.
- `font_colors` (list, optional): Specifies the font colors for the table text. It can be a single color for all text or a list defining colors for rows. Default is `[#000000]` (black text).
- `index_title` (str, optional): Sets the title for the index column if `index=True`. Default is an empty string.
- `**kwargs`: Additional keyword arguments passed to [plotly.graph_objects.Heatmap](https://github.com/Codecademy/docs/blob/main/content/plotly/concepts/graph-objects/terms/heatmap/heatmap.md) for further customization.

## Example

The following example showcases the use of the `.create_table()` function:

```py
import plotly.figure_factory as ff
import pandas as pd

# Sample data
data = pd.DataFrame({
    "Name": ["Luke", "Anakin","Padme", "Yoda"],
    "Age": [25, 50, 45, 353],
    "Planet": ["Tatooine", "Tatooine","Naboo", "Dagobah"]
})

# Create table
fig = ff.create_table(data)

# Show figure
fig.show()
```
The code above produces the following output:


![Output of plotly.figure_factory.create_table() function example](https://raw.githubusercontent.com/Codecademy/docs/main/media/create_table_fig.png) 


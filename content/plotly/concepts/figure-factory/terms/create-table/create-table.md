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
plotly.figure_factory.create_table(data, index=True, **kwargs)
```

### Parameters
- `data` (list of lists or Pandas DataFrame): The table data to be displayed.
- `index` (bool, default=`True`): Whether to include index values when using a Pandas DataFrame.
- `colorscale` (str or list of lists, optional): Defines the color scale for the table. The default is `[[0, '#66b2ff'], [0.5, '#d9d9d9'], [1, '#ffffff']]`, where `0` corresponds to the header color, `0.5` to the first row color, and `1` to the second row color. Adjusting `0.5` and `1` can remove the striped effect.
- `font_colors` (list, optional): Specifies the font colors for the table text. It can be a single color for all text, three colors, or a color for each row. The default is `['#000000'] `(black text for the entire table).
- `index_title` (str, optional): Sets the title for the index column. The default is an empty string.
- `annotation_offset` (float, optional): Offsets the annotations within the table cells. The default is `0.45`.
- `height_constant` (int, default=30): A constant multiplied by the number of rows to determine the table's height.
- `hoverinfo` (str, optional): Specifies the hover information. The default is`'none'`.
- `**kwargs`: Additional keyword arguments passed to [plotly.graph_objects.Heatmap](https://github.com/Codecademy/docs/blob/main/content/plotly/concepts/graph-objects/terms/heatmap/heatmap.md) for further customization.

## Example

The following example showcases the use of the `create_table()` function:

```python
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
**Output:**

The code depicted above produces the following output:

![Output of plotly.figure_factory.create_table() function example]() _image needs to be added_
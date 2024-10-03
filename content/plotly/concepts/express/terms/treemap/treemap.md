---
Title: '.treemap()'
Description: 'Returns a visualization of hierarchical data using nested rectangles.'
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

The **`.treemap()`** method in the express module from Plotly library allows the creation of charts in a hierarchy defined mainly by `labels` (`names` for `plotly.express treemap()`) and `parents` attributes. With `plotly.express treemap()` each row of the DataFrame is represented as a sector of the treemap. The number of elements in the list of `names` must be the same as the list of `parents`, and both must always be strings. If it is a dictionary, the number of elements in a given list taken as a value for the key `names` must be the same number of elements in a given list taken as a value for the key `parents`.

## Syntax

```pseudo
fig=px.treemap(
    names = ["element1", "element2". "element3", "element4"]
    parents = ["", "element1", "element1", "element1"] # Note: the empty element `""` also counts
)

update_traces()
update_layout()
show()
```

- `plotly.express.treemap()`: Usually used as `px`, and thus `px.treemap()`, this is the way to call the method in full.
- `names`: The column which contains four rows - `element1`, `element2`, `element3`, `element4`.
- `parents`: The column which contains four rows, each one corresponding to the rows of `names` - `""` for `element1`, `element1` for `element2`, `element1` for `element3`, `element1` for `element4`.
- `update_traces()`: is used to update the treemap's root color. It can take arguments that allow to modify attributes such as colors, shapes, and styles.
- `update_layout()`: this method updates the layout chart, allowing to tailor the appearence and visualization style, including margins, colors, and others.
- `show()`: Is used to run and show the chart.

> Note: parameter beyond `names` and `parents` can be added to the `.treemap()` method.

Overall, a treemap plot represents hierarchial data as nested rectangular sectors. Beyond `names` and `parents` some examples of its parameters are:

- `data_frame` (DataFrame or array-like or dict): This argument should be passed for column (not keyword) `names` to be used. Arrays and dictionaries are transformed internally into a pandas DataFrame. If the `data_frame` is missing, the data can be passed directly as arrays or dictionaries to the px.treemap() function using other arguments.

- `values` (str or int or Series or array-like): Either a name of a column in a data_frame, or a panda Series or array-like object, `values` paramenters or array-like are used as labors for sectors and determine the size of each sector in the treemap. Each sector can occupies a range of space based on the data provided.

- `ids` (str or int or Series or array-like): Either a name of a column in a data_frame, or a panda Series or array-like object, `ids` parameters or array-like are used to set ids of sectors, uniquely identify each sector in the treemap.

## Example

The following examples show the usage of the `.treemap()` method.

```py
# Creating an alias for plotly.express library
import plotly.express as px

# Creating a treemap plot and layout
figure = px.treemap(
    names = ["Students", "Bob", "Michael", "Ana"],
    parents = ["", "Students", "Students", "Students"]
)

figure.update_traces(root_color="lightgrey")
figure.update_layout(margin = dict(t=50, l=25, r=25, b=25))

# Displaying the plot
figure.show()
```

The example above results in the following output:

![The output for the example above](http://127.0.0.1:60957/)

Combining a `Data Frame` with the `.treemap()`:

```py
# Creating an alias for plotly.express library
import plotly.express as px
import pandas as pd

# Creating a dataset for treemaps

df = pd.DataFrame({
    "names": ["Company", "HR", "Sales", "Marketing"],
    "parents": ["", "Company", "Company", "Company"]
})

df.head()

# Creating a treemap plot and layout
figure = px.treemap(
    df,
    names = 'names',
    parents = 'parents'
)

figure.update_traces(root_color="lightgrey")
figure.update_layout(margin = dict(t=50, l=25, r=25, b=25))

# Displaying the plot
figure.show()
```

The example above results in the following output:

![The output for the example above](http://127.0.0.1:60988/)

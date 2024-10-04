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
plotly.express.treemap(data_frame = None, names = None, values=None, parents = None, color=None, title=None, labels=None, ...)
```

- `data_frame`: The Pandas DataFrame containing the hierarchical data for the treemap; can also accept array-like or dictionary inputs, which will be converted to a DataFrame.
- `names`: Specifies the column name, Series, or array-like object used as labels for the rectangles in the treemap.
- `values`: Specifies the column name, Series, or array-like object whose values are used to determine the size of each rectangle.
- `parents`: Specifies the column name, Series, or array-like object used to define the parent-child relationships for the rectangles in the hierarchy.
- `color`: Specifies the column name, Series, or array-like object whose values are used to assign colors to the rectangles.
- `title`: An optional title for the treemap chart.
- `labels`: A dictionary that overrides default column names for axis titles, legend entries, and hover information.

> Note: The ellipsis in the syntax (...) indicates that there are additional optional parameters beyond those listed here to customize the 3D mesh.

## Example 1

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

## Example 2

The following example combines a `Data Frame` with the `.treemap()`:

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

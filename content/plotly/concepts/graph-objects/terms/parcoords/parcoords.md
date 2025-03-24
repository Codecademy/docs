---
Title: '.Parcoords()'
Description: 'Creates a parallel coordinates plot representing multivariate data.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Plotly'
  - 'Graphs'
  - 'Data'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Plotly, the **`.Parcoords()`** function under the [`graph_objects`](https://www.codecademy.com/resources/docs/plotly/graph-objects) module creates a parallel coordinates plot representing multivariate data. Each row of the given dataset is plotted as a polyline between the parallel axes.

## Syntax

```pseudo
plotly.graph_objects.Parcoords(line=None, dimensions=None, ...)
```

- `line`: A dictionary of class properties to be used.
- `dimensions`: A list of dictionaries with class properties to be used.

> **Note:** The ellipsis (...) in the syntax indicates that there are additional optional parameters beyond those listed here to customize the parcoords plot.

## Example

This code creates a parallel coordinates plot using the `.Parcoords()` function:

```py
import plotly.graph_objects as go
import plotly.express as px
import pandas as pd

# Load the Iris dataset
df = px.data.iris()

# Create a parallel coordinates plot
fig = go.Figure(data=
  go.Parcoords(
    line = dict(color = df['species_id'],
                colorscale = [[0, 'gold'], [0.5, 'teal'], [1.0, 'purple']]),
    dimensions = list((
      dict(range = [0,8],
           constraintrange = [4,8],
           label = 'Sepal Length', values = df['sepal_length']),
      dict(range = [0,8],
           label = 'Sepal Width', values = df['sepal_width']),
      dict(range = [0,8],
           label = 'Petal Length', values = df['petal_length']),
      dict(range = [0,8],
           label = 'Petal Width', values = df['petal_width'])
    ))
  )
)

# Display the plot
fig.show()
```

In the above code, the data in the `DataFrame` can be accessed through the `dimensions` class and the lines of the parallel coordinates plot can be adjusted with the `line` class properties.

The above code generates the following output:

![Output for the above code](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-go-parcoords.png)

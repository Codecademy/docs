---
Title: '.Parcoords()'
Description: 'Creates a parallel coordinates plot using the `Parcoords` class of the `graph_objects` module in Plotly'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Plotly'
  - 'Graphs'
  - 'Data'
  - 'Values'
  - 'Parcoords'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
--- 

The **`Parcoords`** class creates a parallel coordinate plot using Plotly's `graph_objects` module. It can be used for the representation of multivariate data. Each row of a given dataset is plotted as a polyline between the parallel axes.

## Syntax

```pseudo
plotly.graph_objects.Parcoords(line=None, dimensions=None, ...)
```

- `line`: A dictionary of class properties to be used.
- `dimensions`: A list of dictionaries with class properties to be used.

> Note: The ellipsis (...) in the syntax indicates that there are additional optional parameters beyond those listed here to customize the parcoords plot.

## Example

This code creates a parallel coordinate plot using Plotly's `Parcoords` class from the `graph_objects` module. As data source the iris dataset is loaded through the Plotly 'express' module into a 'pandas' dataframe first. The data in the dataframe can be accessed through the dimensions class. The lines of the parallel coordinate plot can be adjusted with the line class properties.

```py
import plotly.graph_objects as go
import plotly.express as px
import pandas as pd

df = px.data.iris()

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

fig.show()
```

The above code generates the following output:

![Output from above code](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-go-parcoords.png)

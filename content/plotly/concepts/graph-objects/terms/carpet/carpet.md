---
Title: '.Carpet()
Description: 'Creates a carpet plot in Plotly.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Data'
  - 'Graphs'
  - 'Plotly'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.Carpet()`** is a metheod of graph_objects class which shows the interaction between one or two independent varables and one or more dependent variables in a two-dimensional plot. The carpet plot accurately interpolate data points compared to other plots.

## Syntax

```pseudo
plotly.graph_objects.Carpet(a = None, carpet = None, x = None, y = None, aaxis = None, baxis= None, ...)
```

- `a` : An array containing values of the first parameter.
- `carpet` : An identifier for this carpet, so that scattercarpet and contourcarpet traces can specify a carpet plot on which they lie
- `x` : A two-dimensional array of x-coordinates at each carpet point. If ommitted, the plot is a cheater plot and the x-axis is hidden by default.
- `y` : A two-dimensional array of y-coordinates at each carpet point.
- `aaxis` : plotly.graph_objects.carpet.Aaxis instance or dict with compatible properties
- `baxis` :plotly.graph_objects.carpet.Baxis instance or dict with compatible properties

The three ellipsis indicates more parameters.

## Example

The code below shows a **.Carpet()`** plot indicate the carpet plot below.

```py
import plotly.graph_objects as go

fig = go.Figure(go.Carpet(
    a = [4, 4, 4, 4.5, 4.5, 4.5, 5, 5, 5, 6, 6, 6],
    b = [1, 2, 3, 4,1, 2, 3,4, 1, 2, 3, 4,1, 2, 3, 4],
    y = [2, 3.5, 4, 3, 4.5, 5, 5.5, 6.5, 7.5, 8, 8.5, 10],
    aaxis = dict(
        tickprefix = 'a = ',
        ticksuffix = 'm',
        smoothing = 1,
        minorgridcount = 9,
    ),
    baxis = dict(
        tickprefix = 'b = ',
        ticksuffix = 'pa',
        smoothing = 1,
        minorgridcount = 9,
    )
))

fig.show()
```

The code above generate the following output:

![.Carpet()](https://raw.githubusercontent.com/Codecademy/docs/main/media/carpet.png)

---
Title: '.density_contour()'
Description: 'Creates a 2D density contour plot that shows how data points are concentrated in a two-dimensional space.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Plotly'
  - 'Python'
CatalogContent:
  - 'learn-plotly'
  - 'paths/data-analysis'
---

The **`.density_contour()`** function in Plotly Express creates a contour plot that visualizes the density of data points in a two-dimensional space. It highlights regions where points cluster, helping to reveal patterns within the data.

## Syntax

```pseudo
plotly.express.density_contour(
  data_frame=None,
  x=None,
  y=None,
  z=None,
  color=None,
  facet_row=None,
  facet_col=None,
  facet_col_wrap=None,
  marginal=None,
  trendline=None,
  histfunc=None,
  histnorm=None,
  cumulative=None,
  nbinsx=None,
  nbinsy=None,
  range_x=None,
  range_y=None,
  labels=None,
  title=None,
  template=None,
  width=None,
  height=None,
  **kwargs
)
```

| **Parameter**            | **Description**                                                                        |
| ------------------------ | -------------------------------------------------------------------------------------- |
| `data_frame`             | A DataFrame or array-like object containing the data.                                  |
| `x`, `y`, `z`            | Columns from `data_frame` (or array-like object) for the x, y, and z axes.             |
| `color`                  | Sets the color for contours based on a variable or value.                              |
| `facet_row`, `facet_col` | Splits the figure into subplots along rows or columns based on a categorical variable. |
| `nbinsx`, `nbinsy`       | Number of bins along the x and y axes, which control the contour resolution.           |
| `range_x`, `range_y`     | Helps manually set the range for the x and y axes.                                     |
| `labels`                 | Customizes axis labels and legend entries.                                             |
| `title`                  | Specifies a title for the figure.                                                      |
| `template`               | Applies a predefined figure template (e.g., `"plotly"`, `"ggplot2"`, or `"seaborn"`).  |
| `width`, `height`        | Sets the figure's width and height in pixels.                                          |
| `**kwargs`               | Additional keyword arguments to further modify the plot's appearance or behavior.      |

## Example

The example below creates a 2D density contour plot using randomly generated data:

```python
import plotly.express as px
import numpy as np
import pandas as pd

# Generate random data
np.random.seed(42)
df = pd.DataFrame({
  "x": np.random.randn(500),
  "y": np.random.randn(500)
})

# Create a 2D density contour plot
fig = px.density_contour(
  data_frame=df,
  x="x",
  y="y",
  nbinsx=30,
  nbinsy=30,
  title="2D Density Contour Plot"
)

fig.show()
```

This code generates a contour plot that illustrates the density of data points across a two-dimensional space. Here's what the output looks like:

![The output for the above example](https://raw.githubusercontent.com/Codecademy/docs/main/media/2D-Density-Contour-Plot.png)

---
Title: '.Histogram2dContour()'
Description: 'Creates 2D histograms with contours for visualizing density distributions in data.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Data'
  - 'Data Structures'
  - 'Plotly'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.Histogram2dContour()`** method in Plotly's `graph_objects` module creates a 2D histogram with contour lines to visualize the joint distribution of two variables. It uses a grid where color intensity represents the count or aggregated values within each cell, while the contour lines indicate regions of equal density. This method helps visualize relationships and density in bivariate data, helping to uncover patterns and trends.

## Syntax

```pseudo
plotly.graph_objects.Histogram2dContour(x=None, y=None, nbinsx=None, nbinsy=None, colorscale=None, contours=None, ...)
```

- `x`: Input data for the x-axis.
- `y`: Input data for the y-axis.
- `nbinsx` (Optional): The number of bins (intervals) used to divide the x-axis range. If not specified (`None`), Plotly automatically calculates an appropriate number of bins based on the data.
- `nbinsy` (Optional): The number of bins (intervals) used to divide the y-axis range on the data.
- `colorscale` (Optional): Defines the color scale for heatmap.
- `contours` (Optional): Configuration for contour lines (e.g., `levels`, `start`, `end`, `size`).

> **Note**: To personalize the scatter plot on polar axes, there are more possible options than those mentioned above, as indicated by the ellipsis in the syntax (...).

## Example

The following example showcases the use of the `.Histogram2dContour()`:

```py
import plotly.graph_objects as go

# Sample data
x = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
y = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

# Create the histogram with contours
fig = go.Figure(
  go.Histogram2dContour(
    x=x,
    y=y,
    nbinsx=5,
    nbinsy=5,
    colorscale='Viridis',
    contours=dict(start=0, end=4, size=1)
  )
)

# Show the figure
fig.show()
```

The example demonstrates how to use `.Histogram2dContour()` to create a two-dimensional histogram that includes contour lines which are used to visualize the joint distribution between two variables.

The above code generates the following output:

![Histogram2dContour in Plotly](https://raw.githubusercontent.com/Codecademy/docs/main/media/histogram2dcontour-example.png)

---
Title: '.density_heatmap()'
Description: 'Creates a 2D histogram-based heatmap that visualizes the density of points in a dataset using color intensity.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Data'
  - 'Graphs'
  - 'Libraries'
  - 'Plotly'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.density_heatmap()`** function generates a heatmap where color intensity represents the concentration of data points in each bin. It is useful for visualizing relationships between two variables in large datasets, identifying patterns, clusters, and outliers. The function automatically bins data along both axes and uses color to indicate the count or density within each bin.

## Syntax

```pseudo
px.density_heatmap(data_frame=None, x=None, y=None, nbinsx=None, nbinsy=None, color_continuous_scale=None, ...)
```

- `data_frame`: DataFrame or array-like object containing the data
- `x`: Column name or array for the x-axis
- `y`: Column name or array for the y-axis
- `nbinsx`: Number of bins along the x-axis for grouping data
- `nbinsy`: Number of bins along the y-axis for grouping data
- `color_continuous_scale`: Color scale used for the heatmap

> **Note:** The ellipsis (`...`) indicates that there can be additional optional parameters beyond those listed here.

## Example

The following code creates a density heatmap showing the relationship between sepal width and length in the iris dataset. The intensity of color represents how many data points fall within each bin, making it easy to identify where measurements are most concentrated:

```py
import plotly.express as px

# Load the built-in iris dataset
df = px.data.iris()

# Create a basic density heatmap
fig = px.density_heatmap(
  df,
  x="sepal_width",
  y="sepal_length",
  color_continuous_scale="Viridis",
  nbinsx=15,
  nbinsy=15,
  title="Sepal Width vs Length Density"
)

# Update layout for better readability
fig.update_layout(
  xaxis_title="Sepal Width (cm)",
  yaxis_title="Sepal Length (cm)",
  coloraxis_colorbar_title="Count"
)

fig.show()
```

The above code results in the following output:

![The output for the above code](https://raw.githubusercontent.com/Codecademy/docs/main/media/density_heatmap_1.png)

---
Title: 'graph_objects.Figure()'
Description: 'Creates and manipulates figures in Plotly.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Plotly'
  - 'Graphs'
  - 'Data'
  - 'Visualization'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`graph_objects.Figure()`** class in [Plotly](https://www.codecademy.com/resources/docs/plotly) is used to create and manipulate figures. It provides a high-level interface for creating complex visualizations.

## Syntax

```pseudo
plotly.graph_objects.Figure(data=None, layout=None, frames=None)
```

- `data`: A list or tuple of trace instances (e.g., [Scatter(...), Bar(...)]).
- `layout`: An instance of plotly.graph_objects.Layout or a dictionary of layout properties.
- `frames`: A list of frames, each frame being a dictionary of properties.

## Example

The following example showcases the use of the `.Figure()` function:

```py
import plotly.graph_objects as go

years = [2019, 2020, 2021, 2022, 2023]
inflation_rates = [2.21, 1.94, 3.47, 7.97, 5.41]

data = [go.Scatter(x=years, y=inflation_rates, mode='lines+markers', name='Inflation Rate')]

layout = go.Layout(
    title='Global Inflation Over the Last 5 Years',
    xaxis_title='Year',
    yaxis_title='Inflation Rate (%)',
    template='plotly_dark'
)

frames = [go.Frame(data=[go.Scatter(x=years[:k+1], y=inflation_rates[:k+1])]) for k in range(len(years))]

fig = go.Figure(data=data, layout=layout, frames=frames)

fig.show()
```

This example creates a graph representing the inflation for the last five years, creating the values for data, layout and frames before given them to `Figure()`.

The above code generates the following code

![Example for Figure() on Plotly output](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly_figure_example.png)
---
Title: '.Figure()'
Description: 'Creates and manipulates figures in Plotly.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Data'
  - 'Graphs'
  - 'Plotly'
  - 'Visualization'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.Figure()`** class in [Plotly](https://www.codecademy.com/resources/docs/plotly) is used to create and manipulate figures. It provides a high-level interface for creating complex visualizations.

## Syntax

```pseudo
plotly.graph_objects.Figure(data=None, layout=None, frames=None, skip_invalid=False, **kwargs)
```

- `data`: List of trace objects defining the visual data (e.g., go.Scatter).
- `layout`: Layout object or dictionary for customizing figure appearance (e.g., titles, axes).
- `frames`: List of frame objects used for creating animations within the figure.
- `skip_invalid`: Boolean to skip invalid properties without raising errors.
- `**kwargs`: Additional keyword arguments for further customization of the figure.

## Example

The following example showcases the use of `.Figure()`:

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

This example creates a line graph representing global inflation rates over the past five years. It defines `data` for the plot, `layout` for appearance settings, and `frames` for animation steps before passing them to the `Figure()` class to generate the visualization.

The above code generates the following code

![Example for Figure() on Plotly output](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly_figure_example.png)

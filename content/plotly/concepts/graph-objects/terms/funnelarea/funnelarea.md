---
Title: '.Funnelarea()'
Description: 'Creates a funnel area chart where section sizes are proportional to given values.'
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

The **`.Funnelarea()`** function in Plotly is used to create funnel area charts, which visualize hierarchical data or proportions in a descending or ascending order. Unlike a standard funnel chart, the area of each section represents a quantitative value, making it useful for visualizing sales pipelines, user conversion rates, and process flow analysis.

## Syntax

```pseudo
import plotly.graph_objects as go

go.Funnelarea(values=values, text=labels, ...)
```

- `values` (list/array): Numerical values determining the area of each section.
- `text` (list, optional): Labels corresponding to each funnel section.

> **Note**: The ellipsis in the syntax (`...`) indicates that there are additional optional parameters beyond those listed here to customize the funnel area charts.

## Example

The following example demonstrates a simple funnel area chart representing a sales funnel.

```py
import plotly.graph_objects as go

fig = go.Figure(go.Funnelarea(
    values=[100, 80, 60, 40, 20],
    text=["Visitors", "Sign-ups", "Trials", "Paid Users", "Retained Users"]
))

fig.update_layout(title="User Conversion Funnel")
fig.show()
```

The output will be an interactive funnel area chart where each section represents a stage in a hierarchical process, such as a sales funnel or user conversion flow. The size of each section is proportional to its value, making it easy to compare different stages visually.

![The output will be an interactive funnel area chart where each labeled section visually represents the relative size of each stage in the funnel.](https://raw.githubusercontent.com/Codecademy/docs/main/media/funnelarea-example.png)

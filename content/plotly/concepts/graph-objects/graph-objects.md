---
Title: 'Graph Objects'
Description: 'Classes in the Plotly library are used for creating and manipulating complex plots and visualizations.'
Subjects:
  - 'Data Visualization'
  - 'Data Science'
Tags:
  - 'Plotly'
  - 'Graph Objects'
  - 'Data Science'
  - 'Classes'
CatalogContent:
- 'learn-python-3'
- 'paths/computer-science'
- 'paths/data-science'
- 'paths/data-science-foundations'
---

In Python, the **`graph_objects`** module in Plotly is used for creating and manipulating complex plots and visualizations. It provides a structured way to build a wide variety of plot types using a declarative syntax.

## Key Features
- **Object-Oriented Approach**: Allows for detailed customization and fine-grained control over plot attributes.
- **Composability**: Different plot types and layout elements can be composed together to create intricate and layered visualizations.
- **Interactivity**: Plots created with `graph_objects` are interactive, allowing for features such as zooming, panning, and tooltips.
- **Integration**: Works seamlessly with various data sources and can be integrated into web applications using frameworks like Dash.

##  Use `graph_objects' for
 - 3D trace types like mesh or isosurface 
 - Subplots of different types, dual-axis plots
 - Faceted plots with multiple different types of traces

## Core Components
- Figures
- Traces
- Layout
## Figures
The central object in `graph_objects` is the `Figure`, which contains both data (traces) and layout.
## Example
```py
import plotly.graph_objects as go

fig = go.Figure(data=[go.Scatter(x=[1, 2, 3], y=[4, 5, 6])])
fig.show()
```

## Traces
Traces are objects that represent individual visual elements in a plot (e.g., lines, bars, markers).
## Example
```py
scatter = go.Scatter(x=[1, 2, 3], y=[4, 5, 6])
fig.add_trace(scatter)
```

## Layout
The layout defines the appearance of the plot, including titles, axes, and annotations.
## Example
```py
fig.update_layout(title='Sample Plot', xaxis_title='X Axis', yaxis_title='Y Axis')
```

## Elaborate Example
Here's an elaborate example demonstrating how to create a line chart with customized layout and multiple traces:
```py
import plotly.graph_objects as go

# Create traces
trace1 = go.Scatter(x=[1, 2, 3], y=[10, 15, 13], mode='lines', name='Line 1')
trace2 = go.Scatter(x=[1, 2, 3], y=[16, 5, 11], mode='lines+markers', name='Line 2')

# Create the figure and add traces
fig = go.Figure()
fig.add_trace(trace1)
fig.add_trace(trace2)

# Update layout
fig.update_layout(
    title='Example Line Chart',
    xaxis_title='X Axis Title',
    yaxis_title='Y Axis Title'
)

# Display the figure
fig.show()
```

## Official Documentation
For more detailed information, examples, and tutorials, visit the official Plotly Graph Objects documentation: [Graph Objects in Python](https://plotly.com/python/graph-objects/)
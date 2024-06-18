---
Title: 'graph_objects'
Description: 'Creates and customizes interactive plots by defining data and layout attributes.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Graphs'
  - 'Modules'
  - 'Plotly'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

In Python, the **`graph_objects`** module in Plotly is used for creating and manipulating complex plots and visualizations. It provides a structured way to build a wide variety of plot types using a declarative syntax. The core components of Plotly's graph_objects module are:

1. Figures: Represent the entire visualization, including data, layout, and styling.
2. Traces: Define individual data sets and their properties (like markers, lines, etc.) within the figure.
3. Layouts: Control the overall appearance and arrangement of the visualization, including axes, titles, annotations, and more.

## Key Features
- Object-Oriented Approach**: Allows for detailed customization and fine-grained control over plot attributes.
- Composability: Different plot types and layout elements can be composed together to create intricate and layered visualizations.
- Interactivity: Plots created with `graph_objects` are interactive, allowing for features such as zooming, panning, and tooltips.
- Integration: Works seamlessly with various data sources and can be integrated into web applications using frameworks like Dash.

##  Applications of `graph_objects`:
 - Creating 3D trace types like mesh or isosurface.
 - Generating subplots of different types and dual-axis plots.
 - Faceting plots with multiple different types of traces.

## Syntax

```pseudo
import plotly.graph_objects as go
```

The `go` is an alias commonly used to refer to the graph_objects module.

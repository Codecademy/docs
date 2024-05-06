---
Title: 'Plotly'
Description: 'Plotly is a Python library for creating interactive visualizations and charts.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Data'
  - 'Graphs'
  - 'Libraries'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**`Plotly`** is a Python library for interactive charts and graphics, offering a variety of visualization options like `line graphs`, `bar charts`, `heatmaps`, and `scatter plots`.

## Installation

The guidelines for installing the Plotly library can be found [here](https://plotly.com/python/getting-started/). The official release of plotly can be installed with [pip](https://www.codecademy.com/resources/docs/python/pip):

The descriptions of the Plotly modules are shown below:

### plotly.express

The `plotly.express` module, usually imported as `px`, provides an easy way of creating different types of figures. Offers over 30 functions for creating various types of plots and they are intended to be straightforward and easy to learn. In essence, plotly express simplifies the creation of interactive and visually appealing plots in Python such as `bar charts`, `histograms`, `line graphs`, and more. 

### plotly.graph_objects

The `plotly.graph_objects` module, often imported as `go`, contains objects like `Figure`, `layout`, and data that define the plots, e.g. `line charts` and `scatter plots`. `plotly.express` uses this module internally, however, `plotly.graph_objects` offers a finer degree of control over the visualization.

### plotly.figure_factory

The `plotly.figure_factory` module, commonly imported as `ff`, contains specialized functions to create special types of graphs that are difficult to create using the standard `plotly.graph_objects` or `plotly.express`, such as `dendrograms`, `quiver plots`, `hexagonal binning`, `tile maps`, `streamline plots`, and others.
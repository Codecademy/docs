---
Title: 'Python:Plotly'
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

**Plotly** is a Python library for creating interactive visualizations and charts, offering a variety of visualization options like _line graphs_, _bar charts_, _heatmaps_, and _scatter plots_.

## Installation

The official release of Plotly can be installed with [pip](https://www.codecademy.com/resources/docs/python/pip). The guidelines for installing it can be found [here](https://plotly.com/python/getting-started/).

Plotly comprises several modules, each serving distinct purposes within the realm of data visualization.

### Plotly Express

The `plotly.express` module, typically imported as `px`, provides an easy way to create various types of figures. It offers over 30 functions for generating different plot types, such as bar charts, line graphs, _histograms_, and more. These functions are designed to be straightforward and easy to learn, simplifying the creation of interactive and visually appealing plots in Python.

### Plotly Graph Objects

The `plotly.graph_objects` module, commonly imported as `go`, includes objects like `Figure`, `layout`, and `data` that define plots such as line charts and scatter plots. While `plotly.express` internally uses this module, `plotly.graph_objects` provides a higher degree of control over visualization elements.

### Plotly Figure Factory

The `plotly.figure_factory` module, often imported as `ff`, features specialized functions for creating complex graphs that may be challenging to build using `plotly.express` or `plotly.graph_objects` modules. Examples of such graphs include _dendrograms_, _quiver plots_, _hexagonal binning_, _tile maps_, _streamline plots_, and others.

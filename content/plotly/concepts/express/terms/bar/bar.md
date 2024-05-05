---
Title: '.bar()'
Description: 'Generates a chart representing categorical data with vertical bars.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Data'
  - 'Graphs'
  - 'Libraries'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.bar()`** method in Plotly is part of the Plotly Express high-level interface to Plotly. It generates charts representing categorical data with vertical bars. 

## Syntax

```pseudo
plotly.express.bar(x, y, labels, title, width, height, ...)
```
The parameters are:

- x: String, integer, series or array-like designating the x-axis data.
- y: String, integer, series or array-like designating the y-axis data.
- labels: Dictionary of string keys and string values designating the labels for the axis titles, etc. 
- title: String designating the chart title.
- width: Integer designating the chart width in pixels.
- height: Integer designating the chart height in pixels.

> **Note:** The ellipsis (...) indicates that there can be additional optional parameters beyond those listed here.

## Example

Below is an example demonstrating how to use the `.bar()` method to create a simple bar chart visualizing the values of items in categories a, b, c and d:

```python
import plotly.express as px
fig = px.bar(x=['a', 'b', 'c', 'd'], y=[1, 2, 3, 4], labels={'x':'Category', 'y':'Count'}, title='Simple Bar Chart', height=500, width=250)
fig.show()
```

Output:

![Output of ploltly.express.bar() method example](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-bar-example.png)
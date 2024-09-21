---
Title: '.bar()'
Description: 'Generates a chart representing categorical data with vertical bars.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data'
  - 'Graphs'
  - 'Libraries'
  - 'Methods'
  - 'Plotly'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

In Plotly, the **`.bar()`** method is part of the high-level interface named `plotly.express`. It generates charts representing categorical data with vertical bars.

## Syntax

```pseudo
plotly.express.bar(x, y, labels, title, width, height, ...)
```

- `x`: A string, integer, series, or array-like object designating the x-axis data.
- `y`: A string, integer, series, or array-like object designating the y-axis data.
- `labels`: A dictionary used for customizing labels, including column names, axis titles, hover labels, and legend entries.
- `title`: A string designating the chart title.
- `width`: An integer designating the chart width in pixels.
- `height`: An integer designating the chart height in pixels.

> **Note:** The ellipsis (...) indicates that there can be additional optional parameters beyond those listed here.

## Example

Below is an example demonstrating how to use the `.bar()` method to create a simple bar chart visualizing the values of items in categories `a`, `b`, `c`, and `d`:

```py
import plotly.express as px
fig = px.bar(x=['a', 'b', 'c', 'd'], y=[1, 2, 3, 4], labels={'x':'Category', 'y':'Count'}, title='Simple Bar Chart', height=500, width=250)
fig.show()
```

The above code produces the following output:

![Output for the above example](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-bar-example.png)

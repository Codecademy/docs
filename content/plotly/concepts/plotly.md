---
Title: 'Plotly'
Description: 'A Python data visualization library for creating interactive charts and graphics.'
Subjects:
  - 'Data Visualization'
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Graphs'
  - 'Data'
  - 'Libraries'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Plotly** is a Python data visualization library for creating interactive charts and graphics. Provides a variety of options for creating amazing visualizations, including line and bar graphs, heat maps or scatter plots.

## Sintax

A general sintax for any kind of graph is as follow:

```pseudo
# Import the Plotly librarie
import plotly.graph_objects as go

# Define the data for the graph
x_data = [...]  # List of x-axis values
y_data = [...]  # List of y-axis values

# Create the graph object
fig = go.Figure(...) # parameters depend of the kind of graph

# Add tags and title
fig.update_layout(
    title='Graph title',
    xaxis_title='X-axis Label',
    yaxis_title='Y-axis Label'
)

# Display the graph
fig.show()

```

> **Note:** The ellipsis (...) indicates that there are values and parameters to be filled in.

## Subsection 2

[Text about subsection 2]

## Subsection n

[Text about subsection n]

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```
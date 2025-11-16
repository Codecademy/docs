---
Title: '.plot()'
Description: 'Creates line and marker plots to visualize relationships between variables in Matplotlib.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Charts'
  - 'Matplotlib'
  - 'Methods'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **`.plot()`** function in Matplotlib is the primary method used to create line plots and marker plots. It takes one or two sets of data points (x and y coordinates) and draws lines connecting them, displays markers at each point, or both. This function is one of the most commonly used tools in data visualization for showing trends, patterns, and relationships between variables.

Line plots are ideal for illustrating how data changes over time or across continuous intervals. They’re widely used in fields such as statistics, engineering, and data science for exploratory data analysis and model visualization.

## Syntax

```pseudo
matplotlib.pyplot.plot(x, y, fmt='', data=None, **kwargs)
```

**Parameters:**

- `x`: Sequence of x-axis coordinates.
- `y`: Sequence of y-axis coordinates.
- `fmt`: (Optional) A format string defining line style, marker, and color (e.g., 'ro--' for red circles with a dashed line).
- `data`: (Optional) DataFrame or dict from which variables are extracted.
- `**kwargs`: Additional keyword arguments for customization, such as color, linewidth, marker, or label.

**Return value:**

Returns a list of `Line2D` objects representing the plotted data.

## Example: Creating a Basic Line Plot

This example demonstrates how to create a simple line plot with plt.plot() to visualize the relationship between two numerical variables:

```py
import matplotlib.pyplot as plt
import numpy as np

# Sample data
x = np.array([1, 2, 3, 4, 5])
y = np.array([2, 4, 1, 6, 3])

# Create a line plot
plt.plot(x, y)

# Add labels and a title
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Basic Line Plot Example')

# Add a grid for better readability
plt.grid(True, linestyle='--', alpha=0.6)

# Display the plot
plt.show()
```

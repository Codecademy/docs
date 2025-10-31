---
Title: '.fill()'
Description: 'Fills the area enclosed by specified x and y coordinates to create a filled polygon on the plot.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Graphs'
  - 'Libraries'
  - 'Matplotlib'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.fill()`** function in Matplotlib fills the area enclosed by specified x and y coordinates with color. It’s often used to highlight or emphasize regions defined by one or more polygons on a plot.

## Syntax

```pseudo
matplotlib.pyplot.fill(*args, data=None, **kwargs)
```

**Parameters:**

- `*args`: One or more pairs of x and y coordinates defining the polygons to fill.
- `data`: An object (like a DataFrame or dict) that provides named variables for `x` and `y`.
- `**kwargs`: Additional keyword arguments controlling the fill style, such as:
  - `color` or `facecolor`: Fill color.
  - `edgecolor`: Color of the polygon edge.
  - `linewidth`: Width of polygon edges.
  - `alpha`: Transparency level (0.0 to 1.0).
  - Any other valid `Polygon` properties.

**Return value:**

Returns a list of `matplotlib.patches.Polygon` objects representing the filled regions.

## Example 1: Filling a Rectangle Shape

This example fills the area enclosed by a rectangle:

```py
import matplotlib.pyplot as plt

x = [0, 3, 3, 0]
y = [0, 0, 3, 3]

plt.fill(x, y, color='green', alpha=0.75)
plt.title('Filled Rectangle')
plt.show()
```

The output of this code is:

![Output of the first matplotlib.pyplot.fill() method example](https://raw.githubusercontent.com/Codecademy/docs/main/media/first-pyplot-fill.png)

## Example 2: Filling Custom Polygon Shapes

This example fills two different polygons using custom edge and fill colors:

```py
import matplotlib.pyplot as plt

# Polygon 1
a = [0, 1, 2, 1]
b = [0, 2, 0, -2]
plt.fill(a, b, color='skyblue', edgecolor='red', linewidth=2)

# Polygon 2
m = [0, 0, 3, 3]
n = [0, 3, 0, 3]
plt.fill(m, n, color='pink', alpha=0.6)

plt.title('Custom Filled Polygons')
plt.show()
```

The output of this code is:

![Output of the second matplotlib.pyplot.fill() method example](https://raw.githubusercontent.com/Codecademy/docs/main/media/second-pyplot-fill.png)

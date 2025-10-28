---
Title: '.fill()'
Description: 'Returns a chart/graph that has the area of the polygon filled.'
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

The **`.fill()`** function is used to fill the area enclosed by a polygon using a color. This function can be particularly useful to highlight the different areas enclosed by the various polygons.

## Syntax

```pseudo
matplotlib.pyplot.fill(args, data=None, **kwargs)
```

- `args`: contains the coordinates of the polygon and the color. If the color is not mentioned, the default color will be used.
- `data`: used to provide label names.
- `kwargs`: used to define the polygon properties such as width, color, border, fill pattern etc.

## Example

This example code shows an area enclosed by an polygon filled with a color

```py
import matplotlib.pyplot as plt

#Define the points of the polygon
x = [0, 3, 3, 0]
y = [0, 0, 3, 3]

#Fill the area enclosed by the rectangle with green color and oquacity of 0.75
plt.fill(x, y, color='green', alpha= 0.75)
plt.show()


a = [0, 1, 2, 1]
b = [0, 2, 0, -2]

plt.fill(a, b, color='skyblue', edgecolor='red')
plt.show()

m = [0, 0, 3, 3]
n = [0, 3, 0, 3]

plt.fill(m, n, color='pink')
plt.show()
```

Output:

![Output of the first matplotlib.pyplot.fill() method example](https://raw.githubusercontent.com/Codecademy/docs/main/media/first-pyplot-fill.png)
![Output of the second matplotlib.pyplot.fill() method example](https://raw.githubusercontent.com/Codecademy/docs/main/media/second-pyplot-fill.png)
![Output of the third matplotlib.pyplot.fill() method example](https://raw.githubusercontent.com/Codecademy/docs/main/media/third-pyplot-fill.png)

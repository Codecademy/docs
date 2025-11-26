---
Title: 'fill_between()'
Description: 'Fills the area between two curves or between a curve and a baseline in a plot.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Graphs'
  - 'Libraries'
  - 'Matplotlib'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`fill_between()`** function in Matplotlib's `pyplot` module creates a shaded region between two curves or between a curve and a baseline. It is commonly used to visualize ranges, confidence intervals, thresholds, and differences between datasets.

## Syntax

```pseudo
matplotlib.pyplot.fill_between(x, y1, y2=0, where=None, **kwargs)
```

**Parameters:**

- `x`: Sequence of x-coordinates.
- `y1`: First set of y-values.
- `y2` (optional): Second set of y-values. Defaults to `0`, creating a fill between the curve and the x-axis.
- `where` (optional): A boolean mask that controls where to fill.
- `**kwargs`: Additional styling options such as `color`, `alpha`, or `label`.

**Return value:**

Returns a `PolyCollection` object that represents the shaded region.

## Example

The example below shows how to fill the area between a curve and the x-axis:

```py
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 200)
y = np.sin(x)

plt.plot(x, y)
plt.fill_between(x, y, 0, alpha=0.3)

plt.title("Filled Area Under Sine Curve")
plt.show()
```

The output of this code is:

![]()

## Example

This example fills the area between two curves:

```py
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 5, 100)
y1 = x
y2 = x**2

plt.plot(x, y1, label="y = x")
plt.plot(x, y2, label="y = x^2")

plt.fill_between(x, y1, y2, alpha=0.3)

plt.legend()
plt.show()
```

![]()

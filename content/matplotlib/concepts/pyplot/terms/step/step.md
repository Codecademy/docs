---
Title: 'step()'
Description: 'Draws step plots where y-values change at discrete x-positions.'
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

**`step()`** creates a piecewise-constant (step) plot from 1-D data. Each sample in `y` is represented as a horizontal segment and adjacent samples are connected by vertical lines. The `where` parameter controls whether the step change happens before, after, or at the midpoint of the x-coordinate.

## Syntax

```pseudo
matplotlib.pyplot.step(x, y, *args, where='pre', **kwargs)
```

**Parameters:**

- `x` (array-like): 1-D sequence of x positions. It is assumed (but not enforced) that `x` is increasing.
- `y` (array-like): Sequence of y-values. Must have the same length as `x`.
- `*args`: positional arguments forwarded to `plot()` (for example a format string such as `'o-'`).
- `where` ({ `'pre'`, `'post'`, `'mid'` }, optional) — controls the placement of the steps:
  - `'pre'` (default): the y value is constant to the left of each x position; the interval `(x[i-1], x[i]]` has value `y[i]`.
  - `'post'`: the y value is constant to the right of each x position; the interval `[x[i], x[i+1])` has value `y[i]`.
  - `'mid'`: each step is centered between neighbors; level changes occur at midpoints between successive x values.
- `**kwargs`: any other keyword arguments accepted by `matplotlib.pyplot.plot`, such as `label`, `linewidth`, `linestyle`, `alpha`, etc.

**Returns:**

A list of `matplotlib.lines.Line2D` objects representing the plotted steps.

> **Notes:**
> - Use `plt.stairs()` if you have explicit step edges (left/right boundaries) rather than sample positions.
> - `step()` is a thin wrapper around `plot()` and supports most `plot` formatting options.

## Example

The example below draws three three-step series using `where='pre'`, `where='mid'`, and `where='post'`.

```py
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 5, 6)
y = np.array([0, 1, 0, 1, 0, 1])

plt.figure(figsize=(6, 3))
plt.step(x, y + 2, where='pre', label="pre")
plt.step(x, y + 1, where='mid', label="mid")
plt.step(x, y + 0, where='post', label="post")

plt.ylim(-0.5, 3.5)
plt.xlabel('x')
plt.ylabel('y')
plt.title('Example: matplotlib.pyplot.step')
plt.legend()
plt.grid(True)

plt.show()
```

The output of this code will be:

![Step plot example](https://raw.githubusercontent.com/Codecademy/docs/main/media/pyplot-step-example.png)

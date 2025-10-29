---
Title: '.axis()'
Description: 'Gets or sets the properties of the plot axes, including axis limits, scaling, and visibility.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Data'
  - 'Graphs'
  - 'Libraries'
  - 'Matplotlib'
  - 'Plotting'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.axis()`** function in Matplotlib's `pyplot` module gets or sets properties of the plot axes, including axis limits, aspect ratio, and visibility.

## Syntax

```pseudo
matplotlib.pyplot.axis(arg=None, emit=True, **kwargs)
```

The function can be called in several ways:

- `axis()`: Returns current axis limits as `(xmin, xmax, ymin, ymax)`
- `axis([xmin, xmax, ymin, ymax])`: Sets axis limits
- `axis(option)`: Sets axis properties using predefined options
- `axis(**kwargs)`: Sets axis properties using keyword arguments

**Parameters:**

- `arg` (optional): Defines how the axes are set or displayed. Accepts the following values:
  - A list or tuple `[xmin, xmax, ymin, ymax]` to set axis limits.
  - `'off'` to hide the axes.
  - `'on'` to show the axes.
  - `'equal'`, `'scaled'`, `'tight'`, `'auto'`, `'image'`, `'square'` — control axis scaling and aspect ratio.
- `emit` (bool, default: True): If `True`, notifies observers of axis limit changes.
- `kwargs` (optional): Additional axis properties such as `xmin`, `xmax`, `ymin`, and `ymax`.

**Return value:**

Returns a tuple `(xmin, xmax, ymin, ymax)` representing the current axis limits.

## Example 1: Using `.axis()` to Control Axis Properties

This example creates three subplots demonstrating different axis control modes. The first subplot uses `axis([2, 8, -0.5, 0.5])` to restrict the view to specific x and y ranges. The second subplot uses `axis('equal')` to ensure both axes use the same scale. The third subplot uses `axis('off')` to hide the axis lines, ticks, and labels:

```py
import matplotlib.pyplot as plt
import numpy as np

# Generate sample data
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Create a basic plot
plt.figure(figsize=(10, 4))

# Subplot 1: Custom axis limits
plt.subplot(1, 3, 1)
plt.plot(x, y)
plt.axis([2, 8, -0.5, 0.5])
plt.title('Custom Limits')
plt.grid(True, alpha=0.3)

# Subplot 2: Equal aspect ratio
plt.subplot(1, 3, 2)
plt.plot(x, y)
plt.axis('equal')
plt.title('Equal Scaling')
plt.grid(True, alpha=0.3)

# Subplot 3: Axis turned off
plt.subplot(1, 3, 3)
plt.plot(x, y)
plt.axis('off')
plt.title('Hidden Axes')

plt.tight_layout()
plt.show()
```

The output of this code is:

![Output of matplotlib.pyplot.axis() method example 1](https://raw.githubusercontent.com/Codecademy/docs/main/media/matplotlib-axis-example1.png)

## Example 2: Getting and Setting Axis Limits

This example demonstrates how to set custom axis limits and retrieve the current limits. The `axis()` function is called with a list of four values to set the x and y axis ranges, then called without arguments to return the current limits as a tuple.

```py
import matplotlib.pyplot as plt
import numpy as np

# Create data
x = np.linspace(0, 2*np.pi, 100)
y = np.sin(x)

# Create plot
plt.plot(x, y, linewidth=2)
plt.title('Sine Wave with Custom Axes')

# Set custom axis limits
plt.axis([0, 2*np.pi, -1.5, 1.5])

# Get and print current axis limits
limits = plt.axis()
print(f"Current axis limits: {limits}")

plt.grid(True, alpha=0.3)
plt.show()
```

The output of this code is:

![Output of matplotlib.pyplot.axis() method example 2](https://raw.githubusercontent.com/Codecademy/docs/main/media/matplotlib-axis-example2.png)

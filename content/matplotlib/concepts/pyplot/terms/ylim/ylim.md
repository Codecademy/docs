---
Title: 'ylim()'
Description: 'Sets or retrieves the y-axis limits of the current plot.'
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

The **`ylim()`** function in Matplotlib's `pyplot` module sets or retrieves the y-axis limits (minimum and maximum values) of the current plot. This function is essential for controlling the vertical range of data displayed in visualizations, allowing for better focus on specific data ranges or standardized comparisons across multiple plots.

## Syntax

```pseudo
plt.ylim(bottom, top)
```

Or, to get current limits:

```pseudo
bottom, top = plt.ylim()
```

**Parameters:**

- `bottom` (optional): A float representing the lower y-axis limit. If not provided, the current lower limit is returned.
- `top` (optional): A float representing the upper y-axis limit. If not provided, the current upper limit is returned.

**Return value:**

The function returns:

- A tuple `(bottom, top)` containing the current y-axis limits if no arguments are provided.
- The new y-axis limits as a tuple if arguments are provided.

## Example 1: Setting Y-Axis Limits

The following example demonstrates how to use `ylim()` to set y-axis limits:

```py
import matplotlib.pyplot as plt
import numpy as np

# Generate sample data
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Create plot
plt.plot(x, y)
plt.ylim(-2, 2)  # Set y-axis limits
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Sine Wave with Custom Y-axis Limits')
plt.grid(True)
plt.show()
```

This code produces a sine wave plot with y-axis limits set from `-2` to `2`, providing extra vertical space above and below the sine wave values:

![Sine wave plot with y-limits from -2 to 2](https://raw.githubusercontent.com/Codecademy/docs/main/media/matplotlib-pyplot-ylim-example-1.png)

## Example 2: Retrieving Current Limits

The following example shows how to retrieve and modify existing y-axis limits:

```py
import matplotlib.pyplot as plt
import numpy as np

# Create sample data
x = np.arange(0, 10, 0.1)
y = x ** 2

# Plot data
plt.plot(x, y)

# Get current y-axis limits
current_bottom, current_top = plt.ylim()

# Expand the limits by 20%
range_y = current_top - current_bottom
plt.ylim(current_bottom - 0.2 * range_y, current_top + 0.2 * range_y)

plt.xlabel('X values')
plt.ylabel('Y values')
plt.title('Quadratic Function with Expanded Y-axis')
plt.show()
```

This example retrieves the automatically calculated y-axis limits and expands them by 20% on both sides, providing more whitespace around the data:

![Quadratic function with expanded y-axis](https://raw.githubusercontent.com/Codecademy/docs/main/media/matplotlib-pyplot-ylim-example-2.png)

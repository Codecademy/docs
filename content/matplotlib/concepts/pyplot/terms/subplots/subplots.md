---
Title: '.subplots()'
Description: It create a figure and a set of subplots. This function makes it easy to generate layouts of subplots, including the enclosing figure object.
Subjects:
  -  'Data Science'
  -  'Data Visualization'
  -  'Data Analytics'
Tags:
  -  'Graphs'
  -  'Libraries'
  -  'Matplotlib'
CatalogContent:
  -  'learn-python-3'
  -  'visualize-data-with-python'
  -  'machine-learning'
---

The **'pyplot.subplots()'** function returns:

- fig: _Figure_

- ax: _ax_ can be either a signe Axes object, or an array of Axes objects if more than one subplot was created. The dimensions of the resulting array can be controlled with the squeeze keyword.

## Syntax
```pseudo
pyplot.subplots(nrows, ncols)
```

The following parameters can be used:
|  Parameter Name  | Data Type(s)                                               | Usage:
| :--------------: |  :---------------                                          | ----------------------------------------------------------------------
| `nrows, ncols`   | int, default:1                                             | This refers to the quantity of rows or columns within the grid of subplots.                                                                                                                                           |
| `sharex, sharey` | bool or {'none', 'all', 'row', 'col'}, default:False       | Sharex and sharey control the sharing of properties among x or y axis of subplots. Shared x-axis or y-axis allows for creating tick labels only on the bottom subplot or first column subplot, respectively.          |
| `squeeze`        | bool, default: True                                        | Removes additional dimensions from the array of Axes when set to True. If set to False, it will always return a 2D array of Axes instances, even if the size is 1x1.                                                  | 
| `width_ratios`   | array-like of length ncols, optional                       | Defines the proportional width of columns, where each column has a width of width_ratios[i] / sum(width_ratios). If not given, all columns have equal width. It is equivalent to gridspec_kw={'width_ratios': [...]}. |
| `height_ratios`  | array-like of lenght nrows                                 | Sets the proportional height of rows, dividing the total height among them. If not provided, all rows have an equal height. It is a shortcut for gridspec_kw={'height_ratios': [...]}.                                |
| `subplot_kw`     | dict                                                       | Dictionary that includes keywords that are passed to the add_subplot method, which is used to generate each subplot.                                                                                                  |
| `gridspec_kw`    | dict                                                       | Dictionary that contains keywords passed to the GridSpec constructor used for creating the grid where subplots are positioned.                                                                                        |
| `**fig_kw`       |                                                            | Any other keyword arguments are passed to the pyplot.figure method.                                                                                                                                                   |

## Example
In the following example, basic 2 x 2 grid of Axes is formed using **subplots**.

It returs a **Figure** instance and an array of **Axes** objects.

```py
import matplotlib.pyplot as plt
import numpy as np

# Create some sample data
x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)

# Create a figure with two subplots, arranged vertically
fig, axs = plt.subplots(2, 1, figsize=(8, 6), layout="constrained")

# Plot the first subplot (top)
axs[0].plot(x, y1)
axs[0].set_title('Sinusoidal Plot')
axs[0].set_xlabel('x-axis')
axs[0].set_ylabel('y-axis')

# Plot the second subplot (bottom)
axs[1].plot(x, y2)
axs[1].set_title('Cosine Plot')
axs[1].set_xlabel('x-axis')
axs[1].set_ylabel('y-axis')

# Display the figure
fig.suptitle("plt.subplots()")
plt.show()
```

![Output of the matplotlib.pyplot.subplots() function](/media/subplots-example.png)
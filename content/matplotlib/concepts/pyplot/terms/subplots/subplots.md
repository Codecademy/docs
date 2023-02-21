---
Title: '.subplots()'
Description: It create a figure and a set of subplots. This utility wrapper makes it convenient to create common layouts of subplots, including the enclosing figure object, in a single call.
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

## Syntax
```pseudo
pyplot.subplots(nrows, ncols)
```

fig: _Figure_
ax: _ax_ can be either a signe Axes object, or an array of Axes objects if more than one subplot was created. The dimensions of the resulting array can be controlled with the squeeze keyword.

The following parameters can be used:
|  Parameter Name  | Data Type(s)                                          | Usage:
| :--------------: |  :----------                                          | ----------------------------------------------------------------------
| 'nrows, ncols'   | int, default:1                                        |Number of rows/columns of the subplot grid.
| 'sharex, sharey' | bool or {'none', 'all', 'row', 'col'}, default:False  |Controls sharing of properties among x (sharex) or y (sharey) axe.When subplots have a shared x-axis along a column, only the x tick labels of the bottom subplot are created. Similarly, when subplots have a shared y-axis along a row, only the y tick labels of the first column subplot are created. |
| 'squeeze'        | bool, default: True                                   | If True, extra dimensions are squeezed out from the returned array of Axes. If False, no squeezing at all is done: the returned Axes object is always a 2D array containing Axes instances, even if it ends up being 1x1.                                                                                | 
| 'width_ratios'   | array-like of length ncols, optional                  | Defines the relative widths of the columns. Each column gets a relative width of width_ratios[i] / sum(width_ratios). If not given, all columns will have the same width. Equivalent to gridspec_kw={'width_ratios': [...]}                                                                              |
| 'height_ratios'  | array-like of lenght nrows                            | Defines the relative heights of the rows. Each row gets a relative height of height_ratios[i] / sum(height_ratios). If not given, all rows will have the same height. Convenience for gridspec_kw={'height_ratios': [...]}.                                                                              |
| 'subplot_kw'     | dict                                                  | Dict with keywords passed to the add_subplot call used to create each subplot.                                                                                                                                                                                                                           |
| 'gridspec_kw'    | dict                                                  | Dict with keywords passed to the GridSpec constructor used to create the grid the subplots are placed on.                                                                                                                                                                                                |
| '**fig_kw'       |                                                       | All additional keyword arguments are passed to the pyplot.figure call.                                                                                                                                                                                                                                   |

## Example
In the following example, basic 2 x 2 grid of Axes is formed using **subplots**.

It returs a **Figure** instance and an array of **Axes** objects.

```py
import matplotlib.pyplot as plt
import numpy as np

fig, axs = plt.subplots(ncols=2, nrows=2, figsize=(5.5, 3.5),
                        layout="constrained")
# add an artist, in this case a nice label in the middle...
for row in range(2):
    for col in range(2):
        axs[row, col].annotate(f'axs[{row}, {col}]', (0.5, 0.5),
                               transform=axs[row, col].transAxes,
                               ha='center', va='center', fontsize=18,
                               color='darkgrey')
fig.suptitle('plt.subplots()')
```

![Output of the matplotlib.pyplot.subplots() function](https://matplotlib.org/stable/_images/sphx_glr_arranging_axes_001.png)
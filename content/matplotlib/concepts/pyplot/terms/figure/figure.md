---
Title: '.figure()'
Description: Creates a new figure or activates an existing figure in Matplotlib's pyplot module.
Subjects: 
  - 'Data Science'
  - 'Data Visualization'
  - 'Python' 
Tags: 
  - 'Matplotlib'
  - 'Pyplot'
  - 'Plotting'
  - 'Charts'
  - 'Graphs' 
CatalogContent: 
  - 'learn-python-3'
  - 'paths/data-science'
---

Creates a new top-level container, called a **figure**, for plots and axes in Matplotlib. Think of it as creating a new canvas for your visualizations. If a figure with a specific identifier already exists, `figure()` can also make that existing figure the active one.

## Syntax

```python
matplotlib.pyplot.figure(num=None, figsize=None, dpi=None, facecolor=None, edgecolor=None, frameon=True, FigureClass=<class 'matplotlib.figure.Figure'>, clear=False, **kwargs)
```
## Example

Goal: Create a new figure canvas with a specific size and background color, then add a simple sine wave plot to it.

```py
import matplotlib.pyplot as plt
import numpy as np


x = np.linspace(0, 2 * np.pi, 100)
y = np.sin(x)


plt.figure(figsize=(8, 4), facecolor='lightblue')


ax = plt.subplot(1, 1, 1) 
ax.plot(x, y)
ax.set_title('Simple Sine Wave')
ax.set_xlabel('X-axis')
ax.set_ylabel('Y-axis')


plt.savefig('../../../../../../media/figure_example.png')
```
Output:

![Output of matplotlib.pyplot.figure() method example](https://raw.githubusercontent.com/Codecademy/docs/main/media/figure_example.png)


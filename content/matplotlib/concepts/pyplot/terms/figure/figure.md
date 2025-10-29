---
Title: '.figure()'
Description: 'Creates a new figure window or activates an existing one for plotting.'
Subjects: 
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Charts'
  - 'Graphs' 
  - 'Matplotlib'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.figure()`** function in Matplotlib creates a new top-level container, called a figure, which acts as the canvas for all plots and axes in Matplotlib. If a figure with the given identifier already exists, it makes that figure active instead.

## Syntax

```pseudo
matplotlib.pyplot.figure(
    num=None,
    figsize=None,
    dpi=None,
    facecolor=None,
    edgecolor=None,
    frameon=True,
    FigureClass=<class 'matplotlib.figure.Figure'>,
    clear=False,
    **kwargs
)
```

**Parameters:**

- `num` (int or str, optional): Identifier for the figure. If the number or name already exists, that figure becomes active; otherwise, a new one is created.
- `figsize` (tuple, optional): Width and height of the figure in inches, e.g. `(8, 6)`.
- `dpi` (float, optional): Dots per inch; controls the resolution of the figure.
- `facecolor` (color, optional): Background color of the figure.
- `edgecolor` (color, optional): Border color of the figure.
- `frameon` (bool, default: True): Whether to draw the figure frame.
- `FigureClass` (`Figure` subclass, optional): The class used to create the figure instance. Defaults to `matplotlib.figure.Figure`.
- `clear` (bool, default: False): If `True`, clears the existing figure before reusing it.
- `**kwargs`: Additional parameters passed to the `Figure` constructor.

**Return value:**

Returns a `Figure` object, which is the main container that holds all plot elements like axes, titles, labels, and legends.

## Example

This example creates a new figure canvas with a specific size and background color, then adds a simple sine wave plot to it:

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

plt.show()
```

The output of this code is:

![Output of matplotlib.pyplot.figure() method example](https://raw.githubusercontent.com/Codecademy/docs/main/media/figure_example.png)

# .bar()

## Syntax
A bar chart/bar graph is a chart/graph that represents categorical data with rectangular bars with heights and lengths proportional to the values that they represent. Bars can be plotted vertically or horizontally.

## Parameters
plt.bar(x, height, width, bottom, align)

The parameters to the function are −

x       The x coordinates of the bars. 
height  The height(s) of the bars.
width   The width(s) of the bars default: 0.8
bottom  The y coordinate(s) of the bars default: 0
align    {‘center’, ‘edge’}, optional, default: ‘center’

## Example

// Draw 3 green bars:

import matplotlib.pyplot as plt
import numpy as np

x = np.array(["X", "Y", "Z"])
y = np.array([10, 25, 15])

plt.bar(x, y, color = "green")
plt.show()



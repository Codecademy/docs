# .bar()

## Syntax
A bar chart or bar graph is a chart or graph that presents categorical data with rectangular bars with heights or lengths proportional to the values that they represent. The bars can be plotted vertically or horizontally.

A bar graph shows comparisons among discrete categories. One axis of the chart shows the specific categories being compared, and the other axis represents a measured value.

Matplotlib API provides the bar() function that can be used in the MATLAB style use as well as object oriented API. The signature of bar() function to be used with axes object is as follows −


## Example
ax.bar(x, height, width, bottom, align)

The parameters to the function are −

x    sequence of scalars representing the x coordinates of the bars. align controls if x is the bar center (default) or left edge.
height    scalar or sequence of scalars representing the height(s) of the bars.
width    scalar or array-like, optional. the width(s) of the bars default 0.8
bottom    scalar or array-like, optional. the y coordinate(s) of the bars default None.
align    {‘center’, ‘edge’}, optional, default ‘center’


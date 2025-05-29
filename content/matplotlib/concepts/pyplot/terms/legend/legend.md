---
Title: '.legend()'
Description: 'Creates and customizes legends to identify plot elements in matplotlib visualizations.'
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

The **`.legend()`** method in Matplotlib's [`pyplot`](https://www.codecademy.com/resources/docs/matplotlib/pyplot) module creates a legend for plots by labelling different elements on a graph. A legend helps users identify what each line, marker, or other graphical element represents in the visualization. The `.legend()` function places descriptive text labels alongside representative samples of the plot elements, making it easier to interpret data visualizations.

Legends are particularly useful when working with multiple data series in a single plot, allowing viewers to distinguish between different datasets, categories, or variables. The `.legend()` method provides extensive customization options for positioning, styling, and organizing the legend to enhance the readability and professional appearance of visualizations.

## Syntax

```pseudo
matplotlib.pyplot.legend(*args, **kwargs)
```

**Parameters:**

- `handles`: A list of Artists (lines, patches) to be added to the legend. If not provided, the legend will automatically use the elements in the current Axes.
- `labels`: A list of strings to be used as labels for the legend elements. If not provided, the legend will attempt to use the labels from the plot elements.
- `loc`: The location of the legend. Can be a string ('upper right', 'center left', etc.) or a numeric code. Default is 'best'.
- `bbox_to_anchor`: Tuple (x, y) or BboxBase or 2-tuple of tuples for the position of the legend.
- `ncol`: The number of columns in the legend. Default is 1.
- `fontsize`: The font size of the legend text.
- `title`: The legend's title.
- `frameon`: Boolean indicating whether the legend's frame should be drawn. Default is True.
- `shadow`: Boolean indicating whether to draw a shadow behind the legend. Default is False.
- `facecolor`: The background color of the legend. Default is 'inherit'.
- `edgecolor`: The edge color of the legend. Default is '0.8'.
- `markerscale`: The relative size of legend markers compared to the original. Default is None.
- `numpoints`: The number of marker points in the legend when creating a legend entry for a Line2D (line).
- `scatterpoints`: The number of marker points in the legend when creating a legend entry for a scatter plot.
- `draggable`: Boolean indicating whether the legend can be dragged with the mouse. Default is False.

**Return value:**

The `.legend()` method returns a `Legend` instance.

## Example 1: Adding a Basic Legend to a Plot

This example demonstrates how to add a simple legend to a plot. A quadratic function is plotted, and a legend is added to identify the line:

```py
import numpy as np
import matplotlib.pyplot as plt

# X-axis values
x = [1, 2, 3, 4, 5]

# Y-axis values (y = x^2)
y = [1, 4, 9, 16, 25]

# Create the plot
plt.plot(x, y, label='y = x²')

# Add a legend
plt.legend()

# Add title and labels
plt.title('Quadratic Function')
plt.xlabel('x')
plt.ylabel('y')

# Display the plot
plt.show()
```

Output of this code will be:

![Basic Legend Example](https://raw.githubusercontent.com/Codecademy/docs/main/media/matplotlib-legend-basic.png)

This example plots a quadratic function and adds a simple legend in the default position (upper right). The `label` parameter in the `plot()` function provides the text that appears in the legend.

## Example 2: Customizing Legend Position

This example shows how to customize the position of a legend by plotting two different data series and placing the legend in the lower right corner of the plot:

```py
import numpy as np
import matplotlib.pyplot as plt

# X-axis values
x = np.linspace(0, 10, 100)

# Two different functions to plot
y1 = np.sin(x)
y2 = np.cos(x)

# Create the plots with labels
plt.plot(x, y1, 'b-', label='Sine')
plt.plot(x, y2, 'r--', label='Cosine')

# Add a legend with custom position
plt.legend(loc='lower right')

# Add title and labels
plt.title('Sine and Cosine Functions')
plt.xlabel('x')
plt.ylabel('y')
plt.grid(True)

# Display the plot
plt.show()
```

The output of this code will be:
![Customized Legend Position](https://raw.githubusercontent.com/Codecademy/docs/main/media/matplotlib-legend-position.png)

This example plots sine and cosine functions with different line styles and colors. The legend is positioned in the lower right corner of the plot using the `loc` parameter. The legend helps differentiate between the two trigonometric functions.

## Example 3: Multiple Columns and Styling

This example demonstrates how to create a multi-column legend with custom styling options, including background color, title, and border:

```py
import numpy as np
import matplotlib.pyplot as plt

# Generate data for multiple lines
x = np.linspace(0, 10, 100)
y1 = x
y2 = x**2
y3 = x**3
y4 = np.sqrt(x)
y5 = np.log(x + 1)

# Create a figure with a specific size
plt.figure(figsize=(10, 6))

# Plot multiple lines with different styles and labels
plt.plot(x, y1, 'r-', linewidth=2, label='Linear')
plt.plot(x, y2, 'g--', linewidth=2, label='Quadratic')
plt.plot(x, y3, 'b-.', linewidth=2, label='Cubic')
plt.plot(x, y4, 'm:', linewidth=2, label='Square Root')
plt.plot(x, y5, 'k-', linewidth=2, label='Logarithmic')

# Create a styled legend
plt.legend(
    loc='upper center',     # Position at the top center
    ncol=3,                 # Use 3 columns
    title='Function Types',  # Add a title to the legend
    shadow=True,            # Add a shadow
    facecolor='lightyellow', # Set background color
    edgecolor='black',      # Set border color
    fontsize='medium'       # Set font size
)

# Add title and labels
plt.title('Various Mathematical Functions')
plt.xlabel('x')
plt.ylabel('y')
plt.grid(True, linestyle='--', alpha=0.7)

# Display the plot
plt.show()
```

The output of this code will be:

![Multi-column Styled Legend](https://raw.githubusercontent.com/Codecademy/docs/main/media/matplotlib-legend-styled.png)

This example plots five different mathematical functions and creates a styled legend with three columns positioned at the top centre of the plot. The legend includes a title, shadow, custom background color, and border. This type of legend is useful for visualizations with multiple data series that need to be clearly identified.

## Frequently Asked Questions

### 1. How can I create a legend for only some of the plotted elements?

To create a legend for specific plot elements, pass the desired handles and labels explicitly to the `legend()` function:

```py
line1, = plt.plot([1, 2, 3], label='Line 1')
line2, = plt.plot([3, 2, 1], label='Line 2')
line3, = plt.plot([2, 3, 1], label='Line 3')

# Create a legend for only the first and third lines
plt.legend(handles=[line1, line3])
```

### 2. How do I place a legend outside the plot area?

To place a legend outside the plot area, use the `bbox_to_anchor` parameter along with an appropriate `loc` value:

```py
plt.legend(bbox_to_anchor=(1.05, 1), loc='upper left')
```

This places the legend outside the right side of the plot. You may need to adjust the figure size using `plt.figure(figsize=(width, height))` or add padding with `plt.tight_layout()` to ensure the legend is fully visible.

### 3. Can I create multiple legends on a single plot?

Yes, you can create multiple legends on a single plot by using the `.legend()` method and storing the returned Legend objects:

```py
line1, = plt.plot([1, 2, 3], label='Data 1')
line2, = plt.plot([3, 2, 1], label='Data 2')

# First legend
legend1 = plt.legend([line1], ['First Legend'], loc='upper right')

# Add the first legend manually to the plot
plt.gca().add_artist(legend1)

# Second legend
plt.legend([line2], ['Second Legend'], loc='lower right')
```

### 4. How do I change the marker size in the legend?

Use the `markerscale` parameter to adjust the size of markers in the legend relative to their size in the plot:

```py
plt.scatter([1, 2, 3], [1, 2, 3], s=100, label='Data Points')
plt.legend(markerscale=2)  # Makes the legend marker twice as large
```

### 5. How can I remove the legend frame?

To remove the legend frame, set the `frameon` parameter to `False`:

```py
plt.plot([1, 2, 3], label='Line')
plt.legend(frameon=False)
```

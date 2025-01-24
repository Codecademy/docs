---
Title: 'Built-in Plotting'
Description: 'built-in plotting in Pandas provides an easy way to generate various plots directly from DataFrames and Series using the plot() function.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Functions'
  - 'Pandas'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Pandas provides a convenient and powerful way to visualize data directly from DataFrames and Series with built-in plotting capabilities. Using the **`plot()`** function, Pandas makes it easy to generate various types of plots, such as line plots, bar plots, histograms, and more. The `plot()` function uses Matplotlib behind the scenes to render these plots.

## Syntax

```pseudo
DataFrame.plot(kind='line', x=None, y=None, ax=None, **kwargs)
```

- `kind`: The type of plot to create (e.g., `'line'`, `'bar'`, `'hist'`, etc.).
- `x` (Optional): The column to use as the x-axis.
- `y` (Optional): The column(s) to plot.
- `ax` (Optional): A Matplotlib `Axes` object to draw the plot on. If not specified, a new figure and axes are created.
- `**kwargs`: Additional arguments passed to the underlying Matplotlib function (e.g., `color`, `linewidth`, `title`).

## Example

Here’s an example that demonstrates how to use the built-in plotting functionality in Pandas to create a simple line plot from a DataFrame:

```py
import pandas as pd
import matplotlib.pyplot as plt

# Create a DataFrame
data = {'Year': [2019, 2020, 2021, 2022, 2023],
        'Sales': [150, 200, 250, 300, 350]}
df = pd.DataFrame(data)

# Plotting the data
df.plot(kind='line', x='Year', y='Sales', title='Sales Over Years', xlabel='Year', ylabel='Sales')

# Show the plot
plt.show()
```

The above code will generate the output as follows:

![Built in Plotting](https://raw.githubusercontent.com/Codecademy/docs/main/media/built-in-plotting.png)

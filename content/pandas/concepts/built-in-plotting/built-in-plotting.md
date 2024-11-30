---
title: Built-in Plotting
description: Learn how to use the built-in plotting capabilities of Pandas to visualize data quickly and easily.
---

# Built-in Plotting in Pandas

Pandas provides built-in plotting capabilities that allow you to create a wide range of visualizations directly from your DataFrame or Series. This functionality is built on top of Matplotlib, offering a quick and convenient way to explore your data visually.

## Syntax

The basic syntax for creating a plot using Pandas is as follows:

```python
DataFrame.plot(kind='line', **kwargs)
Series.plot(kind='line', **kwargs)
```

### Parameters:
- **kind**: The type of plot to generate. Common values include:
  - `'line'`: Line plot (default).
  - `'bar'`: Vertical bar plot.
  - `'barh'`: Horizontal bar plot.
  - `'hist'`: Histogram.
  - `'box'`: Box plot.
  - `'pie'`: Pie chart.
  - `'scatter'`: Scatter plot.
- **kwargs**: Additional arguments to customize the plot (e.g., `title`, `xlabel`, `ylabel`, `color`).

For detailed options and customization, refer to the [Pandas documentation on DataFrame.plot](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.plot.html).

## Example

Here’s an example of using the built-in plotting feature to visualize data:

```python
import pandas as pd

# Sample dataset
data = {
    "Year": [2020, 2021, 2022, 2023],
    "Sales": [200, 250, 300, 400],
}

df = pd.DataFrame(data)

# Line plot
df.plot(x="Year", y="Sales", kind="line", title="Sales Over Time", marker="o")
```

This code creates a line plot of sales over the years, with markers for each data point.

## Codebyte Example

Below is a Codebyte example for trying out built-in plotting in Pandas:

```python
import pandas as pd

# Sample dataset
data = {
    "Category": ["A", "B", "C", "D"],
    "Values": [50, 30, 20, 40],
}

df = pd.DataFrame(data)

# Bar plot
df.plot(x="Category", y="Values", kind="bar", title="Category Values", color="skyblue")
```

### Output:
This generates a bar plot showing the values for each category.

## Additional Resources

- [Pandas Documentation: DataFrame.plot](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.plot.html)
- [Pandas Visualization Guide](https://pandas.pydata.org/docs/user_guide/visualization.html)
- [Codecademy Pandas Tutorial](https://www.codecademy.com/learn/data-processing-pandas)
- [Codecademy Markdown Style Guide](https://www.codecademy.com/resources/docs/style-guide)

Using Pandas' built-in plotting capabilities, you can create quick and informative visualizations, helping you understand and communicate data insights effectively.

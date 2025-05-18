---
Title: '.hist()'
Description: 'Creates histograms to visualize data distributions in Python.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Charts'
  - 'Histograms'
  - 'Matplotlib'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.hist()`** function in Matplotlib's [pyplot](https://www.codecademy.com/resources/docs/matplotlib/pyplot) module is used to create histograms, which are graphical representations of data distribution. It divides the data into bins (non-overlapping intervals) and counts the frequency of values in each bin, plotting them as bars. Histograms are powerful tools for visualizing the distribution of a dataset, allowing users to quickly identify patterns such as central tendency, spread, and outliers.

Histograms are commonly used in data analysis and statistics to understand data distribution characteristics. They're essential for exploratory data analysis, helping to identify skewness, multimodality, and other distribution properties that might influence subsequent analysis choices. The `.hist()` function makes creating these visualizations straightforward in Python, with extensive customization options to fit various data visualization needs.

## Syntax

```pseudo
matplotlib.pyplot.hist(x, bins=None, range=None, density=False, weights=None, cumulative=False, bottom=None, histtype='bar', align='mid', orientation='vertical', rwidth=None, log=False, color=None, label=None, stacked=False, *, data=None, **kwargs)
```

**Parameters:**

- `x`: The data to be represented in the histogram. Can be a single array or a sequence of arrays.
- `bins`: Specifies the number of bins or the bin edges for the histogram. If an integer is provided, it represents the number of bins. If a sequence is provided, it represents the bin edges. The default is `None`, which uses the `auto` method to determine bins.
- `range`: The lower and upper range of the bins as a tuple. If not provided, range is `(x.min(), x.max())`. Values outside the range are ignored.
- `density`: If `True`, the histogram is normalized to form a probability density, where the area under the histogram equals 1. Default is `False`.
- `weights`: An array of weights, same shape as `x`. Each value in `x` only contributes its associated weight towards the bin count. Default is `None`.
- `cumulative`: If `True`, the histogram represents a cumulative distribution function rather than a frequency distribution. Default is `False`.
- `bottom`: Location of the bottom baseline of each bin. If a scalar, the baseline for all bins is at the same location. If an array, each bin has its own baseline. Default is 0.
- `histtype`: Defines the type of histogram. Options are: 'bar', 'barstacked', 'step', 'stepfilled'. Default is 'bar'.
- `align`: Controls how the bars align with the bin edges. Options are: 'left', 'mid', 'right'. Default is 'mid'.
- `orientation`: Orientation of the histogram. Can be 'horizontal' or 'vertical'. Default is 'vertical'.
- `rwidth`: The relative width of the bars as a fraction of the bin width. If `None`, automatically computes the width. Default is `None`.
- `log`: If `True`, the histogram axis will be set to a log scale. Default is `False`.
- `color`: Sets the color of the bars or lines. Can be a single color or a sequence of colors. Default is `None`.
- `label`: Label for the histogram, used in legends. Default is `None`.
- `stacked`: If `True`, multiple data are stacked on top of each other if multiple datasets are provided. Default is `False`.
- `data`: If provided, the following parameters also accept a string which is interpreted as a data key in `data`: `x`, `weights`.
- `**kwargs`: Additional parameters to be passed to `bar()` or `fill_between()` depending on the `histtype`.

**Return value:**

The `.hist()` function returns a tuple of three elements:

- `n`: The values of the histogram bins (array or list of arrays).
- `bins`: The edges of the bins (array). For `bins` of length `n`, `n` is of length `n-1`.
- `patches`: A list of individual artist objects used to create the histogram.

## Example 1: Basic Histogram Creation using `.hist()`

This example demonstrates creating a basic histogram using random data generated from a normal distribution:

```py
import numpy as np
import matplotlib.pyplot as plt

# Generate random data from a normal distribution
data = np.random.normal(0, 1, 1000)  # Mean=0, Standard deviation=1, Size=1000

# Create a histogram with default settings
plt.hist(data)

# Add labels and title
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.title('Basic Histogram Example')

# Display the plot
plt.show()
```

The output produced by this code is:

![A histogram showing a bell-shaped curve representing a normal distribution. The x-axis is labeled "Value" and the y-axis "Frequency", displaying symmetrical bars centered around zero](https://raw.githubusercontent.com/Codecademy/docs/main/media/histogram-output-1.png)

This example creates a histogram from 1000 random data points sampled from a normal distribution. The function automatically calculates the optimal number of bins and plots the frequency of values in each bin. The resulting plot provides a visual representation of the normal distribution, showing the characteristic bell curve shape.

## Example 2: Customized Histogram with Density and Specific Bins

This example shows how to create a more customized histogram with normalized density values and a specific number of bins:

```py
import numpy as np
import matplotlib.pyplot as plt

# Generate two datasets with different distributions
data1 = np.random.normal(0, 1, 1000)  # Normal distribution
data2 = np.random.exponential(1, 800)  # Exponential distribution

# Create a figure with subplots
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))

# Plot normal distribution histogram with density=True
ax1.hist(data1, bins=30, density=True, alpha=0.7, color='blue')
ax1.set_title('Normal Distribution')
ax1.set_xlabel('Value')
ax1.set_ylabel('Density')

# Plot exponential distribution histogram with density=True
ax2.hist(data2, bins=30, density=True, alpha=0.7, color='green')
ax2.set_title('Exponential Distribution')
ax2.set_xlabel('Value')
ax2.set_ylabel('Density')

# Adjust layout
plt.tight_layout()
plt.show()
```

The output produced by this code is:

![Two side-by-side histograms: the left plot displays a smooth, bell-shaped histogram for a normal distribution, and the right plot shows a right-skewed histogram for an exponential distribution](https://raw.githubusercontent.com/Codecademy/docs/main/media/histogram-output-2.png)

This example demonstrates creating histograms for two different distributions—normal and exponential—with density normalization. Setting `density=True` normalizes the histogram so that the area under the curve equals 1, making it a probability density function. This is particularly useful when comparing datasets of different sizes or when you want to overlay a theoretical probability density function for comparison.

## Example 3: Stacked Histogram with Multiple Datasets

This example demonstrates using the stacked feature to visualize multiple datasets in one histogram, which is useful for comparative analysis:

```py
import numpy as np
import matplotlib.pyplot as plt

# Set a seed for reproducibility
np.random.seed(42)

# Generate example data representing ages from different departments
dept_a = np.random.normal(35, 7, 200).astype(int)  # Mean age 35, std 7
dept_b = np.random.normal(40, 5, 150).astype(int)  # Mean age 40, std 5
dept_c = np.random.normal(30, 8, 180).astype(int)  # Mean age 30, std 8

# Define bin edges to ensure uniform binning across datasets
bins = range(15, 65, 5)  # Ages from 15 to 65 in steps of 5

# Create a stacked histogram
plt.figure(figsize=(10, 6))
plt.hist(
    [dept_a, dept_b, dept_c],
    bins=bins,
    stacked=True,
    alpha=0.8,
    label=['Department A', 'Department B', 'Department C'],
    color=['#1f77b4', '#ff7f0e', '#2ca02c']  # Custom colors
)

# Add labels and title
plt.xlabel('Age')
plt.ylabel('Number of Employees')
plt.title('Age Distribution by Department')
plt.legend()
plt.grid(alpha=0.3)

# Display the plot
plt.tight_layout()
plt.show()
```

The output produced by this code is:

![A stacked histogram illustrating age distribution across three departments. Bars are grouped in 5-year bins from ages 15 to 65, with distinct colors representing each department.](https://raw.githubusercontent.com/Codecademy/docs/main/media/histogram-output-3.png)

This example creates a stacked histogram to visualize the age distribution across three different departments. Each department's data is represented by a different color, with the bars stacked on top of each other. This visualization makes it easy to compare both the overall age distribution and the contribution from each department. The `stacked=True` parameter ensures that data from each array is placed on top of the previous array, rather than side by side, providing a clear picture of how each department contributes to the total age distribution.

## Frequently Asked Questions

### 1. How do I control the number of bins in a histogram?

You can specify the number of bins directly using the `bins` parameter. For example, `plt.hist(data, bins=20)` creates a histogram with 20 bins. Alternatively, you can provide custom bin edges as a sequence: `plt.hist(data, bins=[0, 10, 20, 30, 40, 50])`.

### 2. What's the difference between `density=True` and `density=False` in `.hist()`?

When `density=False` (default), the histogram shows frequencies or counts. When `density=True`, the histogram is normalized so that the area under the histogram equals 1, creating a probability density function. This is useful for comparing distributions of different sizes.

### 3. How can I create histograms with different styles?

The `histtype` parameter controls the style of the histogram. Options include 'bar' (default), 'barstacked', 'step', and 'stepfilled'. For example, `plt.hist(data, histtype='step')` creates a step line instead of bars.

### 4. Can I overlay multiple histograms for comparison?

Yes, by using `alpha` (transparency) and calling `hist()` multiple times:

```py
plt.hist(data1, alpha=0.5, label='Data 1')
plt.hist(data2, alpha=0.5, label='Data 2')
plt.legend()
```

### 5. How do I create a cumulative histogram?

Set the `cumulative` parameter to `True`: `plt.hist(data, cumulative=True)`. This plots a cumulative distribution function instead of a frequency distribution.

### 6. How can I save the bin information for further analysis?

The `hist()` function returns a tuple with bin counts, bin edges, and patch objects:

```py
counts, bins, patches = plt.hist(data)
```

You can use `counts` and `bins` for additional calculations.

---
Title: '.boxplot()'
Description: 'Creates box-and-whisker plots to display statistical summary of datasets.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Charts'
  - 'Matplotlib'
  - 'Statistics'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.boxplot()`** method is a powerful data visualization function in matplotlib's pyplot module that creates box-and-whisker plots to display the statistical summary of a dataset. This method displays the distribution of data through quartiles, showing the median, first quartile (Q1), third quartile (Q3), and potential outliers in a compact visual format.

Box plots are widely used in statistical analysis and data science for comparing distributions across different groups, identifying outliers, and understanding the spread and central tendency of data. They are particularly valuable when analyzing multiple datasets simultaneously, as they provide a clear visual comparison of statistical properties across different categories or groups.

## Syntax

```pseudo
matplotlib.pyplot.boxplot(x, notch=None, sym=None, vert=None,
                         orientation='vertical', whis=None, positions=None,
                         widths=None, patch_artist=None, bootstrap=None,
                         usermedians=None, conf_intervals=None, meanline=None,
                         showmeans=None, showcaps=None, showbox=None,
                         showfliers=None, boxprops=None, tick_labels=None,
                         flierprops=None, medianprops=None, meanprops=None,
                         capprops=None, whiskerprops=None, manage_ticks=True,
                         autorange=False, zorder=None, capwidths=None,
                         label=None, data=None)
```

**Parameters:**

- `x`: The input data (array-like or sequence of arrays). Can be a 1D array for single boxplot or sequence of arrays for multiple boxplots.
- `notch`: Boolean, optional. If True, creates a notched boxplot to indicate confidence intervals around the median.
- `sym`: String, optional. Default symbol for outlier points. An empty string hides the outliers.
- `vert`: Boolean, optional. If True (default), plots boxes vertically. If False, plots horizontally.
- `orientation`: String, optional. Controls the orientation of the boxplot. Options are 'vertical' (default) or 'horizontal'.
- `whis`: Float or sequence, optional. Determines the reach of the whiskers beyond the first and third quartiles. Default is 1.5.
- `positions`: Array-like, optional. Sets the positions of the boxes along the x-axis. Defaults to range(1, N+1) where N is the number of boxes.
- `widths`: Float or array-like, optional. Sets the width of each box. Default is 0.5.
- `patch_artist`: Boolean, optional. If True, fills the boxplot with colors using Patch artists instead of Line2D artists.
- `bootstrap`: Integer, optional. Specifies confidence intervals around the median using bootstrap method. Values between 1000 and 10000 are recommended.
- `usermedians`: Array-like, optional. Forces specific median values for each dataset. Each entry that is not None forces the median value.
- `conf_intervals`: Array-like, optional. Forces specific confidence interval locations. Only drawn if notch is True.
- `meanline`: Boolean, optional. If True, renders the mean as a line across the full width of the box.
- `showmeans`: Boolean, optional. If True, shows the arithmetic means as points or lines.
- `showcaps`: Boolean, optional. If True, shows caps at the ends of whiskers. Default is True.
- `showbox`: Boolean, optional. If True, shows the central box. Default is True.
- `showfliers`: Boolean, optional. If True, shows outliers beyond the caps. Default is True.
- `boxprops`: Dictionary, optional. Style properties for the box (e.g., color, linewidth).
- `tick_labels`: List of strings, optional. Labels for each boxplot tick. Ticks are placed at box positions.
- `flierprops`: Dictionary, optional. Style properties for the outliers (e.g., marker, color, alpha).
- `medianprops`: Dictionary, optional. Style properties for the median line.
- `meanprops`: Dictionary, optional. Style properties for the mean points or lines.
- `capprops`: Dictionary, optional. Style properties for the caps at whisker ends.
- `whiskerprops`: Dictionary, optional. Style properties for the whiskers.
- `manage_ticks`: Boolean, optional. If True, adjusts tick locations and labels to match boxplot positions. Default is True.
- `autorange`: Boolean, optional. If True, automatically sets whisker range to cover the entire data range when quartiles are equal.
- `zorder`: Float, optional. Sets the drawing order of the boxplot. Higher values are drawn on top.
- `capwidths`: Float or array-like, optional. Sets the width of the caps at whisker ends.
- `label`: String or list of strings, optional. Legend labels for the boxplots.
- `data`: Indexable object, optional. Data object that allows string indexing for accessing arrays by name.

**Return value:**

The method returns a dictionary containing the matplotlib artists used in the boxplot. The dictionary includes keys for 'boxes', 'medians', 'whiskers', 'caps', 'fliers', and 'means'.

## Example 1: Basic Boxplot

This example demonstrates how to create a simple boxplot using randomly generated data:

```py
import matplotlib.pyplot as plt
import numpy as np

# Set random seed for reproducibility
np.random.seed(42)

# Generate sample data
data = np.random.normal(100, 15, 200)

# Create the boxplot
plt.figure(figsize=(8, 6))
plt.boxplot(data)
plt.title('Basic Boxplot Example')
plt.ylabel('Values')
plt.show()
```

The output of this code is:

![A simple boxplot showing the distribution of normally distributed data with median line, quartile box, whiskers, and outlier points](https://raw.githubusercontent.com/Codecademy/docs/main/media/boxplot1.png)

The code generates a dataset with 200 values following a normal distribution with mean 100 and standard deviation 15. The resulting boxplot displays the median as a horizontal line, the box representing the interquartile range (IQR), whiskers extending to the most extreme non-outlier data points, and any outliers as individual points.

## Example 2: Multiple Dataset Comparison

This example shows how to create boxplots for multiple datasets to compare their distributions:

```py
import matplotlib.pyplot as plt
import numpy as np

# Set random seed for reproducibility
np.random.seed(42)

# Generate multiple datasets with different characteristics
dataset1 = np.random.normal(80, 10, 100)  # Lower mean, smaller spread
dataset2 = np.random.normal(100, 20, 100)  # Higher mean, larger spread
dataset3 = np.random.exponential(25, 100)  # Exponential distribution
dataset4 = np.random.uniform(50, 150, 100)  # Uniform distribution

# Combine datasets
data = [dataset1, dataset2, dataset3, dataset4]

# Create multiple boxplots
plt.figure(figsize=(10, 6))
box_plot = plt.boxplot(data, labels=['Normal (80,10)', 'Normal (100,20)',
                                   'Exponential (25)', 'Uniform (50,150)'])
plt.title('Comparison of Different Distributions')
plt.ylabel('Values')
plt.xlabel('Distribution Type')
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()
```

The output of this code is:

![Four side-by-side boxplots comparing normal, exponential, and uniform distributions with different means and spreads](https://raw.githubusercontent.com/Codecademy/docs/main/media/boxplot2.png)

This example creates four different datasets with distinct statistical properties and displays them side by side. The boxplots make it easy to compare the medians, spreads, and presence of outliers across the different distributions.

## Example 3: Customized Sales Performance Analysis

This example demonstrates a real-world scenario analyzing quarterly sales performance across different product categories:

```py
import matplotlib.pyplot as plt
import numpy as np

# Set random seed for reproducibility
np.random.seed(42)

# Simulate quarterly sales data (in thousands)
electronics = np.random.normal(150, 25, 50)  # Electronics sales
clothing = np.random.normal(120, 30, 50)     # Clothing sales
home_goods = np.random.normal(100, 20, 50)   # Home goods sales
sports = np.random.normal(80, 15, 50)        # Sports equipment sales

# Add some outliers to make it more realistic
electronics = np.append(electronics, [220, 250])  # High-performance months
clothing = np.append(clothing, [200, 40])         # Seasonal variations
home_goods = np.append(home_goods, [180])         # Holiday boost
sports = np.append(sports, [150, 30])             # Seasonal impact

# Combine all sales data
sales_data = [electronics, clothing, home_goods, sports]
categories = ['Electronics', 'Clothing', 'Home Goods', 'Sports']

# Create customized boxplot
plt.figure(figsize=(12, 8))
box_plot = plt.boxplot(sales_data,
                      labels=categories,
                      patch_artist=True,  # Fill with colors
                      notch=True,         # Show confidence intervals
                      showmeans=True)     # Show mean values

# Customize colors for each category
colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightyellow']
for patch, color in zip(box_plot['boxes'], colors):
  patch.set_facecolor(color)

# Customize the plot appearance
plt.title('Quarterly Sales Performance Analysis by Product Category',
          fontsize=16, fontweight='bold')
plt.ylabel('Sales (in thousands USD)', fontsize=12)
plt.xlabel('Product Categories', fontsize=12)
plt.grid(axis='y', alpha=0.3)
plt.tight_layout()
plt.show()
```

The output of this code is:

![Colorful customized boxplots showing quarterly sales performance across four product categories with notches and mean indicators](https://raw.githubusercontent.com/Codecademy/docs/main/media/boxplot3.png)

This example simulates a business scenario where sales data is analyzed across different product categories. The customized boxplot uses colors to distinguish categories, shows confidence intervals through notches, and displays mean values alongside medians. This visualization helps identify which product categories perform best and have the most consistent sales patterns.

## Frequently Asked Questions

### 1. What is a box plot in Matplotlib?

A box plot displays data distribution through five statistics: minimum, Q1, median, Q3, and maximum, with outliers shown as individual points.

### 2. What is the difference between Seaborn Boxplot and Matplotlib Boxplot?

Seaborn's boxplot offers better default styling and easier categorical data handling, while Matplotlib's boxplot provides more low-level control and customization options.

### 3. How to plot a boxplot in a Python DataFrame?

Pass DataFrame columns to `plt.boxplot([df['col1'], df['col2']])` or use pandas' built-in `df.boxplot()` method.

---
Title: 'stackplot()'
Description: 'Creates a stacked area plot to show how multiple datasets contribute cumulatively over time or categories.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Charts'
  - 'Matplotlib'
  - 'Stacks'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`stackplot()`** method in matplotlib creates stacked area plots (also known as stacked area charts) that display multiple datasets as vertically stacked areas. Each area represents the cumulative contribution of different categories to a total, making it ideal for visualizing proportional relationships as those relationships change over time.

## Syntax

```pseudo
matplotlib.pyplot.stackplot(x, *args, labels=(), colors=None, hatch=None, baseline='zero', data=None, **kwargs)
```

**Parameters:**

- `x`: Array-like. The x-coordinates of the data points.
- `*args`: One or more array-like sequences representing the y-values for each stack layer.
- `labels`: List of strings, optional. Labels for each stack layer (used in legends).
- `colors`: List of colors or color specifications for each stack layer.
- `hatch`: String or sequence, optional. Hatching patterns applied to the filled areas.
- `baseline`: String, defines the baseline for stacking:
  - `'zero'` (default): Stack from y = 0.
  - `'sym'`: Symmetric stacking around zero.
  - `'wiggle'`: Minimizes slope changes between layers.
  - `'weighted_wiggle'`: Weighted version of the wiggle baseline.
- `data`: Object with labeled data (e.g., dict or DataFrame). Optional data source.
- `**kwargs`: Additional keyword arguments passed to `PolyCollection` (e.g., `alpha` for transparency).

**Return value:**

Returns a list of `PolyCollection` objects, one for each stack layer.

## Example 1: Visualizing Monthly Sales by Category

This example shows a stacked area chart of sales data across product categories over time:

```py
import matplotlib.pyplot as plt

# Sample data
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
electronics = [20, 25, 30, 28, 35, 40]
clothing = [15, 18, 22, 25, 20, 30]
books = [10, 12, 15, 18, 22, 25]

# Create stacked area plot
plt.stackplot(months, electronics, clothing, books,
  labels=['Electronics', 'Clothing', 'Books'],
  colors=['#ff9999', '#66b3ff', '#99ff99'],
  alpha=0.8)

plt.xlabel('Month')
plt.ylabel('Sales (in thousands)')
plt.title('Monthly Sales by Category')
plt.legend(loc='upper left')
plt.show()
```

This creates a stacked area chart where each colored area represents a product category's contribution to total sales.

![Stackplot Example](https://raw.githubusercontent.com/Codecademy/docs/main/media/stackplot-example.png)

## Example 2: Stacked Areas with Multiple Series

This example demonstrates stacking multiple data series using numeric values:

```py
import matplotlib.pyplot as plt
import numpy as np

# Create sample data
x = [1, 2, 3, 4, 5]
y1 = [1, 2, 3, 2, 1]
y2 = [2, 3, 2, 4, 3]
y3 = [1, 1, 2, 1, 2]

# Create stackplot
plt.stackplot(x, y1, y2, y3,
  labels=['Series A', 'Series B', 'Series C'],
  colors=['lightcoral', 'lightblue', 'lightgreen'],
  alpha=0.8)

plt.xlabel('X Values')
plt.ylabel('Y Values')
plt.title('Basic Stackplot Example')
plt.legend(loc='upper left')
plt.grid(True, alpha=0.3)
plt.show()
```

This creates a basic stacked area plot with three data series, demonstrating the fundamental structure of stackplot visualizations.

![Stackplot Example 2](https://raw.githubusercontent.com/Codecademy/docs/main/media/stackplot-example-2.png)

---
Title: 'stackplot'
Description: 'Creates stacked area plots to visualize multiple datasets as vertically stacked areas, showing cumulative contributions over time or categories.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
  - 'Python'
Tags:
  - 'Matplotlib'
  - 'Plotting'
  - 'Data Visualization'
  - 'Charts'
  - 'Area Plot'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`stackplot()`** method in **matplotlib** creates stacked area plots (also known as stacked area charts) that display multiple datasets as vertically stacked areas. Each area represents the cumulative contribution of different categories to a total, making it ideal for visualizing proportional relationships as those relationships change over time.

## Syntax

```python
matplotlib.pyplot.stackplot(x, *args, labels=None, colors=None, alpha=None, baseline='zero', data=None, **kwargs)
```

### Parameters

- `x`: Array-like, the x-coordinates of the data points
- `*args`: One or more array-like sequences representing the y-values for each stack layer
- `labels`: List of strings, optional labels for each stack layer (used in legends)
- `colors`: List of colors or color specifications for each stack layer
- `alpha`: Float between 0-1, transparency level for all areas
- `baseline`: String, defines the baseline for stacking:
  - `'zero'` (default): Stack from y=0
  - `'sym'`: Symmetric stacking around zero
  - `'wiggle'`: Minimize slope changes
  - `'weighted_wiggle'`: Weighted wiggle baseline
- `data`: Object with labelled data (optional data source)
- `**kwargs`: Additional keyword arguments passed to PolyCollection

### Return Value

Returns a list of `PolyCollection` objects, one for each stack layer.

## Example

Here's a basic example showing sales data for different product categories over time:

```python
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

![Stackplot Example](../media/stackplot-example.png)

## Codebyte Example

```codebyte/python
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

## FAQ

**Q: How can I customize colors beyond the basic color list?**

A: You can use hex codes, RGB tuples, or matplotlib's named colors:
```python
# Hex colors
colors=['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4']

# RGB tuples
colors=[(0.8, 0.2, 0.2), (0.2, 0.8, 0.2), (0.2, 0.2, 0.8)]

# Named colors
colors=['crimson', 'forestgreen', 'royalblue']
```

**Q: Can I add patterns or hatching to stackplot areas?**

A: Yes! Use the `hatch` parameter in `**kwargs`:
```python
plt.stackplot(x, y1, y2, y3, colors=['red', 'blue', 'green'],
              hatch=['///', '...', 'xxx'], alpha=0.7)
```
Common hatch patterns: `'///'`, `'\\\\'`, `'|||'`, `'---'`, `'+++'`, `'xxx'`, `'ooo'`, `'OOO'`, `'...'`, `'***'`

**Q: How do I control the stacking order?**

A: The order of your data arguments determines the stacking order. The first argument appears at the bottom:
```python
# Electronics will be at bottom, Books at top
plt.stackplot(x, electronics, clothing, books)
```

**Q: Can I make certain layers more transparent than others?**

A: While `alpha` applies to all layers, you can create separate stackplots or use `PolyCollection` properties:
```python
areas = plt.stackplot(x, y1, y2, y3)
areas[0].set_alpha(0.5)  # Make first layer more transparent
areas[1].set_alpha(0.8)  # Second layer less transparent
```

**Q: How do I handle negative values in stackplots?**

A: Use the `baseline='sym'` parameter for symmetric stacking around zero, or consider using regular line plots for data with significant negative values.

**Q: Can I add edge lines around each stacked area?**

A: Yes, use the `edgecolor` and `linewidth` parameters:
```python
plt.stackplot(x, y1, y2, y3, edgecolor='black', linewidth=1)
```

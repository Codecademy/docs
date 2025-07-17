---
Title: '.percentile()'
Description: 'Computes the q-th percentile of data along a specified axis.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
  - 'Statistics'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`np.percentile()`** is a statistical measure that indicates the value below which a given percentage of observations in a dataset falls. NumPy's `.percentile()` function computes the q-th percentile of data along a specified axis, making it an essential tool for statistical analysis and data exploration.

## Syntax

```pseudo
numpy.percentile(a, q, axis=None, out=None, ...)
```

**Parameters:**

- `a`: Input array or object that can be converted to an array
- `q`: Percentile or sequence of percentiles to compute. Values must be between 0 and 100 inclusive
- `axis` (optional): Axis or axes along which the percentiles are computed. Default is `None` (flattened array)
- `out` (optional): Alternative output array in which to place the result

> **Note:** The ellipses in the syntax (`...`) indicate that there are more optional parameters available, such as `overwrite_input`, `method`, `keepdims`, `weights`, and `interpolation`. These allow for more control over how the percentile is calculated and returned.

**Return value:**

Returns the q-th percentile(s) of the array elements. If `q` is a single percentile, returns a scalar. If multiple percentiles are given, returns an array.

## Example 1: Basic Percentile Calculation Using `np.percentile()` Method

This example demonstrates how to calculate a single percentile from a one-dimensional array:

```py
import numpy as np

# Create a sample array
data = np.array([1, 3, 5, 7, 9, 11, 13, 15, 17, 19])

# Calculate the 50th percentile (median)
result = np.percentile(data, 50)
print(f"50th percentile: {result}")

# Calculate multiple percentiles
quartiles = np.percentile(data, [25, 50, 75])
print(f"Quartiles: {quartiles}")
```

The output of this code is:

```shell
50th percentile: 10.0
Quartiles: [ 5.5 10.  14.5]
```

The 50th percentile represents the median value, which is the middle value when the data is sorted. The function returns `10.0` as the median, and `[5.5, 10.0, 14.5]` for the quartiles.

## Example 2: Analyzing Test Score Distribution Using NumPy's `.percentile()`

This example shows how to use `.percentile()` to analyze student test scores and understand performance distribution:

```py
import numpy as np

# Student test scores from multiple classes
test_scores = np.array([
    [85, 92, 78, 95, 88],  # Class 1
    [72, 85, 90, 67, 82],  # Class 2
    [95, 89, 91, 87, 93],  # Class 3
    [68, 75, 80, 72, 77]   # Class 4
])

# Calculate percentiles for overall performance
overall_scores = test_scores.flatten()
performance_metrics = np.percentile(overall_scores, [10, 25, 50, 75, 90])

print("Performance Distribution:")
print(f"10th percentile (bottom 10%): {performance_metrics[0]}")
print(f"25th percentile (Q1): {performance_metrics[1]}")
print(f"Median (Q2): {performance_metrics[2]}")
print(f"75th percentile (Q3): {performance_metrics[3]}")
print(f"90th percentile (top 10%): {performance_metrics[4]}")

# Calculate median score for each class
class_medians = np.percentile(test_scores, 50, axis=1)
print(f"\nMedian scores by class: {class_medians}")
```

The output of this code is:

```shell
Performance Distribution:
10th percentile (bottom 10%): 71.60000000000001
25th percentile (Q1): 76.5
Median (Q2): 85.0
75th percentile (Q3): 90.25
90th percentile (top 10%): 93.20000000000002

Median scores by class: [88. 82. 91. 75.]
```

This analysis helps identify performance ranges and compare different classes. The overall percentiles show the distribution of all scores, while the class-specific medians reveal which classes perform better on average.

## Codebyte Example: Using `np.percentile()` for Financial Data Analysis

This example demonstrates using `.percentile()` for financial risk analysis with stock price data:

```codebyte/python
import numpy as np

# Simulated daily stock returns (as percentages)
np.random.seed(42)  # For reproducible results
stock_returns = np.random.normal(0.05, 0.15, 252)  # 252 trading days

# Calculate Value at Risk (VaR) using percentiles
var_95 = np.percentile(stock_returns, 5)  # 5th percentile for 95% VaR
var_99 = np.percentile(stock_returns, 1)  # 1st percentile for 99% VaR

print("Risk Analysis:")
print(f"95% VaR: {var_95:.4f} (95% chance losses won't exceed this)")
print(f"99% VaR: {var_99:.4f} (99% chance losses won't exceed this)")

# Calculate performance quartiles
quartiles = np.percentile(stock_returns, [25, 50, 75])
print(f"\nReturn Distribution:")
print(f"Q1 (25th percentile): {quartiles[0]:.4f}")
print(f"Median return: {quartiles[1]:.4f}")
print(f"Q3 (75th percentile): {quartiles[2]:.4f}")

# Identify extreme performance days
top_5_percent = np.percentile(stock_returns, 95)
bottom_5_percent = np.percentile(stock_returns, 5)

print(f"\nExtreme Performance Thresholds:")
print(f"Top 5% days: Returns above {top_5_percent:.4f}")
print(f"Bottom 5% days: Returns below {bottom_5_percent:.4f}")
```

This financial analysis uses percentiles to calculate Value at Risk (VaR), which helps investors understand potential losses, and to identify extreme performance periods in the stock's history.

## Frequently Asked Questions

### 1. What's the difference between `.percentile()` and `.quantile()`?

`.percentile()` uses values from 0-100, while `.quantile()` uses values from 0-1. For example, `percentile(data, 25)` equals `quantile(data, 0.25)`.

### 2. How do I handle NaN values in my data?

Use `np.nanpercentile()` instead of `np.percentile()` to automatically ignore NaN values in your calculations.

### 3. Can I calculate percentiles along specific axes in multi-dimensional arrays?

Yes, use the `axis` parameter. For example, `axis=0` calculates percentiles along rows, `axis=1` along columns, and `axis=None` (default) flattens the array first.

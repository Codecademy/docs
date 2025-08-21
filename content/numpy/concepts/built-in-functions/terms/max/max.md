---
Title: '.max()'
Description: 'Returns the maximum value of an array or maximum values along a specified axis.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Math'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.max()`** function in NumPy returns the maximum value of an array or the maximum values along a specified axis. This function is essential for data analysis, statistical computations, and finding peak values in datasets. The `.max()` function operates on NumPy arrays and can handle multi-dimensional arrays efficiently, making it a fundamental tool for numerical computing and data science applications.

The `.max()` function is commonly used in data preprocessing, outlier detection, normalization processes, and statistical analysis. It can process entire arrays to find global maximum values or work along specific axes to find maximum values per row, column, or other dimensions in multi-dimensional arrays.

## Syntax

```pseudo
numpy.max(a, axis=None, out=None, keepdims=<no value>, initial=<no value>, where=<no value>)
```

**Parameters:**

- `a`: Input array or array-like object containing the data to find maximum values from.
- `axis` (optional): The axis or axes along which to operate.
  - If `None` (default), finds maximum of flattened array.
  - If integer, finds maximum along that axis.
  - If tuple, finds maximum along multiple axes.
- `out` (optional): Alternative output array to store the result. Must have same shape as expected output.
- `keepdims` (optional): If `True`, reduced axes are retained in result as dimensions with size one. If `False` (default), axes are removed.
- `initial` (optional): The maximum value for an output element. Used for empty arrays or as starting value for comparison.
- `where` (optional): Boolean array specifying which elements to include in maximum calculation.

**Return value:**

The `.max()` function returns the maximum value(s). If `axis` is `None`, returns a scalar value. If `axis` is specified, returns an array with maximum values along the specified axis.

> **Note:** If any element in the input array is `NaN`, the function will return `NaN`. To ignore `NaN` values, use `np.nanmax()` instead.

## Example 1: Finding Maximum in 1D Array

This example demonstrates finding the maximum value in a one-dimensional array:

```py
import numpy as np

# Create a 1D array of test scores
test_scores = np.array([85, 92, 78, 96, 88, 91, 83])

# Find the highest test score
max_score = np.max(test_scores)

print(f"Test scores: {test_scores}")
print(f"Maximum score: {max_score}")
```

The output of this code is:

```shell
Test scores: [85 92 78 96 88 91 83]
Maximum score: 96
```

In this example, `np.max()` scans through all elements in the `test_scores` array and returns `96`, which is the highest value. This is useful for quickly identifying the best performance in a dataset.

## Example 2: Sales Data Analysis

This example shows how to analyze monthly sales data across different product categories using axis operations:

```py
import numpy as np

# Create sales data: 4 products × 3 months (rows: products, columns: months)
# Products: Laptops, Phones, Tablets, Accessories
# Months: Jan, Feb, Mar
monthly_sales = np.array([
  [25000, 28000, 32000],  # Laptops
  [45000, 42000, 48000],  # Phones
  [18000, 20000, 22000],  # Tablets
  [8000, 9500, 11000]     # Accessories
])

# Find overall maximum sales across all products and months
overall_max = np.max(monthly_sales)

# Find maximum sales per product (across months)
max_per_product = np.max(monthly_sales, axis=1)

# Find maximum sales per month (across products)
max_per_month = np.max(monthly_sales, axis=0)

print("Monthly Sales Data:")
print(monthly_sales)
print(f"\nOverall maximum sales: ${overall_max:,}")
print(f"Maximum sales per product: {max_per_product}")
print(f"Maximum sales per month: {max_per_month}")
```

The output of this code is:

```shell
Monthly Sales Data:
[[25000 28000 32000]
 [45000 42000 48000]
 [18000 20000 22000]
 [ 8000  9500 11000]]

Overall maximum sales: $48,000
Maximum sales per product: [32000 48000 22000 11000]
Maximum sales per month: [45000 42000 48000]
```

This example demonstrates how the `axis` parameter controls the direction of the maximum calculation. Using `axis=1` finds the maximum across columns (months) for each product, while `axis=0` finds the maximum across rows (products) for each month.

## Codebyte Example: Temperature Monitoring System

This example illustrates using `.max()` with the `keepdims` parameter for maintaining array dimensions in sensor data analysis:

```codebyte/python
import numpy as np

# Temperature readings from 3 sensors over 4 time periods (3x4 array)
# Sensors: Indoor, Outdoor, Server Room
# Time periods: Morning, Noon, Afternoon, Evening
temperature_data = np.array([
  [22.5, 28.1, 30.2, 25.8],  # Indoor sensor
  [18.3, 35.7, 33.9, 24.1],  # Outdoor sensor
  [19.8, 21.2, 23.5, 20.9]   # Server room sensor
])

# Find maximum temperature per sensor without keepdims
max_temp_normal = np.max(temperature_data, axis=1)

# Find maximum temperature per sensor with keepdims=True
max_temp_keepdims = np.max(temperature_data, axis=1, keepdims=True)

print("Temperature readings (°C):")
print(temperature_data)
print(f"\nOriginal array shape: {temperature_data.shape}")
print(f"\nMax per sensor (normal): {max_temp_normal}")
print(f"Shape without keepdims: {max_temp_normal.shape}")
print(f"\nMax per sensor (keepdims): {max_temp_keepdims}")
print(f"Shape with keepdims: {max_temp_keepdims.shape}")

# Demonstrate broadcasting capability with keepdims
temperature_normalized = temperature_data / max_temp_keepdims
print(f"\nNormalized temperatures:\n{temperature_normalized}")
```

The `keepdims=True` parameter preserves the original number of dimensions by keeping reduced axes as size-1 dimensions. This enables broadcasting operations like normalization, where each temperature reading is divided by the maximum temperature of its respective sensor.

## Frequently Asked Questions

### 1. What's the difference between `np.max()` and `np.maximum()`?

`np.max()` finds the maximum value within a single array or along specified axes, while `np.maximum()` compares elements between two arrays element-wise and returns an array containing the maximum values from each position.

### 2. How does `np.max()` handle `NaN` values?

If any element in the input array is `NaN`, `np.max()` returns `NaN`. To ignore `NaN` values and find the maximum among valid numbers, use `np.nanmax()` instead.

### 3. What happens when I use `.max()` on an empty array?

Calling `.max()` on an empty array raises a ValueError. You can use the `initial` parameter to provide a default value for empty arrays: `np.max(empty_array, initial=0)`.

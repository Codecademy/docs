---
Title: '.all()'
Description: 'Returns True if all elements in the array evaluate to True, or along a specified axis.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Methods'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.all()`** method returns `True` if all elements in an ndarray evaluate to `True`, or if all elements along a specified axis evaluate to `True`. This method is called directly on an ndarray object and is commonly used for validation, conditional checks, and data quality assessment in numerical computations.

The `.all()` method can operate on the entire array to check if all values are truthy, or work along specific axes to perform row-wise or column-wise boolean validation. It follows Python's truth value testing conventions where non-zero numbers, non-empty arrays, and `True` values are considered truthy, while zero, empty arrays, `None`, and `False` are considered falsy. This method is particularly useful in data validation, filtering operations, and quality control checks in data science workflows.

## Syntax

```pseudo
ndarray.all(axis=None, out=None, keepdims=False, where=True)
```

**Parameters:**

- `axis` (optional): The axis or axes along which to perform the logical AND operation.
  - If `None` (default), checks if all elements in the entire flattened array are `True`.
  - If integer, checks along that specific axis.
  - If tuple of integers, checks along multiple axes.
- `out` (optional): Alternative output array to store the result. Must have the same shape as the expected output.
- `keepdims` (optional): If `True`, the reduced axes are retained in the result as dimensions with size one. If `False` (default), the axes are removed from the result.
- `where` (optional): Boolean array indicating which elements to include in the check. Elements where the condition is `False` are ignored and assumed to be `True`.

**Return Value:**

Returns `True` if all elements evaluate to `True`, otherwise returns `False`. If `axis` is `None`, returns a single boolean scalar. If `axis` is specified, returns an ndarray of boolean values along the specified axis.

## Example 1: Basic Boolean Validation

This example demonstrates using `.all()` to validate boolean conditions across an array:

```py
import numpy as np

# Create arrays with different boolean patterns
all_true = np.array([True, True, True, True])
has_false = np.array([True, True, False, True])
all_positive = np.array([1, 5, 3, 7])
has_zero = np.array([1, 5, 0, 7])

print("All True array:", all_true.all())
print("Array with False:", has_false.all())
print("All positive numbers:", all_positive.all())
print("Array with zero:", has_zero.all())

# Using comparison operators
data = np.array([85, 92, 78, 95, 88])
all_passing = (data >= 70).all()
all_excellent = (data >= 90).all()

print(f"\nAll scores >= 70: {all_passing}")
print(f"All scores >= 90: {all_excellent}")
```

The output of this code is:

```shell
All True array: True
Array with False: False
All positive numbers: True
Array with zero: False

All scores >= 70: True
All scores >= 90: False
```

This example shows how `.all()` evaluates different types of arrays. Non-zero numbers are considered truthy, while zero and `False` values cause the method to return `False`.

## Example 2: Axis-wise Validation in Multi-dimensional Arrays

This example demonstrates how to validate conditions along specific axes in a 2D array:

```py
import numpy as np

# Create a 2D array of test results (pass=1, fail=0)
test_results = np.array([
    [1, 1, 1, 1],  # Student 1: All passed
    [1, 1, 0, 1],  # Student 2: One failure
    [1, 1, 1, 1],  # Student 3: All passed
    [1, 0, 1, 1]   # Student 4: One failure
])

print("Test results (1=pass, 0=fail):")
print(test_results)

# Check if all students passed each test (column-wise)
all_passed_per_test = test_results.all(axis=0)
print(f"\nAll students passed each test: {all_passed_per_test}")

# Check if each student passed all tests (row-wise)
all_passed_per_student = test_results.all(axis=1)
print(f"Each student passed all tests: {all_passed_per_student}")

# Check if all students passed all tests (entire array)
perfect_class = test_results.all()
print(f"Perfect class (all passed): {perfect_class}")
```

The output of this code is:

```shell
Test results (1=pass, 0=fail):
[[1 1 1 1]
 [1 1 0 1]
 [1 1 1 1]
 [1 0 1 1]]

All students passed each test: [ True False False  True]
Each student passed all tests: [ True False  True False]
Perfect class (all passed): False
```

This example shows how the `axis` parameter controls the direction of validation. Using `axis=0` checks columns (tests), while `axis=1` checks rows (students).

## Example 3: Data Quality Validation with keepdims

This example shows how to use `.all()` with `keepdims` for data quality checks that maintain array dimensions:

```py
import numpy as np

# Create sensor data with some readings potentially out of range
sensor_data = np.array([
    [45, 52, 48, 51],
    [46, 49, 47, 50],
    [44, 53, 46, 49]
])

print("Sensor readings:")
print(sensor_data)

# Define valid range (40-55)
min_valid = 40
max_valid = 55

# Check if all readings per sensor are within range
within_range = (sensor_data >= min_valid) & (sensor_data <= max_valid)
all_valid_per_sensor = within_range.all(axis=1, keepdims=True)

print(f"\nAll readings valid per sensor:\n{all_valid_per_sensor}")
print(f"Shape: {all_valid_per_sensor.shape}")

# Create a quality report
quality_report = np.where(all_valid_per_sensor, "PASS", "FAIL")
print(f"\nQuality report:\n{quality_report}")
```

The output of this code is:

```shell
Sensor readings:
[[45 52 48 51]
 [46 49 47 50]
 [44 53 46 49]]

All readings valid per sensor:
[[ True]
 [ True]
 [ True]]
Shape: (3, 1)

Quality report:
[['PASS']
 ['PASS']
 ['PASS']]
```

The `keepdims=True` parameter maintains array dimensions, making it easier to combine validation results with other operations or create aligned reports.

## Example 4: Using the where Parameter for Conditional Validation

This example demonstrates selective validation using the `where` parameter:

```py
import numpy as np

# Create an array of product inventory status
# Positive = in stock, Negative = discontinued, Zero = out of stock
inventory = np.array([
    [25, -1, 15, 30],
    [40, 22, -1, 18],
    [0, 35, 28, -1]
])

print("Inventory (positive=in stock, negative=discontinued, 0=out):")
print(inventory)

# Check if all active products (non-negative) are in stock (non-zero)
active_mask = inventory >= 0
all_active_in_stock = (inventory > 0).all(where=active_mask)
print(f"\nAll active products in stock: {all_active_in_stock}")

# Check per row if all active products are in stock
all_in_stock_per_row = (inventory > 0).all(axis=1, where=active_mask, keepdims=True)
print(f"All active products in stock per row:\n{all_in_stock_per_row}")
```

The output of this code is:

```shell
Inventory (positive=in stock, negative=discontinued, 0=out):
[[25 -1 15 30]
 [40 22 -1 18]
 [ 0 35 28 -1]]

All active products in stock: False
All active products in stock per row:
[[True]
 [True]
 [False]]
```

The `where` parameter allows selective validation, ignoring certain elements (like discontinued products) when checking conditions.

## Codebyte Example

This interactive example demonstrates practical validation scenarios with `.all()`:

```codebyte/python
import numpy as np

# Create a dataset of temperature readings from multiple sensors
temperatures = np.array([
    [22.5, 23.1, 22.8, 23.4],
    [22.7, 23.0, 22.9, 23.2],
    [22.6, 22.8, 23.1, 23.3]
])

print("Temperature readings (°C):")
print(temperatures)

# Define acceptable range
min_temp = 22.0
max_temp = 24.0

# Check if all readings are within acceptable range
within_range = (temperatures >= min_temp) & (temperatures <= max_temp)
all_valid = within_range.all()
print(f"\nAll readings within range [{min_temp}, {max_temp}]: {all_valid}")

# Check per sensor if all readings are valid
all_valid_per_sensor = within_range.all(axis=1)
print(f"Valid readings per sensor: {all_valid_per_sensor}")

# Check if all sensors have at least one reading above 23°C
above_threshold = (temperatures > 23.0).all(axis=0)
print(f"All sensors recorded > 23°C at each time: {above_threshold}")

# Comprehensive validation
print(f"\nSystem status: {'OPERATIONAL' if all_valid else 'CHECK SENSORS'}")
```

This example shows how `.all()` can be used for comprehensive data validation across multiple dimensions, which is common in sensor monitoring, quality control, and data integrity checks.

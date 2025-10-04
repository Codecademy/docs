---
Title: '.mean()'
Description: 'Calculates the arithmetic mean of elements in a NumPy array along the specified axis.'
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

The **`.mean()`** method calculates and returns the arithmetic mean of elements in a NumPy array. It computes the average by summing all elements along the specified axis and dividing by the number of elements. This method is one of the fundamental statistical functions in NumPy that data scientists and analysts use to understand the central tendency of numerical data.

NumPy's `.mean()` is highly versatile, allowing calculation of means across entire arrays or along specific dimensions. It's commonly used in data analysis, scientific computing, and machine learning for tasks such as feature normalization, statistical analysis, and data preprocessing.

## Syntax

```pseudo
numpy.mean(a, axis=None, dtype=None, out=None, keepdims=<no value>, where=<no value>)
```

**Parameters:**

- `a`: The array containing numbers whose mean is to be calculated.
- `axis` (Optional): Axis or axes along which the means are computed. If `None`, the array is flattened before computation.
- `dtype` (Optional): The data type used for calculating the mean. By default, `float64` is used for integers, and the input data type is preserved for floating-point numbers.
- `out` (Optional): Alternative output array to store the result. Must have the same shape as expected output.
- `keepdims` (Optional): If `True`, retains the reduced dimensions as size one, ensuring consistency for broadcasting.
- `where` (Optional): Elements to include in the mean calculation. Must be a boolean array with the same shape as `a`.

**Return value:**

The `.mean()` method returns an [ndarray](https://www.codecademy.com/resources/docs/numpy/ndarray) containing the mean values. If `axis` is `None`, the result is a scalar value.

## Example 1: Basic Mean Calculation

This example demonstrates how to calculate the mean of a one-dimensional NumPy array:

```py
import numpy as np

# Create a 1D array
array1 = np.array([0, 1, 2, 3, 4, 5, 6, 7])

# Calculate the mean of the array
avg = np.mean(array1)

print("Array:", array1)
print("Mean value:", avg)
```

This example results in the following output:

```shell
Array: [0 1 2 3 4 5 6 7]
Mean value: 3.5
```

In this example, a 1D array with values from 0 to 7 is created, and the arithmetic mean is calculated, which is 3.5 (the sum of all elements divided by the number of elements).

## Example 2: Calculating Mean Across Different Axes

This example shows how to compute the mean along different axes of a multi-dimensional array, which is useful in many data analysis scenarios:

```py
import numpy as np

# Create a 3D array
array1 = np.array([[[1, 2], [3, 4]],
                   [[5, 6], [7, 8]]])

# Print the array shape and the array itself
print("Array shape:", array1.shape)
print("Array:\n", array1)

# Find the mean of entire array
mean1 = np.mean(array1)

# Find the mean across axis 0
mean2 = np.mean(array1, axis=0)

# Find the mean across axis 0 and 1
mean3 = np.mean(array1, (0, 1))

print("\nMean of the entire array:", mean1)
print("Mean across axis 0:\n", mean2)
print("Mean across axis 0 and 1:", mean3)
```

This example results in the following output:

```shell
Array shape: (2, 2, 2)
Array:
 [[[1 2]
  [3 4]]

 [[5 6]
  [7 8]]]

Mean of the entire array: 4.5
Mean across axis 0:
 [[3. 4.]
 [5. 6.]]
Mean across axis 0 and 1: [4. 5.]
```

When calculating the mean without specifying an axis, all elements are averaged. When specifying `axis=0`, the mean is calculated along the first dimension, resulting in a 2D array. When specifying both axes 0 and 1 with `(0, 1)`, the result is a 1D array with the mean of all elements in each 2D slice.

## Example 3: Data Analysis with Real-world Data

This example demonstrates how to use `.mean()` to analyze temperature data, a common application in environmental science and meteorology:

```py
import numpy as np

# Monthly average temperatures (°C) for a city over 2 years
# Rows: Years (2023, 2024)
# Columns: Months (Jan to Dec)
temperatures = np.array([
    [5.2, 6.8, 9.3, 13.5, 18.2, 22.6, 25.1, 24.3, 19.7, 14.2, 9.1, 6.3],  # 2023
    [4.8, 6.5, 8.9, 14.1, 17.9, 23.2, 26.0, 25.2, 19.5, 13.8, 8.5, 5.9]   # 2024
])

print("Temperature data shape:", temperatures.shape)

# Calculate the average temperature for each year
yearly_avg = np.mean(temperatures, axis=1)
print("\nYearly average temperatures:")
for year, avg in zip([2023, 2024], yearly_avg):
  print(f"{year}: {avg:.2f}°C")

# Calculate the average temperature for each month across years
monthly_avg = np.mean(temperatures, axis=0)
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

print("\nMonthly average temperatures across years:")
for month, avg in zip(months, monthly_avg):
  print(f"{month}: {avg:.2f}°C")

# Calculate the overall average temperature
overall_avg = np.mean(temperatures)
print("\nOverall average temperature: {:.2f}°C".format(overall_avg))
```

This example results in the following output:

```shell
Temperature data shape: (2, 12)

Yearly average temperatures:
2023: 14.52°C
2024: 14.53°C

Monthly average temperatures across years:
Jan: 5.00°C
Feb: 6.65°C
Mar: 9.10°C
Apr: 13.80°C
May: 18.05°C
Jun: 22.90°C
Jul: 25.55°C
Aug: 24.75°C
Sep: 19.60°C
Oct: 14.00°C
Nov: 8.80°C
Dec: 6.10°C

Overall average temperature: 14.53°C
```

This example shows how `.mean()` can be used to analyze temperature data by calculating yearly averages, monthly averages across years, and the overall average temperature.

## Codebyte Example: Student Exam Score Analysis

This example demonstrates how to use `.mean()` to analyze student exam scores, a common task in educational assessment:

```codebyte/python
import numpy as np

# Student scores for 4 exams during a semester
# Each row represents a student, each column represents an exam
exam_scores = np.array([
    [85, 90, 88, 92],  # Student 1
    [78, 82, 80, 84],  # Student 2
    [92, 95, 89, 96],  # Student 3
    [65, 70, 75, 68],  # Student 4
    [88, 87, 84, 90]   # Student 5
])

# Calculate each student's average score
student_averages = np.mean(exam_scores, axis=1)

# Calculate the class average for each exam
exam_averages = np.mean(exam_scores, axis=0)

# Calculate the overall class average
class_average = np.mean(exam_scores)

print("Student average scores:")
for i, avg in enumerate(student_averages, 1):
  print(f"Student {i}: {avg:.1f}")

print("\nClass average for each exam:")
for i, avg in enumerate(exam_averages, 1):
  print(f"Exam {i}: {avg:.1f}")

print(f"\nOverall class average: {class_average:.1f}")
```

## Frequently Asked Questions

### 1. What's the difference between `np.mean()` and `np.average()`?

While both calculate the arithmetic mean, `np.average()` allows specifying weights for elements, enabling weighted averages, whereas `np.mean()` treats all values equally.

### 2. How does NumPy's `.mean()` handle `NaN` values?

By default, `.mean()` will return `NaN` if any of the values being averaged are `NaN`. To ignore `NaN` values, use `np.nanmean()` instead.

### 3. Can `.mean()` calculate the mean of strings or other non-numeric data?

No, `.mean()` works only with numeric data. Attempting to calculate the mean of non-numeric data will result in a `TypeError`.

### 4. How can dimensions be preserved when calculating means along an axis?

Set the `keepdims=True` parameter to maintain the dimensions of the original array in the output.

### 5. Is there a performance difference between using `.mean()` method and the `np.mean()` function?

No significant performance difference exists between `arr.mean()` and `np.mean(arr)` as they both call the same underlying implementation. Choose the syntax that makes code more readable.

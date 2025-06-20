---
Title: '.average()'
Description: 'Computes the weighted average of array elements along a specified axis.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Methods'
  - 'NumPy'
  - 'Statistics'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, the **`.average()`** method is used to compute the weighted average of array elements along specified axes. This function allows assigning different weights to different elements, making it particularly useful for statistical analysis, data science applications, and scenarios where certain data points should have more influence on the final result.

In data science, the `.average()` method is extensively used for calculating weighted means in statistical analysis, financial portfolio analysis where different assets have varying importance, image processing for pixel averaging with different weights, machine learning for computing weighted accuracy metrics, and scientific computing where measurement precision varies across data points.

## Syntax

```pseudo
numpy.average(a, axis=None, weights=None, returned=False, keepdims=False)
```

**Parameters:**

- `a`: Input array containing the data for which the average will be computed.
- `axis` (Optional): Axis or axes along which to average. The default is `None`, computing the average of all elements.
- `weights` (Optional): Array of weights associated with the values in `a`. It must be the same shape as `a` or broadcastable. If `None`, all values are equally weighted.
- `returned` (Optional): If `True`, returns a tuple of the average and the sum of weights. The default is False.
- `keepdims` (Optional): If `True`, retains reduced axes with size 1, preserving input dimensions in the result.

**Return value:**

- If `returned=False` (default): Returns the weighted average as a scalar or array depending on `axis`.
- If `returned=True`: Returns a tuple: `(average, sum of weights)`.

## Example 1: Basic Weighted Average Operations

This example demonstrates fundamental usage of `numpy.average()` with different weighting schemes:

```py
import numpy as np

# Creating sample data for student grades
grades = np.array([85, 92, 78, 96, 88])
# Different weights for different assignments (homework, quizzes, midterm, final, project)
weights = np.array([0.1, 0.2, 0.2, 0.3, 0.2])

# Computing weighted average
weighted_avg = np.average(grades, weights=weights)

# Computing simple average for comparison
simple_avg = np.average(grades)

print("Student grades:", grades)
print("Assignment weights:", weights)
print("Weighted average:", weighted_avg)
print("Simple average:", simple_avg)

# Getting both average and sum of weights
avg_with_sum, sum_weights = np.average(grades, weights=weights, returned=True)
print("Average with weight sum:", avg_with_sum)
print("Sum of weights:", sum_weights)
```

This example results in the following output:

```shell
Student grades: [85 92 78 96 88]
Assignment weights: [0.1 0.2 0.2 0.3 0.2]
Weighted average: 88.9
Simple average: 87.8
Average with weight sum: 88.9
Sum of weights: 1.0
```

The weighted average gives more importance to the final exam (30% weight) and less to homework (10% weight), resulting in a different value than the simple average.

## Example 2: Financial Portfolio Analysis

This example shows how `numpy.average()` is used in financial analysis to calculate portfolio returns with different asset allocations:

```py
import numpy as np

# Monthly returns for different assets (stocks, bonds, commodities)
asset_returns = np.array([
    [0.12, 0.08, -0.02],  # January
    [0.05, 0.06, 0.15],   # February
    [-0.03, 0.04, 0.08],  # March
    [0.18, 0.07, -0.05],  # April
    [0.02, 0.09, 0.12]    # May
])

# Portfolio allocation weights (60% stocks, 30% bonds, 10% commodities)
portfolio_weights = np.array([0.6, 0.3, 0.1])

# Calculate monthly portfolio returns
monthly_portfolio_returns = np.average(asset_returns, axis=1, weights=portfolio_weights)

# Calculate overall portfolio performance
overall_return = np.average(monthly_portfolio_returns)

print("Asset returns by month:")
print(asset_returns)
print("Portfolio weights:", portfolio_weights)
print("Monthly portfolio returns:", monthly_portfolio_returns)
print("Average monthly return:", f"{overall_return:.4f}")
print("Annualized return estimate:", f"{overall_return * 12:.2%}")
```

This example results in the following output:

```shell
Asset returns by month:
[[ 0.12  0.08 -0.02]
 [ 0.05  0.06  0.15]
 [-0.03  0.04  0.08]
 [ 0.18  0.07 -0.05]
 [ 0.02  0.09  0.12]]
Portfolio weights: [0.6 0.3 0.1]
Monthly portfolio returns: [0.094 0.063 0.002 0.124 0.051]
Average monthly return: 0.0668
Annualized return estimate: 80.16%
```

Portfolio managers use weighted averages to calculate expected returns based on asset allocation strategies, helping them understand overall portfolio performance.

## Codebyte Example:

This example demonstrates how `.average()` computes weighted or unweighted averages across specified axes in a multi-dimensional array:

```codebyte/python
import numpy as np

# Creating a 3D array representing test scores for multiple students across subjects
# Shape: (3 students, 4 subjects, 5 tests)
test_scores = np.random.randint(70, 100, size=(3, 4, 5))

# Different weights for each test (increasing importance toward final tests)
test_weights = np.array([0.1, 0.15, 0.2, 0.25, 0.3])

# Calculate weighted average for each student across all subjects and tests
student_averages = np.average(test_scores, axis=(1, 2), weights=None)

# Calculate weighted average for each subject across all students and tests
# First average across tests with weights, then average across students
weighted_tests = np.average(test_scores, axis=2, weights=test_weights)
subject_averages = np.mean(weighted_tests, axis=0)

# Calculate average for the last test across all dimensions
final_test_avg = np.average(test_scores[:, :, -1])

print("Test scores shape:", test_scores.shape)
print("Test weights:", test_weights)
print("Student averages:", student_averages)
print("Subject averages:", subject_averages)
print("Final test average:", final_test_avg)
```

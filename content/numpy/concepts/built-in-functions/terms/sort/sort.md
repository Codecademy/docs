---
Title: '.sort()'
Description: 'Returns a sorted copy of an array in ascending order.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
  - 'Sorting Algorithms'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`numpy.sort()`** method is a built-in NumPy function that returns a sorted copy of an array. It arranges the elements of an array in ascending order without modifying the original array, making it a fundamental tool for data organization and analysis in scientific computing and data science applications.

## Syntax of `numpy.sort()`

```pseudo
numpy.sort(a, axis=-1, kind=None, order=None)
```

**Parameters:**

- `a`: The input array to be sorted
- `axis`: The axis along which to sort. If `None`, the array is flattened before sorting. Default is `-1` (sorts along the last axis)
- `kind`: Sorting algorithm. Options include [`'quicksort'`](https://www.codecademy.com/resources/docs/general/algorithm/quick-sort) (default), [`'mergesort'`](https://www.codecademy.com/resources/docs/general/algorithm/merge-sort), [`'heapsort'`](https://www.codecademy.com/resources/docs/general/algorithm/heap-sort), or `'stable'`
- `order`: Specifies which fields to compare first when sorting structured arrays. Can be a string or list of strings

**Return value:**

Returns a sorted copy of the input array with the same type and shape as the original array.

## Example 1: Basic Array Sorting Using `numpy.sort()` Method

The simplest use case of `.sort()` is sorting a one-dimensional array in ascending order:

```py
import numpy as np

# Create an array with unsorted numbers
numbers = np.array([64, 34, 25, 12, 22, 11, 90])

# Sort the array in ascending order
sorted_numbers = np.sort(numbers)

print("Original array:", numbers)
print("Sorted array:", sorted_numbers)
```

The output of this code is:

```shell
Original array: [64 34 25 12 22 11 90]
Sorted array: [11 12 22 25 34 64 90]
```

This example demonstrates the basic functionality of `.sort()` where it creates a new sorted array while leaving the original array unchanged. The method automatically arranges the elements from smallest to largest.

## Example 2: Sorting Student Test Scores Using NumPy's `.sort()`

This example shows how to sort student test scores to identify performance rankings and analyze grade distributions:

```py
import numpy as np

# Student test scores from a class
test_scores = np.array([85, 92, 78, 96, 88, 76, 91, 83, 87, 94])

# Sort scores in ascending order
sorted_scores = np.sort(test_scores)

# Get the lowest and highest scores
lowest_score = sorted_scores[0]
highest_score = sorted_scores[-1]

# Calculate median score (middle value)
median_score = np.median(sorted_scores)

print("Original scores:", test_scores)
print("Sorted scores:", sorted_scores)
print(f"Lowest score: {lowest_score}")
print(f"Highest score: {highest_score}")
print(f"Median score: {median_score}")
```

The output of this code is:

```shell
Original scores: [85 92 78 96 88 76 91 83 87 94]
Sorted scores: [76 78 83 85 87 88 91 92 94 96]
Lowest score: 76
Highest score: 96
Median score: 87
```

This example demonstrates how sorting test scores helps educators quickly identify the range of performance and calculate important statistics like median values.

## Codebyte Example: Sorting Stock Prices by Date

This example shows how to sort daily stock prices to analyze market trends and identify patterns over time:

```codebyte/python
import numpy as np

# Daily stock prices over two weeks (in dollars)
stock_prices = np.array([125.50, 127.20, 123.80, 128.90, 131.45,
                        129.70, 133.20, 130.15, 128.60, 132.80,
                        134.90, 131.25, 129.40, 135.70])

# Sort prices to analyze the range and distribution
sorted_prices = np.sort(stock_prices)

# Find the price range
price_range = sorted_prices[-1] - sorted_prices[0]

# Calculate quartiles for market analysis
q1 = np.percentile(sorted_prices, 25)
q3 = np.percentile(sorted_prices, 75)

print("Original prices:", stock_prices)
print("Sorted prices:", sorted_prices)
print(f"Price range: ${price_range:.2f}")
print(f"First quartile (Q1): ${q1:.2f}")
print(f"Third quartile (Q3): ${q3:.2f}")
```

This example illustrates how sorting stock prices helps financial analysts understand market volatility and identify key price levels for investment decisions.

## Frequently Asked Questions

### 1. Does `.sort()` modify the original array?

It depends which method you use: `numpy.sort(array)` returns a sorted copy without modifying the original, while `array.sort()` sorts the array in-place.

### 2. Can I sort arrays in descending order?

The `.sort()` method only sorts in ascending order. To get descending order, use `np.sort(array)[::-1]` to reverse the sorted array.

### 3. Can I sort multidimensional arrays?

Yes, use the `axis` parameter to specify which axis to sort along. For example, `np.sort(array, axis=0)` sorts along rows, while `np.sort(array, axis=1)` sorts along columns.

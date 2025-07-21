---
Title: '.arange()'
Description: 'Generates evenly spaced values within a given interval; commonly used to create numeric sequences in NumPy.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'NumPy'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.arange()`** function is a fundamental NumPy method that creates arrays of evenly spaced values within a specified interval. It serves as NumPy's equivalent to Python's built-in [`range()`](https://www.codecademy.com/resources/docs/python/built-in-functions/range) function, but with enhanced capabilities for numerical computing. Unlike `range()` which returns a [list](https://www.codecademy.com/resources/docs/python/lists), `numpy.arange()` returns a NumPy array that supports advanced mathematical operations and is optimized for numerical computations.

This function is extensively used in scientific computing, data analysis, and machine learning applications where you need to generate sequences of numbers for indexing, plotting, mathematical calculations, or creating coordinate systems. Its versatility makes it an essential tool for creating arrays for loops, generating test data, creating mathematical sequences, and establishing grids for visualization purposes.

## Syntax

```pseudo
numpy.arange([start], stop, [step], dtype=None, *, like=None)
```

**Parameters:**

- `start` (optional): The starting value of the sequence. Default is 0.
- `stop` (required): The end value of the sequence (exclusive).
- `step` (optional): The spacing between consecutive values. Default is 1.
- `dtype` (optional): The desired data type of the output array.
- `like` (optional): Reference object to allow creation of arrays which are not NumPy arrays.

**Returns:**

`ndarray`: Array of evenly spaced values within the given interval.

## Example 1: Basic Integer Sequence

This example demonstrates the most fundamental use of `numpy.arange()` to create a simple sequence of integers:

```py
import numpy as np

# Create a sequence from 0 to 9
numbers = np.arange(10)
print("Basic sequence:", numbers)

# Create a sequence from 5 to 14
custom_range = np.arange(5, 15)
print("Custom range:", custom_range)

# Create a sequence with step size
stepped_sequence = np.arange(0, 20, 3)
print("Stepped sequence:", stepped_sequence)
```

The output of this code is:

```shell
Basic sequence: [0 1 2 3 4 5 6 7 8 9]
Custom range: [5 6 7 8 9 10 11 12 13 14]
Stepped sequence: [0 3 6 9 12 15 18]
```

This example shows how `arange()` can generate sequences with different starting points and step sizes, making it perfect for creating index arrays or simple numerical sequences.

## Example 2: Time Series Data Generation

This example demonstrates using `numpy.arange()` for creating time-based sequences commonly used in data analysis and plotting:

```py
import numpy as np

# Generate hourly timestamps for a day (24 hours)
hours = np.arange(0, 24, 1)
print("Hours in a day:", hours)

# Generate time points for a sine wave (0 to 2π with 0.1 intervals)
time_points = np.arange(0, 2*np.pi, 0.1)
sine_wave = np.sin(time_points)

print("Time points:", time_points[:10])  # Show first 10 values
print("Sine values:", sine_wave[:10])    # Show corresponding sine values

# Generate monthly data points for a year
months = np.arange(1, 13)
quarterly_data = np.arange(1, 13, 3)  # Quarterly intervals

print("Monthly sequence:", months)
print("Quarterly sequence:", quarterly_data)
```

The output of this code is:

```shell
Hours in a day: [ 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23]
Time points: [0.  0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9]
Sine values: [0.         0.09983342 0.19866933 0.29552021 0.38941834 0.47942554
 0.56464247 0.64421769 0.71735609 0.78332691]
Monthly sequence: [ 1  2  3  4  5  6  7  8  9 10 11 12]
Quarterly sequence: [1 4 7 10]
```

This example shows how `arange()` is particularly useful for generating time-based sequences and creating data for mathematical functions, which is common in scientific computing and data visualization.

## Codebyte Example: Financial Data Analysis

This example shows how `numpy.arange()` can be used in financial analysis for creating price ranges, percentage calculations, and investment scenarios:

```codebyte/python
import numpy as np

# Generate stock price analysis ranges
price_range = np.arange(100, 201, 10)  # Stock prices from $100 to $200
print("Stock price range:", price_range)

# Calculate percentage returns
percentage_returns = np.arange(-0.05, 0.06, 0.01)  # -5% to +5% returns
print("Percentage returns:", percentage_returns)

# Investment period analysis (years)
investment_years = np.arange(1, 11)  # 1 to 10 years
initial_investment = 10000
annual_rate = 0.07

# Calculate compound interest for each year
compound_values = initial_investment * (1 + annual_rate) ** investment_years
print("Investment years:", investment_years)
print("Compound values:", compound_values.round(2))

# Risk assessment levels
risk_levels = np.arange(0.1, 1.1, 0.1)  # Risk from 10% to 100%
print("Risk assessment levels:", risk_levels.round(2))
```

This practical example demonstrates how `arange()` helps create structured datasets for financial modeling, allowing analysts to generate systematic ranges for price analysis, return calculations, and investment projections.

## Frequently Asked Questions

### 1. What's the difference between `numpy.arange()` and Python's `range()`?

`numpy.arange()` returns a NumPy array that supports mathematical operations and can handle floating-point steps, while `range()` returns a range object that only works with integers and is primarily used for iteration.

### 2. Can `numpy.arange()` work with floating-point numbers?

Yes, `numpy.arange()` supports floating-point start, stop, and step values, making it ideal for creating decimal sequences that `range()` cannot handle.

### 3. Can I create decreasing sequences with `arange()`?

Yes, use a negative step value. For example, `np.arange(10, 0, -1)` creates a decreasing sequence from 10 to 1.

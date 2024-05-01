---
Title: 'Math Methods'
Description: 'Performs mathematical operations on arrays.'
Subjects:
  - 'Computer Science'
Tags:
  - 'NumPy'
  - 'Math'
  - 'Methods'
  - 'Arrays'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, **Math Methods** are used to perform mathematical operations on arrays. These methods encompass arithmetic operations, trigonometric functions, exponential and logarithmic functions, and more. They play a crucial role in scientific computing, data analysis, and machine learning, making NumPy indispensable across scientific research, engineering, finance, and data analysis domains.

## Syntax

The generic syntax for the NumPy math methods is as follows:

```pseudo
numpy.math_method()
```

## Example

```py
import numpy as np

# Perform element-wise addition of two arrays using numpy.add() method
result = np.add([1, 2, 3], [10, 20, 30])
print("Result of addition:", result)
```

```shell
Result of addition: [11 22 33]
```

## Basic Categories of Math Methods

### 1. Basic Arithmetic Operations

- Addition `numpy.add()`: Performs element-wise addition of arrays.
- Subtraction `numpy.subtract()`: Performs element-wise subtraction of arrays.
- Multiplication `numpy.multiply()`: Performs element-wise multiplication of arrays.
- Division `numpy.divide()`: Performs element-wise division of arrays.
- Power `numpy.power()`: Performs element-wise exponentiation of arrays.

### 2. Trigonometric Functions

- Sine `numpy.sin()`: Computes the sine of each element in the array.
- Cosine `numpy.cos()`: Computes the cosine of each element in the array.
- Tangent `numpy.tan()`: Computes the tangent of each element in the array.
- Inverse Sine `numpy.arcsin()`: Computes the inverse sine of each element in the array.
- Inverse Cosine `numpy.arccos()`: Computes the inverse cosine of each element in the array.
- Inverse Tangent `numpy.arctan()`: Computes the inverse tangent of each element in the array.

### 3. Exponential and Logarithmic Functions

- Exponential `numpy.exp()`: Computes the exponential of each element in the array.
- Natural Logarithm `numpy.log()`: Computes the natural logarithm of each element in the array.
- Base-10 Logarithm `numpy.log10()`: Computes the base-10 logarithm of each element in the array.

### 4. Miscellaneous Functions

- Absolute Value `numpy.absolute()`: Computes the absolute value of each element in the array.
- Square Root `numpy.sqrt()`: Computes the non-negative square root of each element in the array.
- Ceiling `numpy.ceil()`: Rounds each element of the array to the nearest integer greater than or equal to that element.
- Floor `numpy.floor()`: Rounds each element of the array to the nearest integer less than or equal to that element.
- Rounding `numpy.round()`: Rounds each element of the array to the nearest integer.

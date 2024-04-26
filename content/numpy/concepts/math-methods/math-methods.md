---
Title: 'Math Methods'
Description: 'Performs mathematical operations on arrays'
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
  NumPy, or Numerical Python, is a powerhouse for numerical computing, offering an extensive range of mathematical methods known as **Math Methods**. These methods cover arithmetic operations, trigonometric functions, linear algebra, statistics, and more. They are essential in scientific computing, data analysis, and machine learning, making NumPy indispensable across scientific research, engineering, finance, and data analysis. Mastering NumPy's Math Methods empowers users to streamline complex computations effectively.
  
## Syntax

The generic syntax for the NumPy math methods is as follows:
 
 ```pseudo 
 numpy.math_method()

## Example

```py
import numpy as np

# add two scalar numbers using numpy.add() method
result = np.add(5, 3)
print("Result of addition:", result)

## Output
![image](https://github.com/gitsoft145/docs/assets/78934620/cb0b3d5b-7c91-45a5-b301-3d56cce64bb0)

## Basic Categories of Math Methods

### 1. Basic Arithmetic Operations
  
  - Addition numpy.add(): Element-wise addition of arrays and scalar values.
  - Subtraction numpy.subtract(): Element-wise subtraction of arrays.
  - Multiplication numpy.multiply(): Element-wise multiplication of arrays.
  - Division numpy.divide(): Element-wise division of arrays.
  - Power numpy.power(): Element-wise exponentiation of arrays.

### 2. Trigonometric Functions
  
  - Sine numpy.sin(): Computes the sine of each element in the array.
  - Cosine numpy.cos(): Computes the cosine of each element in the array.
  - Tangent numpy.tan(): Computes the tangent of each element in the array.
  - Inverse Sine numpy.arcsin(): Computes the inverse sine of each element in the array.
  - Inverse Cosine numpy.arccos(): Computes the inverse cosine of each element in the array.
  - Inverse Tangent numpy.arctan(): Computes the inverse tangent of each element in the array.
      
### 3. Exponential and Logarithmic Functions
  
  - Exponential numpy.exp(): Computes the exponential of each element in the array.
  - Natural Logarithm numpy.log(): Computes the natural logarithm of each element in the array.
  - Base-10 Logarithm numpy.log10(): Computes the base-10 logarithm of each element in the array.
  - Logarithm with Base b numpy.log(): Computes the logarithm with specified base of each element in the array.
      
### 4. Miscellaneous Functions
  
  - Absolute Value numpy.abs(): Computes the absolute value of each element in the array.
  - Square Root numpy.sqrt(): Computes the square root of each element in the array.
  - Ceiling numpy.ceil(): Rounds each element of the array to the nearest integer greater than or equal to that element.
  - Floor numpy.floor(): Rounds each element of the array to the nearest integer less than or equal to that element.
  - Rounding numpy.round(): Rounds each element of the array to the nearest integer.

### 5. Statistical Functions
  
  - Mean numpy.mean(): Computes the arithmetic mean along the specified axis.
  - Median numpy.median(): Computes the median along the specified axis.
  - Standard Deviation numpy.std(): Computes the standard deviation along the specified axis.
  - Variance numpy.var(): Computes the variance along the specified axis.
  
### 6. Linear Algebra
  
  - Matrix Multiplication numpy.matmul(): Performs matrix multiplication between two arrays.
  - Dot Product numpy.dot(): Computes the dot product of two arrays.
  - Transpose numpy.transpose(): Computes the transpose of an array.

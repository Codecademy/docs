---
Title: '.argmax()'
Description: 'Returns the indices of the maximum values along a specified axis in an array'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Data'
  - 'Machine Learning'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The NumPy **`.argmax()`** function returns the indices of the maximum values along a specified axis in an array. This powerful function helps identify the positions of peak values within arrays, rather than the values themselves. `.argmax()` is particularly useful in data analysis, machine learning, and scientific computing where locating maximal elements in datasets is essential.

In data science workflows, `.argmax()` serves multiple purposes including finding winning classifications in neural networks, locating peaks in signal processing, and identifying optimal parameters in optimization problems. By returning indices instead of values, it provides positional information that can be used for further data manipulation or analysis.

## Syntax

```pseudo
numpy.argmax(array, axis=None, out=None, keepdims=<no value>)
```

**Parameters:**

- `array`: Input array to find maximum values in.
- `axis`(Optional): Integer specifying the axis along which to find maximum values. By default (`None`), the index is calculated for the flattened array.
- `out` (Optional): If provided, the result will be inserted into this array. It should have the appropriate shape and dtype.
- `keepdims` (Optional): If `True`, the axes which are reduced are left in the result as dimensions with size one, allowing the result to broadcast correctly against the input array.

**Return value:**

Returns an array of indices into the array. It has the same shape as the input array with the dimension along the specified axis removed, unless `keepdims` is set to `True`.

## Example 1: Finding Maximum Element Position in a 1D Array

The simplest application of `.argmax()` is finding the position of the maximum value in a one-dimensional array. This is useful when the position itself carries meaningful information, as illustrated in the following example:

```py
import numpy as np

# Create a simple 1D array
temperature_readings = np.array([23.5, 25.2, 24.8, 28.9, 26.1, 22.3])

# Find the position of the highest temperature
max_temp_position = np.argmax(temperature_readings)

print("Temperature readings:", temperature_readings)
print("Position of maximum value:", max_temp_position)
print("Maximum temperature value:", temperature_readings[max_temp_position])
```

This example results in the following output:

```shell
Temperature readings: [23.5 25.2 24.8 28.9 26.1 22.3]
Position of maximum value: 3
Maximum temperature value: 28.9
```

The code identifies position 3 (zero-indexed) as containing the maximum temperature of 28.9, making it easy to pinpoint exactly when the highest temperature occurred.

## Example 2: Working with Multi-dimensional Arrays

`.argmax()` becomes especially powerful when working with multi-dimensional arrays. By specifying the axis parameter, maximum values along rows or columns can be found, making it useful for tasks like identifying the highest value in each feature of a dataset, as demonstrated here:

```py
import numpy as np

# Create a 2D array representing sales data for 3 products across 4 quarters
sales_data = np.array([
  [105, 140, 95, 115],    # Product A sales
  [120, 110, 125, 130],    # Product B sales
  [90, 100, 110, 105]      # Product C sales
])

# Find which quarter had highest sales for each product (axis=1 means operate along rows)
best_quarter = np.argmax(sales_data, axis=1)

# Find which product had highest sales in each quarter (axis=0 means operate along columns)
best_product = np.argmax(sales_data, axis=0)

print("Sales data:")
print(sales_data)
print("\nBest quarter for each product:", best_quarter)
print("Quarter names for reference: [Q1, Q2, Q3, Q4]")
print("Best product for each quarter:", best_product)
print("Product names for reference: [Product A, Product B, Product C]")
```

This example provides the following output:

```shell
Sales data:
[[105 140  95 115]
 [120 110 125 130]
 [ 90 100 110 105]]

Best quarter for each product: [1 3 2]
Quarter names for reference: [Q1, Q2, Q3, Q4]
Best product for each quarter: [1 0 1 1]
Product names for reference: [Product A, Product B, Product C]
```

The results tell us that Product A performs best in Q2, Product B in Q4, and Product C in Q3. Additionally, the best-selling product per quarter is: Product B for Q1, Product A for Q2, and Product B for both Q3 and Q4.

## Example 3: Machine Learning Applications with keepdims

The `.argmax()` function is commonly used in machine learning to identify predicted classes from probability outputs. The `keepdims` parameter helps maintain the original dimensions, making it easier to integrate into larger computational graphs, as shown in this case:

```py
import numpy as np

# Simulated output from a neural network - probabilities for 3 classes across 4 samples
class_probabilities = np.array([
  [0.2, 0.7, 0.1],  # Sample 1 predictions
  [0.8, 0.1, 0.1],  # Sample 2 predictions
  [0.25, 0.25, 0.5], # Sample 3 predictions
  [0.4, 0.4, 0.2]   # Sample 4 predictions
])

# Find the predicted class (highest probability) for each sample
predicted_classes = np.argmax(class_probabilities, axis=1)

# Using keepdims to maintain dimensionality for further processing
predicted_with_dims = np.argmax(class_probabilities, axis=1, keepdims=True)

print("Neural network class probabilities:")
print(class_probabilities)
print("\nPredicted class for each sample:", predicted_classes)
print("Class names for reference: [Class A, Class B, Class C]")
print("\nWith keepdims=True:")
print(predicted_with_dims)
print("Shape without keepdims:", predicted_classes.shape)
print("Shape with keepdims:", predicted_with_dims.shape)

# Demonstrate how keepdims helps with broadcasting
# Convert predictions to one-hot encoding
num_classes = class_probabilities.shape[1]
one_hot = np.zeros_like(class_probabilities)
one_hot[np.arange(len(predicted_classes)), predicted_classes] = 1

print("\nOne-hot encoded predictions:")
print(one_hot)
```

This example produces the following output:

```shell
Neural network class probabilities:
[[0.2  0.7  0.1 ]
 [0.8  0.1  0.1 ]
 [0.25 0.25 0.5 ]
 [0.4  0.4  0.2 ]]

Predicted class for each sample: [1 0 2 0]
Class names for reference: [Class A, Class B, Class C]

With keepdims=True:
[[1]
 [0]
 [2]
 [0]]
Shape without keepdims: (4,)
Shape with keepdims: (4, 1)

One-hot encoded predictions:
[[0. 1. 0.]
 [1. 0. 0.]
 [0. 0. 1.]
 [1. 0. 0.]]
```

This example demonstrates how `.argmax()` helps convert neural network probability outputs into class predictions, and also showcases how the `keepdims` parameter preserves the array dimensions for further operations like broadcasting.

## Codebyte Example

In educational data analysis, `.argmax()` can be used to identify the top-performing student in each subject based on test scores. The following example demonstrates how to find which student scored the highest in different subjects:

```codebyte/py
import numpy as np

# Create a 2D array representing scores of 4 students in 3 subjects
scores = np.array([
  [85, 90, 78],  # Student 1
  [88, 76, 92],  # Student 2
  [79, 85, 88],  # Student 3
  [91, 89, 84]   # Student 4
])

# Find the best student in each subject (axis=0 means finding max index for each column)
best_students = np.argmax(scores, axis=0)

# Subject names for reference
subjects = ["Math", "Science", "English"]

# Display results
for i, subject in enumerate(subjects):
  print(f"Top scorer in {subject}: Student {best_students[i] + 1}")
```

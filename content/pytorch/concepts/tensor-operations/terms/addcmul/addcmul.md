---
Title: '.addcmul()'
Description: 'Performs element-wise multiplication of two tensors and adds a scaled result to a third tensor.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Deep Learning'
  - 'PyTorch'
  - 'Tensors'
CatalogContent:
  - 'learn-python-3'
  - 'paths/machine-learning'
---

**`.addcmul()`** is a PyTorch [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) operation that performs element-wise multiplication of two tensors and then adds a third tensor to the result, optionally scaled by a value. This operation combines multiplication and addition in a single efficient function call.

The function is particularly useful in tensor operations where there is a need to perform element-wise multiplication and addition in sequence. It provides a concise way to perform these operations without creating intermediate tensors, which can help optimize memory usage in PyTorch applications.

## Syntax

```pseudo
torch.addcmul(input, tensor1, tensor2, value=1, out=None)
```

**Parameters:**

- `input` (Tensor): The tensor to be added to the result
- `tensor1` (Tensor): The first tensor to be multiplied element-wise
- `tensor2` (Tensor): The second tensor to be multiplied element-wise
- `value` (Number, optional): Multiplier for the product of `tensor1` and `tensor2`. Default value is `1`
- `out` (Tensor, optional): The output tensor to store the result

**Return value:**

Returns a new tensor containing the result of the operation, or modifies the `out` tensor if provided.

## Example 1: Basic usage of `.addcmul()` with PyTorch tensors

This example demonstrates the basic functionality of `.addcmul()` by applying it to random tensors to show how the element-wise multiplication and addition works:

```py
import torch

# Create input tensor and two tensors to be multiplied
input_tensor = torch.tensor([1.0, 2.0, 3.0])
tensor1 = torch.tensor([2.0, 3.0, 4.0])
tensor2 = torch.tensor([3.0, 2.0, 1.0])

# Apply addcmul operation
# Formula: result = input + value * (tensor1 * tensor2)
result = torch.addcmul(input_tensor, tensor1, tensor2)

# Display the tensors and result
print("Input tensor:", input_tensor)
print("Tensor 1:", tensor1)
print("Tensor 2:", tensor2)
print("Result of addcmul (default value=1):", result)

# Try with a different value parameter
scaled_result = torch.addcmul(input_tensor, tensor1, tensor2, value=0.5)
print("Result of addcmul with value=0.5:", scaled_result)
```

This example results in the following output:

```shell
Input tensor: tensor([1., 2., 3.])
Tensor 1: tensor([2., 3., 4.])
Tensor 2: tensor([3., 2., 1.])
Result of addcmul (default value=1): tensor([7., 8., 7.])
Result of addcmul with value=0.5: tensor([4., 5., 5.])
```

## Example 2: Using `.addcmul()` with different scale values

This example demonstrates how `.addcmul()` behaves with different scale values:

```py
import torch

# Create three simple tensors
input_tensor = torch.tensor([1.0, 2.0, 3.0])
tensor1 = torch.tensor([2.0, 3.0, 4.0])
tensor2 = torch.tensor([3.0, 2.0, 1.0])

# Apply addcmul with different scale values
result1 = torch.addcmul(input_tensor, tensor1, tensor2, value=1.0)
result2 = torch.addcmul(input_tensor, tensor1, tensor2, value=0.5)
result3 = torch.addcmul(input_tensor, tensor1, tensor2, value=2.0)

# Print results
print("Input tensor:", input_tensor)
print("Tensor 1:", tensor1)
print("Tensor 2:", tensor2)
print("\naddcmul with value=1.0:", result1)
print("addcmul with value=0.5:", result2)
print("addcmul with value=2.0:", result3)

# Show the calculations step by step
print("\nCalculation steps for first element with value=1.0:")
print(f"input[0] + value * (tensor1[0] * tensor2[0]) = {input_tensor[0]} + 1.0 * ({tensor1[0]} * {tensor2[0]}) = {result1[0]}")
```

This example results in the following output:

```shell
Input tensor: tensor([1., 2., 3.])
Tensor 1: tensor([2., 3., 4.])
Tensor 2: tensor([3., 2., 1.])

addcmul with value=1.0: tensor([7., 8., 7.])
addcmul with value=0.5: tensor([4., 5., 5.])
addcmul with value=2.0: tensor([13., 14., 11.])

Calculation steps for first element with value=1.0:
input[0] + value * (tensor1[0] * tensor2[0]) = 1.0 + 1.0 * (2.0 * 3.0) = 7.0
```

## Example 3: Combining `.addcmul()` with in-place operations

This example shows how to use `.addcmul_()` (the in-place version) to modify tensors directly:

```py
import torch

# Create tensors
x = torch.tensor([1.0, 2.0, 3.0])
y = torch.tensor([0.1, 0.2, 0.3])
z = torch.tensor([1.5, 2.5, 3.5])

print("Original x:", x)
print("y:", y)
print("z:", z)

# Use addcmul with a new tensor to store results
result = torch.addcmul(x, y, z, value=2.0)
print("\nResult of torch.addcmul(x, y, z, value=2.0):", result)
print("Original x is unchanged:", x)

# Use the in-place version addcmul_
x.addcmul_(y, z, value=2.0)
print("\nAfter x.addcmul_(y, z, value=2.0), x is now:", x)

# Verify that x now has the same values as result
print("x now equals the previous result:", torch.equal(x, result))
```

This example results in the following output:

```shell
Original x: tensor([1., 2., 3.])
y: tensor([0.1, 0.2, 0.3])
z: tensor([1.5, 2.5, 3.5])

Result of torch.addcmul(x, y, z, value=2.0): tensor([1.3000, 3.0000, 5.1000])
Original x is unchanged: tensor([1., 2., 3.])

After x.addcmul_(y, z, value=2.0), x is now: tensor([1.3000, 3.0000, 5.1000])
x now equals the previous result: True
```

To learn more about how to create, train, and test neural networks, check out this [Intro to PyTorch and Neural Networks](https://www.codecademy.com/enrolled/courses/intro-to-py-torch-and-neural-networks) course on Codecademy.

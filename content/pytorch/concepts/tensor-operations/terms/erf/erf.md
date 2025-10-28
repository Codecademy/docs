---
Title: 'erf()'
Description: 'Computes the error function element-wise for each element in the input tensor'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Functions'
  - 'Math'
  - 'PyTorch'
  - 'Tensors'
CatalogContent:
  - 'learn-pytorch'
  - 'paths/machine-learning'
---

The **`.erf()`** computes the Gauss error function element-wise for each element in the input tensor. The error function is a mathematical function that appears frequently in probability, statistics, and partial differential equations, particularly in the context of the normal distribution.

## Syntax

```pseudo
torch.erf(input, *, out=None) → Tensor
```

**Parameters:**

- `input` (Tensor): The input tensor containing the values for which to compute the error function
- `out` (Tensor, optional): The output tensor to store the result

**Return value:**

A new tensor with the same shape as `input`, containing the computed error function values for each element.

## Example 1: Basic `.erf()` Usage

This example demonstrates the basic implementation of the `erf()` function with a simple 1D tensor:

```py
import torch

# Create a 1D tensor with sample values
input_tensor = torch.tensor([0.0, 1.0, -1.0, 2.0, -2.0])
print("Input tensor:", input_tensor)

# Compute the error function
result = torch.erf(input_tensor)
print("Error function result:", result)
```

The output of this code is:

```shell
Input tensor: tensor([ 0.,  1., -1.,  2., -2.])
Error function result: tensor([ 0.0000,  0.8427, -0.8427,  0.9953, -0.9953])
```

The error function produces values between -1 and 1, with `erf(0) = 0`, and the function approaching ±1 for large positive or negative values.

## Example 2: Batch Processing with `.erf()`

This example shows how to apply the error function to multi-dimensional tensors for batch processing scenarios commonly used in machine learning:

```py
import torch

# Create a batch of 2D tensors for processing multiple samples
batch_tensor = torch.tensor([
  [[-0.5, 0.8, 1.2], [0.3, -0.9, 1.5]],
  [[0.7, -0.3, 2.1], [-1.1, 0.6, -0.4]]
])
print("Batch tensor shape:", batch_tensor.shape)
print("Input batch:\n", batch_tensor)

# Apply error function to the entire batch
erf_result = torch.erf(batch_tensor)
print("Error function applied to batch:\n", erf_result)
```

The output of this code is:

```shell
Batch tensor shape: torch.Size([2, 2, 3])
Input batch:
 tensor([[[-0.5000,  0.8000,  1.2000],
          [ 0.3000, -0.9000,  1.5000]],

         [[ 0.7000, -0.3000,  2.1000],
          [-1.1000,  0.6000, -0.4000]]])
Error function applied to batch:
 tensor([[[-0.5205,  0.7421,  0.9103],
          [ 0.3286, -0.7969,  0.9661]],

         [[ 0.6778, -0.3286,  0.9970],
          [-0.8802,  0.6039, -0.4284]]])
```

This example demonstrates how `erf()` processes each element independently while maintaining the tensor's original shape, making it ideal for neural network operations where batch processing is essential.

## Example 3: `.erf()` in Activation Functions

This example illustrates using the error function as part of the GELU (Gaussian Error Linear Unit) activation function, which is commonly used in transformer models and modern deep learning architectures:

```py
import torch
import torch.nn as nn

# Create a custom GELU activation using erf()
def gelu_erf(x):
  # GELU implementation using error function
  # GELU(x) = 0.5 * x * (1 + erf(x / sqrt(2)))
  return 0.5 * x * (1.0 + torch.erf(x / torch.sqrt(torch.tensor(2.0))))

# Sample input representing neural network activations
activations = torch.tensor([-2.0, -1.0, 0.0, 1.0, 2.0])
print("Input activations:", activations)

# Apply GELU using erf
gelu_output = gelu_erf(activations)
print("GELU output using erf:", gelu_output)

# Compare with PyTorch's built-in GELU
pytorch_gelu = nn.GELU()
builtin_output = pytorch_gelu(activations)
print("PyTorch GELU output:", builtin_output)
print("Difference:", torch.abs(gelu_output - builtin_output))
```

The output of this code is:

```shell
Input activations: tensor([-2., -1.,  0.,  1.,  2.])
GELU output using erf: tensor([-0.0455, -0.1587,  0.0000,  0.8413,  1.9545])
PyTorch GELU output: tensor([-0.0455, -0.1587,  0.0000,  0.8413,  1.9545])
Difference: tensor([0.0000, 0.0000, 0.0000, 0.0000, 0.0000])
```

This example shows how the error function integrates seamlessly with activation function implementations, providing mathematical precision for advanced neural network architectures.

## Frequently Asked Questions

### 1. What is torch erf?

`torch.erf()` is PyTorch's implementation of the mathematical error function (also known as the Gauss error function). It computes the error function element-wise for input tensors.

### 2. How do you get the value out of a tensor in PyTorch?

To extract values from a PyTorch tensor, you can use `.item()` for single-element tensors, `.tolist()` to convert to Python lists, `.numpy()` to convert to NumPy arrays, or standard indexing like `tensor[0]` for specific elements. For example: `value = torch.erf(torch.tensor(1.0)).item()` returns the scalar value.

### 3. What does torch tensor() do?

`torch.tensor()` creates a new tensor from data such as lists, NumPy arrays, or scalar values. It copies the data and allows you to specify data type and device.

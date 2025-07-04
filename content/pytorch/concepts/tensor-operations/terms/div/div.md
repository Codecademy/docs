---
Title: '.div()'
Description: 'Performs element-wise division of input tensors or a tensor by a scalar.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Neural Networks'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'learn-python-3'
  - 'paths/machine-learning'
---

The **`.div()`** function performs element-wise division between tensors or divides a tensor by a scalar value. It is a fundamental tensor operation in [PyTorch](https://www.codecademy.com/resources/docs/pytorch), commonly used in machine learning and deep learning tasks such as data preprocessing, normalization, and optimization.

Element-wise operations are essential in tensor computations, enabling efficient parallel processing. The `torch.div()` function offers a simple and optimized way to handle division across tensors in neural networks and mathematical transformations.

## Syntax

```pseudo
torch.div(input, other, *, rounding_mode=None, out=None)
```

**Parameters:**

- `input`: The input tensor (dividend).
- `other`: The tensor or scalar to divide by (divisor).
- `rounding_mode` (Optional): Controls the rounding behavior. Can be `None` (default), `trunc`, or `floor`.
- `out` (Optional): The output tensor to store the result.

**Return value:**

A tensor with the result of element-wise division. If `out` is provided, the returned tensor is the same as `out`.

## Example 1: Basic Usage of `.div()` with tensors

This example demonstrates how to use `torch.div()` to perform element-wise division between two tensors of the same shape:

```py
import torch

# Create input tensors
tensor1 = torch.tensor([4.0, 9.0, 16.0, 25.0])
tensor2 = torch.tensor([2.0, 3.0, 4.0, 5.0])

# Perform element-wise division
result = torch.div(tensor1, tensor2)

# Print results
print("Tensor1 (dividend):", tensor1)
print("Tensor2 (divisor):", tensor2)
print("Division result:", result)
```

This example results in the following output:

```shell
Tensor1 (dividend): tensor([ 4.,  9., 16., 25.])
Tensor2 (divisor): tensor([2., 3., 4., 5.])
Division result: tensor([2., 3., 4., 5.])
```

The `.div()` operation computes the element-wise division of `tensor1` by `tensor2`. Each element in the resulting tensor is the quotient of the corresponding elements in the input tensors.

## Example 2: Division with Rounding Modes

The `torch.div()` function supports optional rounding modes when performing integer division, which control how the result is rounded:

```py
import torch

# Create input tensors
tensor1 = torch.tensor([5, 7, 10, 15])
tensor2 = torch.tensor([2, 2, 3, 4])

# Division with different rounding modes
result_default = torch.div(tensor1, tensor2)
result_floor = torch.div(tensor1, tensor2, rounding_mode='floor')
result_trunc = torch.div(tensor1, tensor2, rounding_mode='trunc')

# Print results
print("Default division:", result_default)
print("Floor division:", result_floor)
print("Trunc division:", result_trunc)
```

This example results in the following output:

```shell
Default division: tensor([2.5000, 3.5000, 3.3333, 3.7500])
Floor division: tensor([2, 3, 3, 3])
Trunc division: tensor([2, 3, 3, 3])
```

The rounding modes control how the division results are handled:

- Default mode performs true division, returning floating-point results.
- `floor` mode rounds the result down toward negative infinity (i.e., floor division).
- `trunc` mode truncates the decimal part, rounding toward zero.

## Example 3: Data Normalization with `.div()`

The `.div()` function is commonly used in data preprocessing and normalization. Here's an example of normalizing a dataset:

```py
import torch

# Create a sample dataset (3 samples with 4 features each)
dataset = torch.tensor([
    [10.0, 20.0, 30.0, 40.0],
    [15.0, 25.0, 35.0, 45.0],
    [20.0, 30.0, 40.0, 50.0]
])

# Calculate the range (max - min) for each feature
feature_min = dataset.min(dim=0).values
feature_max = dataset.max(dim=0).values
feature_range = feature_max - feature_min

# Normalize the dataset to [0, 1] range using div
normalized_data = torch.div(dataset - feature_min, feature_range)

print("Original dataset:")
print(dataset)
print("\nNormalized dataset:")
print(normalized_data)
```

This example results in the following output:

```shell
Original dataset:
tensor([[10., 20., 30., 40.],
        [15., 25., 35., 45.],
        [20., 30., 40., 50.]])

Normalized dataset:
tensor([[0.0000, 0.0000, 0.0000, 0.0000],
        [0.5000, 0.5000, 0.5000, 0.5000],
        [1.0000, 1.0000, 1.0000, 1.0000]])
```

This example demonstrates how `.div()` can be used to normalize data to a specific range, which is a common preprocessing step in machine learning workflows.

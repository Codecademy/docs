---
Title: '.take_along_dim()'
Description: 'Select elements from a tensor along a specified dimension using indices.'
Subjects:
  - 'Data Science'
  - 'AI'
  - 'Computer Science'
Tags:
  - 'Tensors'
  - 'PyTorch'
  - 'Deep Learning'
  - 'Neural Networks'
  - 'Machine Learning'
CatalogContent:
  - 'learn-pytorch'
  - 'paths/machine-learning'
  - 'paths/data-science'
---

The **`.take_along_dim()`** function in PyTorch is used to select elements from a tensor along a specified dimension. This operation is essential for advanced indexing operations and manipulating multi-dimensional tensors in deep learning applications.

Similar to **`.take()`**, which extracts elements based on indices and always returns a 1D tensor, **`.take_along_dim()`** provides a more flexible approach by allowing indexing along a specific dimension while preserving the tensor's shape.

## Syntax

```python
torch.take_along_dim(input, indices, dim)
```

### Parameters

- **input (Tensor)**: The source tensor from which elements will be selected.
- **indices (Tensor)**: A tensor of indices specifying which elements to select along the specified dimension.
- **dim (int)**: The dimension along which to perform the selection.

### Returns

- **Tensor**: A new tensor containing the selected elements, maintaining the same dimensionality as the input tensor.

## Example

Here is a basic usage example of `.take_along_dim()` in PyTorch to select elements along a specific dimension:

```python
import torch

# Create a source tensor
input_tensor = torch.tensor([[10, 20, 30],
                           [40, 50, 60]])

# Define indices for selection
indices = torch.tensor([[2, 1, 0],
                       [1, 0, 2]])

# Select elements along dimension 1
result = torch.take_along_dim(input_tensor, indices, dim=1)
print(result)
```

The following will be the output of the above code:

```
tensor([[30, 20, 10],
        [50, 40, 60]])
```

Moreover, the function can also be used to select elements along a specific dimension in a multi-dimensional tensor. For instance, consider the following example:

```python
import torch

# Create a 3D tensor
input_tensor = torch.tensor([[[1, 2], [3, 4]],
                           [[5, 6], [7, 8]]])

# Define indices for selection
indices = torch.tensor([[[0, 1], [1, 0]],
                       [[0, 0], [1, 1]]])

# Select elements along the last dimension
result = torch.take_along_dim(input_tensor, indices, dim=2)
print(result)
```

The output of the above code will be:

```
tensor([[[1, 2],
         [4, 3]],
        [[5, 5],
         [8, 8]]])
```

## Key Features

Here are some key features of the `.take_along_dim()` function:

1. Preserves tensor dimensionality during selection
2. Supports batch operations
3. Works with any number of dimensions
4. Maintains gradient information for backpropagation

## Common Use Cases

- Sorting tensor elements
- Implementing attention mechanisms
- Selecting top-k elements
- Custom pooling operations

## Notes

- The indices tensor must have the same shape as the input tensor
- Supports automatic differentiation
- More flexible than `.take()` for multi-dimensional operations
- Memory-efficient for large tensor operations

## Codebyte Example

```codebyte/python
import torch

# Create a tensor
tensor = torch.tensor([[10, 20, 30],
                      [40, 50, 60]])

# Create indices for top-2 values along dim=1
indices = torch.topk(tensor, k=2, dim=1).indices

# Select top-2 values using take_along_dim
result = torch.take_along_dim(tensor, indices, dim=1)
print("Original tensor:")
print(tensor)
print("\nTop-2 values along dimension 1:")
print(result)
```

## Related Operations

- **[`.take()`](../take/take.md)**: For 1D tensor selection
- **[`.gather()`](../gather/gather.md)**: Alternative indexing operation
- **[`.index_select()`](../index-select/index-select.md)**: Simple dimension-based selection

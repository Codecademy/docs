# .take_along_dim()

## Introduction

The `.take_along_dim()` function in PyTorch is used to select elements from a tensor along a specified dimension. This is particularly useful for advanced indexing and when working with multi-dimensional arrays.

It allows for selecting elements based on indices provided in a separate tensor.

---

## Syntax

```python
torch.take_along_dim(input, indices, dim)
```

### Parameters

- **input (Tensor)**: The source tensor.
- **indices (Tensor)**: The indices to gather along the specified dimension.
- **dim (int)**: The dimension along which to index.

### Returns

- **Tensor**: A tensor containing the gathered elements.

---

## Example

### Example 1: Basic Usage

```python
import torch

# Source tensor
input_tensor = torch.tensor([[10, 20, 30], [40, 50, 60]])

# Indices tensor
indices = torch.tensor([[2, 1, 0], [1, 0, 2]])

# Gathering elements along dimension 1
output = torch.take_along_dim(input_tensor, indices, dim=1)
print(output)
```

### Example 1 Output

```
tensor([[30, 20, 10],
        [50, 40, 60]])
```

---

### Example 2: Multi-Dimensional Tensor

```python
input_tensor = torch.tensor([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
indices = torch.tensor([[[0, 1], [1, 0]], [[0, 0], [1, 1]]])

output = torch.take_along_dim(input_tensor, indices, dim=2)
print(output)
```

### Example 2 Output

```
tensor([[[1, 2],
         [4, 3]],
        [[5, 5],
         [8, 8]]])
```

---

## Notes

- The dimensions of `indices` must match the dimensions of the `input` tensor.
- This function is helpful in implementing algorithms where selecting specific data points along certain dimensions is required.

---

## Related Concepts

- `.gather()`
- Advanced Indexing in PyTorch

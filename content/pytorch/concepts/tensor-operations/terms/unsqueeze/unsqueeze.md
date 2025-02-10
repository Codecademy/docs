---
Title: '.unsqueeze()'
Description: 'Adds a singleton dimension (dimension of size 1) to a tensor at the specified position, altering its shape without changing the data.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Tensor'
  - 'Dimensions'
  - 'PyTorch'
CatalogContent:
  - 'learn-pytorch'
  - 'paths/data-science'
---

The **`.unsqueeze()`** function in PyTorch inserts a new dimension of size 1 at the specified position in a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). This is particularly useful for adjusting tensor shapes to meet the input requirements of neural network operations (e.g., adding a batch dimension or aligning dimensions for broadcasting).

## Syntax

```pseudo
torch.unsqueeze(input, dim) → Tensor
```

or as a method:

```pseudo
tensor.unsqueeze(dim) → Tensor
```

- `input` (Tensor): The input tensor to modify.
- `dim` (int): The position at which to insert the new dimension (supports negative indexing).

Returns a new tensor with an additional dimension of size 1 at position `dim`.

## Example

### Adding a Batch Dimension

Convert a 3-element 1D tensor into a 2D tensor with shape `(1, 3)` (often used for batch processing):

```py
import torch

x = torch.tensor([1, 2, 3])
x_unsqueezed = x.unsqueeze(0)  # Insert dimension at position 0

print("Original shape:", x.shape)
print("New shape:", x_unsqueezed.shape)
print("Tensor after unsqueeze:\n", x_unsqueezed)
```

The above code will return the following output:

```shell
Original shape: torch.Size([3])
New shape: torch.Size([1, 3])
Tensor after unsqueeze:
 tensor([[1, 2, 3]])
```

### Adjusting Dimensions for Broadcasting

Add a dimension to align tensors for element-wise operations:

```py
import torch

# Create tensors
A = torch.tensor([[1, 2], [3, 4]])  # Shape: (2, 2)
B = torch.tensor([10, 20])          # Shape: (2,)

# Add dimension to B for broadcasting
B_unsqueezed = B.unsqueeze(1)      # New shape: (2, 1)
result = A + B_unsqueezed

print("B after unsqueeze:\n", B_unsqueezed)
print("Result of A + B_unsqueezed:\n", result)
```

The above code will return the following output:

```shell
B after unsqueeze:
 tensor([[10],
         [20]])
Result of A + B_unsqueezed:
 tensor([[11, 12],
         [23, 24]])
```

### Negative Dimension Indexing

Insert a dimension using negative indexing (counts from the end):

```py
import torch

y = torch.randn(4, 5)
y_modified = y.unsqueeze(-1)  # Adds a dimension at the end

print("Original shape:", y.shape)
print("New shape:", y_modified.shape)
```

The above code will return the following output:

```shell
Original shape: torch.Size([4, 5])
New shape: torch.Size([4, 5, 1])
```

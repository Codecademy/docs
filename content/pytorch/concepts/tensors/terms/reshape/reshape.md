---
Title: '.reshape()'
Description: 'Returns a tensor with the same data and number of elements as the input tensor, but with a specified shape.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Modules'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`torch.reshape()`** method reshapes a specified input tensor to a given shape while keeping the same data and number of elements. When possible, the returned tensor will have no data copied, however, this behaviour is not guaranteed in all cases.

## Syntax

```pseudo
torch.reshape(input, shape)
```

- `input`: A PyTorch tensor that you want to reshape.
- `shape`: A tuple or list of integers specifying the desired new shape.

## Example

The following code reshapes a 2D tensor size with shape `(2, 2)` into a 1D tensor using `torch.reshape()`, flattening all elements into a single row:

```py
import torch

# Define the tensor
size = torch.tensor([[10, 11], [12, 13]])

# Reshape the tensor
reshaped_size = torch.reshape(size, (-1,)) # Note the comma to make it a tuple

# Print the reshaped tensor
print(reshaped_size)
```

The example above returns the following output:

```shell
tensor([10, 11, 12, 13])
```

## Codebyte Example

Run the following codes to understand how the `torch.reshape()` method works:

```codebyte/python
import torch

dimension = torch.tensor([10., 20., 30., 40.])
print(dimension)
reshaped_dimension = torch.reshape(dimension, (2, 2))
print(reshaped_dimension)
```

```codebyte/python
import torch

main_tensor = torch.tensor([[6, 6, 6], [6, 6, 6]])
print(main_tensor)
reshaped_tensor = torch.reshape(main_tensor, (3,2))
print(reshaped_tensor)
```

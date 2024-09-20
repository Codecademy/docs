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

- `torch.reshape(input, shape)`: Returns a tensor with the same data and number of elements as input, but with a specified shape.

The tensor `size` has a shape of `(2, 2)`, meaning it has 4 elements in total. By using `(-1)` it is asked to PyTorch to reshape the tensor into a 1 dimensional tensor with 4 elements, keeping all the elements of the original tensor. The `-1` tells PyTorch to calculate the appropriate size for that dimension, which in this case is 4.

## Example

Using the special value `-1`:

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

Run the following codes to understand how the `torch.reshape(input, shape)` method works:

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

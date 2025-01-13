---
Title: 'Specifying Data Types'
Description: 'Determines how tensors are stored and processed, impacting precision, memory usage, and computation speed.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
  - 'Deep Learning'
Tags:
  - 'Pytorch'
  - 'Tensor'
  - 'Data Types'
CatalogContent:
  - 'learn-Intro-to-PyTorch-and-Neural-Networks'
  - 'paths/data-science'
---

In PyTorch, specifying the data types for [`tensors`](https://www.codecademy.com/resources/docs/pytorch/tensors) is crucial as they are the core data structures used to store and process data. Each tensor's data type (`dtype`) defines the kind of values it holds (e.g., `integer`, `float`, `boolean`), ensuring precision, improving performance, and maintaining compatibility during computations.

## Syntax

To specify a data type in a PyTorch tensor, use the `dtype` parameter when creating a tensor or the `.to()` method for converting an existing one.

### For specifying `dtype` when creating a tensor

```pseudo
torch.tensor(data, dtype=torch.<data_type>)
```

- `data`: The input data used to create the tensor. This can be a list, NumPy array, or another tensor.
- `dtype`: Specifies the data type of the tensor. Common data types include:
  - `torch.float32` (default): 32-bit floating-point
  - `torch.float64`: 64-bit floating-point
  - `torch.int32`: 32-bit integer
  - `torch.int64`: 64-bit integer
  - `torch.bool`: Boolean

### For converting an existing tensor to a different data type

```pseudo
tensor.to(torch.<data_type>)
```

## Example

In the example below a tensor is created with a specified data type, another with a different type, and one tensor is converted to a new data type:

```py
import torch

# Creating a float32 tensor
float_tensor = torch.tensor([1.0, 2.0, 3.0], dtype=torch.float32)
print(float_tensor)

# Creating an int64 tensor
int_tensor = torch.tensor([1, 2, 3], dtype=torch.int64)
print(int_tensor)

# Converting a tensor to a different data type
converted_tensor = float_tensor.to(torch.int64)
print(converted_tensor)
```

The code above generates the output as:

```shell
tensor([1., 2., 3.])
tensor([1, 2, 3])
tensor([1, 2, 3])
```

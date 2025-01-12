---
Title: 'PyTorch Tensor Operations: Specifying Data Types'
Description: 'Shows how to specify data types in PyTorch tensors for efficient computation and memory consumption'
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

In Pytorch, **tensors** are the core data structures used to store and process data. Each tensor has a **data type(dtype)** that defines the kind of values it holds (e.g., integers, floats, booleans). Selecting the correct **dtype** is essential for ensuring precision, improving performance and maintaining compatibility during computations.

Common dtypes include:

- torch.float32 (default for training)
- torch.int64 (indexing)
- torch.bool (logical operations)

## Syntax

To specify a data type in a PyTorch tensor, use the `dtype` parameter when creating a tensor or converting an existing one.

# Syntax for specifying dtype when creating a tensor

```
torch.tensor(data, dtype=torch.<data_type>)
```

# Converting an existing tensor to a different data type

```
tensor.to(torch.<data_type>)
```

## Example

```
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

## Output

```
tensor([1., 2., 3.])
tensor([1, 2, 3])
tensor([1, 2, 3])

```

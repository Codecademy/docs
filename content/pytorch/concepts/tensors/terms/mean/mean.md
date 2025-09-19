---
Title: '.mean()'
Description: 'Calculates the mean of all elements or along a specified dimension in a PyTorch tensor.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Data Types'
  - 'Deep Learning'
  - 'Functions'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`torch.mean()`** method in PyTorch computes the arithmetic mean (average) of a given tensor. It can calculate the mean of all elements or along a specified dimension in the tensor. This method is widely used in data preprocessing and analysis for summarizing data.

## `torch.mean()` Syntax

```pseudo
torch.mean(input, dim, keepdim=False, *, dtype=None, out=None)
```

**Parameters:**

- `input`: The input tensor.
- `dim` (Optional): The dimension along which the mean is computed. If not specified, the mean of all elements is calculated.
- `keepdim` (Optional): If `True`, retains the reduced dimension(s) with size `1`. Defaults to `False`.
- `dtype` (Optional): The desired data type for the output tensor.
- `out` (Optional): The output tensor.

**Return value:**

The `torch.mean()` method returns a tensor containing the mean value(s).

## Example 1: Mean of All Elements Using `torch.mean()`

This example calculates the mean of all elements in a tensor using `torch.mean()`:

```py
import torch

# Create a tensor
tensor = torch.tensor([[1.0, 2.0], [3.0, 4.0]])

# Calculate the mean of all elements
mean_all = torch.mean(tensor)

print("Mean of all elements:", mean_all)
```

Here is the output:

```shell
Mean of all elements: tensor(2.5000)
```

## Example 2: Mean Along Columns Using `torch.mean()`

This example calculates the mean along dimension `0` (columns) in a tensor using `torch.mean()`:

```py
import torch

# Create a tensor
tensor = torch.tensor([[1.0, 2.0], [3.0, 4.0]])

# Calculate the mean along dimension 0 (columns)
mean_dim0 = torch.mean(tensor, dim=0)

print("Mean along columns:", mean_dim0)
```

Here is the output:

```shell
Mean along columns: tensor([2., 3.])
```

## Example 3: Mean Along Rows Using `torch.mean()`

This example calculates the mean along dimension `1` (rows) in a tensor using `torch.mean()`:

```py
import torch

# Create a tensor
tensor = torch.tensor([[1.0, 2.0], [3.0, 4.0]])

# Calculate the mean along dimension 1 (rows)
mean_dim1 = torch.mean(tensor, dim=1)

print("Mean along rows:", mean_dim1)
```

Here is the output:

```shell
Mean along rows: tensor([1.5000, 3.5000])
```

## Frequently Asked Questions

### 1. What does `torch.mean()` do?

`torch.mean()` computes the arithmetic mean (average) of a given tensor. By default, it calculates the mean of all elements in the tensor:

```py
import torch

# Create a tensor
x = torch.tensor([1., 2., 3., 4.])

# Calculate the mean of all elements
print(torch.mean(x)) # tensor(2.5000)
```

### 2. How do I compute the mean along a specific axis using `torch.mean()`?

To compute the mean along a specific axis, Use the `dim` parameter with `torch.mean()`:

```py
import torch

# Create a tensor
x = torch.tensor([[1., 2.], [3., 4.]])

# Calculate the mean along dimension 0 (columns)
print(torch.mean(x, dim=0)) # tensor([2., 3.])

# Calculate the mean along dimension 1 (rows)
print(torch.mean(x, dim=1)) # tensor([1.5000, 3.5000])
```

### 3. What does `keepdim=True` do in `torch.mean()`?

`keepdim=True` in `torch.mean()` keeps the reduced dimension(s) with size `1`:

```py
import torch

# Create a tensor
x = torch.tensor([[1., 2.], [3., 4.]])

# Calculate the mean along rows with keepdim=True
print(torch.mean(x, dim=1, keepdim=True)) # tensor([[1.5000], [3.5000]])
```

---
Title: '.hstack()'
Description: 'The `.hastack(tensors)` is a function used to concetante two or more tensors along horizontal axis.'
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

In PyTorch, **`.hastack()`** (short for horizontal stack)is a function used to concatenate two or more tensors along the horizontal axis (axis1). This operation is useful for combining data with the same number of rows but differing in the number of columns. It acts similarly to numpy's 'np.hastack()' and is particulary handy when you're working with data that needs to be concatenated side by side before being fed into a model for training or inference.

# Syntax

The basic syntax of `.hstack()` in PyTorch is as falows:

```python
torch.hstack(tensors) -> Tensor
```

Where:

 - `tensors` is a sequence of tesors with the same numbers of rows.
 - The function returns a new tensor containing the horizontal concatenation of the imput tensors.


# Exemple

Here's simple example demonstrating how '.hstack()' can be used to concatenate tensors:

```python
import torch

# Create two tensors
a = torch.tensor([[1, 2],[3, 4]])
b = torch.tensor([[5, 6],[7, 8]])

# Horizontal stack
c = toarch.hstack((a, b))

print(c)

```
Output:

```
tensor([[1, 2, 5, 6],
     [3, 4, 7, 8]])

```
This example demonstrates concatenating two 2x2 tensors horizontally resulting in 2x4 tensor.

# Codebyte Exemple

```python
import torch

# Create 1D tensors
a = torch.tensor([1, 2])
b = torch.tensor([3, 4])

# Horizontal stack
c = torch.tensor((a, b))

print(c)
```
In this Codebyte example, two 1-dimensional tensors are horizontally concatenated, showcasing how `.hstack()`seamlessly combines tensors not just in 2D but also in 1D tensors, further emphasizing the function's utility in handling tensors of varios dimensions as long as thay share the same number of rows (or are all 1-dimensional).





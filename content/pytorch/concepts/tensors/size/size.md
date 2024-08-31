---
Title: '.size()'
Description: 'Returns the size of the self tensor as a tuple of integers.'
Subjects:
  - 'Machine Learning'
  - 'Data Science'
Tags: 
  - 'AI'
  - 'Data Structures'
  - 'Deep Learning'
  - 'Methods'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **`size()`** method returns a `torch.Size` object containing the size information of a Pytorch tensor. It is a fundamental function used in PyTorch to obtain the tensor's shape and is specifically used for dynamic operations. You can also access specific dimensions using tuples. 

## Syntax

```psuedo
t.size(dim=None)
```

- `dim`: (`int`) This optional parameter specifies the dimension for which to retrieve the size. The default value is `None`. 
    - If `dim` is not provided, the returned value is a `torch.Size`, a subclass of __tuple__. 
    - If `dim` is specified, the returned value is an int holding the size of the given dimension. 

## Example

The following example shows how to use the `.size()` method: 

```py
import torch

t = torch.empty(3, 4, 5)

print(t.size())
print(t.size(dim=1))
```

The code above generates the following output:

```shell
torch.Size([3, 4, 5])
4
```

## Codebyte Example

```codebyte/python
import torch

# Create a 3D tensor with shape (2, 3, 4)
tensor = torch.randn(2, 3, 4)

# Print the tensor
print("Tensor:")
print(tensor)

# Use the size() function to get the full dimensions of the tensor
full_size = tensor.size()

# Print the full size
print("\nSize of the tensor:")
print(full_size)

# Access individual dimensions using the size() function without arguments
print("\nIndividual dimensions using size() without dim argument:")
print(f"First dimension: {full_size[0]}")
print(f"Second dimension: {full_size[1]}")
print(f"Third dimension: {full_size[2]}")

# Access individual dimensions using the size(dim) function with dim argument
first_dim = tensor.size(dim=0)
second_dim = tensor.size(1)
third_dim = tensor.size(2)

print("\nIndividual dimensions using size() with dim argument:")
print(f"First dimension: {first_dim}")
print(f"Second dimension: {second_dim}")
print(f"Third dimension: {third_dim}")
```

---
Title: 'ZEROS'
Description: 'Initializing a new tensor with zeros.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
  - 'AI'
Tags:
  - 'AI'
  - 'Data Structures'
  - 'Arrays'
  - 'Deep Learning'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
  - 'paths/machine-learning'
---


The `.zeros()` method returns a [Tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) of a specified shape with zeros. Optionally, the output tensor, datatype, layout, device, and whether autograd records operations can be specified.

## Syntax

```py
import torch

torch.zeros(shape)

# with defaults explicitly stated
torch.zeros(shape, out=None, dtype=torch.float32, layout=torch.strided, device=torch.device('cpu'), requires_grad=False)
```

The shape is specified as a variable, tuple, or list of integers. Optional parameters are as follows:

- `out`: The output Tensor, defaults to None.
- `dtype`: Datatype (`torch.dtype`) of the zeros, defaults to the global default.
- `layout`: Layout (`torch.layout`) of the output Tensor, defaults to `torch.strided`.
- `device`: Device (`torch.device`) of the output Tensor, defaults to the global default.
- `requires_grad`: Boolean of whether autograd will record operations on the output Tensor, defaults to False.

## Example

```python
import torch

t0 = torch.zeros(3)
t1 = torch.zeros((4, 2), dtype=torch.int16)

print(t0)
print(t1)
```

The returned tensors are as follows:

```shell
tensor([ 0.,  0., 0.])

tensor([[ 0,  0],
        [ 0,  0],
        [ 0,  0],
        [ 0,  0]])
```

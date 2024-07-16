---
Title: 'tensors'
Description: 'A tensor is a multi-dimensional array of values of the same type.'
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

**Tensors** are multi-dimensional arrays containing values of the same data type. These types include booleans, floats, and integers. Tensors are a fundamental data structure in PyTorch. When building a machine learning model in PyTorch, all input data, output data, and model weights are stored as tensors.

1-dimensional tensors, which contain a single row of data, are known as **vectors**. 2-dimensional tensors, which contain arbitrarily many 1-dimensional tensors, are known as **matrices**. Higher (n ≥ 3) dimensional tensors, which contain arbitrarily many lower (n - 1) dimensional tensors, are simply known as tensors.

## Creating and Initializing Tensors

### Data-Agnostic Tensors

Tensors can be created with several methods. If the values within the tensor do not matter, `torch.empty()` should be used:

```psuedo
myTensor = torch.empty(dimension1Size, dimension2Size, dimensionNSize)
```

This creates a tensor, `myTensor`, with whatever data values happen to already be present at the location in memory where the tensor is created. Each dimension must be given a size (e.g. `dimension1Size`), which specifies how many data slots that dimension will hold.

The following demonstrates creating a matrix (2-dimensional tensor) with dimension sizes of 2 and 3:

```python
import torch

myTensor = torch.empty(2,3)
print(myTensor)
```

Output:

```shell
tensor([[0., 0., 0.],
        [0., 0., 0.]])
```

> **Note:** The values contained in this tensor are not guaranteed and depend on the values already present at the relevant location in memory.

### Data-Specific Tensors

If the values within a tensor do matter, use the following methods:

- For all zeros: `torch.zeros()`
- For all ones: `torch.ones()`
- For all randomly-generated values: `torch.rand()`

The following examples demonstrate creating data-specific tensors:

```python
import torch

print(torch.zeros(3,2))
print(torch.ones(1,4))
print(torch.rand(2,2,2))
```

Output:

```shell
tensor([[0., 0.],
        [0., 0.],
        [0., 0.]])
tensor([[1., 1., 1., 1.]])
tensor([[[0.2608, 0.5454],
         [0.2085, 0.7901]],

        [[0.8943, 0.7604],
         [0.7584, 0.1678]]])
```

## Tensor Datatypes


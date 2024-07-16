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
- For specified values: `torch.tensor()`
- For all randomly-generated values: `torch.rand()`

The following examples demonstrate creating data-specific tensors:

```python
import torch

print(torch.zeros(3,2),"\n")
print(torch.ones(1,4),"\n")
print(torch.tensor([[1,0,1.56],[3.24, 0.5, 6]]),"\n")
print(torch.rand(2,2,2))
```

Output:

```shell
tensor([[0., 0.],
        [0., 0.],
        [0., 0.]])

tensor([[1., 1., 1., 1.]])

tensor([[1.0000, 0.0000, 1.5600],
        [3.2400, 0.5000, 6.0000]])

tensor([[[0.2608, 0.5454],
         [0.2085, 0.7901]],

        [[0.8943, 0.7604],
         [0.7584, 0.1678]]])
```

## Tensor Datatypes

The datatype of a tensor determines the types of values that it can contain. By default, tensors contain 32-bit floats. However, tensors can also contain the following datatypes:

- Floats (floating point numbers)
  - 16-bit: `dtype=torch.float16`
  - 32-bit: `dtype=torch.float32` (default)
  - 64-bit: `dtype=torch.float64`
- Complex numbers
  - 32-bit: `dtype=torch.complex32
  - 64-bit: `dtype=torch.complex64`
  - 128-bit: `dtype=torch.complex128`
- Signed and unsigned integers
  - 8-bit: `dtype=torch.int8` and `dtype=torch.uint8`
  - 16-bit: `dtype=torch.int16` and `dtype=torch.uint16`
  - 32-bit: `dtype=torch.int32` and `dtype=torch.uint32`
  - 64-bit: `dtype=torch.int64` and `dtype=torch.uint64`
- Quantized integers
  - 8-bit: `dtype=torch.qint8`
  - 32-bit: `dtype=torch.qint32`
- Booleans: `dtype=torch.bool`

### Declaring and Altering Tensor Datatypes

Tensor datatypes can be declared at the creation of a datatype, and can be changed with the method `.to()`:

```python
import torch

#Create a boolean tensor by explicit declaration
myBoolTensor = torch.tensor([[1, 0],[0,0]], dtype=torch.bool)

#Create a float16 tensor by explicit declaration
myExFloat16Tensor = torch.tensor([[3.4, 0.9], [2.3, 1.3]])

#Convert the float16 tensor to an int16 tensor using .to()
myExFloat16Tensor = myExFloat16Tensor.to(torch.int16)

print(myBoolTensor,"\n")
print(myExFloat16Tensor)
```

Output:

```shell
tensor([[ True, False],
        [False, False]]) 

tensor([[3, 0],
        [2, 1]], dtype=torch.int16)
```

Notice that when printing a tensor with a numerical datatype other than the default `torch.float32`, the datatype will be specified in the output.

## Tensor Shapes

The shape of a tensor is determined by its number of dimensions and the size of each dimension. To illustrate, the tensor `torch.rand(2, 6, 4)` has the same shape as the tensor `torch.ones(2, 6, 4)`, whereas these have different shapes from the tensors `torch.rand(2, 6)` and `torch.ones(3, 6, 5)`.

Tensor shapes can be accessed via the `.shape` method:

```python
myTensor = torch.zeros(2, 4, 6, 7)
print(myTensor.shape)
```

Output:

```shell
torch.Size([2, 4, 6, 7])
```

Operations with multiple tensors, like adding or multiplying tensors, often require the tensors involved to have the same shapes. This is discussed in further in the sections below.

### Altering Tensor Shapes


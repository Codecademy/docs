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

```py
import torch

myTensor = torch.empty(2,3)
print(myTensor)
```

This results in the following output:

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

```py
import torch

print(torch.zeros(3,2),"\n")
print(torch.ones(1,4),"\n")
print(torch.tensor([[1,0,1.56],[3.24, 0.5, 6]]),"\n")
print(torch.rand(2,2,2))
```

This results in the following output:

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
  - 32-bit: `dtype=torch.complex32`
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

```py
import torch

#Create a boolean tensor by explicit declaration
myBoolTensor = torch.tensor([[1, 0],[0,0]], dtype=torch.bool)

#Create a float16 tensor by explicit declaration
myExFloat16Tensor = torch.tensor([[3.4, 0.9], [2.3, 1.3]], dtype=torch.float16)

#Convert the float16 tensor to an int16 tensor using .to()
myExFloat16Tensor = myExFloat16Tensor.to(torch.int16)

print(myBoolTensor,"\n")
print(myExFloat16Tensor)
```

This results in the following output:

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

```py
import torch

myTensor = torch.zeros(2, 4, 6, 7)
print(myTensor.shape)
```

This results in the following output:

```shell
torch.Size([2, 4, 6, 7])
```

Operations with multiple tensors, like adding or multiplying tensors, generally require the tensors involved to have the same shapes.

### Altering Tensor Shapes

PyTorch provides methods for altering the shape of a tensor, provided that the total number of elements in the tensor remains the same. The total number of elements in a tensor is equal to the product of all dimension sizes. So, for example, a tensor with shape [4, 1, 6] contains 4 x 1 x 6 = 24 elements.

Since dimensions of with a size of 1 do not alter the total number of elements in a tensor, PyTorch provides methods for adding and removing dimensions of size 1. The method `.unsqueeze_(n)` adds a dimension of size 1 at the nth place, shifting displiced dimension sizes to the right. Conversely, the method `.squeeze_(n)` removes a dimension of size 1 at the nth place, shifting displaced dimension sizes to the left. Note that the numbering of dimensions begins at 0.

The following demonstrates the effects of `.unsqueeze_()` and `.squeeze_()` on tensor shapes:

```py
import torch

myTensor1 = torch.empty(8, 2, 8, 1)
print(myTensor1.shape)

myTensor1.unsqueeze_(1)
print(myTensor1.shape)

myTensor1.squeeze_(4)
print(myTensor1.shape)
```

This results in the following output:

```shell
torch.Size([8, 2, 8, 1])
torch.Size([8, 1, 2, 8, 1])
torch.Size([8, 1, 2, 8])
```

One can also create new tensors by squeezing or unsqueezing other tensors. To do so, use the methods `.squeeze()` and `.unsqueeze()` (no underlines) respectively.

Tensor shapes can also be changed arbitrarily using `.reshape()`, provided that the total number of elements remains constant:

```py
import torch

myTensor = torch.empty(8, 2, 8, 1)
print(myTensor.shape)

myTensor = myTensor.reshape(128)
print(myTensor.shape)

myTensor = myTensor.reshape(64,2)
print(myTensor.shape)
```

This results in the following output:

```shell
torch.Size([8, 2, 8, 1])
torch.Size([128])
torch.Size([64, 2])
```

## Operations with Tensors

Arithmetic operations can be performed between tensors and numbers (e.g. multiplying a tensor by 4) or between multiple tensors.

To perform operations between multiple tensors, all tensors must be of the same shape or they must be **broadcastable**. Tensors that have different shapes are broadcastable when the only differences in tensor shape between the tensors, when comparing dimensions from right-to-left, are either: (a) missing dimensions (one tensor has a dimension that another lacks); or (b) mismatches with dimensions of size 1 (one tensor has a dimension with a different size than another, but that size is 1).

To illustrate, tensors with shapes [2, 3, 4] and [2, 3, 5] are not mutually broadcastable, because the last dimension has a difference that is not covered by either (a) or (b). By contrast, all of the following are mutually broadcastable shapes: [2, 3, 4], [3, 4], [1, 1, 1], and [1, 4]. Relative to the original shape [2, 3, 4], the shape [3, 4] is covered by (a), the shape [1, 1, 1] is covered by (b), and the shape [1, 4] is covered by both (a) for missing dimension 0, and (b) for the mismatch between the sizes dimension 1.

PyTorch contains hundreds of operations for tensors. Details for some important ones are covered on the page [Pytorch Tensor Operations](https://www.codecademy.com/resources/docs/pytorch/tensor-operations).

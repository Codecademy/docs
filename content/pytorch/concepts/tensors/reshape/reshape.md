---
Title: 'Pytorch Tensors Reshape'
Description: 'Torch.reshape returns a tensor with the same data and number of elements as input, but with a specified shape.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Modules'
  - 'Methods'
CatalogContent:
  - 'learn-advanced-python-3'
  - 'paths/computer-science'
---

**`Torch.reshape`** method reshapes a specified input that contains the same data and number of elements. When possible, the returned tensor will be a view of input, nevertheless, this behavior is not a guarantee. This allows the reshaping of data without copying.

## Syntax

`torch.reshape(input, shape)`: Returns a tensor with the same data and number of elements as input, but with a specified shape.

```pseudo
torch.reshape(input, shape)
```

## Example

Using the special value `-1`:

```py
size = torch.tensor([10, 11], [12, 13])
torch.reshape(size, (-1))
```

The example above returns the following output:

```shell
tensor([10, 11, 12, 13])
```

The tensor `size` has a shape of `(2, 2)`, meaning it has 4 elements in total. By using `(-1)` it is asked to PyTorch to reshape the tensor into a 1 dimension tensor with 4 elements, and keeping all the elements of the original tensor. The `-1` tells PyTorch to calculate the appropriate size for that dimension, which in this case is 4.

## Codebyte Example

Run the following code to understand how the `torch.reshape(input, shape)` method works:

```codebyte/python
dimension = torch.tensor(10.)
torch.reshape(b, (2, 2))
```

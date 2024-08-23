---
Title: '.view()'
Description: 'Returns a new tensor with the same data as the self tensor but of a different shape or type'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Data Types'
  - 'Deep Learning'
  - 'Functions'
  - 'Math operations'
  - 'Data Science'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---
--------------

# Tensor.view(*shape)
Returns a new tensor with the same data as the self tensor but of a different shape.

The **`.view()`** method in PyTorch is used to reshape the dimensions of a tensor without changing the underlying data. The `.view()` method returns a new tensor with the same number of elements as the original tensor but with a different shape. The `.view()` method for a Tensor object in PyTorch takes the arguments (subspaces), for example, r and c, to reshape the tensor into a matrix with r rows and c columns. The first argument specifies the desired number of rows and the second argument specifies the desired number of columns. The `.view()` method takes in one or more integers as arguments, which specify the desired shape of the tensor. The arguments can be a single integer, in which case the tensor is reshaped into a 1−dimensional tensor with the specified length. Setting -1 as the 1st number can adjust the size automatically so you don't need to set 12, 2, 3, 4 or 6 as the 1st number. *-1 is available only as the 1st number. Alternatively, the arguments can be a tuple of integers, in which case the tensor is reshaped into a tensor with the specified shape.

## Syntax

shape (torch.Size or int...) – the desired size

## Examples

```python
# importing torch module
    import torch
# create a one-dimensional tensor with 10 elements
    a = torch.FloatTensor([10, 20, 30, 40, 50, 1, 2, 3, 4, 5])
# view the tensor in 5 rows and 2 columns
    print(a.view(5, 2))
    
    tensor([[10., 20.],
            [30., 40.],
            [50.,  1.],
            [ 2.,  3.],
            [ 4.,  5.]])
# view the tensor in 2 rows and 5 columns
    print(a.view(2, 5))
    
    tensor([[10., 20., 30., 40., 50.],
            [ 1.,  2.,  3.,  4.,  5.]])
```

```python
# create a two dimensions tensor 16 elements
    x = torch.randn(4, 4)
    x.size()
        torch.Size([4, 4])
# view the tensor in 16 rows and create a new tensor
    y = x.view(16)
    y.size()
        torch.Size([16])
# view the tensor with 8 columns and create a new tensor
    z = x.view(-1, 8)  # the size -1 is inferred from other dimensions
    z.size()
        torch.Size([2, 8])
```

```python

# create a four dimensions tensor
    a = torch.randn(1, 2, 3, 4)
    a.size()
        torch.Size([1, 2, 3, 4])
# Swaps 2nd and 3rd dimension and create a new tensor "b"      
    b = a.transpose(1, 2)  
    b.size()
        torch.Size([1, 3, 2, 4])
# View the tensor swapping 2nd and 3rd dimension and create a new tensor "c"        
    c = a.view(1, 3, 2, 4)  # Does not change tensor layout in memory
    c.size()
        torch.Size([1, 3, 2, 4])
# Compare "b" and "c" tensors        
    torch.equal(b, c)
        False
```

----------------

# Tensor.view(dtype)
Returns a new tensor with the same data as the self tensor but of a different dtype.

If the element size of dtype is different than that of self.dtype, then the size of the last dimension of the output will be scaled proportionally. For instance, if dtype element size is twice that of self.dtype, then each pair of elements in the last dimension of self will be combined, and the size of the last dimension of the output will be half that of self. If dtype elements size is half that of self.dtype, then each element in the last dimension of self will be split in two, and the size of the last dimension of the output will be double that of self. For this to be possible, the following conditions must be true:

- self.dim() must be greater than 0.

- self.stride(-1) must be 1.

Additionally, if the element size of dtype is greater than that of self.dtype, the following conditions must be true as well:

- self.size(-1) must be divisible by the ratio between the element sizes of the dtypes.

- self.storage_offset() must be divisible by the ratio between the element sizes of the dtypes.

- The strides of all dimensions, except the last dimension, must be divisible by the ratio between the element sizes of the dtypes.

If any of the above conditions are not met, an error is thrown.

_**This overload is not supported by TorchScript, and using it in a Torchscript program will cause undefined behavior.**_

## Syntax

dtype (torch.dtype) – the desired dtype

## Examples

```python
# Create a two dimensions tensor 16 elements
     x = torch.randn(4, 4)
     x
        tensor([[ 0.9482, -0.0310,  1.4999, -0.5316],
            [-0.1520,  0.7472,  0.5617, -0.8649],
            [-2.4724, -0.0334, -0.2976, -0.8499],
            [-0.2109,  1.9913, -0.9607, -0.6123]])
# Check the tensor type
     x.dtype
        torch.float32
# View the x tensor using int32 type and create a new tensor    
     y = x.view(torch.int32)
     y
        tensor([[ 1064483442, -1124191867,  1069546515, -1089989247],
                [-1105482831,  1061112040,  1057999968, -1084397505],
                [-1071760287, -1123489973, -1097310419, -1084649136],
                [-1101533110,  1073668768, -1082790149, -1088634448]],
            dtype=torch.int32)
# Assign a new value to the first element of the tensor            
     y[0, 0] = 1000000000
     x
        tensor([[ 0.0047, -0.0310,  1.4999, -0.5316],
                [-0.1520,  0.7472,  0.5617, -0.8649],
                [-2.4724, -0.0334, -0.2976, -0.8499],
                [-0.2109,  1.9913, -0.9607, -0.6123]])
# View the x tensor using cfloat type       
     x.view(torch.cfloat)
        tensor([[ 0.0047-0.0310j,  1.4999-0.5316j],
                [-0.1520+0.7472j,  0.5617-0.8649j],
                [-2.4724-0.0334j, -0.2976-0.8499j],
                [-0.2109+1.9913j, -0.9607-0.6123j]])
# Check the x tensor size using cfloat type
     x.view(torch.cfloat).size()
        torch.Size([4, 2])
# View the x tensor using uint8 type   
     x.view(torch.uint8)
        tensor([[  0, 202, 154,  59, 182, 243, 253, 188, 185, 252, 191,  63, 240,  22,
                   8, 191],
                [227, 165,  27, 190, 128,  72,  63,  63, 146, 203,  15,  63,  22, 106,
                  93, 191],
                [205,  59,  30, 192, 112, 206,   8, 189,   7,  95, 152, 190,  12, 147,
                  89, 191],
                [ 43, 246,  87, 190, 235, 226, 254,  63, 111, 240, 117, 191, 177, 191,
                  28, 191]], dtype=torch.uint8)
# Check the x tensor size using uint8 type
     x.view(torch.uint8).size()
        torch.Size([4, 16])
```

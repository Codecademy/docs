---
Title: '.reshape_as()'
Description: 'reshapes a tensor with the size of another tensor given as an input'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Python'
  - 'PyTorch'
  - 'Functions'
  - 'Machine Learning'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'Pytorch for Classification' 
  - 'paths/Data Scientist: Machine Learning Specialist'
  
---

In PyTorch, The **`.reshape_as()`** method reshapes a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) to the shape of the other tensor. if copying data isnt necessary then it returns a view of the original tensor in the other tensor's shape, else it returns a new tensor. This method is equivalent to tensor.reshape(other.sizes())

## Syntax

```pseudo
Tensor.reshape_as(other)
```

- `other`: A tensor , whose shape will be used to reshape the input tensor, doesn't have to have the same CPU/GPU or data type as in the input tensor. 

## Example

The following example demonstrates the usage of the `.reshape_as()` method:

```py
import torch

# Source tensor
tensor_a = torch.arange(6) # 1D tensor with values [0, 1, 2, 3, 4, 5]

# Other tensor
tensor_b = torch.zeros(2, 3) # 2D tensor with shpae (2, 3)

# Reshape tensor_a to the shape of tensor_b
reshaped_tensor = tensor_a.reshape_as(tensor_b)
# Perform in-place reduction using 'mean' along the 0th dimension (rows)


print("Original tensor_a:", tensor_a)
print("Shape of tensor_a:", tensor_a.shape)
print("Reference tensor_b:", tensor_b)
print("Shape of tensor_b:", tensor_b.shape)
print("Reshaped tensor:", reshaped_tensor)
print("Shape after reshape_as:", reshaped_tensor.shape)
```

The code above will produce the following output:

```shell
Original tensor_a: tensor([0, 1, 2, 3, 4, 5])
Shape of tensor_a: torch.Size([6])
Reference tensor_b: tensor([[0., 0., 0.],
                             [0., 0., 0.]])
Shape of tensor_b: torch.Size([2, 3])
Reshaped tensor: tensor([[0, 1, 2],
                         [3, 4, 5]])
Shape after reshape_as: torch.Size([2, 3])
```

This code reshpaes the `source` tensor from 1D list that contains numbers from 0 to 5 into to a 2D matrix, containing the same values 

## Example

```py
import torch

# Create a 1D tensor with 8 elements
tensor_a = torch.arange(8)

# Create a new reference tensor with a different shape (4x2)
tensor_b = torch.zeros(4, 2)

# Reshape tensor_a to match the shape of tensor_b
reshaped_tensor = tensor_a.reshape_as(tensor_b)

print("Original tensor_a:", tensor_a)
print("Shape of tensor_a:", tensor_a.shape)
print("Reference tensor_b:", tensor_b)
print("Shape of tensor_b:", tensor_b.shape)
print("Reshaped tensor:", reshaped_tensor)
print("Shape after reshape_as:", reshaped_tensor.shape)
```

The code above will produce the following output:

```shell
Original tensor_a: tensor([0, 1, 2, 3, 4, 5, 6, 7])
Shape of tensor_a: torch.Size([8])
Reference tensor_b: tensor([[0., 0.],
                             [0., 0.],
                             [0., 0.],
                             [0., 0.]])
Shape of tensor_b: torch.Size([4, 2])
Reshaped tensor: tensor([[0, 1],
                         [2, 3],
                         [4, 5],
                         [6, 7]])
Shape after reshape_as: torch.Size([4, 2])
```

In this example, the code reshapes tensor_a from a shape of of a 1D vector to match tensor_b, a 4 row two column matrix while keeping the same data.
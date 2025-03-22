---
Title: '.rand()'
Description: 'Returns a tensor of a desired size, filled with random values generated from a uniform distribution in the range [0,1).'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Deep Learning'
  - 'Functions'
  - 'Machine Learning'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---

In PyTorch, the **`.rand()`** function is used to return a tensor of a desired size, filled with random numbers generated from a uniform distribution in the range `[0, 1)`. In this range, the endpoint value is not included (exclusive) and all numbers in this range have an equal probability of being chosen. This function is part of the `torch` package.

## Syntax

```pseudo
torch.rand(*size, *, generator=None, out=None, dtype=None, layout=torch.strided, device=None, requires_grad=False, pin_memory=False)

```

The `.rand()` function takes one required parameter `size`, which represents the shape of the tensor that is to be created. It can create a tensor with one, two, or more dimensions.

Meanwhile, there are seven other optional parameters that can be used with it to customize the tensor if needed:

- `generator`: Used for generating a number for sampling.
- `out`: Stores the output into existing tensor (if there is any).
- `dtype`: Used to customize the data type of the output.
- `layout`: Specifies how the tensor is stored in the memory.
- `device`: Specifies where the tensor will be created.
- `requires_grad`: Records the operation of the tensor.
- `pin_memory`: Used for allocating the tensor in the pinned memory.

## Example

The example below demonstrates how the `size` parameter can be applied to the `.rand()` function to create three different types of tensors. Among these tensors, `tensor1D` is a one-dimensional tensor or vector with a size of 3; `tensor2D` is a two-dimensional tensor, typically called a matrix; and `tensor3D` is a three-dimensional tensor:

```py
import torch

# Create a one-dimensional tensor of size 3
tensor1D = torch.rand(3)
print(tensor1D)

# Create a two-dimensional tensor of size 5 by 5
tensor2D = torch.rand(5, 5)
print(tensor2D)

# Create a three-dimensional tensor of size 3 by 5 by 5
tensor3D = torch.rand(3, 5, 5)
print(tensor3D)
```

Here is the output for the above example:

```shell
tensor([0.4581, 0.8923, 0.9110])

tensor([[0.9166, 0.4592, 0.1805, 0.5239, 0.4623],
        [0.8937, 0.9080, 0.9411, 0.5834, 0.8225],
        [0.4368, 0.9289, 0.7732, 0.7876, 0.5329],
        [0.2059, 0.1736, 0.4619, 0.4613, 0.2558],
        [0.7025, 0.7887, 0.0750, 0.7822, 0.7054]])

tensor([[[0.7478, 0.4375, 0.9769, 0.3897, 0.9407],
         [0.9649, 0.6459, 0.7927, 0.1902, 0.9625],
         [0.1942, 0.4772, 0.5795, 0.5631, 0.1460],
         [0.9176, 0.5342, 0.1067, 0.1989, 0.9478],
         [0.2999, 0.2278, 0.8297, 0.4244, 0.2445]],

        [[0.0626, 0.1151, 0.2487, 0.0667, 0.9877],
         [0.2304, 0.8230, 0.7293, 0.6631, 0.9981],
         [0.3059, 0.0967, 0.4872, 0.8695, 0.2324],
         [0.6734, 0.6645, 0.8859, 0.0637, 0.7380],
         [0.3292, 0.3411, 0.0896, 0.2175, 0.4013]],

        [[0.2818, 0.3043, 0.1920, 0.2259, 0.5281],
         [0.2549, 0.5776, 0.6986, 0.3627, 0.7794],
         [0.7877, 0.7343, 0.9829, 0.8692, 0.5039],
         [0.7503, 0.5880, 0.6443, 0.8743, 0.0187],
         [0.9316, 0.5449, 0.4706, 0.1604, 0.7445]]])
```

> **Note**: The result may not be the same as the one displayed above, due to random number generation.

Though one and two-dimensional tensors are well-known, there are instances in machine learning where a three-dimensional tensor is essential.

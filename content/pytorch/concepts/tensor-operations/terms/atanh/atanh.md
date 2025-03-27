---
Title: '.atanh()'
Description: 'Calculates the inverse hyperbolic tangent for each value in a tensor.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Deep Learning'
  - 'Programming'
  - 'PyTorch'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---
The **.atanh()** function in PyTorch stands for inverse hyperbolic tangent. It calculates the inverse hyperbolic tangent for each value in a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors).

## Syntax

```pseudo
torch.atanh(input)
```

## Parameters

- `input (Tensor)`: A tensor with values between (-1, 1) (excluding -1 and 1).

## Returns

- A new tensor where each value is the inverse hyperbolic tangent of value in the `input`


## Example

```py
import torch

# Create a tensor
x = torch.tensor([0.5, -0.3, 0.0])

# Calculate the inverse hyperbolic tangent
y = torch.atanh(x)

# Print the result
print(y)
```

The calculation in the example returns:

```shell
tensor ([ 0.5493, 0.3143, 0,0000])
```
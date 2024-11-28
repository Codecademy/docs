---
Title: 'nn.dropout()'
Description: 'Applies dropout regularization to neural network layers during training.'
Subjects:
  - 'Machine Learning'
  - 'Python'
Tags:
  - 'Deep Learning'
  - 'Machine Learning'
  - 'Neural Networks'
  - 'PyTorch'
CatalogContent:
  - 'learn-python-3'
  - 'paths/machine-learning'
---

**`torch.nn.Dropout`** is a regularization technique in [PyTorch](https://www.codecademy.com/resources/docs/pytorch) used to prevent overfitting during [neural network](https://www.codecademy.com/resources/docs/pytorch/nn) training. It works by randomly setting a fraction of input units to zero during each forward pass, reducing the model's reliance on specific neurons and encouraging it to generalize better.

Dropout is only applied during training and is automatically disabled during evaluation.

## Syntax

The syntax for applying dropout in PyTorch is:

```pseudo
torch.nn.Dropout(p=0.5)
```

- `p`: The probability of dropping of a unit (default is `0.5`, meaning 50% dropout).
  - A higher value increases regularization but may reduce model capacity.
- Returns a module that applies dropout to the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors).

## Example

Here's an example of using `nn.Dropout` in a neural network:

```py
import torch
import torch.nn as nn

# Define a tensor.
inputs = torch.randn(3, 5)

# Apply dropout with 50% probability.
dropout = nn.Dropout(p=0.5)

# Forward pass.
outputs = dropout(inputs)

print("Input Tensor:")
print(inputs)
print("\nOutput Tensor with Dropout Applied:")
print(outputs)
```

Example Output:

```shell
Input Tensor:
tensor([[ 0.3369, -1.0319,  1.3535, -0.4457, -0.2493],
        [ 0.3731,  1.0746, -0.5612, -1.2638, -0.0648],
        [ 0.9374, -0.2997, -1.1414,  0.4212,  0.7359]])

Output Tensor with Dropout Applied:
tensor([[ 0.6738, -0.0000,  2.7070, -0.8914, -0.4986],
        [ 0.7462,  2.1492, -0.0000, -2.5275, -0.1297],
        [ 0.0000, -0.5994, -2.2827,  0.8423,  1.4718]])
```

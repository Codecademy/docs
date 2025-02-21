---
Title: '.bernoulli()'
Description: 'Generates a tensor with binary values (0s and 1s) based on the probabilities provided in an input tensor.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Data Types'
  - 'Deep Learning'
  - 'Functions'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

In PyTorch, the **`.bernoulli()`** function is used to generate a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) with binary values (0s and 1s) based on the probabilities provided in an input tensor. Each element in the output tensor is drawn from a Bernoulli distribution, where the probability of drawing a 1 is given by the corresponding element in the input tensor.

## Syntax

```pseudo
torch.bernoulli(input, *, gen=None, out=None)
```

- `input`: A tensor containing probabilities (values between 0 and 1).
- `gen` (Optional): Generates a pseudorandom number for sampling. Defaults to `None`.
- `out` (Optional): The output tensor to store the result.

## Example

The following example demonstrates the usage of the `.bernoulli()` function:

```py
import torch

# Create a tensor containing probabilities
prob = torch.tensor([0.3, 0.6, 0.9, 0.4, 0.8, 0.5])

# Generate samples from the Bernoulli distribution
res = torch.bernoulli(prob)

# Print the resultant tensor
print(res)
```

The above code produces the following output:

```shell
tensor([0., 1., 1., 1., 1., 1.])
```

> **Note:** Since the `.bernoulli()` function samples independently for each element, the output may vary each time the code is run.

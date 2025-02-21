---
Title: '.normal()'
Description: 'Generates a tensor of random numbers from a normal (Gaussian) distribution.'
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

In PyTorch, the **`.normal()`** function is used to generate a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) of random numbers from a normal (Gaussian) distribution, given the mean and standard deviation. It is useful in scenarios where there is a need to sample from a normal distribution for tasks such as initializing [neural network](https://www.codecademy.com/resources/docs/ai/neural-networks) weights, generating synthetic data, or adding noise.

## Syntax

```pseudo
torch.normal(mean, std, *, gen=None, out=None)
```

- `mean`: A tensor containing the means of the normal distribution.
- `std`: A tensor containing the standard deviations of the normal distribution.
- `gen` (Optional): A pseudorandom number generator for sampling.
- `out` (Optional): A tensor where the output will be stored in-place.

## Example

The following example demonstrates the usage of the `.normal()` function:

```py
import torch

# Create tensors containing means and standard deviations
mean = torch.tensor([0.1, 0.4, 0.7])
std = torch.tensor([0.2, 0.5, 0.8])

# Generate samples from the normal distribution
res = torch.normal(mean, std)

# Print the resultant tensor
print(res)
```

The above code produces the following output:

```shell
tensor([0.3012, 0.3419, 1.6109])
```

> **Note:** Since the `.normal()` function generates a tensor of random numbers from the normal distribution, the output may vary each time the code is run.

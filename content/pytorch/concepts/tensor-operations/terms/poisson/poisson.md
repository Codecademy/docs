---
Title: '.poisson()'
Description: 'Generates a tensor where each element is drawn from a Poisson distribution with the corresponding rate given in the input tensor.'
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

The **`.poisson()`** function in PyTorch generates a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) where each element is drawn from a Poisson distribution with a rate parameter provided in the input tensor. The function is useful for modeling count-based data, such as event occurrences over time.

## Syntax

```pseudo
torch.poisson(input, generator=None)
```

- `input`: A tensor containing rate parameters for the Poisson distribution. Each value must be non-negative.
- `generator` (Optional): A random number generator for reproducibility. Defaults to `None`.

It returns a tensor with the same shape as input, where each element is a Poisson-distributed random value.

## Example

The following example demonstrates how to use `.poisson()`:

```py
import torch

# Create a tensor containing Poisson rate parameters
rates = torch.tensor([2.0, 5.0, 10.0, 3.5])

# Generate samples from the Poisson distribution
samples = torch.poisson(rates)

# Print the resulting tensor
print(samples)
```

The code above generates the output as follows:

```shell
tensor([4., 6., 7., 6.])
```

> **Note:** Since `.poisson()` generates random samples, the output values may vary each time the code is run.

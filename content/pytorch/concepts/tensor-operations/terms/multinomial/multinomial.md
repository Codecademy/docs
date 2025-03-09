---
Title: '.multinomial()'
Description: 'Samples elements from a given probability distribution.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Functions'
  - 'Math'
  - 'Probability'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

In PyTorch, the **`.multinomial()`** function is used to sample elements from a given probability distribution. It is commonly used when selecting multiple indices based on given probabilities, such as in reinforcement learning or probabilistic modeling.

## Syntax

```pseudo
torch.multinomial(input, num_samples, replacement=False, *, gen=None, out=None)
```

- `input`: A [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) containing probabilities for each element. The values must be non-negative.
- `num_samples`: The number of samples to draw from the probability distribution.
- `replacement` (Optional): If `False`, the same element is not chosen more than once.
- `gen` (Optional): A random number generator for reproducibility.
- `out` (Optional): The output tensor to store results.

## Example

The following example demonstrates the usage of the `.multinomial()` function:

```py
import torch

# Define a tensor containing probabilities
ten = torch.tensor([0.1, 0.3, 0.4, 0.2])

# Sample 2 indices without replacement
res = torch.multinomial(ten, num_samples=2, replacement=False)

# Print the result
print(res)
```

The above code produces the following output:

```shell
tensor([3, 2])
```

> **Note:** Since elements are chosen randomly, the output may vary each time the code is run.

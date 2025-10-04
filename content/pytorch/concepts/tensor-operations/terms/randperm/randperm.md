---
Title: '.randperm()'
Description: 'Generates a random permutation of integers from 0 to n-1.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Functions'
  - 'Integers'
  - 'PyTorch'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

In PyTorch, the **`.randperm()`** function generates a random permutation of integers from `0` to `n-1`. This function is useful when there is a need to shuffle indices, such as for batch sampling or dataset shuffling.

## Syntax

```pseudo
torch.randperm(n, *, generator=None, out=None, dtype=torch.int64, ...)
```

- `n` (int): The upper bound (exclusive) for the range of integers.
- `generator` (Optional): Generates a pseudorandom number for sampling.
- `out` (Optional): The output [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) to store the result.
- `dtype` (Optional): The desired data type of the returned tensor.

> **Note:** The ellipsis (...) in the syntax indicates that there can be additional optional parameters beyond those listed here.

## Example

The following example demonstrates the usage of the `.randperm()` function:

```py
import torch

# Generate a random permutation of integers from 0 to 9
perm = torch.randperm(10)

# Print the resultant tensor
print(perm)
```

The above code produces the following output:

```shell
tensor([0, 1, 5, 6, 4, 2, 8, 7, 3, 9])
```

> **Note:** Since the `.randperm()` function generates a random permutation of integers, the output may vary each time the code is run.

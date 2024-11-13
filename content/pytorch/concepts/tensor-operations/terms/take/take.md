---
Title: '.take()'
Description: 'Returns a 1D tensor containing elements from input at the specified indices.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Arrays'
  - 'Data Structures'
  - 'Deep Learning'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

The **`.take()`** function returns a 1D tensor containing elements from the given tensor at the specified indices. The resulting tensor will always be a 1D tensor irrespective of the size of the given tensor.

## Syntax

```pseudo
torch.take(input,index)
```

-`input`: The input tensor from which the elements will be selected.
-`index`: A 1D tensor containing the indices of the elements to extract from `input`.

## Example

The following example demonstrates the usage of `.take()` function:

```py
import torch

# Define a tensor
data = torch.tensor([[4, 2, -1], [7, 8, 0]])

# Use torch.take with data and indices
result = torch.tensor(data, torch.take([0,2,5]))

print(result)
```

```shell
[4,-1,0]
```




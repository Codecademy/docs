---
Title: '.take()'
Description: 'Returns a new tensor from a given tensor.'
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

The **.take()** function returns a tensor from the given tensor. The resulting tensor will always be a 1-D tensor irrespective of the size of the given tensor. 

## Syntax

```psuedo
torch.take(input,index)
```

-`input`: the input tensor from which the elements will be taken.
-`index`: the position of the elements you want to extract.

## Example

The following example demonstrates the usuage of `.take()` method:

```py
import torch

#Define a tensor
data = torch.tensor([[4, 2, -1], [7, 8, 0]])

#Define a new tensor
torch.take(data, torch.take([0,2,5]))
```

```shell
[4,-1,0]
```

## Codebyte

The following codebyte example shows the use of the `.take()` method:

```codebyte/python
import torch

# Define a tensor
data = torch.tensor([[6, 8, 1],
                    [5, 2, 4]])

# Calculate the transpose of the tensor
out = torch.take(ten)

print(out)
```


---
Title: '.chunk()'
Description: 'Splits a tensor with a specified dimension into chunks.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Data Types'
  - 'Deep Learning'
  - 'Functions'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

In PyTorch, the **`.chunk()`** function splits a tensor into a specific number of chunks. The function may return fewer than the specified number of chunks. To get the exact number of chunks, the **`.tensor_split()`** function can be used.

## Syntax

```pseudo
torch.chunk(input, chunks, dim)
```

- `input`: A required parameter that specifies the tensor that will be split into chunks.
- `chunks`: A required parameter that specifies the number of chunks that will be returned.
- `dim`: An optional parameter that specifies the dimension along which the split is performed.

> **Note:** If the tensor size is divisible by the number of chunks, then all the chunks returned are of same size. Otherwise, one chunk will be of a different size. If neither is an option, the function may return fewer chunks than the number of chunks specified.

## Example

Here is an example of a one-dimensional tensor with 6 elements, which is split into 3 chunks:

```py
import torch

# Create a 1D tensor
x = torch.tensor([1, 2, 3, 4, 5, 6])

print("Original tensor:", x)

# Split the tensor into 3 chunks
chunks = torch.chunk(x, chunks=3)

# Print each chunk
for i, chunk in enumerate(chunks):
  print(f"Chunk {i}:", chunk)
```

The output of this is shown below:

```shell
Original tensor: tensor([1, 2, 3, 4, 5, 6])
Chunk 0: tensor([1, 2])
Chunk 1: tensor([3, 4])
Chunk 2: tensor([5, 6])
```

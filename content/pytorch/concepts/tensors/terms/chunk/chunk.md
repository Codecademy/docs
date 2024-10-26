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

The **`.chunk()`** function splits a tensor into a specific number of chunks. The function may return fewer than the specified number of chunks. To get the exact chunks, use `.tensor_split()`.

## Syntax

```pseudo
torch.chunk(input, chunks, dim)
```

Parameters accepted:

- `input`: A required parameter that specifies the tensor that will be split into chunks.
- `chunks`: A required parameter that specifies the number of chunks that will be returned.
- `dim`: An optional parameter that specifies the dimension along which split is performed.

> **Note:** If the tensor size is the divisible number of chunks specified then all the chunks returned are of exact size otherwise one chunk returned will be of a different size. If neither is an option, the function may return fewer `chunks` than the `chunks` specified.

## Example

Here is an example of a one-dimensional tensor with 6 elements, which is split into 3 chunks.

```python
import torch

# Create a 1D tensor
x = torch.tensor([1, 2, 3, 4, 5, 6])

print("Original tensor:", x)

# Split into 3 chunks
chunks = torch.chunk(x, chunks=3)

# Print each chunk
for i, chunk in enumerate(chunks):
    print(f"Chunk {i}:", chunk)
```

The output of this will be printed below.

```
Original tensor: tensor([1, 2, 3, 4, 5, 6])
Chunk 0: tensor([1, 2])
Chunk 1: tensor([3, 4])
Chunk 2: tensor([5, 6])
```

## Codebyte Example

The following codebyte example demonstrates how a 2D tensor is divided into chunks.

```python
import torch

# Create a 2D tensor
x = torch.tensor([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])

print("Original 2D tensor:")
print(x)

# Split along the first dimension (rows)
chunks_along_rows = torch.chunk(x, chunks=2, dim=0)
print("\nChunks split along rows (dim=0):")
for i, chunk in enumerate(chunks_along_rows):
    print(f"Chunk {i}:")
    print(chunk)

# Split along the second dimension (columns)
chunks_along_columns = torch.chunk(x, chunks=3, dim=1)
print("\nChunks split along columns (dim=1):")
for i, chunk in enumerate(chunks_along_columns):
    print(f"Chunk {i}:")
    print(chunk)
```

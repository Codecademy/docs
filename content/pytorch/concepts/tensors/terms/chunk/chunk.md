---
Title: '.chunk()' 
Description: 'This function enables you to split a tensor with a specified dimension into chunks.' 
  - 'AI'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Data Types'
  - 'Deep Learning'
  - 'Functions'
 - 'intro-to-py-torch-and-neural-networks'
 - 'py-torch-for-classification'
---

The **`.chunk()`** function splits a tensor into a specific number of chunks. 

This function may return fewer than the specified number of chunks. If you need to return the exact chunks, you should use 
Unlike `.tensor_split()`. 

If tensor size (`dim`) **is** divisible by `chunks` specified, the output will be chunks of the same size. 

If tensor size (`dim`) **isn't** divisible by `chunks` specified, the output will return chunks of the same size expect for the **last one**. 

If neither is an option, the function may return fewer `chunks` that the `chunks` specified.

## Syntax

Parameters accepted:

- `input`: the tensor that will be split into chunks
- `chunks`: the number of chunks that will be returned once split
- `dim`: dimension of which to split the tensor 

## Example

Here is an example of a one dimensional tensor with 10 elements, which is split into 4 chunks. 

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

The output of this will be printed as follows below. 

```
Original tensor: tensor([1, 2, 3, 4, 5, 6])
Chunk 0: tensor([1, 2])
Chunk 1: tensor([3, 4])
Chunk 2: tensor([5, 6])
```

## Codebyte Example (if applicable)

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
```: {chunk.shape}")
```

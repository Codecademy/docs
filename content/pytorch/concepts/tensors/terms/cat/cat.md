---
Title: '.cat()'
Description: 'Concatenates two or more tensors in the same dimension.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Deep Learning'
  - 'Functions'
  - 'Machine Learning'
  - 'PyTorch'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---

The **`.cat()`** function in PyTorch concatenates two or more [tensors](https://www.codecademy.com/resources/docs/pytorch/tensors) along a specified dimension. The tensors must have the same shape in all dimensions except for the dimension along which they are concatenated.

## Syntax

```pseudo
torch.cat(tensors, dim=0, out=None)
```

**Parameters:**

- `tensors`: A sequence (like a list or tuple) of tensors to be concatenated. All tensors must have the same shape in all dimensions except for the specified dimension.
- `dim`: An integer specifying the dimension along which the tensors will be concatenated. The default value is `0`, which means concatenation will occur along the first dimension.
- `out`: A pre-allocated tensor with the correct shape to store the result of the concatenation. If not provided, a new tensor will be allocated.

**Return value:**

A new tensor resulting from concatenating the input tensors along the specified dimension.

## Example 1: Concatenating tensors along the first dimension

The example below showcases concatenating tensors along the first dimension using the `.cat()` function:

```py
import torch

# Create two tensors of shape (2, 3)
tensor1 = torch.tensor([[1, 2, 3], [4, 5, 6]])
tensor2 = torch.tensor([[7, 8, 9], [10, 11, 12]])

# Concatenate the tensors along the first dimension
result = torch.cat((tensor1, tensor2), dim=0)

print("tensor1:")
print(tensor1)

print("\ntensor2:")
print(tensor2)

print("\nresult:")
print(result)
```

The output shows the two tensors and the concatenated tensor along the first dimension:

```shell
tensor1:
tensor([[1, 2, 3],
        [4, 5, 6]])

tensor2:
tensor([[ 7,  8,  9],
        [10, 11, 12]])

result:
tensor([[ 1,  2,  3],
        [ 4,  5,  6],
        [ 7,  8,  9],
        [10, 11, 12]])
```

## Example 2: Concatenating tensors along the second dimension

The example below showcases concatenating tensors along the second dimension using the `.cat()` function:

```py
import torch

# Create two tensors of shape (2, 3)
tensor1 = torch.tensor([[1, 2, 3], [4, 5, 6]])
tensor2 = torch.tensor([[7, 8, 9], [10, 11, 12]])

# Concatenate the tensors along the second dimension
result = torch.cat((tensor1, tensor2), dim=1)

print("tensor1:")
print(tensor1)

print("\ntensor2:")
print(tensor2)

print("\nresult:")
print(result)
```

The output shows the two tensors and the concatenated tensor along the second dimension:

```shell
tensor1:
tensor([[1, 2, 3],
        [4, 5, 6]])

tensor2:
tensor([[ 7,  8,  9],
        [10, 11, 12]])

result:
tensor([[ 1,  2,  3,  7,  8,  9],
        [ 4,  5,  6, 10, 11, 12]])
```

## Example 3: Concatenating tensors along the third dimension

The example below showcases concatenating tensors along the third dimension using the `.cat()` function:

```py
import torch

# Create two tensors of shape (2, 2, 3)
tensor1 = torch.tensor([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])
tensor2 = torch.tensor([[[13, 14, 15], [16, 17, 18]], [[19, 20, 21], [22, 23, 24]]])

# Concatenate the tensors along the third dimension
result = torch.cat((tensor1, tensor2), dim=2)

print("tensor1:")
print(tensor1)

print("\ntensor2:")
print(tensor2)

print("\nresult:")
print(result)
```

The output shows the two tensors and the concatenated tensor along the third dimension:

```shell
tensor1:
tensor([[[ 1,  2,  3],
         [ 4,  5,  6]],

        [[ 7,  8,  9],
         [10, 11, 12]]])

tensor2:
tensor([[[13, 14, 15],
         [16, 17, 18]],

        [[19, 20, 21],
         [22, 23, 24]]])

result:
tensor([[[ 1,  2,  3, 13, 14, 15],
         [ 4,  5,  6, 16, 17, 18]],

        [[ 7,  8,  9, 19, 20, 21],
         [10, 11, 12, 22, 23, 24]]])
```

## Best Practices for using `.cat()` in PyTorch

1. **Match Shapes Across All Dimensions Except the Concatenation Axis:** Ensure all tensors have the same size in every dimension except the one you're concatenating along. Mismatched dimensions will cause errors.

2. **Use a List or Tuple of Tensors:** Group tensors into a list or tuple when passing them to `.cat()` for cleaner, more readable code—especially when combining multiple tensors.

3. **Avoid Unnecessary In-Place Operations:** Although torch.cat() supports an out parameter, it's usually best to let it return a new tensor unless memory usage is a concern.

## FAQs

<details>
<summary>1. What is the difference between torch.stack() and `.cat()`?</summary>
- `.cat()` combines tensors along an existing dimension.
- `.stack()` adds a new dimension and stacks tensors along that new axis.
Use stack when you want to create a new level of nesting; use cat to extend an existing one.
</details>

<details>
<summary>2. Can I concatenate tensors of different data types or devices?</summary>
<p>No. All tensors must have the same data type and must be on the same device (e.g., all on CPU or all on GPU). Mismatches will raise an error.
</p>
</details>

<details>
<summary>3. Can I concatenate along any dimension?</summary>
<p>Yes, as long as all other dimensions match. You can concatenate along any valid axis that exists in the input tensors.</p>
</details>

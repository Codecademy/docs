---
Title: '.real()'
Description: 'Returns the real part of each element in a complex tensor in PyTorch.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags: 
  - 'Functions'
  - 'PyTorch'
  - 'Tensor'
CatalogContent: 
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`.real()`** method in PyTorch returns a view of the real part of a complex tensor. It provides access to the real component of each element while sharing the same underlying memory as the original complex tensor. Any modification to this real view directly changes the original tensor’s data.

This method is available only for tensors with complex data types such as `torch.complex64` or `torch.complex128`.

## Syntax

```pseudo
torch.real(input)
```

**Parameters:**

- `input` (Tensor): A complex-valued input tensor.

**Return value:**

Returns a tensor containing only the real components of the original complex tensor. The returned tensor shares memory with the original tensor and has the corresponding real data type (e.g., `torch.float32` for `torch.complex64`).

## Example

This example demonstrates how to access and modify the real part of a complex tensor using `.real()`:

```py
import torch

# Create a 2x2 complex tensor
complex_tensor = torch.tensor([
    [1 + 2j, 3 + 4j],
    [5 + 6j, 7 + 8j]
])

print("Original Tensor:")
print(complex_tensor)

# Access the real view
real_view = torch.real(complex_tensor)

print("\nReal Part View:")
print(real_view)

# Modify a value in the real view
real_view[0, 0] = 99.0

print("\nOriginal Tensor after modification:")
print(complex_tensor)
```

The output of this code is:

```shell
Original Tensor:
tensor([[1.+2.j, 3.+4.j],
        [5.+6.j, 7.+8.j]])

Real Part View:
tensor([[1., 3.],
        [5., 7.]])

Original Tensor after modification:
tensor([[99.+2.j,  3.+4.j],
        [ 5.+6.j,  7.+8.j]])
```

## Key Takeaways

- `.real()` returns a view, not a copy, of the real component of a complex tensor.
- Any modification made through `.real()` affects the original complex tensor.
- Applicable only to tensors with complex dtypes (`torch.complex64`, `torch.complex128`).

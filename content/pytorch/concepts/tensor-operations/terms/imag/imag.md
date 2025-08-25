---
Title: '.imag'
Description: 'Returns the imaginary part of each element in a complex tensor.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Machine LEarning'
Tags:
  - 'AI'
  - 'Deep Learning'
  - 'Methods'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`.imag`** property in PyTorch returns the imaginary part of each element in a complex [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). For complex numbers, it returns the coefficient of the imaginary unit (`j`), and for real numbers, it returns zero. This method is essential for complex number analysis, signal processing, and mathematical operations involving complex tensors.

## Syntax

```pseudo
tensor.imag
```

**Return value:**

The `.imag` property returns a new tensor containing the imaginary parts of each element in the input tensor. The output tensor has the same shape as the input tensor but contains only real values.

## Example 1

The following example demonstrates how to use the `.imag` property to extract imaginary parts from a complex tensor:

```py
import torch

# Create a complex tensor
complex_tensor = torch.tensor([[1 + 2j, 3 - 4j], [5 + 0j, -2 + 1j]])

# Extract the imaginary parts
imaginary_parts = complex_tensor.imag

print("Original Complex Tensor:")
print(complex_tensor)

print("\nImaginary Parts:")
print(imaginary_parts)
```

This example produces the following output:

```shell
Original Complex Tensor:
tensor([[1.+2.j, 3.-4.j],
        [5.+0.j, -2.+1.j]])

Imaginary Parts:
tensor([[ 2., -4.],
        [ 0.,  1.]])
```

In this example:

- `1 + 2j` → imaginary part is `2.0`
- `3 - 4j` → imaginary part is `-4.0`
- `5 + 0j` → imaginary part is `0.0` (0.0 is also a real number)
- `-2 + 1j` → imaginary part is `1.0`

## Example 2

Run the following code to see how `.imag` works with different types of complex numbers:

```codebyte/python
import torch

# Create tensors with different complex numbers
complex_numbers = torch.tensor([1 + 3j, 2 - 5j, 4 + 0j, -1 - 2j])

# Extract imaginary parts
imag_parts = complex_numbers.imag

print("Complex numbers:", complex_numbers)
print("Imaginary parts:", imag_parts)

# Create a 2D complex tensor
matrix_2d = torch.tensor([[1 + 1j, 2 - 2j], [3 + 3j, 4 - 4j]])
print("\n2D complex matrix:")
print(matrix_2d)
print("\nImaginary parts of 2D matrix:")
print(matrix_2d.imag)
```

The output of this code is:

```shell
Complex numbers: tensor([ 1.+3.j,  2.-5.j,  4.+0.j, -1.-2.j])
Imaginary parts: tensor([ 3., -5.,  0., -2.])

2D complex matrix:
tensor([[1.+1.j, 2.-2.j],
        [3.+3.j, 4.-4.j]])

Imaginary parts of 2D matrix:
tensor([[ 1., -2.],
        [ 3., -4.]])
```

The `.imag` property is useful for:

- Separating real and imaginary components for analysis
- Performing operations specifically on imaginary parts of data
- Visualizing imaginary components of complex signals
- Implementing algorithms that require distinct handling of real and imaginary values

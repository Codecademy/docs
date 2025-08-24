---
Title: '.imag'
Description: 'Extracts the imaginary part of each element in a complex tensor.'
Subjects:
  - 'AI'
  - 'Data Science'
  - 'Computer Science'
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

The **`.imag`** method in PyTorch extracts the imaginary part of each element in a complex [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). For complex numbers, it returns the coefficient of the imaginary unit (j), and for real numbers, it returns zero. This method is essential for complex number analysis, signal processing, and mathematical operations involving complex tensors.

## Syntax

```pseudo
tensor.imag
```

The `.imag` property returns a new tensor containing the imaginary parts of each element in the input tensor. The output tensor has the same shape as the input tensor but contains only real values.

## Example

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

- **1 + 2j** → imaginary part is **2.0**
- **3 - 4j** → imaginary part is **-4.0**
- **5 + 0j** → imaginary part is **0.0** (0.0 is also a real number)
- **-2 + 1j** → imaginary part is **1.0**

## Codebyte Example

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

The `.imag` property is useful when you need to:

- Separate real and imaginary components for analysis
- Perform operations only on the imaginary parts of complex data
- Visualize the imaginary components of complex signals
- Implement algorithms that require separate handling of real and imaginary parts

---
Title: '.as_tensor()'
Description: 'Converts a NumPy array to a PyTorch tensor without copying the data.'
Subjects: 
  - 'AI' 
  - 'Data Science' 
Tags: 
  - 'AI' 
  - 'Data Types' 
  - 'Deep Learning' 
  - 'Functions' 
---

In PyTorch, the **`.as_tensor()`** function is used to convert a NumPy array to a PyTorch tensor. This function is useful when you want to convert a NumPy array to a PyTorch tensor without copying the data. This is because the PyTorch tensor and the NumPy array share the same memory location. This means that if you modify the NumPy array, the PyTorch tensor will also be modified, and vice versa.

## Syntax

The syntax for the `.as_tensor()` function is as follows:

```pseudo
torch.as_tensor(data, dtype=None, device=None, requires_grad=False)
```

- **`data`**: The input data to be converted to a PyTorch tensor. This can be a NumPy array, a Python list, or a scalar value.
- **`dtype`**: The data type of the output tensor. If not specified, the data type is inferred from the input data.
- **`device`**: The device on which the output tensor will be stored (e.g., 'cpu' or 'cuda'). If not specified, the tensor will be stored on the CPU.
- **`requires_grad`**: Whether the output tensor requires gradient computation. If set to `True`, the tensor will be used in autograd to compute gradients. Default is `False`.

## Example

```py
import torch
import numpy as np 

# Create a NumPy array 
arr = np.array([1, 2, 3]) 

# Convert the NumPy array to a PyTorch tensor 
tensor = torch.as_tensor(arr) 

print(tensor) 
```

Output:

```shell
tensor([1, 2, 3])
```

In this example, we first create a NumPy array `arr` with values `[1, 2, 3]`. We then convert this NumPy array to a PyTorch tensor using the `.as_tensor()` function. The resulting tensor `tensor` has the same values as the original NumPy array.

## Additional Notes

- The `.as_tensor()` function is useful when you want to avoid copying the data from a NumPy array to a PyTorch tensor. This can be beneficial when working with large datasets to save memory and improve performance.
- It is important to note that the PyTorch tensor and the NumPy array share the same memory location, so modifying one will affect the other.
- If you want to create a copy of the data, you can use the `.tensor()` function instead, which creates a new tensor with a copy of the data.

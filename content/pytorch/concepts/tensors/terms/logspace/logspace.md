---
Title: '.logspace()'
Description: 'Returns a one-dimensional tensor with values logarithmically spaced.'
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
  - 'py-torch-for-classification'
---

The **`.logspace()`** function returns a one-dimensional tensor with values logarithmically spaced.

The function is useful for generating logarithmically spaced values for various applications, such as plotting data on a logarithmic scale or creating logarithmic scales for neural network hyperparameters.

## Syntax

```pseudo
torch.logspace(start, end, steps, base, dtype=None)
```

- `start`: The first number in the range expressed as a logarithm.
- `end`: The last number in the range expressed as a logarithm.
- `steps`: Number of elements to be returned in the tensor.
- `base`: The base of the logarithm used for calculating the values default value is 10.
- `dtype`: Specifies the data type of the returned tensor.

## Example

```py
import torch

# Generate a tensor with 5 logarithmically spaced values between 1 and 1000
tensor = torch.logspace(0, 3, steps=5)
print(tensor)
```

The code above generates the following output:

```shell
tensor([10.0000, 100.0000, 1000.0000, 10000.0000, 100000.0000])
```

In this example, we created a tensor `tensor` containing 5 logarithmically spaced values between 1 and 1000 using the `.logspace()` function. The tensor `tensor` contains the values `[10.0000, 100.0000, 1000.0000, 10000.0000, 100000.0000]`.

```py
# Generate a tensor with 3 logarithmically spaced values between 0 and 1
tensor = torch.logspace(0, 1, steps=3, dtype=torch.float64)
print(tensor)
```

Output:

```shell
tensor([1.0000, 3.1623, 10.0000], dtype=torch.float64)
```

In this example, we created a tensor `tensor` containing 3 logarithmically spaced values between 0 and 1 using the `.logspace()` function with a data type of `torch.float64`. The tensor `tensor` contains the values `[1.0000, 3.1623, 10.0000]`.

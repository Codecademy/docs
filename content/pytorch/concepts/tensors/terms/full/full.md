---
Title: '.full()' 
Description: 'In PyTorch, the `.full()` function creates a tensor filled with a specified value and shape according according to the dimensions provided.' 
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Alias'
  - 'Algorithms'
  - 'Data'
  - 'Data Structures'
CatalogContent:
  - 'learn-python-3'
  - 'intro-to-py-torch-and-neural-networks'
---

The **`.full()`** function is used to create a tensor of a specified shape filled with a constant value. This function is particularly useful for efficient tensor management in machine learning and data science, as it allows for the creation of tensors with predefined values. Additionally, it accepts various parameters for defining the desired shape and fill value.

## Syntax

```pseudo 
torch.full(size, fill_value, dtype=None, layout=torch.strided, device=None, requires_grad=False)

```
- `size`: A list that specifies the desired shape.
- `fill_value`: The value that is used to fill the tensor.
- `dtype`: Data type of the tensor.
- `layout`: Layout of the tensor. This parameter is optional
- `device`: The device on which the tensor is to be allocated. This parameter is optional.
- `requires_grad`: It is a boolean value that indicates whether to track the operations of the tensor for gradient computation or not. By defaukt this is `False`.

### Example

The below example code created a 2x3 tensor where all elements are set to 5.

```py
import torch

# Create a 2x3 tensor filled with the value 5
tensor = torch.full((2, 3), 5)
print(tensor)

```
## Codebyte Example

```codebyte/python
import torch

# Create a 2x3 tensor filled with the value 10
tensor = torch.full((2, 3), 10)

print(tensor)  
```


  



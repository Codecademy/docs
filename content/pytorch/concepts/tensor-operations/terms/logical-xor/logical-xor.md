---  
Title: '.logical_xor()'  
Description: 'Performs element-wise logical exclusive OR (XOR) operation on boolean tensors, returning a tensor where each element is `True` if the corresponding elements of the inputs differ, and `False` otherwise.'  
Subjects:  
  - 'AI'  
  - 'Computer Science'  
  - 'Data Science'  
  - 'Machine Learning'  
Tags:  
  - 'Booleans'  
  - 'Functions'  
  - 'PyTorch'  
  - 'Tensor'  
CatalogContent:  
  - 'intro-to-py-torch-and-neural-networks'  
  - 'paths/data-science'  
---  

In PyTorch, the **`.logical_xor()`** function performs an element-wise **logical exclusive OR (XOR)** operation between two tensors. It returns a new tensor where each element is `True` if exactly one of the corresponding elements in the input tensors is `True`, and `False` otherwise.  

For non-boolean tensors, zeros are treated as `False` and non-zeros as `True`. This operation is often used in conditions involving mutually exclusive logic or binary masking.  

## Syntax  

```pseudo
torch.logical_xor(input, other, *, out=None)
```  

**Parameters:**  

- `input`: The first input tensor (boolean or numeric).  
- `other`: The second input tensor (boolean or numeric). Must be broadcastable to the shape of `input`.  
- `out` (Optional): A tensor to store the result. It must have the same shape as the output. The dtype is typically `torch.bool`, but integer types (like `torch.int16`) are also supported to represent `0` and `1`.  

**Return value:**  

Returns a tensor containing the element-wise logical XOR of the two input tensors.  

## Example  

The following example demonstrates the use of `.logical_xor()` for boolean and numeric tensors:  

```py
import torch

# Boolean tensors
a = torch.tensor([True, False, True, False])
b = torch.tensor([True, True, False, False])

# Element-wise logical XOR
res = torch.logical_xor(a, b)

print('a:', a)
print('b:', b)
print('logical_xor(a, b):', res)

# Numeric tensors — zeros are False, non-zeros are True
x = torch.tensor([0, 1, 2, 0])
y = torch.tensor([1, 0, 2, 0])

print('\nx:', x)
print('y:', y)
print('logical_xor(x, y):', torch.logical_xor(x, y))

# Using an integer out tensor (int16) to store 0/1 results
out_buf = torch.empty(4, dtype=torch.int16)
torch.logical_xor(x, y, out=out_buf)
print('\nlogical_xor(x, y) with out=int16:', out_buf)
```  

The above code produces the following output:  

```shell
a: tensor([ True, False,  True, False])
b: tensor([ True,  True, False, False])
logical_xor(a, b): tensor([False,  True,  True, False])

x: tensor([0, 1, 2, 0])
y: tensor([1, 0, 2, 0])
logical_xor(x, y): tensor([ True,  True, False, False])
logical_xor(x, y) with out=int16: tensor([1, 1, 0, 0], dtype=torch.int16)
```  

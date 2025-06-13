---
Title: '.clamp()'
Description:
Subjects: 
  -  
Tags:
  -  
CatalogContent:
  -  
---

The **`.clamp()`** method in PyTorch limits tensor values to a specified range, setting elements below the minimum to the minimum and elements above the maximum to the maximum. It's used to normalize data or enforce constraints. PyTorch offers a functional version (`torch.clamp`), a tensor method (`.clamp`), and an in-place method (`.clamp_`).

## Syntax

```python
torch.clamp(input, min=None, max=None, *, out=None) -> Tensor
input.clamp(min=None, max=None) -> Tensor
input.clamp_(min=None, max=None) -> Tensor
```
### Parameters:

- `input`: Tensor with values to clamp.
- `min`: Lower bound; values below this are set to `min`. If `None`, no lower bound.
- `max`: Upper bound; values above this are set to `max`. If `None`, no upper bound.
- `*`: Indicates that `out` must be passed as a keyword argument.
- `out`: Optional output tensor for `torch.clamp`.
- `.clamp_`: In-place operation.


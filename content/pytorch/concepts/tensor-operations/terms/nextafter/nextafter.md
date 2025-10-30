---
Title: '.nextafter()'
Description: 'Returns the next floating-point value after `input` in the direction of `other`.'
Subjects:
  - 'PyTorch'
  - 'Machine Learning'
  - 'Data Science'
Tags:
  - 'PyTorch'
  - 'Tensor'
  - 'Operations'
  - 'Functions'
CatalogContent:
---

The **`.nextafter()`** function, `torch.nextafter()`, is a PyTorch function that computes the next representable floating-point value following each element in the `input` tensor in the direction of the corresponding element in the `other` tensor.

> **Note:** If an element in `input` is equal to the corresponding element in `other`, that element is returned unchanged in the output tensor.

## Syntax

```py
torch.nextafter(input, other, out=None)

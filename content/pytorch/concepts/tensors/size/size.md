---
Title: '.size()'
Description: 'Returns the size of the self tensor.'
Subjects:
  - 'Machine Learning'
  - 'Data Science'
Tags: 
  - 'AI'
  - 'Data Structures'
  - 'Deep Learning'
  - 'Methods'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **`size()`** method returns a `torch.Size` object containing the size information. 

## Syntax

```psuedo
t.size(dim=None)
```

- `dim`: (`int`) This optional parameter specifies the dimension for which to retrieve the size. The default value is `None`. 
    - If `dim` is not provided, the returned value is a `torch.Size`, a subclass of __tuple__. 
    - If `dim` is specified, the returned value is an __int__ holding the size of the given dimension. 

## Example

The following example shows how to use the `.size()` method: 

```py
import torch

t = torch.empty(3, 4, 5)

print(t.size())
print(t.size(dim=1))
```

The code above generates the following output:

```shell
torch.Size([3, 4, 5])
4
```

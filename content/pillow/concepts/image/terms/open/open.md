---
Title: '.open()' 
Description: 'Returns an image object from an image file.' 
Subjects: 
  - 'Computer Science'
  - 'Data Science'
Tags: 
  - 'Images'
  - 'Methods'
  - 'Pillow'
  - 'Python'  
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **`.open()`** function opens an image file as an object. This is the first step in manipulating the image. The function does not read and display the file unless other methods, such as **`.load()`** or **`.show()`**, are used after.

## Syntax

```pseudo 
Image.open(fp, mode='r')
```

### Parameters:

- `fp` - The path to an object or a file object.                  
- `mode` - Is optional and it indicates how the file is going to be opened. Set by default to read mode ('r').  

## Example

```python
# To use `.open()`, the first step is importing the Image module from the PIL library
from PIL import Image

# It can be used as shown below, by assigning the image to a variable
image = Image.open('file-path')

# Or, `with` can be used along with `.open()` for the file to close properly after being processed
with Image.open('file-path') as image:
    # Image processing
    pass
```

---
Title: '.save()'
Description: 'saves an image to a specified file.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags: 
  - 'Images'
  - 'Libraries'
  - 'Pillow'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/data-science'
---


In the Pillow library, the **`.save()`** method saves an image to a specified filename. The filename, provided by the user or the code writer,determines the format in which the image is saved.

## Syntax
```pseudo
image.save(fp, format=none, **params)     

#### Parameters:
    - **fp**: A filename (string), os.PathLike object or file object.
    - **format**: Optional format override. If omitted, the format to use is determined from the filename extension.
                  If a file object was used instead of a filename, this parameter should always be used.
    - ** **params**: Extra parameters to the image writer.


#### RETURNS:
    none

## Example
The code brings in Image from the pillow library. Image is used to open up the image and then save it under the specified name.

![Image]("fluffybird.jpg")

``` 
from PIL import Image

newImage = Image.open(r"C:\Users\Codecademy\Desktop\bird.jpg") 

newImage = newImage.save("fluffy.jpg")
```

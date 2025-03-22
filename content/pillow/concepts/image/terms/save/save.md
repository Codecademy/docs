---
Title: '.save()'
Description: 'Saves an Image to be used.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  
Tags: 
  - 'Images'
  - 'Libraries'
  - 'Pillow'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn Git and GitHub'
  - 'paths/Python'
---


In the Pillow library, The **.save()** method is used to save an image under the given filename. This allows for the image to be saved in a recognizable way to the writer of the code. The given filename is written by the writer of the code.

## Syntax

Image.save(fp, format=None, **params)     

#### Parameters:
    -**Image**: The Image object to be saved.
    -**fp**: filename to the file to be saved.
    -**format**: This is an optional paramater used if there is a conversion of the file(i.e. JPEG to GIF).
    -**params**: Extra parameters to the image writer 

#### RETURNS:
    none

## Example

[Text, code, images, etc. about example 1]

![Image](fluffy-bird.jpeg)

``` 
im1 = Image.open(r"C:\Users\Codecademy\Desktop\bird.jpg") 

im1 = im1.save("fluffy.jpg")
```

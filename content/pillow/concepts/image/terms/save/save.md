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
CatalogContent: 
  - 'learn Git and GitHub'
  - 'paths/Python'
---


In the Pillow library, The **.save()** method is used to save an image under the given filename. This allows for the image to be saved in a recognizable way to the writer of the code. The given filename is written by the writer of the code.

## Syntax

Image.save(filename)     

#### Parameters:
    -**Image**: The Image object to be saved.
    -**filename**: filename to the file to be saved.


#### RETURNS:
    none

## Example

![Image](https://unsplash.com/photos/close-up-of-a-yellow-and-blue-macaw-lylCw4zcA7I)

``` 
newImage = Image.open(r"C:\Users\Codecademy\Desktop\bird.jpg") 

newImage = newImage.save("fluffy.jpg")
```

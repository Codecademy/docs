---
Title: "<img>"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Images"
  - "Tags"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-html"
  - "https://www.codecademy.com/learn/paths/web-development"
---

## Definition 

Used to add an image to the document. It can also be used inside an anchor tag to create an image link.

## Syntax

```html
<img src="image URL" alt="text used for accessibility">
``` 

`<img>` is a tag that has no closing tag, meaning that it cannot have tags inside of it. It uses attributes to set properties, some common attributes are:

  * `src`: the URL location of the image
  * `alt`: alternative text used by screen readers and when the image does not load
  * `height`: the height of the image, in pixels
  * `width`: the width of the image, in pixels

## Example

Below is an example of an image wrapped in an anchor tag which creates an image link:

```html
<html>
  <head>
  </head>
  <body>
    <a href="https://codecademy.com">
      <img src="logo.png" alt="Codecademy Home Page" width=256 height=64>
    </a>
  </body>
</html>
```
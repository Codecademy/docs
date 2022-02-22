---
Title: '<picture>'
Description: 'Represents multiple possible image sources to be applied to different devices and screen-sizes.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Images'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

Represents a generic division of content. It has no semantic meaning but will separate its contents from the rest of the document.

## Syntax

```pseudo
<picture>
  <!-- zero or more source tags go here -->
  <!-- followed by one img tag here -->
</picture>
```

`<picture>` is a tag that allows developers the flexibility to use different image specifications.

## Example

The `<picture>` tag is typically used with one or more `<source>` elements and one `<img>` element in order to offer different versions of an image for different scenarios.
Using different sources allows more options for the browser. The `<img>` tag is used as the last child of the `<picture>` element. It describes the attributes of the image
and acts as a fallback if any of the sources fail to meet the required specifications.

```html
<html>
  <head> </head>
  <body>
    <picture>
      <source media="(min-width:700px)" srcset="img_white_shoes.jpg" />
      <source media="(min-width:540px)" srcset="img_blue_shoes.jpg" />
      <img src="img_red_shoes.jpg" alt="Shoes" style="width:auto;" />
    </picture>
  </body>
</html>
```

A use case for this example is **Art Direction** where responsive designs offer an alternative image to fit within smaller or larger displays based on the media being used.

Another use case is **Page Load Time Optimization**. In situations when certain images take longer to load, having an alternative image that loads faster improves the page load time.

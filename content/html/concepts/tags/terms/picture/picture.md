---
Title: '<picture>'
Description: 'The <picture> tag gives developers more flexibility when specifying image resources.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

Represents a generic division of content. It has no semantic meaning, but will separate its contents from the rest of the document.

## Syntax

```html
<picture>
  <!-- source and image tags go here -->
</picture>
```

`<picture>` is a tag that allows the ability to use a variety of image resources to meet different requirements.

## Example

The `<picture>` tag is typically used with one or more `<source>` elements and one `<img>` element in order to offer diferent versions of an image for different scenarios.
Using different sources allows more options for the browser. The `<img>` tag is used as the last child of the `<picture>` element and not only does it describe attributes of the image
it is also used as a fallback if any of the sources fail to meet the required specifications.

```html
<html>
  <head> </head>
  <body>
    <picture>
      <source media="(min-width:700px)" srcset="img_white_shoes.jpg">
      <source media="(min-width:540px)" srcset="img_blue_shoes.jpg">
      <img src="img_red_shoes.jpg" alt="Shoes" style="width:auto;">
    </picture>
  </body>
</html>
```

A use case for this example is **Art Direction** where responsive designs offer an alternative image to fit within smaller or larger displays based on the media being used.
  
Another use case is **Page Load Time Optimization**. In situations when certain images take longer to load, having an alternative image that loads faster improves the page load time.

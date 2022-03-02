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

The `<picture>` tag represents multiple possible image sources to be applied to different devices and screen-sizes. While it has no semantic meaning, the `<picture>` tag will separate its contents from the rest of the document.

## Syntax
  
The `<picture>` tag is used with zero or more `<source>` elements followed by one [`<img>` element](https://www.codecademy.com/resources/docs/html/images).
  
```pseudo
<picture>
  Zero or more <source> tags go here,
  followed by at least one <image> tag here.
</picture>
```

`<picture>` is a tag that allows developers the flexibility to use different image specifications.

## Example

Using different sources provides more options for the browser with regards to the screen or host device. The `<img>` tag is used as the last option of the `<picture>` element, acting as a fallback if any of the sources are invalid.

```html
<html>
  <head> </head>
  <body>
    <picture>
      <source media="(min-width:700px)" srcset="img_white_shoes.jpg" />
      <source media="(min-width:540px)" srcset="img_blue_shoes.jpg" />
      <img src="img_red_shoes.jpg" alt="Red Shoes" style="width:auto;" />
    </picture>
  </body>
</html>
```

Some use cases for this example include the following:

- Creating a responsive design where an alternative image is used based on the display size.
- Optimizing page load times in situations where certain images take longer to load and having an alternative image that loads faster comes in handy.

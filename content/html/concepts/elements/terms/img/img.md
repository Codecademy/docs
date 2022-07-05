---
Title: '<img>'
Description: 'Displays an image on the web page.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Images'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<img>`** element displays an image on the web page.

## Syntax

```html
<img src="image URL" alt="text used for accessibility" />
```

The `<img>` element has no closing tag and it cannot have other tags inside of it. It uses attributes to set properties, some of which include:

- `src` sets the URL or filename of [images](https://www.codecademy.com/resources/docs/html/images) that support many formats (GIF, JPEG, PNG, etc.).`
- `alt` is an alternative text used by screen readers and when the image does not load.
- `height` is the height of the image, measured in pixels.
- `width` is the width of the image, measured in pixels.

## Example

Below is an example of an image wrapped in an `<a>` element which creates an image link:

```html
<html>
  <head> </head>
  <body>
    <a href="https://codecademy.com">
      <img
        src="cc_logo.png"
        alt="Codecademy Home Page"
        width="256"
        height="64"
      />
    </a>
  </body>
</html>
```

This is what the rendered image look like:

![Codecademy logo](https://raw.githubusercontent.com/Codecademy/docs/main/media/cc_logo.png)

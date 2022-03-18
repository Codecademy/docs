---
Title: '<img>'
Description: 'Displays an image on the web page.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<img>` tag displays an image on the web page.

## Syntax

```html
<img src="image URL" alt="text used for accessibility" />
```

The HTML image tag, `<img>`, has no closing tag, meaning that it cannot have other tags inside of an image element. It uses attributes to set properties, some common attributes are:

- `src`: the URL or filename of the image that supports a litany of formats (GIF, JPEG, PNG, etc.).`
- `alt`: alternative text used by screen readers and when the image does not load.
- `height`: the height of the image, measured in pixels.
- `width`: the width of the image, measured in pixels.

## Example 1

Below is an example of an image wrapped in an anchor tag which creates an image link:

```html
<html>
  <head> </head>
  <body>
    <a href="https://codecademy.com">
      <img src="cc_logo.png" alt="Codecademy Home Page" width="256" height="64" />
    </a>
  </body>
</html>
```
This is what the rendered image look like:

![Codecademy logo](https://raw.githubusercontent.com/Codecademy/docs/main/media/cc_logo.png)

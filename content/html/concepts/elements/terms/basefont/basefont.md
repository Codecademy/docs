---
Title: '<basefont>'
Description: 'Used to be used to set the font of text. This is now deprecated.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Tags'
  - 'Style'
  - 'Typography'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<basefont>`** element was used to set the default font characteristics for the text of an HTML document.

> **Note**: This is now deprecated, [CSS](https://www.codecademy.com/resources/docs/css) properties like the [`font` property](https://www.codecademy.com/resources/docs/css/typography/font) should be used instead. To set the font of specific parts of the webpage, the [`<font>` element](https://www.codecademy.com/resources/docs/html/elements/font) would be used in combination with the `<basefont>` element.

## Syntax

`<basefont>` must be a child of the [<head>](https://www.codecademy.com/resources/docs/html/elements/head) element. Any combination of the following three attributes could be used in the `<font>` element, with at least one being required:

- `color`: Sets the [color](https://www.codecademy.com/resources/docs/css/colors) for the font/text using a named color, hexadecimal, or RGB.
- `face`: Sets the font for the text (e.g., `face="verdana"`).
- `size`: Sets the size of the font/text using absolute units ranging from 1-7 (e.g., `size="5"`).

## Example

```html
<html>
  <head>
    <basefont size="5" font="verdana" color="green" />
  </head>
  <body>
    <p>
      This text should be size 5 the font should be verdana and the color should
      be green.
    </p>
  </body>
</html>
```

![Output of the basefont tag example](https://raw.githubusercontent.com/Codecademy/docs/main/media/basefont-tag-example.png)

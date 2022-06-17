---
Title: '<basefont>'
Description: 'Used to be used to set the font of text. This is now deprecated.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
  - 'Style'
  - 'Typography'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<basefont>`** tag was used to set the font of a whole webpage. It is not used any more in favor of the [CSS](https://www.codecademy.com/resources/docs/css) [`font`](https://www.codecademy.com/resources/docs/css/typography/font) property instead because the `<basefont>` tag is now deprecated. To set the font of specific parts of the webpage the [`<font>`](https://www.codecademy.com/resources/docs/html/tags/font) would be used in comebnation of the `<basefont>` tag.

## Syntax

The tag must be a child of the [head](https://www.codecademy.com/resources/docs/html/tags/head) tag. Any combination of the following three attributes could be used in the `<font>` tag, with at least one being required:

- `color`: What [color](https://www.codecademy.com/resources/docs/css/colors) the font/text should be. The color can be set to a named [color], hexadecimal or rgb.
- `face`: What font the text should be. For example to have the text be `verdana` the `face` attribute would be like this `face="verdana"`
- `size`: Sets the size of the font/text. It can use absolute units ranging from 1-7. Absolute units are used by `size="5"` or any other number 1-7.

## Example

```html
<html>
  <head>
    <basefont size="5" font="verdana" color="green" />
  </head>
  <body>
    <p>
      This text should be size 5 the font should be verdana and the color should be green.
    </p>
  </body>
</html>
```

![Output of the basefont tag example](https://raw.githubusercontent.com/Codecademy/docs/main/media/basefont-tag-example.png)

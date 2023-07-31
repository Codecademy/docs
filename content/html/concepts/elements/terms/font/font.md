---
Title: '<font>'
Description: 'Used to be used to set the font characteristics of a text. This is now deprecated.'
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

The **`<font>`** element was used to set the font characteristics of a text.

> **Note** This is now deprecated. [CSS](https://www.codecademy.com/resources/docs/css) properties like the [`font`](https://www.codecademy.com/resources/docs/css/typography/font) property should be used instead.

## Syntax

At least one of the following three attributes is required for the `<font>` element. However, any combination of them can be used:

- `color`: What [color](https://www.codecademy.com/resources/docs/css/colors) the font/text should be. The color can be set to a named `color`, hexadecimal or RGB.
- `face`: What font the text should be. For example, to have the text be `verdana`, the `face` attribute would be set to `face="verdana"`.
- `size`: Sets the size of the font/text. It can use absolute units and relative units ranging from 1-7. Absolute units are used by `size="5"` or any other number 1-7. Relative units are relative the size of the [`<basefont>`](https://www.codecademy.com/resources/docs/html/elements/basefont) element which is also deprecated. The attribute would look something like this `size="+5"`.

## Example

```html
<font color="pink">This text is pink</font>
<font size="5">This size is 5</font>
<font face="verdana">This text is in verdana font</font>
```

![Output of the font tag example](https://raw.githubusercontent.com/Codecademy/docs/main/media/font-tag-example.png)

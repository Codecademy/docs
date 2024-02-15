---
Title: '<q>'
Description: 'Used to represent a brief inline quotation.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Tags'
  - 'Attributes'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<q>`** element is used to represent a brief inline quotation, as opposed to the [`<blockquote>`](https://www.codecademy.com/resources/docs/html/elements/blockquote) element being used for longer ones.

It accepts a `cite` attribute that links to a valid URL that provides further context for the quotation.

## Syntax

```html
<q cite=""><!-- Brief quotation goes inside the tag --></q>
```

The `<q>` element requires an opening and closing tag wrapped around a line of text. The browser will automatically enclose the text in quotation marks.

## Example

```html
<!-- The text between the q tags will be surrounded by quotation marks -->
<p>
  The World Wide Web Consortium's idea of the Web includes
  <q cite="https://www.w3.org/Consortium/mission">
    participation, sharing knowledge, and thereby building trust on a global
    scale.
  </q>
  One can't help but agree with it!
</p>
```

![Example of what the rendered text would look like](https://raw.githubusercontent.com/Codecademy/docs/main/media/q.jpg)

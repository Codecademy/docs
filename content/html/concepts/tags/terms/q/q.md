---
Title: '<q>'
Description: 'Used to represent a brief inline quotation.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<q>` tag is used to represent a brief inline quotation.
It accepts a `cite` attribute which will link to a source that provides further context for the quotation.

## Syntax

```html
<q><!-- brief quotation goes inside the tag --></q>
```

The `<q>` tag requires an opening and closing tag wrapped around a line of text. The browser will automatically enclose the text in quotation marks.

The `cite` attribute should be a valid URL.

## Example

```html
<!-- The text between the q tags will be surrounded by quotation marks -->
<p>
  The World Wide Web Consortium's idea of the Web includes
  <q cite="https://www.w3.org/Consortium/mission">participation, sharing knowledge, and thereby building trust on a global
    scale.</q>
  One can't help but agree with it!
</p>
```

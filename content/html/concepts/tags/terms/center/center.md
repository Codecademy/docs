---
Title: '<center>'
Description: 'Displays its contents centered horizontally in the containing element. This is now deprecated and CSS should be used instead.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
  - 'Style'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<center>` tag was used historically to center content, usually text, within its containing elements. It has since been deprecated and removed from the HTML specification. While some browsers might support it for backwards compatibility, it should no longer be used.

The current practice to center text in HTML is to use the [CSS](https://www.codecademy.com/resources/docs/css) property [`text-align`](https://www.codecademy.com/resources/docs/css/typography/text-align) and to use properties of the [CSS box model](https://www.codecademy.com/resources/docs/css/box-model) to center other elements.

## Example

Historical use:

```html
<!-- Don't use this! -->
<center>
  This is centered text.
  <p>This is a centered paragraph</p>
</center>
```

Modern alternative:

```html
<!-- Use this, instead. :) -->
<div style="text-align:center;">
  This is centered text.
  <p>This is a centered paragraph</p>
</div>
```

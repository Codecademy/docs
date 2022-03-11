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

The `<center>` tag was used historically to center elements, usually text, within their containing element. It has been removed from the HTML specification, and while some browsers might support it for backwards compatibility, it should no longer be used.

The current practice to center text in HTML is to use the [CSS](https://www.codecademy.com/resources/docs/css) property [`text-align`](https://www.codecademy.com/resources/docs/css/typography/text-align) and to use properties of the [CSS box model](https://www.codecademy.com/resources/docs/css/box-model) to center other elements.

## Example

Historical use:

```html
<center>
  This is centered text.
  <p>This is a centered paragraph</p>
</center>
```

Modern alternative:

```html
<div style="text-align:center;">
  This is centered text.
  <p>This is a centered paragraph</p>
</div>
```

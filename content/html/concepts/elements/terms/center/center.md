---
Title: '<center>'
Description: 'Displays its contents centered horizontally in the containing element. This is now deprecated and CSS should be used instead.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Tags'
  - 'Style'
  - 'Obsolete'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<center>`** element was used historically to center content, usually text, within its containing elements.

> **Note:** This element has since been deprecated and removed from the [HTML specification](https://html.spec.whatwg.org/). While some browsers might support it for backwards compatibility, it should no longer be used. The current practice in HTML is to use the [CSS](https://www.codecademy.com/resources/docs/css) property [`text-align`](https://www.codecademy.com/resources/docs/css/typography/text-align) to center text and to use properties of the [CSS box model](https://www.codecademy.com/resources/docs/css/box-model) to center other elements.

## Syntax

```html
<center><!-- text or other element to center goes here --></center>
```

`<center>` was typically found as a child of the `<body>` element to center elements on the page.

## Example

Historical use:

```html
<!-- Don't use this! -->
<center>
  This is centered text.
  <p>This is a centered paragraph</p>
</center>
```

The modern alternative is using a [`<div>`](https://www.codecademy.com/resources/docs/html/elements/div) element, instead:

```html
<!-- Use this, instead. :) -->
<div style="text-align:center;">
  This is centered text.
  <p>This is a centered paragraph</p>
</div>
```

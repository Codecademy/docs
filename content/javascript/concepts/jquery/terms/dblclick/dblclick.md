---
Title: '.dblclick()'
Description: 'Attaches an event handler to the "double-click: event of an HTML element.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'jQuery'
  - 'Events'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

The **`.dblclick()`** method attaches a handler to the double-click event of an HTML element.

## Syntax

```pseudo
$(selector).dblclick(handler);
```

Will assign the `handler` function to the double-click event of the HTML element(s) specified by `selector`.

## Example

The following jQuery code will spawn a message box every time a paragraph in the document is double-clicked.

```js
$('p').dblclick(function () {
  alert('Paragraph double-clicked!');
});
```

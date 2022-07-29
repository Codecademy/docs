---
Title: '.dblclick()'
Description: 'Attaches an event handler to the "double-click: event of an HTML element.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'DOM'
  - 'Events'
  - 'jQuery'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

The **`.dblclick()`** method attaches an [event handler](https://www.codecademy.com/resources/docs/javascript/events) to the `"dblclick"` event of an [HTML element](https://www.codecademy.com/resources/docs/html/elements).

## Syntax

```pseudo
$(selector).dblclick(handler);
```

A `handler` function will be assigned to the `"double-click"` event of the HTML element(s) specified by `selector`.

## Example

The following jQuery code will spawn a message box every time a paragraph in the document is double-clicked:

```js
$('p').dblclick(function () {
  alert('Paragraph double-clicked!');
});
```

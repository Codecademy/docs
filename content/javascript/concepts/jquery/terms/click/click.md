---
Title: '.click()'
Description: 'Attaches an event handler to the "click" event of an HTML element.'
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

The **`.click()`** method attaches a handler to the click event of an HTML element.

## Syntax

```pseudo
$(selector).click(handler);
```

Will assign the `handler` function to the click event of the HTML element(s) specified by `selector`.

## Example

The following jQuery code will spawn a message box every time a paragraph in the document is clicked.

```js
$('p').click(function () {
  alert('Paragraph clicked!');
});
```

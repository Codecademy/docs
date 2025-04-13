---
Title: '.click()'
Description: 'Attaches an event handler to the "click" event of an HTML element.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'DOM'
  - 'Events'
  - 'Functions'
  - 'jQuery'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

The **`.click()`** method attaches an [event handler](https://www.codecademy.com/resources/docs/javascript/events) to the `"click"` event of an [HTML element](https://www.codecademy.com/resources/docs/html/elements).

## Syntax

```pseudo
$(selector).click(handler);
```

A `handler` function will be assigned to the `"click"` event of the HTML element(s) specified by `selector`.

## Example

The following jQuery code will spawn a message box every time a paragraph in the document is clicked:

<!-- prettier-ignore -->
```js
$("p").click(function() {
  alert("Paragraph clicked!");
});
```

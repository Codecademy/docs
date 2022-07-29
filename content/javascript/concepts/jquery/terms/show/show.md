---
Title: '.shows()'
Description: 'Shows a hidden HTML element.'
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

The **`.show()`** method shows a hidden [HTML element](https://www.codecademy.com/resources/docs/html/elements).

## Syntax

```pseudo
$(selector).show(speed, callback);
```

The element(s) specified by `selector` will be shown. The `speed` and `callback` parameters are optional. `speed` can be "slow" or "fast" or number of milliseconds. `callback` is a [function](https://www.codecademy.com/resources/docs/javascript/callbacks) that is called once showing is complete.

## Example

The following jQuery code will show the element selected with `#hide` when the `#show` element is clicked.

```js
$('#show').click(function () {
  $('#hide').show();
});
```

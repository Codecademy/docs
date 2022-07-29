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

Will show the element(s) specified by `selector`. `speed` and `callback` are optional. `speed` can be "slow" or "fast" or number of millisecods. `callback` is a function that is called once showing is complete.

## Example

The following jQuery code will show the element selected with `#hide` when the `#show` element is clicked.

```js
$('#show').click(function () {
  $('#hide').show();
});
```

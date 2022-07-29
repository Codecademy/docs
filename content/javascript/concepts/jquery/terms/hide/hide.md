---
Title: '.hide()'
Description: 'Hides an HTML element.'
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

The **`.hide()`** method hides an [HTML element](https://www.codecademy.com/resources/docs/html/elements).

## Syntax

```pseudo
$(selector).hide(speed, callback);
```

The element(s) specified by `selector` will be hidden. The `speed` and `callback` parameters are optional. `speed` can be "slow" or "fast" or number of milliseconds. `callback` is a [function](https://www.codecademy.com/resources/docs/javascript/callbacks) that is called once hiding is complete.

## Example

The following jQuery code will hide the element selected with `#hide` when it is clicked.

```js
$('#hide').click(function () {
  $('#hide').hide();
});
```

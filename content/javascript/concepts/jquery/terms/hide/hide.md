---
Title: '.hide()'
Description: 'Hides an HTML element.'
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

The **`.hide()`** method hides an [HTML element](https://www.codecademy.com/resources/docs/html/elements).

## Syntax

```pseudo
$(selector).hide(speed, callback);
```

- `selector`: Specifies the elements that will be hidden.
- `speed`(optional): Can be "slow" or "fast" or the number of milliseconds.
- `callback`(optional): A [function](https://www.codecademy.com/resources/docs/javascript/callbacks) that is called once the element is hidden.

## Example

The following jQuery code will hide the element selected with `#hide` when it is clicked:

<!-- prettier-ignore -->
```js
$("#hide").click(function() {
  $("#hide").hide();
});
```

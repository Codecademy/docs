---
Title: '.html()'
Description: 'Gets or sets the contents of an HTML element.'
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

The **`.html()`** method gets or sets the contents of an [HTML element](https://www.codecademy.com/resources/docs/html/elements).

## Syntax

Getting HTML, the `.html()` method is called without a parameter:

```pseudo
$(selector).html();
```

Setting HTML, the `.html()` method is called with a parameter containing the new HTML:

```pseudo
$(selector).html(newHTML)
```

## Example

The following jQuery code will read and reset the HTML in `#p1` when `#btn` is clicked:

<!-- prettier-ignore -->
```js
$("#btn").click(function() {
  alert($("#p1").html());
  $("#p1").html("<b>New Text.</b>");
});
```

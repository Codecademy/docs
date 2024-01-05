---
Title: '.html()'
Description: 'Used to set or get the inner HTML of the selected elements.'
Subjects:
  - 'Data Visualization'
  - 'Data Science'
Tags:
  - 'Methods'
  - 'Data'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/computer-science'
---

The **`.html()`** method in D3 is used to either set or retrieve the inner HTML content of a selected element within the document. It can accept a string value to set the content or it can be used with no argument to get the current HTML content. Additionally, a function can be passed to dynamically determine the HTML content based on data binding or other document properties.

## Syntax

```pseudo
d3.selection.html(val)
```

- `val`: It can take on the form of a string, function, null value, or left empty.

## Example

Suppose that you have the following HTML code:

```html
<div class="test">Test line</div>
```

In the example given below, `.select('.test')` method will select the HTML element with classname `test` and the `html.(<b>Updated test line</b>)` will change the element's inner HTML from `Test line` to `<b>Updated test line</b>`. Calling the `.html()` function again without any arguments will return the inner HTML of the first (non-null) element in the selection:

```js
d3.select('.test').html(<b>Updated test line</b>);
let updatedHTML = d3.select('.test').html();
console.log(updatedHTML);
```

The above example will give the following output:

```shell
<b>Updated test line</b>
```

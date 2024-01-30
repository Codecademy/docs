---
Title: '.text()'
Description: 'This method is used to set or get text content of selected elements'
Subjects:
  - 'Data Visualization'
  - 'Data Science'
Tags:
  - 'Methods'
  - 'Data'
  - 'Graphs'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/computer-science'
---

The **`.text()`** method in D3 is used to set text content for any selected element in a document, it can also be used to get the value of any selected element. This method can take a single value as an argument or a callback function for a complex text content manipulation of a selected element

## Syntax

```pseudo
d3.selection("element")
  .text("Your text content goes here");
```

- `selection("element")`: This selects an element on a web page. The `element` refers to a specific part of the webpage, like a heading or a paragraph.
- `.text()`: It is used to change the text content of that chosen element and the text content is passed to it as an argument.

## Example

In the example given below the `.select('h1')` method will select the `h1` html tag element in the document and `.text('Big Header')` will change the content of the `h1` to `Big Header`. This manipulation is done in the DOM and can be very useful in data visualization and updating element content when working on a dynamic application. The `.text()` method can also be used to retrieve the content of a selected element as seen in the example below:

```js
d3.select('h2').text('Big Header');
let outPut = d3.select('h2').text();
console.log(outPut);
```

The above example will give the following output:

```shell
Big Header
```

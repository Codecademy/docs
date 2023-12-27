---
Title: '.on()'
Description: 'Adds a specific event handler to an element.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Graphs'
  - 'Libraries'
  - 'Events'
  - 'DOM'
CatalogContent:
  - 'learn-d3'
  - 'paths/data-science'
---

In **D3.js**, the **d3.selection.on()** function is used to add a specific event handler to an element. An event can be any Document Object Model (DOM) event type such as `click`, `zoom`, `mouseenter`, `mouseleave`, `mouseover`, `mouseout`, and `mousemove`.

## Syntax

```pseudo
selection.on(event type, callback function)
```

- `event type`: The event type is a string that specifies the DOM event type used.
- `callback function`: The [callback function](https://www.codecademy.com/resources/docs/javascript/callbacks) is the function that is called when the event is triggered.

## Example

In the following code snippet, hovering over a square makes it turn yellow:

```js
d3.selectAll('square').on('mouseover', function () {
  d3.select(this).style('fill', 'yellow');
});
```

Output:
![Code output](https://raw.githubusercontent.com/Codecademy/docs/main/media/d3-yellow-square.png)

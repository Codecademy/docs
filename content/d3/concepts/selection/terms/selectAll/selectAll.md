---
Title: '.selectAll()'
Description: 'A D3 function that selects all elements matching the provided parameter.'
Subjects: 
  - 'Data Visualization'
  - 'Web Design'
Tags:
  - 'D3'
CatalogContent:
  - 'learn-d3' 
  - 'paths/data-science'
---

The **`.selectAll()`** is a function within the d3 library that selects all elements matching the provided parameter. The `selectAll()` function will match against all elements that meet the parameter, as opposed to [`.select()`](https://www.codecademy.com/resources/docs/d3/selection/select), which only matches the first element.

## Syntax

```pseudo
d3.selectAll(selector)
```

- `selector`: It's a string version of an element, a saved node, or an array of nodes.

## Example

The following code selects all paragraph elements within the document using the `.selectAll()` method.

```js
    // Select all elements with class 'example'
    const selectedElements = d3.selectAll('.example');

    // Modify the style of the selected elements
    selectedElements
      .style('color', 'blue')
      .style('font-size', '18px');

    // Add text to the selected elements
    selectedElements.text((d, i) => `Modified Element ${i + 1}`);

    // Log success message to console
    console.log('D3.js code executed successfully.');
```

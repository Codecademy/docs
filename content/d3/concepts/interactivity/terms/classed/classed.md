---
Title: '.classed()'
Description: 'This method allows you to dynamically add or remove CSS classes based on certain conditions or data values.'
Subjects: 
- 'Web Development'
- 'Computer Science'
Tags: 
- 'stylization'
- 'appearance control'
CatalogContent:
- 'Learn Git&GitHub'
- 'Contributing to the Codecademy Docs Repository'
---

The **'.classed()'** method in D3.js is used to manipulate the classes associated with selected DOM elements.

## Syntax

```pseudo
selection.classed(name, value);
```

## Example 
<!--Select an element with the id "myElement"-->
var myElement = d3.select("#myElement");

<!--Add a class called "highlight" to the selected element-->
myElement.classed("highlight", true);

<!--Remove the class "highlight" after a delay->>
setTimeout(function() {
  myElement.classed("highlight", false);
}, 2000);

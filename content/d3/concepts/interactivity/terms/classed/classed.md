---
Title: '.classed()'
Description: 'method is used to add or remove CSS classes from the selected elements'
Subjects: 
- 'Web Development'
- 'Computer Science'
Tags: 
- 'stylization'
- 'appearance control'
CatalogContent:
- 'Learn Git&GitHub'
- 'Contributing to the Codecademy Docs Repository'
## Syntax
selection.classed(name, value);
## Example 
<!--Select an element with the id "myElement"-->
var myElement = d3.select("#myElement");

<!--Add a class called "highlight" to the selected element-->
myElement.classed("highlight", true);

<!--Remove the class "highlight" after a delay->>
setTimeout(function() {
  myElement.classed("highlight", false);
}, 2000);

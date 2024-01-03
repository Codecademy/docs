---
Title : '.enter()'
Description: 'Adds missing elements as necessary to correspond with the linked data.'
Subjects: 
- 'Data Visualization'
- 'Computer Science'
Tags: 
- 'D3'
- 'Data'
CatalogContent:
- 'learn-d3'
- 'paths/data-science'
- 'paths/computer-science'
---

The **`.enter()`** selection method refers to a subset of the selection that represents placeholders for elements to be added to the document. This selection is commonly used in conjunction with `.data()` binding method when there are more data elements than corresponding DOM elements.

## Syntax

- `selection`: It contains placeholders for new elements that need to be added to the DOM to match the available data.

>**Note**: The `.enter()` method doesn't take any arguments.

Here's the syntax for the Enter selection Method

```pseudo
d3.selection.enter()
```
## Example 

The following example illustrates the use of the `.enter()` method. Here, it returns an enter selection as the number of `data` elements is more than the `div` elements selected.

```js
const data = ['🎄', '🎅', '❄️', '❤️', '🎁']
const divSelection = d3.select('body')
    .selectAll('div')
    .data(data)
const enterSelection = divSelection.enter()
    .append('div')
    .text(d => d) 
```

Following is the output of the above code:

![Shows all elements from data](https://raw.githubusercontent.com/Codecademy/docs/main/media/d3-enter.png)

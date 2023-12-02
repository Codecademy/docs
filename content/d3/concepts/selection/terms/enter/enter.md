---
Title : '.enter()'
Description: 'Adding, deleting, and rearranging elements as needed to correspond with the data previously linked through selection.data() method'
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
# .Enter()

In D3.js, the **.enter()** selection method refers to a subset of the selection that represents placeholders for elements to be added to the document. This selection is commonly used in conjunction with **.data()** binding method when there are more data elements than corresponding DOM elements.

## Syntax

When using the **.data()** method, D3.js compares the data with the existing DOM elements and creates three different selections based on that comparison:

**Update Selection (merge):** This selection represents the elements that already exist in the DOM and have corresponding data. It is often used to update the properties of these existing elements based on the new data.

**Enter Selection:** This selection contains placeholders for new elements that need to be added to the DOM to match the available data. These placeholders represent elements that are missing from the document.

**Exit Selection:** This selection represents the elements in the DOM that do not have corresponding data elements. It is useful for removing these extra elements that are no longer needed.

Here the focus is on Enter selection Method

## Example

```
d3.select("<parent element>").selectAll("<child element>")
      .data(numbers)
      .enter()
      .append("<child element>")
      .text("New Data")

```



## Codebyte Example ##

This example illustrates a basic flow using D3.js to bind an array of data to DOM elements

```codebyte/javascript
const data = [10, 20, 30, 40, 50]

const divSelection = d3.select('body')
    .selectAll('div')
    .data(data)

const enterSelection = divSelection.enter()
    .append('div')
    .text(d => d)

# Output: 

<div>10</div>
<div>20</div>
<div>30</div>
<div>40</div>
<div>50</div>    

```


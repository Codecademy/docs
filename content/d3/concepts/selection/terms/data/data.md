---
Title: '.data()'
Description: 'Binds data to DOM elements.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Data'
  - 'Selection'
CatalogContent:
  - 'learn-D3'
  - 'paths/computer-science'
---

The **'.data()'** method is used to bind data to DOM (document object model) elements.

## Syntax

'''psuedo
selection.data(data[, key]);
- selection: The selection of DOM elements to which data will be bound.
- data: The array of data to be bound to the elements.
- key (optional): A key function to determine how data is jointed to elements. If not provided, D3 uses the index element. 

## Example

Consider an HTML file with a list of data:

'''js
    // Sample data
    const data = [10, 20, 30, 40, 50];

    // Select the 'ul' element
    const list = d3.select("ul");

    // Bind data to list items
    const items = list.selectAll("li")
      .data(data)
      .enter()
      .append("li")
      .text(d => d);

In this example, the .data() method is used to bind the array of numbers to the list items (li) in the ul element. It gives the following output:

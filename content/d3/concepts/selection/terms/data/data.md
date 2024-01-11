---
Title: '.data()'
Description: 'Binds data to DOM elements.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Methods'
  - 'Data'
  - 'Selection'
CatalogContent:
  - 'learn-d3'
  - 'paths/data-science'
---

The **`.data()`** method is used to bind data to DOM (document object model) elements.

## Syntax

```pseudo
selection.data(data[, key]);
```

- `selection`: The selection of DOM elements to which data will be bound.
- `data`: The array of data to be bound to the elements.
- `key` (optional): A key function to determine how the data is joined to the given elements. If not provided, D3 uses the index element.

## Example

Consider an HTML file with an empty list of items:

```html
<!DOCTYPE html>
<head>
  <h1>D3 Example Page</h1>
</head>
<body>
  <ul>
    <!-- Empty unordered list-->
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</body>
```

These elements can be selected and populated with some data using the following code:

```html
<div id="container"></div>
<script type="module">
  import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7/+esm';

  const nums = [10, 20, 30, 40];
  const numList = d3.select('ul');

  const items = numList
    .selectAll('li')
    .data(nums)
    .join()
    .text((d) => `The value ${d}`);
</script>
```

In this example, the `.data()` method is used to bind the array of numbers to the list items (`li`) in the `ul` element. It gives the following output:

![D3 generated list of values](https://raw.githubusercontent.com/Codecademy/docs/main/media/d3-data-example.png)

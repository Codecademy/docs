---
Title: '.append()'
Description: 'Creates and append new elements to the selected elements.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Methods'
  - 'Functions'
  - 'Elements'
  - 'Selection'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/computer-science'
---

The **`.append()`** function is used to append a new element to the `HTML` tag name as given in the parameters to the end of the element. If the type that is given is a function then it must be evaluated for each element that is in the selection.

## Syntax

```pseudo
selection.append(type);
```
- `type`: This parameter takes a string that defines the type of the element.

## Example

Here's a simple `HTML` code that demonstrates the use of `.append()`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://d3js.org/d3.v5.min.js"></script>
</head>
<body>

<script>
    // D3.js code
  // Select the body element
  let bodySelection = d3.select('body');

  // Append a new paragraph to the body
  bodySelection.append('p')
    .text('This is a new paragraph added using D3.js');
</script>

</body>
</html>
```

In this example, D3.js selects the `<body>` element and appends a new `<p>` (paragraph) element to it. The `.text()` method is then used to set the text content of the newly appended paragraph.


The output of the mentioned code is as follows:

![d3 Selection .append()](https://raw.githubusercontent.com/Codecademy/docs/main/media/d3-selection-append.png)

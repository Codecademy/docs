---
Title: '.join()'
Description: 'Appends, removes, and reorders elements to match data, returning the merged enter and update selection.'
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

The **`.join()`** method in D3.js efficiently binds data, appends new elements for entering data, updates existing elements, and removes elements without corresponding data, returning a merged enter and update selection.

## Syntax

```pseudo
selection.join(
  enterFunction,
  updateFunction,
  exitFunction
);
```

- `enterFunction`:  Function specifying how to create new elements for entering data.
- `updateFunction`: Function specifying how to update properties of existing elements based on data.
- `exitFunction`: Function specifying how to handle elements that no longer have corresponding data.

## Example

Here's a simple `HTML` code that demonstrates the use of `.join()`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://d3js.org/d3.v7.min.js"></script>
</head>
<body>
<script>
  const data = [1, 2, 3, 4];

  const selection = d3.select("body")
    .selectAll("p")
    .data(data);

  selection.join(
    enter => enter.append("p").text(d => d),  // Create new elements for enter selection
    update => update.text(d => d),            // Update existing elements for update selection
    exit => exit.remove()                     // Remove elements for exit selection
  );
</script>

</body>
</html>
```

In this example, if there are fewer `p` elements than data points, new `p` elements are created (enter selection). If there are an equal number, existing elements are updated (update selection). If there are more elements than data points, excess elements are removed (exit selection).

The output of the mentioned code is as follows:

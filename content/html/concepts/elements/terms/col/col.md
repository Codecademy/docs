---
Title: 'col'
Description: 'Creates properties for table columns, including styling and attributes, often used within a <colgroup> to apply them to multiple columns simultaneously.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<col>`** element in HTML is used to define properties for table columns, such as styling or attributes, and is often used within a `<colgroup>` to apply these properties to multiple columns simultaneously.

## Syntax

```pseudo
<col attributes>
```

HTML tables are defined by their rows, not by columns. The result of this is that any style applied to a row will override any style applied to column. Only a handful of CSS properties can be controlled via the `<col>` element, such as:

- border
- background
- width
- visibility

## Example

This this example we use `<col>` within a `<colgroup>` to specify the width for the first column and set a background color for the second column.

```html
<!-- Create a table with a border -->
<table border="1">
  <!-- Define a <colgroup> to group <col> elements for column styling -->
  <colgroup>
    <!-- Set the width of the first column to 100 pixels -->
    <col style="width: 100px;" />
    <!-- Set the background color of the second column to lightblue -->
    <col style="background-color: lightblue;" />
  </colgroup>
  <!-- Create a table header row -->
  <tr>
    <th>Column 1</th>
    <th>Column 2</th>
  </tr>
  <!-- Create a data row -->
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
```

The rendered output would look like this:

![Rendered col tag](https://raw.githubusercontent.com/Codecademy/docs/main/media/rendered-col-tag.png)

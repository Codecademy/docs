---
Title: 'colspan'
Description: 'Specifies the number of columns a cell should span.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tables'
  - 'Elements'
  - 'Web Development'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

[table with a cell that spans two columns]: https://raw.githubusercontent.com/Codecademy/docs/main/media/html-colspan.png

The `colspan` attributed defines the number of columns a cell should span.

## Syntax

```html
<table>
  <tr>
    <th>Cell 1</th>
    <th>Cell 2</th>
  </tr>
  <tr>
    <td>Cell 3</td>
    <td>Cell 4</td>
  </tr>
  <tr>
    <!-- Spans two columns -->
    <td colspan="2">Cell 5</td>
  </tr>
</table>
```

The following elements support colspan:

- `<td>`
- `<th>`

## Example 1

A table with a cell that spans two columns.

```html
<table>
  <tr>
    <!-- Spans two columns -->
    <th colspan="2">Languages and Frameworks</th>
  </tr>
  <tr>
    <td>Python</td>
    <td>Django</td>
  </tr>
  <tr>
    <td>JavaScript</td>
    <td>React.js</td>
  </tr>
  <tr>
    <td>Ruby</td>
    <td>Ruby on Rails</td>
  </tr>
</table>
```

![Table with a cell that spans two columns]

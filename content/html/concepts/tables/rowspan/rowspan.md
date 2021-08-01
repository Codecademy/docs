---
Title: "rowspan"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Tables"
  - "Elements"
  - "Web Development"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition 

Specifies the number of rows a cell should span. 

## Syntax

```html
<table>
  <tr>
    <th>Devs</th>
    <th>Name</th>
  </tr>
  <tr>
    <td>Dev 1</td>
    <!-- Spans two rows -->
    <td rowspan="2">Sonny Nomnom</td>
  </tr>
  <tr>
    <td>Dev 2</td>
  </tr>
</table>
```

The following elements support colspan:

- `<td>`
- `<th>`
 
## Example 1

A table with a cell that spans two rows.

```html
<table>
  <tr>
    <th colspan="2">Language and Framworks</th>
  </tr>
  <tr>
    <td>Python</td>
    <td>Django</td>
  </tr>
  <tr>
    <td rowspan="2">Javascript</td>
    <td>React.js</td>
  </tr>
  <tr>
    <td>Vue.js</td>
  </tr>
  <tr>
    <td>Ruby</td>
    <td>Ruby on Rails</td>
  </tr>
</table>
```

![Table with cell that spans two rows](rowspan.PNG)
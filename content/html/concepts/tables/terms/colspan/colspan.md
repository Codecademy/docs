---
Title: "colspan"
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

Defines the number of columns a cell should span. 

## Syntax

```html
<table>
  <tr>
    <th>Devs</th>
    <th>Name</th>
  </tr>
  <tr>
    <td>Dev 1</td>
    <td>Sonny</td>
  </tr>
  <tr>
    <td>Dev 2 </td>
    <td>Nomnom</td>
  </tr>
  <tr>
    <!-- Spans two columns -->
    <td colspan="2">Sonny Nomnom</td>
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
    <th colspan="2">Language and Framworks</th>
  </tr>
  <tr>
    <td>Python</td>
    <td>Django</td>
  </tr>
  <tr>
    <td>Javascript</td>
    <td>React.js</td>
  </tr>
  <tr>
    <td>Ruby</td>
    <td>Ruby on Rails</td>
  </tr>
</table>
```

![Table with a cell that spans two columns](colspan.PNG)
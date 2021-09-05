---
Title: 'tfoot'
Description: 'Groups the footer content in a table. '
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tables'
  - 'Elements'
  - 'Web Development'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Groups the footer content in a table.

## Syntax

```html
<tfoot>
  <!-- Takes in footer content -->
</tfoot>
```

**Note:** The `<tfoot>` element is usually used along with `<tbody>` and `<thead>`. which provides useful semantic information.

## Example 1

Grouping the footer content in an HTML table.

```html
<table>
  <thead>
    <tr>
      <th>Items</th>
      <th>Cost</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Model 3</td>
      <td>50,000</td>
    </tr>
    <tr>
      <td>1 giant rubber debugging duck</td>
      <td>10,000</td>
    </tr>
  </tbody>
  <!-- All footer content will be inside the <tfoot> element -->
  <tfoot>
    <tr>
      <td>Total</td>
      <td>60,000</td>
    </tr>
  </tfoot>
</table>
```

| Items                         | Cost    |
| ----------------------------- | ------- |
| Model 3                       | $50,000 |
| 1 giant rubber debugging duck | $10,000 |
| Total                         | $60,000 |

---
Title: "Tables in HTML"
Subjects:
  - "Web Development"
Tags: 
  - "Elements"
  - "Table"
  - "Web Development"
Catalog Content:  # If listing multiple URLs, please put the most relevant one first 
  - "https://www.codecademy.com/learn/learn-html"
---

In HTML, a table is an element that allows for the representation of data in two dimensions; these dimensions are columns and rows.

## Structure

Tables are composed of multiple smaller types of elements that have special meaning within the structure of the table.  The elements that are used in the construction of a typical table are as follows:

### Table

The `<table>` element itself serves as the container for all elements and information contained within the table including headers, columns, and rows.

### Table Row

The table row element, denoted as `<tr>`, is used to display data within a row (horizontally) in a table. Table rows do not display data on their own. Instead, table rows serve as a container for child elements that are responsible for displaying the data in a semantic way.

```html
<table>
  <tr>Row 1</tr>
  <tr>Row 2</tr>
  <tr>Row 3</tr>
</table>
```

### Table Header

The table header element, denoted as `<th>`, is used to display data for a specific column header within a table. Multiple `<th>` elements can be added as children to a table row at the top of a table to create a complete header for a table.

```html
<table>
  <tr>
    <th>Column 1</th>
    <th>Column 2</th>
    <th>Column 3</th>
  </tr>
</table>
```
<code>
  <table>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </table>
</code>
<br>

### Table Data

The table data element, denoted as `<td>`, is used to display individual data within a specific row/column position in a table. Table data elements are included as children of table rows to properly coordinate their positioning within the structure of a table.

```html
<table>
  <tr>
    <th>Column 1</th>
    <th>Column 2</th>
    <th>Column 3</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
    <td>Data 3</td>
  </tr>
  <tr>
    <td>Data 4</td>
    <td>Data 5</td>
    <td>Data 6</td>
  </tr>
</table>
```

| Column 1 | Column 2 | Column 3 |
| :------: | :------: | :------: |
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |


## Uses

Generally, tables are used to display tabular data in particular. In the past, tables were sometimes used to display data that was not tabular in nature due to constraints present within browser environments. In modern development, the use of tables to position elements not semantically related to a table is an anti-pattern and should be avoided.

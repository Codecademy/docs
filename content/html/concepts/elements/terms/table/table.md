---
Title: '<table>'
Description: 'Represents an interface for adding tabular data to the page. Tables are two dimensional, made up of rows and columns, and can contain many types of content.'
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

The **`<table>`** element represents an interface for adding tabular data to the page. Tables are two dimensional, made up of rows and columns, and can contain many types of content.

## Syntax

```html
<table>
  <!-- Table elements and content go inside of here -->
</table>
```

The `<table>` element must contain rows, and inside those rows should be entries. Possible values for the internal tags are presented in the example below.

### Table Row

The table row element, denoted as `<tr>`, is used to display data within a row (horizontally) in a table. Table rows do not display data on their own. Instead, table rows serve as a container for child elements that are responsible for displaying the data in a semantic way.

```html
<table>
  <tr>
    ...
  </tr>
</table>
```

### Table Header

The table header element, denoted as `<th>`, is used to display data for a specific column header within a table. Multiple `<th>` elements can be added as children to a table row at the top of a table to create a complete header for a table.

```html
<table>
  <tr>
    <th>Heading 1</th>
    <th>Heading 2</th>
    <th>Heading 3</th>
  </tr>
</table>
```

| Heading 1 | Heading 2 | Heading 3 |
| :-------: | :-------: | :-------: |

### Table Data

The table data element, denoted as `<td>`, is used to display individual data within a specific row/column position in a table. Table data elements are included as children of table rows to properly coordinate their positioning within the structure of a table.

```html
<table>
  <tr>
    <th>Heading 1</th>
    <th>Heading 2</th>
    <th>Heading 3</th>
  </tr>
  <tr>
    <td>Cell 1</td>
    <td>Cell 2</td>
    <td>Cell 3</td>
  </tr>
  <tr>
    <td>Cell 4</td>
    <td>Cell 5</td>
    <td>Cell 6</td>
  </tr>
</table>
```

| Heading 1 | Heading 2 | Heading 3 |
| :-------: | :-------: | :-------: |
|  Cell 1   |  Cell 2   |  Cell 3   |
|  Cell 4   |  Cell 5   |  Cell 6   |

## Uses

Generally, tables are used to display tabular data in particular. In the past, tables were sometimes used to display data that was not tabular in nature due to constraints present within browser environments. In modern development, the use of tables to position elements not semantically related to a table is an anti-pattern and should be avoided.

## Example

```html
<html>
  <head> </head>
  <body>
    <!-- Table tag wraps around table elements -->
    <table>
      <!-- Table header -->
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <!-- Table body -->
      <tbody>
        <tr>
          <td>Jane</td>
          <td>Smith</td>
        </tr>
        <tr>
          <td>Suzi</td>
          <td>Jiminez</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```

| First Name | Last Name |
| :--------: | :-------: |
|    Jane    |   Smith   |
|    Suzi    |  Jiminez  |

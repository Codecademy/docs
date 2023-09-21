---
Title: 'Tables'
Description: 'In HTML, a table is an element that allows for the representation of data in two dimensions; these dimensions are columns and rows.'
Subjects:
  - 'Web Development'
Tags:
  - 'Tables'
  - 'Elements'
  - 'Web Development'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

In HTML, a table is an element that allows for the representation of data in two dimensions; these dimensions are columns and rows.

## Uses of HTML Tables

Generally, tables are used to display tabular data in particular. In the past, tables were sometimes used to display data that was not tabular in nature due to constraints present within browser environments. In modern development, the use of tables to position elements not semantically related to a table is an anti-pattern and should be avoided.

## Example

|      Name      |    Location    |    Category     | Founded |        CEO        |               Info                |
| :------------: | :------------: | :-------------: | :-----: | :---------------: | :-------------------------------: |
|   Pied Piper   | Silicon Valley | Cloud Computing |  2014   | Richard Hendricks | A Middle-Out Compression Solution |
|     Hooli      | Silicon Valley |   Enterprise    |  1997   |   Gavin Bensen    |       Hooli is About People       |
| Raviga Capital | Silicon Valley | Venture Capital |  2012   |   Peter Gregory   |       Share Only in Success       |
|     Aviato     | Silicon Valley |     Travel      |  2006   |  Erlich Bachman   |   Software Aggregation Program    |
|    See Food    | Silicon Valley |     Mobile      |  2016   |     Jian-Yang     |        The Shazam of Food         |

## HTML Table Structure

Tables are composed of multiple smaller types of elements that have special meaning within the structure of the table. The elements that are used in the construction of a typical table are as follows:

### Table

The `<table>` element itself serves as the container for all elements and information contained within the table including headers, columns, and rows.

### Table Row

The table row element, denoted as `<tr>`, is used to display data within a row (horizontally) in a table. Table rows do not display data on their own. Instead, table rows serve as a container for child elements that are responsible for displaying the data in a semantic way.

```html
<table>
  <tr>
    ...
  </tr>
</table>
```
![source="https://www.w3schools.com/html/html_tables.asp"](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-tables-tr.png)


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

<table>
  <tr>
    <th>Heading 1</th>
    <th>Heading 2</th>
    <th>Heading 3</th>
  </tr>
</table>

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

## Video Walkthrough

Watch this video for a step-by-step walkthrough on how to create an HTML table.

[![Watch the video](https://i.ytimg.com/vi_webp/VjiD2EyJHIQ/maxresdefault.webp)](https://www.youtube.com/embed/VjiD2EyJHIQ)
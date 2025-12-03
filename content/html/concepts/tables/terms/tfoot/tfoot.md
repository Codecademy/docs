---
Title: 'tfoot'
Description: 'Defines a footer section for a table.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Data'
  - 'Elements'
  - 'Tables'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The HTML **`<tfoot>`** [element](https://www.codecademy.com/resources/docs/html/elements) is used to define a footer section for a table. It typically contains summary information, totals, or notes related to the data presented in the table body.

## HTML `<tfoot>` Syntax

```pseudo
<table>
  <thead>
    <!-- Header rows -->
  </thead>
  <tbody>
    <!-- Main data rows -->
  </tbody>
  <tfoot>
    <!-- Footer rows -->
  </tfoot>
</table>
```

> **Note:** The HTML `<tfoot>` element is usually used along with [`<tbody>`](https://www.codecademy.com/resources/docs/html/tables/tbody) and [`<thead>`](https://www.codecademy.com/resources/docs/html/tables/thead), which provides useful semantic information.

## Example 1: Simple Footer Using HTML `<tfoot>`

This example uses HTML `<tfoot>` to define a simple footer for a table:

```html
<table border="1">
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
  <tfoot>
    <tr>
      <td>Total</td>
      <td>60,000</td>
    </tr>
  </tfoot>
</table>
```

Here is the output:

![Simple footer for a table, created using HTML <tfoot>](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-tfoot-1.jpg)

## Example 2: Adding Notes in Footer

This example uses HTML `<tfoot>` to create a footer for a table that contains a note about the table's data:

```html
<table border="1">
  <thead>
    <tr>
      <th>Month</th>
      <th>Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$500</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$450</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">* Data is provisional and may change.</td>
    </tr>
  </tfoot>
</table>
```

Here is the output:

![Footer for a table containing a note about the table's data, created using HTML <tfoot>](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-tfoot-2.jpg)

## Example 3: Complex Table with Multiple Columns

This example uses HTML `<tfoot>` to create a footer for a table that summarizes the marks in it with a total score:

```html
<table border="1">
  <thead>
    <tr>
      <th>Subject</th>
      <th>Marks</th>
      <th>Grade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Math</td>
      <td>90</td>
      <td>A</td>
    </tr>
    <tr>
      <td>Science</td>
      <td>85</td>
      <td>B</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>175</td>
      <td>-</td>
    </tr>
  </tfoot>
</table>
```

Here is the output:

![Footer for a table summarizing the marks in it with a total score, created using HTML <tfoot>](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-tfoot-3.jpg)

## Frequently Asked Questions

### 1. What is `<tfoot>` in HTML?

The HTML `<tfoot>` element defines a footer section for a table. It is mainly used to display summary information, totals, or notes that apply to the table data.

### 2. What are the `<thead>` and `<tfoot>` tags used for in HTML?

- `<thead>`: Defines the header section of a table, usually containing column titles.
- `<tfoot>`: Defines the footer section, often used for summaries or totals.

### 3. Is `<tfoot>` required in every HTML table?

No, it's optional to use `<tfoot>` in an HTML table. You only need it if you want to display footer information such as totals or notes.

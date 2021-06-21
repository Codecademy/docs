---
Title: "<table>"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Tags"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-html"
  - "https://www.codecademy.com/learn/paths/web-development"
---

## Definition 

Represents an interface for adding tabular data to the page. Tables are two dimensional, made up of rows and columns, and can contain many types of content.

## Syntax

```html
<table>
  <!-- Table elements and content go inside of here -->
</table>
``` 

The `<table>` tag must contain rows, and inside those rows should be entries. Possible values for the internal tags are presented in the example below.

## Example

```html
<html>
  <head>
  </head>
  <body>
    <!-- Table tag wraps around table elements -->
    <table>
      <!-- Table header -->
      <thead>
        <!-- Table row -->
        <tr>
          <!-- Table heading entry -->
          <th>First Name</th>
          <!-- Table heading entry -->
          <th>Last Name</th>
        </tr>
      </thead>
      <!-- Table body -->
      <tbody>
        <!-- Table row -->
        <tr>
          <!-- Table data cell -->
          <td>Jane</td>
          <!-- Table data cell -->
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
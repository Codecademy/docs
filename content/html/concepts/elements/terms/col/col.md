---
Title: '<col>'
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

HTML tables are defined by their rows, not by columns. The result of this is that any style applied to a row will override any style applied to the column. `attributes` are a handful of CSS properties that can be controlled via the `<col>` element, such as:

- border
- background
- width
- visibility

## Example

This example provides a schedule table for a Poetry Workshop. In this table, the `<col>` element is utilized to set the background color of the columns. This illustrative instance also demonstrates that when a style is applied to a row, it takes precedence over any style applied to a column. The `span` attribute is set to 2 because the style applied to the first column is overridden by the row's style.

```html
<colgroup>
  <col span="2" style="background-color:#EBC7B9;" />
  <col style="background-color:#EBD0B9" />
  <col style="background-color:#EBDEB9" />
</colgroup>
```

![Rendered col tag](https://raw.githubusercontent.com/Codecademy/docs/main/media/rendered-col-tag.png)

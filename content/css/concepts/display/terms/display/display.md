---
Title: "display"
Description: "Specifies the display behavior of an elements rendering box."
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Box Model"
  - "Layout"
CatalogContent:
  - "learn-css"
  - "paths/front-end-engineer-career-path"
  - "paths/full-stack-engineer-career-path"
---

Specifies the display behavior of an elements rendering box.

## Syntax

```css
display: <value>;
```

The following values can be appplied to the `display` property: 

- `inline`
- `block`
- `contents`
- `flex`
- `grid`
- `inline-block`
- `inline-flex`
- `inline-grid`
- `list-item`
- `run-in`
- `table`
- `table-caption`
- `table-column-group`
- `table-header-group`
- `table-footer-group`
- `table-row-group`
- `table-cell`
- `table-column`
- `table-row`
- `none`
- `initial`
- `inherit`

## Example 1

Setting a `div` element to behave like a flex box.

```html
<div class="flexdiv">
  <p>First item</p>
  <p>Second item</p>
</div>
```

```css
.flexdiv {
  display: flex;
}
```

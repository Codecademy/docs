---
Title: 'min()'
Description: 'Sets the smallest value from a list of one or more comma-separated expressions as the value for a CSS property. '
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Responsive'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Sets the smallest value from a list of one or more comma-separated expressions as the value for a CSS property.

## Syntax

```css
<property>: max(<expression>, <expression>);
```

where `<expression>` can be one of the following:

- Length values: `10px`
- Relative length values: `40vh`
- Nested math function values: `min(20vw, 200px)`
- Math expressions using arithmetic operators: `40vw - 20px`

## Example 1

Set the `width` of the `.box-max` to whichever value is less, `50vw` or `700px`:

```css
.box-min {
  background-color: blue;
  height: 100px;
  width: min(50vw, 700px);
}
```

## Example 2

Set the `height` of the `.box-max` to whichever value is greater, `40vh` or `600px`:

```css
.box-min {
  background-color: blue;
  width: 500px;
  height: min(40vh, 600px);
}
```

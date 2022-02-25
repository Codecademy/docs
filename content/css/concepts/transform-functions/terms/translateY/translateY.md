---
Title: 'translateY()'
Description: 'Translates an element along the Y-axis.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Functions'
  - 'Positioning'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

The `translateY` function translates an element along the vertical Y-axis.

## Syntax

```pseudo
transform: translateY(<value>);
```

The required `<value>` can be one of the following:

- Length value: `100px`, `1.5em`
- Percentage value: `25%`, `50%`

A positive value moves the element down the vertical Y-axis, while a negative value will move an element up.

## Example 1

Move the `.box` element `100px` down:

```css
.box {
  transform: translateY(100px);
}
```

## Example 2

Move the `.box` element `10em` up:

```css
.box {
  transform: translateY(-10em);
}
```

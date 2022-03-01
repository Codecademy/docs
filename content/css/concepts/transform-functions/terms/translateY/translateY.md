---
Title: 'translateY()'
Description: 'Moves an element vertically along the Y-axis.'
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

The `translateY()` function moves an element along the vertical Y-axis.

## Syntax

```pseudo
transform: translateY(<value>);
```

The required `<value>` can be one of the following:

- Length value: `100px`, `1.5em`
- Percentage value: `25%`, `50%`

A positive value moves the element down the vertical Y-axis, while a negative value will move an element up.

## Example 1

In the example below, a `.box` element is moved down the Y-axis by `100px`:

```css
.box {
  transform: translateY(100px);
}
```

## Example 2

In this example, the element is moved up the Y-axis by `-10em`, relative to the height of its direct parent element.

```css
.box {
  transform: translateY(-10em);
}
```

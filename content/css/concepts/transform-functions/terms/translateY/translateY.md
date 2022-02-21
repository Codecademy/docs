---
Title: 'translateY'
Description: 'Translates an element by one or more axes.'
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

Translates an element along the Y axis.

## Syntax

```pseudo
translateY: <value>;
```

The required `<value>` can be one of the following:

- Length value: `100px`, `1.5em`
- Percentage value: `25%`, `50%`

A positive value moves the element down the virtical axis while a negative value will move an element up.

## Example 1

Move the `.box` element `100px` down the vertical axis:

```css
.box {
  transform: translateY(100px);
}
```

## Example 2

Move the `.box` element `10em` up along the vertical axis:

```css
.box {
  transform: translateX(-10em);
}
```

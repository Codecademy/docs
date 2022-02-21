---
Title: 'translateX()'
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

Translates an element along the X axis.

## Syntax

```pseudo
translateX: <value>;
```

The required `<value>` can be one of the following:

- Length value: `100px`, `1.5em`
- Percentage value: `25%`, `50%`

A negative value will move an element in the opposite direction along the X axis.

Note: `translateX: <value>;` is functionally equivalent to `translate: <value>;` when [`translate`](https://www.codecademy.com/resources/docs/css/transform-functions/transform) is called with a single value.

## Example 1

Move the `.box` element `100px` along the horizontal axis:

```css
.box {
  transform: translateX(100px);
}
```

## Example 2

Move the `.box` element `10em` backward along the horizontal axis:

```css
.box {
  transform: translateX(-10em);
}
```

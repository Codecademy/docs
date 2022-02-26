---
Title: 'translateX()'
Description: 'Moves an element horizontally along the X-axis.'
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

The `translateX()` function moves an element along the horizontal X-axis.

## Syntax

```pseudo
transform: translateX(<value>);
```

The required `<value>` can be one of the following:

- Length value: `100px`, `1.5em`
- Percentage value: `25%`, `50%`

A positive value moves an element towards the right along the horizontal X-axis, while a negative value will move an element left.

**Note**: `translateX(<value>)` is functionally equivalent to `translate(<value>)` when [`translate`](https://www.codecademy.com/resources/docs/css/transform-functions/transform) is called with a single value.

## Example 1

In the example below, an element with a `.box` class is moved `100px` to the right:

```css
.box {
  transform: translateX(100px);
}
```

## Example 2

In this example, the element is moved to the left by `-10em`, relative to the width of its direct parent:

```css
.box {
  transform: translateX(-10em);
}
```

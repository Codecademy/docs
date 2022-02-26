---
Title: 'translate()'
Description: 'Translates an element along the X and/or Y axes.'
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

The `translate` function moves an element along the X- and/or Y-axis.

## Syntax

The required `<X-value>` or `<Y-value>` can be one of the following:

- Length value: `100px`, `1.5em`
- Percentage value: `25%`, `50%`

```pseudo
/* Single value */
transform: translate(<X-value>);

/* Double values */
transform: translate(<X-value>, <Y-value>);
```


Providing only a single value will represent the horizontal axis. Providing a second comma-separated value will represent the vertical axis. A positive value moves the element towards the right along the horizontal X-axis and down the vertical Y-axis. A negative value moves the element left along the horizontal X-axis and up the vertical Y-axis.

## Example 1

Move the element, with a `class` of `box`, `100px` right along the horizontal X-axis:

```css
.box {
  transform: translate(100px);
}
```

## Example 2

Move the `.box` element `200px` right along the horizontal X-axis and `100px` up the vertical Y-axis:

```css
.box {
  transform: translate(200px, -100px);
}
```

## Example 3

Move the `.box` element `100px` down the vertical axis:

```css
.box {
  transform: translate(0, 100px);
}
```

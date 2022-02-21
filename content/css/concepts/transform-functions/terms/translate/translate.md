---
Title: 'translate'
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

The `translate` property translates an element along the X and/or Y axes.

## Syntax

```pseudo
/* With a single value */
transform: translate(<X-value>);

/* With both values */
transform: translate(<X-value>, <Y-value>);
```

where a required `<value>` can be one of the following:

- Length value: `100px`, `1.5em`
- Percentage value: `25%`, `50%`

Providing only a single value will represent the horizontal axis. Providing a second comma separated value will represent the vertical axis. A positive value moves the element right along the horizontal axis and down the vertical axis while a negative value moves the element left along the horizontal axis and up the vertical axis.

## Example 1

Move the `.box` element `100px` right along the horizontal axis:

```css
.box {
  transform: translate(100px);
}
```

## Example 2

Move the `.box` element `200px` tight along the horizontal axis and `100px` up the vertical axis:

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

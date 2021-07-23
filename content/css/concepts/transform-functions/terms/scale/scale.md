---
Title: "scale"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Functions"
  - "Positioning"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition

Changes the size of an element to make it larger or smaller.

## Syntax

```css
transform: scale(<value>);
```

where a required `<value>` can be one of the following:

- Number value: `.25`, `1.5`
- Percentage value: `25%`, `150%`

**Note:** A single value will be applied to the horizontal and vertical scale of an element. If a second value is provided, the first value will apply to the horizontal scale and the second value will apply to the vertical scale.

## Example 1

Shrink the `.avatar` element by `50%`:

```css
.avatar {
  transform: scale(50%);
}
```

## Example 1

Grow the `.avatar` element by `50%` horizontally and `100%` vertically:

```css
.avatar {
  transform: scale(1.5, 2);
}
```

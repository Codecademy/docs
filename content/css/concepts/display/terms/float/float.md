---
Title: 'float'
Description: 'Places an element on the left or right side of its container.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Float'
  - 'Positioning'
  - 'Layout'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Places an element on the left or right side of its container.

## Syntax

```css
float: <value>;
```

The following values can be be appplied to the `float` property:

- `right`: The element floats on the right side of its container.
- `left`: The element floats on the left side of its container.
- `none`: The default value, ensures the element will not float left or right.

## Example 1

Making an `img` element float to the left of its container.

```css
.container {
  height: 200px;
  width: 200px;
}

.container img {
  float: left;
}
```

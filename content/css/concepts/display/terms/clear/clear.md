---
Title: 'clear'
Description: 'Specifies whether an element coming after a floated element should be moved down or not.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Clear'
  - 'Float'
  - 'Layout'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Species whether an element coming after a floated element should be moved down or not.

## Syntax

```css
clear: <value>;
```

The following values can be be appplied:

- `none`: The element is not moved down to clear past floating elements (the default).
- `left`: The element is moved down to clear past _left_ floated elements.
- `right`: The element is moved down to clear past _right_ floated elements.
- `both`: The element is moved down to clear past both _left_ and _right_ floated elements.

## Example 1

Making an `img` element move down a _left_ floated `h1` element.

```css
.div1 h1 {
  float: left;
}

.div1 img {
  clear: left;
}
```

![css-display-clear-example](https://github.com/DanWSDev/docs/blob/patch-4/media/css-display-clear-example.png)

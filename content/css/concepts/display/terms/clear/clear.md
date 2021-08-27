---
Title: "clear"
Description: "Species whether an element coming after a floated element should be moved down or not."
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Clear"
  - "Float"
  - "Layout"
CatalogContent:
  - "learn-css"
  - "paths/front-end-engineer-career-path"
  - "paths/full-stack-engineer-career-path"
---

Species whether an element coming after a floated element should be moved down or not.

## Syntax

```css
clear: <value>;
```

The following values can be be appplied: 

- `none`: The element is not moved down to clear past floating elements (the default).
- `left`: The element is moved down to clear past *left* floated elements. 
- `right`: The element is moved down to clear past *right* floated elements.
- `both`: The element is moved down to clear past both *left* and *right* floated elements.

## Example 1

Making an `img` element move down a *left* floated `h1` element.

```css
.div1 h1 {
  float: left;
}

.div1 img {
  clear: left; 
}
```

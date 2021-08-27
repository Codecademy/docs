---
Title: "background-origin"
Description: "Specifies the background positioning area of a background."
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Background"
  - "Box Model"
  - "Positioning"
CatalogContent:
  - "learn-css"
  - "paths/front-end-engineer-career-path"
  - "paths/full-stack-engineer-career-path"
---



Specifies the background positioning area of a background.

## Syntax

**Note:** If the `background-attachment` is `fixed`, then `background-origin` will be ignored.

```css
background-origin: <value>;
```

where `<value>` can be one of the following: 

- `content-box`:  Relative positioning to the content box.
- `padding-box`: Relative positioning to the padding box.
- `border-box`: Relative positioning to the border box.
- Global values: `inherit`, `initial`, `revert`, `unset`

## Example 1

Set background positioning to the edge of the content box:

```css
.main {
  border: 5px dashed #f1f1f1;
  padding: 15px;
  background: linear-gradient(purple, yellow) no-repeat;
  background-origin: content-box;
}
```

## Example 2

Set background positioning to the inside edge of the border:

```css
.main {
  border: 5px dashed #f1f1f1;
  padding: 15px;
  background: linear-gradient(purple, yellow) no-repeat;
  background-origin: padding-box;
}
```

## Example 3

Set background positioning to the edge of the border:

```css
.main {
  border: 5px dashed #f1f1f1;
  padding: 15px;
  background: linear-gradient(purple, yellow) no-repeat;
  background-origin: border-box;
}
```

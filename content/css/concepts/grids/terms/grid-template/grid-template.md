---
Title: "grid-template"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Grids"
  - "Layout"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition

A property that specifies the row and column structure of a grid container.

## Syntax

```css
.grid-container {
  display: grid;
  grid-template: <row-space> / <col-space>;
}
```

where `<row-space>` and `<col-space>`  can be one of the following:

- Grid keyword: `auto`, `minmax()`, `repeat()`
- Pixel value: `300px`
- Percent value: `25%`
- Fractional unit value: `1fr`

## Example 1

A grid with four rows and columns:

```css
.spam-container {
  display: grid;
  grid-template: repeat(4, 1fr) / repeat(4, 1fr); 
}

```

## Example 2

A grid with three rows and five columns.

```css
.eggs-container {
  display: grid;
  grid-template: 10% 80% 10% / auto 300px 300px 300px auto;
}
```

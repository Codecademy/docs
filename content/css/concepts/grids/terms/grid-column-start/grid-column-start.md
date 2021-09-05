---
Title: 'grid-column-start'
Description: 'A property that specifies the start of a content span over a set of columns within a grid framework.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Grids'
  - 'Layout'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

A property that specifies the start of a content span over a set of columns within a grid framework.

## Syntax

The grid is a combination of horizontal and vertical lines that frame the rows and columns, which are the spaces between the lines. The top left corner of a grid is defined by a vertical and horizontal line, each designated the value 1. The right side of the first column and the underside of the first row are defined by lines with the value 2, and so on through value n.

```css
.some-text {
  grid-column-start: <grid-value>;
}
```

where `<grid-value>` can be one of the following:

- Grid keyword: `auto`
- Grid line value: `1`
- Grid line name: `main-content-start`

## Example 1

Content that spans three columns, beginning at the second column:

```css
.bar-text {
  grid-column-start: 2;
  grid-column-end: 5;
}
```

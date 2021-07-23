---
Title: "grid-column-end"
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

A property that specifies the end of a content span over a set of columns within a grid framework.

The grid is a combination of horizontal and vertical lines that frame the rows and columns, which are the spaces between the lines. The top left corner of a grid is defined by a vertical and horizontal line, each designated the value 1. The right side of the first column and the underside of the first row are defined by lines with the value 2, and so on through value n. 

## Syntax

```css
.some-text {
  grid-column-end: <grid-value>;
}
```

where `<grid-value>` can be one of the following:

- Grid keyword: `auto`
- Grid line value: `1`
- Grid line name: `article-content-start`

## Example 1

Content that starts on the fourth column and spans three columns:

```css
.foo-text {
  grid-column-start: 4;
  grid-column-end: 7;
}
```

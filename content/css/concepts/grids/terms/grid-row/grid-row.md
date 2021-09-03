---
Title: 'grid-row'
Description: 'Specifies the span of content over a set of rows within a grid framework.'
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

Specifies the span of content over a set of rows within a grid framework.

## Syntax

The grid is a combination of horizontal and vertical lines that frame the rows and columns, which are the spaces between the lines. The top left corner of a grid is defined by a vertical and horizontal line, each designated the value 1. The right side of the first column and the underside of the first row are defined by lines with the value 2, and so on through value n.

```css
#some-text {
  grid-row: <grid-value>;
}
```

where `<grid-value>` can be one of the following:

- Grid keyword: `auto`
- Grid line value: `1`
- Grid line name: `main-content-start`

## Example 1

Content that occupies the second and third rows:

```css
.foo-text {
  grid-row: 2 / span 2;
  /* Can also be written as: 2 / 4 
  or 
  grid-row-start: 2
  grid-row-end: 4   */
}
```

## Example 2

Content that occupies the top row:

```css
.content-container {
  display: grid;
  grid-template-rows: [first] 1fr [second] 1fr [third] 1fr;
}

.text {
  grid-row: first;
}
```

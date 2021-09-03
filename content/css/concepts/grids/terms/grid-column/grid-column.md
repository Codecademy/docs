---
Title: 'grid-column'
Description: 'Specifies the span of content over a set of columns within a grid framework.'
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

Specifies the span of content over a set of columns within a grid framework.

## Syntax

The grid is a combination of horizontal and vertical lines that frame the rows and columns, which are the spaces between the lines. The top left corner of a grid is defined by a vertical and horizontal line, each designated the value 1. The right side of the first column and the underside of the first row are defined by lines with the value 2, and so on through value n.

```css
#some-text {
  grid-column: <grid-value>;
}
```

where `<grid-value>` can be one of the following:

- Grid keyword: `auto`, `span`
- Grid line value: `1`
- Grid line name: `main-content-start`

## Example 1

Content that occupies a total of three columns, starting on the first:

```css
.intro-text {
  grid-column: 1 / span 3;
  /* Can also be written as: 1 / 4 
  or 
  grid-column-start: 1
  grid-column-end: 4   */
}
```

## Example 2

Content assigned to a labeled grid line that spans two columns:

```css
.content-container {
  display: grid;
  grid-template-columns: [first] 1fr [second] 1fr [third] 1fr;
}

.text {
  grid-column: first / span 2;
}
```

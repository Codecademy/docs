---
Title: 'grid-column-gap'
Description: 'Specifies the spacing between column elements within a grid framework.'
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

Specifies the spacing between column elements within a grid framework.

## Syntax

```css
.div-container {
  column-gap: <gap-value>;
}
```

where `<gap-value>` can be one of the following:

- Grid keyword: `normal`
- Pixel value: `3px`
- A percentage: `1%`

## Example 1

Columns with five pixels of buffer between each:

```css
.content-a-container {
  display: grid;
  grid-auto-columns: 20%;
  column-gap: 5px;
}
```

## Example 2

A one percent spacing across grid column elements:

```css
.content-b-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1%;
}
```

---
Title: 'grid-row-gap'
Description: 'A property that specifies the spacing between row elements within a grid framework.'
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

A property that specifies the spacing between row elements within a grid framework.

## Syntax

```css
.div-container {
  grid-gap: <gap-value>;
}
```

where `<gap-value>` can be one of the following:

- Grid keyword: `normal`
- Pixel value: `3px`
- A percentage: `1%`

## Example 1

Rows separated by 4 pixels:

```css
.content-a-container {
  display: grid;
  grid-auto-rows: 10%;
  row-gap: 4px;
}
```

## Example 2

A one percent spacing across grid row elements:

```css
.content-b-container {
  display: grid;
  grid-template-rows: 10% 78% 10%;
  row-gap: 1%;
}
```

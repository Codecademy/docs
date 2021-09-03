---
Title: 'grid-template-columns'
Description: 'A property that specifies the column structure of a grid container.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Grid'
  - 'Layout'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

A property that specifies the column structure of a grid container.

## Syntax

```css
.grid-container {
  display: grid;
  grid-template-columns: <column-space> <column-space>;
}
```

where `<column-space>` can be one of the following:

- Grid keyword: `auto`, `minmax()`
- Pixel value: `300px`
- Percent value: `25%`
- Fractional unit value: `1fr`

## Example 1

The `spam-container` div encloses several paragraphs of text, split the container into four evenly spaced columns:

```css
.spam-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* equivalent to: 25% 25% 25% 25% */
}
```

## Example 2

Create left and right columns that adjust to fill the width available and a middle column that has a minimum width of 400 pixels and a max of 1000 pixels:

```css
.eggs-container {
  display: grid;
  grid-template-columns: auto minmax(400px, 1000px) auto;
}
```

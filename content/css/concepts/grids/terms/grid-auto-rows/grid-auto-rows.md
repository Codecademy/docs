---
Title: 'grid-auto-rows'
Description: 'A property that specifies the default row size(s) for a container.'
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

A property that specifies the default row size(s) for a container.

## Syntax

```css
.grid-container {
  display: grid;
  grid-auto-rows: <row-value>;
}
```

where `<row-value>` can be one of the following:

- Grid keyword: `auto`, `maxcontent`, `minmax()`
- Pixel value: `300px`
- Percent value: `25%`
- Fractional unit value: `1fr`

## Example 1

A container with alternating rows of 200 and 400 pixels:

```css
.content-a-container {
  display: grid;
  grid-auto-rows: 200px 400px;
}
```

## Example 2

A container with rows that alternate between 10 and 20 percent of the height:

```css
.content-b-container {
  display: grid;
  grid-auto-rows: 10% 20%;
}
```

---
Title: 'grid-auto-columns'
Description: 'A property that specifies the default column size(s) for a container.'
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

A property that specifies the default column size(s) for a container.

## Syntax

```css
.grid-container {
  display: grid;
  grid-auto-columns: <col-value>;
}
```

where `<col-value>` can be one of the following:

- Grid keyword: `auto`, `maxcontent`, `minmax()`
- Pixel value: `300px`
- Percent value: `25%`
- Fractional unit value: `1fr`

## Example 1

A container divided into evenly spaced columns with a minimum width of 100 pixels:

```css
.content-a-container {
  display: grid;
  grid-auto-columns: minmax(100px, auto);
}
```

## Example 2

A container with columns that each constitute 10% of the available width:

```css
.content-b-container {
  display: grid;
  grid-auto-columns: 10%;
}
```

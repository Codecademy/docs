---
Title: 'grid-area'
Description: 'A property used to identify an element within a grid template or specify the location of an element within a grid.  '
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

A property used to identify an element within a grid template or specify the location of an element within a grid.

## Syntax

```css
.item-one {
  grid-area: <area-value>;
}
```

A `<area-value>` can be any of the following:

- Grid keyword: `auto`, `span`
- Grid line value: `2`
- Grid line name: `section-a-start`
- A string: `'header'`

Values for a location can also be specified as:

```css
.item-one {
  grid-area: row-start / column-start / row-end / column-end;
}
```

## Example 1

A div named `banner` which may be referenced within grid-template-areas:

```css
#banner-div {
  grid-area: banner;
}
```

## Example 2

Text that occupies the second and third rows on the fifth column of the grid:

```css
#text {
  grid-area: 2 / 5 / 4 / 6;
}
```

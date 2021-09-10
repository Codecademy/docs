---
Title: 'grid-template'
Description: 'A shorthand for the grid-template-row, column and areas properties. The grid-template syntax allows for a condensed specification of a grid structure and the location of elements.'
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

A shorthand for the grid-template-row, column and areas properties. The grid-template syntax allows for a condensed specification of a grid structure and the location of elements.

## Syntax

```css
.grid-container {
  display: grid;
  grid-template: <grid-value>;
}
```

A `<grid-value>` can be one of the following:

- Grid keyword: `auto`, `minmax()`, `repeat()`
- Pixel value: `300px`
- Percent value: `25%`
- Fractional unit value: `1fr`
- A string: `'header'`

Common syntax patterns:

- `<area value> <row value> / <col value>`
- `<row value> / <col value>`
- `<area value>`

## Example 1

A grid in which the 'text' block occupies a space with the coordinates row two, column two:

```css
#item-a {
  grid-area: text;
}

#spam-container {
  display: grid;
  grid-template:
    '. header header header .'
    '. text image image .'
    '. footer footer footer .';
}
```

**Note:** A period represents a blank space.

## Example 2

A grid with three rows and five columns:

```css
#eggs-container {
  display: grid;
  grid-template: 10% 80% 10% / auto 300px 300px 300px auto;
}
```

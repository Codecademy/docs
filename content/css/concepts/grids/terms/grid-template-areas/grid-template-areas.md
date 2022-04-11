---
Title: 'grid-template-areas'
Description: 'A property that defines a grid template by referencing the names of the grid areas.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Grid'
  - 'Layout'
  - 'Responsive'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Defines a grid template by referencing the names of the `grid-area` property, establishing cells in the grid and assigning them names.
The `grid-template` property can be used as a shorthand to define the areas as well as defining the sizes of the columns and rows.

/ TODO: Syntax section + code snippet

## Syntax

To use `grid-template-areas` it's required to assign names, using `grid-area` property on each grid item. The grid-template-areas are defined in the grid container.

```css
.item-one {
  grid-area: nav;
  background-color: lightpink;
}
.item-two {
  grid-area: main;
  background-color: lightblue;
}
.item-three {
  grid-area: footer;
  background-color: lightgreen;
}

.grid-container {
  display: grid;
  max-width: 800px;
  margin: 0 auto;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr 3fr 1fr);
  grid-template-areas:
    'nav nav nav'
    'main main main'
    'footer footer footer';
}
```

## Example 1

![Example](https://raw.githubusercontent.com/Codecademy/docs/main/media/grid-template-area1.png)

Each section in quotes represents a row and each word represents a column. To represent empty space, a **.** is used instead of a name, and it can be just a single **.** or multiple ones consecutive. The result is the same.
// TODO: Examples + maybe screenshot

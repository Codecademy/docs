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

// TODO: Brief information about how grid-template-areas differs/relates to the grid-template and grid-area properties
Defines
// TODO: Syntax section + code snippet

## Syntax

```css
.item-one {
  grid-area: nav;
}
.item-two {
  grid-area: main;
}
.item-three {
  grid-area: footer;
}

.grid-container {
  display: grid;
  grid-template-areas:
    'nav nav nav'
    'main main main'
    'footer footer footer';
}
```

Each section in quotes represents a row and each word represents a column. To represent empty space, a **.** is used instead of a name, and it can be just a single **.** or multiple ones consecutive. The result is the same.
// TODO: Examples + maybe screenshot

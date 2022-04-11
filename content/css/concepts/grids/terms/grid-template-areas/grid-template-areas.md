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

## Syntax

To use `grid-template-areas` it's required to assign names, using `grid-area` property on each grid item. The grid-template-areas are defined in the grid container.

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

![Example](https://raw.githubusercontent.com/Codecademy/docs/main/media/grid-template-area1.png)

## Example 1

By using `grid-template-areas`, it is not required to specify anything on the individual grid items except for assigning the name of the corresponding area. Everything else happens on the grid container.

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
.item-four {
  grid-area: sidebar;
  background-color: lightsalmon;
}

.grid-container {
  display: grid;
  max-width: 800px;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr 3fr 1fr 1fr);
  grid-template-areas:
    ' nav     nav   nav'
    ' main   main  sidebar'
    ' main   main  sidebar'
    'footer footer footer';
}
```

![Example1](https://raw.githubusercontent.com/Codecademy/docs/main/media/grid-template-area2.png)

In the example above, each of the areas spans multiple grid cells and this can be achieved by repeating the name of that grid area multiple times with white space between them. Multiple white spaces can be used without causing any error. This might come in handy to place the names above each other to make it more readable. Each section in quotes represents a row and each word represents a column. At this point in time, the area created must be rectangular, because there is no way to create another shaped area.

## Example 2

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
.item-four {
  grid-area: sidebar;
  background-color: lightsalmon;
}

.grid-container {
  display: grid;
  max-width: 800px;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr 3fr 1fr 1fr);
  grid-template-areas:
    ' nav     nav   nav'
    ' main   main   sidebar'
    ' main   main   ... '
    'footer footer footer';
}
```

![Example2](https://raw.githubusercontent.com/Codecademy/docs/main/media/grid-template-area3.png)

It's also possible to leave grid cells empty with this method of layout. To leave an empty cell as in the example above, use `.` instead of white space or names. It can be used as a single dot or multiple ones as long as there is no white space between them.

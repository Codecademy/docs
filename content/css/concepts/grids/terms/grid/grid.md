---
Title: 'grid'
Description: 'Shorthand for setting multiple grid property values.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Grid'
  - 'Elements'
  - 'Properties'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The `grid` property is a shorthand for setting the following properties:

- [`grid-template-rows`](https://www.codecademy.com/resources/docs/css/grids/grid-template-rows)
- [`grid-template-columns`](https://www.codecademy.com/resources/docs/css/grids/grid-template-columns)
- [`grid-template-areas`](https://www.codecademy.com/resources/docs/css/grids/grid-template-areas)
- [`grid-auto-rows`](https://www.codecademy.com/resources/docs/css/grids/grid-auto-rows)
- [`grid-auto-columns`](https://www.codecademy.com/resources/docs/css/grids/grid-auto-columns)
- `grid-auto-flow`

## Syntax

```pseudo
grid: <grid-template-rows> / <grid-template-columns>;

grid: <grid-template-areas>;

grid: <grid-template-rows> / <grid-auto-columns>;

grid: <grid-auto-rows> / <grid-template-columns>;

grid: <grid-template-rows> / <grid-auto-flow> <grid-auto-columns>;

grid: <grid-auto-flow> <grid-auto-rows> / <grid-template-columns>;
```

## Example 1

The example below is a `grid` declaration for the rows and columns (separated by a `/`) with the following:

- There are three rows that are each 200-pixels high.
- There are two columns, with one being `25%` of the grid's width and another at `75%`-wide.

```css
.my-grid {
  display: grid;
  grid: repeat(3, 200px) / 25% 75%;
}
```

## Example 2

```css
.my-grid {
  display: grid;
  grid: auto / auto auto auto;
}
```

The example above defines a grid that has three columns. Each column and row is `auto`-sized.

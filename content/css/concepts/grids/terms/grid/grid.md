---
Title: 'grid'
Description: 'Shorthand for setting grid property values.'
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

The `grid` property is shorthand for setting the following properties:

- [`grid-template-rows`](https://www.codecademy.com/resources/docs/css/grids/grid-template-rows)
- [`grid-template-columns`](https://www.codecademy.com/resources/docs/css/grids/grid-template-columns)
- `grid-template-areas`
- [`grid-auto-rows`](https://www.codecademy.com/resources/docs/css/grids/grid-auto-rows)
- [`grid-auto-columns`](https://www.codecademy.com/resources/docs/css/grids/grid-auto-columns)
- `grid-auto-flow`

## Syntax

```pseudo
grid: <grid-template-rows> / <grid-template-rows>;

grid: <grid-template-areas>;

grid: <grid-template-rows> / <grid-auto-columns>;

grid: <grid-auto-rows> / <grid-template-columns>;

grid: <grid-template-rows> / <grid-auto-flow> <grid-auto-columns>;

grid: <grid-auto-flow> <grid-auto-rows> / <grid-template-columns>;
```

## Example 1

```css
.my-grid {
  display: grid;
  grid: repeat(3, 200px) / 25% 75%;
}
```

Defines a grid that has first three rows 200px tall, one column at 25% and the other column at 75%.

## Example 2

```css
.my-grid {
  display: grid;
  grid: auto / auto auto auto;
}
```

Defines a grid that's three columns wide and has auto-sized rows and columns.

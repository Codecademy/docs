---
Title: 'Grids'
Description: 'CSS Grid is a two-dimensional responsive layout system that uses rows, columns, and gaps to organize content on a web page.'
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

**CSS Grid** is a two-dimensional grid-based layout system that uses rows, columns, and gaps to organize content on a web page. This system helps with creating a responsive layout for web pages without having to use [positioning](https://www.codecademy.com/resources/docs/css/position), [floats](https://www.codecademy.com/resources/docs/css/floats), or [flexbox](https://www.codecademy.com/resources/docs/css/flexbox).

## Grid Elements

A grid layout consists of a parent element, with one or more child elements.

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
</div>
```

An HTML element becomes a grid container when its `display` property is set to `grid` or `inline-grid`:

```css
.grid-container {
  display: grid;
}
```

All the nested elements inside the grid container element are called grid items. In the example above, each item is given a `class` of `grid-item` to further emphasize this point.

The difference between the values `inline-grid` and `grid` is that the `inline-grid` will make the element inline while `grid` will make it a block-level element.

- Grid columns are the vertical lines of the grid items.
- Grid rows are the horizontal lines of grid items.
- Grid gaps are the spaces between each column/row.

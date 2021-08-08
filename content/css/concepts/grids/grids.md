---
Title: "Grids"
Subjects:
  - "Web Development"
  - "Web Design"
Tags: 
  - "Grid"
  - "Elements"
  - "Properties"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-csss"
  - "https://www.codecademy.com/learn/paths/web-development"
---

CSS Grid is a two-dimensional grid-based layout system, with rows, columns and gaps. Using this layout system makes it easier to design web pages without having to use positioning and floats.

## Grid Elements

A grid layout consists of a parent element, with one or more child elements.

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>
```

An HTML element becomes a grid container when its `display` property is set to `grid` or `inline-grid`:

```css
.grid-container {
  display: grid;
}
```

All children of the grid container becomes _grid items_.

- Grid columns are the verticle lines of the grid items.
- Grid rows are the horizontal lines of grid items.
- Grid gaps are the spaces between each column/row.


---
Title: 'border-inline'
Description: 'Shorthand property that defines the width, color, and style of the inline start and inline end borders of an element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Borders'
  - 'Box Model'
  - 'Colors'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Shorthand property that defines the width, color, and style of the inline start and inline end borders of an element.

The affected sides depend on the writing mode and text direction.

## Syntax

```css
border-inline: <value>;
```

By default, `border-inline` will have a style of `none` and a width of `medium`.
The default color is the value of the `color` property.

`<value>` can be one of the following:

- `border-style` defines the appearance of the border.
- `border-width` defines the thickness of the border.
- `border-color` defines the color of the border.

> **Note:** Values can be provided in any order.

## Example

Set the inline borders of the `p` element to be blue, 2 pixels thick, and solid:

```css
p {
  border-inline: 2px solid blue;
}
```

## Example

Set the inline borders of the `div` element to be red, 5 pixels thick, and dashed:

```css
div {
  border-inline: dashed 5px red;
}
```

In a left-to-right writing mode, this applies borders to the left and right sides of the element. In a right-to-left writing mode, the inline start and end sides adjust automatically.

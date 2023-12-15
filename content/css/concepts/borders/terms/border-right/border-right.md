---
Title: 'border-right'
Description: 'Shorthand property that defines the width, color, and style of the right border of an element.'
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

Shorthand property that defines the width, color, and style of the right border of an element.

## Syntax

```css
border-right: <value>;
```

By default, `border-right` will have a style of `none` and a width of `medium`.
The default color is the value of the `color` property or text color.

`<value>` can be one of the following:

- `border-style` changes the shape or design of the border to one of the 10 available styles.
- `border-width` changes the thickness of the border.
- `border-color` changes the border color.

> **Note:** values can be provided in any order.

## Example 1

Set the right border of the `h1` element to be green, 3 pixels thick, and dotted:

```css
h1 {
  width: fit-content;
  border-right: green 3px dotted;
}
```

![Example 1](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-border-right-example-1.PNG 'Example 1')

## Example 2

Set the right border of the `h1` element to be 4 pixels thick, dashed, and blue:

```css
h1 {
  width: fit-content;
  border-right: 4px dashed #0000ff;
}
```

![Example 2](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-border-right-example-2.PNG 'Example 2')

## Example 3

Set the right border of the `h1` element to be solid and black. Since a width is
not specified, it will default to `medium`.

```css
h1 {
  width: fit-content;
  border-right: rgb(0, 0, 0) solid;
}
```

![Example 3](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-border-right-example-3.PNG 'Example 3')

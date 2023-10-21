---
Title: 'border-width'
Description: 'Shorthand property that sets the width for the overall border of an element or for each side individually.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Borders'
  - 'Box Model'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Shorthand property that sets the width for the overall border of an element or for each side individually.

## Syntax

```css
/* Keyword values */
border-width: thin;
border-width: medium;
border-width: thick;

/* <length> values */
border-width: 4px;
border-width: 1.2rem;

/* top and bottom | left and right */
border-width: 2px 1.5em;

/* top | left and right | bottom */
border-width: 1px 2em 1.5cm;

/* top | right | bottom | left */
border-width: 1px 2em 0 4rem;

/* Global values */
border-width: inherit;
border-width: initial;
border-width: revert;
border-width: revert-layer;
border-width: unset;
```

The `border-width` property may be specified using one, two, three, or four values.

- When one value is specified, it applies the same width to all four sides.
- When two values are specified, the first width applies to the top and bottom, the second to the left and right.
- When three values are specified, the first width applies to the top, the second to the left and right, the third to the bottom.
- When four values are specified, the widths apply to the top, right, bottom, and left in that order (clockwise).

## Example 1

Set all borders of the `h1` element to `medium` width:

```css
h1 {
  border-color: green;
  border-style: dashed;
  border-width: medium;
}
```

The following image demonstrates the code block above:

![CSS border-top Example 1](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-borders-border-width-example1.png)

## Example 2

Set the width of the border top and bottom to be `4px` and left and right to `2px`:

```css
h1 {
  border-color: green;
  border-style: dashed;
  border-width: 4px 2px;
}
```

The following image demonstrates the code block above:

![CSS border-top Example 2](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-borders-border-width-example2.png)

## Example 3

Set the width of the border top to `10px`, right and left to `medium` and bottom to `thick`:

```css
h1 {
  border-color: green;
  border-style: dashed;
  border-width: 10px medium thick;
}
```

The following image demonstrates the code block above:

![CSS border-top Example 3](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-borders-border-width-example3.png)

## Example 4

Set the width of the border top to `10px`, right to `thin`, left to `20px` and bottom to `thick`:

```css
h1 {
  border-color: green;
  border-style: dashed;
  border-width: 10px thin 20px thick;
}
```

The following image demonstrates the code block above:

![CSS border-top Example 4](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-borders-border-width-example4.png)

---
Title: 'skewX()'
Description: 'Skews an element horizontally by a specified angle using the CSS transform property.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Functions'
  - 'Positioning'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

**`skewX()`** is a CSS transform function that skews an element along the x-axis by the specified angle. It distorts the element horizontally, shifting its top and bottom edges left or right while preserving its vertical orientation.

## Syntax

```pseudo
transform: skewX(<value>);
```

**Parameters:**

- `<angle>`: Specifies the skew amount. Accepts any valid CSS angle unit:
  - Degrees (`deg`)
  - Radians (`rad`)
  - Gradians (`grad`)
  - Turns (`turn`)

The value may be positive or negative.

**Return value:**

None. This function produces a transform value that modifies the element’s rendering when applied through the `transform` property.

## Example 1: Skewing by Degrees

In this example, the element is skewed horizontally by 30deg:

```css
.box {
  width: 50px;
  height: 60px;
  background-color: red;
  transform: skewX(30deg);
}
```

The output of the code above is shown below:

![A box element skewed 30 degrees along the x-axis by CSS skewX function](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-transform-skewX-1.jpg)

## Example 2: Skewing by Turns

In this example, the element is skewed horizontally by `-0.2turn`:

```css
.box {
  width: 50px;
  height: 60px;
  background-color: red;
  transform: skewX(-0.2turn);
}
```

The output of the code above is shown below:

![A box element skewed -0.2 turns along the x-axis by CSS skewX function](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-transform-skewX-2.jpg)

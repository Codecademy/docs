---
Title: 'matrix()'
Description: 'Applies a 2D matrix to scale, rotate, skew, and move an element.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Elements'
  - 'Functions'
  - 'Positioning'
  - 'Values'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The CSS `matrix()` function uses a 2D matrix to scale, rotate, skew, and move an element. This combined setup puts multiple changes into one step and is commonly used in detailed animations[(https://www.codecademy.com/resources/docs/css/animations)], exact placement, or creative web layouts.

## CSS `matrix()` Syntax

```pseudo
transform: matrix(a, b, c, d, e, f);
```

**Parameters:**

- `a`: Controls horizontal scaling. A value of `1` results in no horizontal scaling.
- `b`: Controls vertical skewing. A value of `0` results in no vertical skew.
- `c`: Controls horizontal skewing. A value of `0` results in no horizontal skew.
- `d`: Controls vertical scaling. A value of `1` results in no vertical scaling.
- `e`: Controls horizontal translation in pixels. A value of `0` results in no horizontal movement.
- `f`: Controls vertical translation in pixels. A value of `0` results in no vertical movement.

## Example 1: Basic Translation in CSS Using `matrix()`

In this example, the `.box` element is moved `100px` to the right and `100px` down using CSS `matrix()`, demonstrating how the `e` and `f` parameters control horizontal and vertical translation:

```css
.box {
  width: 100px;
  height: 100px;
  background-color: coral;
  transform: matrix(1, 0, 0, 1, 100, 100);
  margin: 50px;
}
```

Here is the output:

![Matrix translation example](https://raw.githubusercontent.com/Codecademy/docs/main/media/matrix-example-1.png)

## Example 2: Scaling Elements in CSS Using `matrix()`

In this example, the `.box` element is scaled to `1.5` times its original size horizontally and `2` times vertically by modifying the `a` and `d` parameters:

```css
.box {
  width: 100px;
  height: 100px;
  background-color: mediumseagreen;
  transform: matrix(1.5, 0, 0, 2, 0, 0);
  margin: 50px;
}
```

Here is the output:

![Matrix scaling example](https://raw.githubusercontent.com/Codecademy/docs/main/media/matrix-example-2.png)

## Example 3: Combined Transformation in CSS With the Help of `matrix()`

This example creates a complex transformation by combining scaling, skewing, and translation in a single `matrix()` function:

```css
.box {
  width: 100px;
  height: 100px;
  background-color: steelblue;
  transform: matrix(1.2, 0.3, -0.3, 1.2, 50, 30);
  margin: 50px;
}
```

Here is the output:

![Matrix combined transformation example](https://raw.githubusercontent.com/Codecademy/docs/main/media/matrix-example-3.png)

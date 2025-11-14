---
Title: 'translate3d()'
Description: 'Moves an element in 3D space along the X, Y, and Z axes.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Animation'
  - 'CSS'
  - 'Functions'
  - 'Transform'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The **`translate3d(x, y, z)`** CSS transform function repositions an element in three-dimensional space by shifting it along the X (horizontal), Y (vertical), and Z (depth) axes. It’s a shorthand for combining `translateX()`, `translateY()`, and `translateZ()` and is often used to create 3D effects or improve animation performance by triggering GPU acceleration.

## Syntax

```pseudo
transform: translate3d(tx, ty, tz);
```

**Parameters:**

- `tx`: Length or percentage value for movement along the X-axis.
- `ty`: Length or percentage value for movement along the Y-axis.
- `tz`: Length value for movement along the Z-axis (depth).

**Return value:**

Applies a 3D translation, moving the element relative to its original position.

## Example 1: Move an Element Horizontally

This example moves a square 150 px to the right along the X-axis:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background: coral;
      transform: translate3d(150px, 0, 0);
      transition: transform 0.5s ease;
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>
```

The output of this code is:

![A coral-colored square shifted 150 px to the right using translate3d(150px, 0, 0).](https://raw.githubusercontent.com/Codecademy/docs/main/media/translate3d1.png)

## Example 2: Add Depth and Vertical Movement

This example moves an element 50 px down and 100 px closer to the viewer, creating a 3D “pop” effect:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    .scene {
      perspective: 500px;
    }
    .card {
      width: 120px;
      height: 120px;
      background: teal;
      transform: translate3d(0, 50px, 100px);
      transition: transform 0.5s ease;
    }
  </style>
</head>
<body>
  <div class="scene">
    <div class="card"></div>
  </div>
</body>
</html>
```

The output of this code is:

![A teal square card moved 50 px downward and 100 px toward the viewer, appearing closer in depth.](https://raw.githubusercontent.com/Codecademy/docs/main/media/translate3d2.png)

## Example 3: Move Using Percentages in All Axes

This example uses percentage values for X and Y movement, and a fixed pixel value for Z, creating diagonal and depth motion:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    .container {
      width: 300px;
      height: 300px;
      background: lightgray;
      perspective: 600px;
      position: relative;
    }
    .icon {
      width: 80px;
      height: 80px;
      background: mediumseagreen;
      position: absolute;
      transform: translate3d(25%, 25%, 60px);
      transition: transform 0.5s ease;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="icon"></div>
  </div>
</body>
</html>
```

The output of this code is:

![A medium-seagreen box moved diagonally 25% right, 25% down, and 60 px closer to the viewer.](https://raw.githubusercontent.com/Codecademy/docs/main/media/translate3d3.png)

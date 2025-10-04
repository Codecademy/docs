---
Title: 'scale3d()'
Description: 'Resizes an element in three-dimensional space by scaling along the x-axis, y-axis, and z-axis independently.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'CSS'
  - 'Functions'
  - 'Style'
  - 'Transform'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

## Introduction

The **`scale3d()`** function is a CSS transform function that resizes an element in three-dimensional space. It scales elements along the x-axis (horizontal), y-axis (vertical), and z-axis (depth), allowing for independent control of each dimension to create 3D scaling effects.

## Syntax

```pseudo
transform: scale3d(sx, sy, sz);
```

**Parameters:**

- `sx`: A number representing the scaling factor for the x-axis (horizontal dimension). Values greater than 1 enlarge the element, values between 0 and 1 shrink it, and negative values flip it horizontally.
- `sy`: A number representing the scaling factor for the y-axis (vertical dimension). Values greater than 1 enlarge the element, values between 0 and 1 shrink it, and negative values flip it vertically.
- `sz`: A number representing the scaling factor for the z-axis (depth dimension). This parameter affects the element's depth in 3D space. Note that `sz` only accepts number values, not percentages.

**Return value:**

The `scale3d()` function returns a `<transform-function>` data type that can be applied to the `transform` property.

> **Note:** The `scale3d()` function must be used with other 3D transform properties like `perspective()` to create visible 3D effects.

## Example 1: Basic 3D Scaling

This example demonstrates basic usage of the `scale3d()` function to scale an element uniformly in all three dimensions.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Basic scale3d() Example</title>
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        perspective: 600px;
      }

      .box {
        width: 100px;
        height: 100px;
        background-color: coral;
        /* Scale the box 1.5 times in all three dimensions */
        transform: scale3d(1.5, 1.5, 1.5);
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

This example results in the following output:

![A coral-colored box that is scaled 1.5 times larger in all three dimensions, appearing 50% larger than its original size.](https://raw.githubusercontent.com/Codecademy/docs/main/media/scale1.png)

## Example 2: Creating a Card Hover Effect

This example shows how to use `scale3d()` to create an interactive card that scales when hovered, simulating a 3D pop-out effect.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Card Hover Effect</title>
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f0f0f0;
        perspective: 1000px;
      }

      .card {
        width: 200px;
        height: 250px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 24px;
        font-weight: bold;
        transition: transform 0.3s ease;
        cursor: pointer;
      }

      /* Apply scale3d() on hover to create 3D pop-out effect */
      .card:hover {
        transform: scale3d(1.1, 1.1, 1.2);
      }
    </style>
  </head>
  <body>
    <div class="card">Hover Me!</div>
  </body>
</html>
```

This example results in the following output:

![A gradient-colored card with rounded corners that smoothly scales up when hovered over, creating an engaging 3D effect that appears to lift off the page.](https://raw.githubusercontent.com/Codecademy/docs/main/media/scale2.gif)

## Example 3: Image Gallery with Depth Effect

This example demonstrates using `scale3d()` to create an image gallery where images scale with depth variation, creating a dynamic 3D gallery effect.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>3D Image Gallery</title>
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #2c3e50;
        perspective: 800px;
      }

      .gallery {
        display: flex;
        gap: 20px;
      }

      .image-box {
        width: 150px;
        height: 150px;
        background-color: #3498db;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 18px;
        transition: transform 0.4s ease;
      }

      /* Scale with different z-axis values for depth */
      .image-box:nth-child(1):hover {
        transform: scale3d(1.2, 1.2, 1);
      }

      .image-box:nth-child(2):hover {
        transform: scale3d(1.3, 1.3, 1.5);
      }

      .image-box:nth-child(3):hover {
        transform: scale3d(1.15, 1.15, 2);
      }
    </style>
  </head>
  <body>
    <div class="gallery">
      <div class="image-box">Image 1</div>
      <div class="image-box">Image 2</div>
      <div class="image-box">Image 3</div>
    </div>
  </body>
</html>
```

This example results in the following output:

![Three blue boxes arranged horizontally that scale with different depth effects when hovered. Each box scales differently on the z-axis, creating varying levels of perceived depth and distance from the viewer.](https://raw.githubusercontent.com/Codecademy/docs/main/media/scale3.gif)

## Frequently Asked Questions

### 1. What is `scale3d()`?

The `scale3d()` function is a CSS transform function that allows developers to resize HTML elements in three-dimensional space by specifying independent scaling factors for the x-axis, y-axis, and z-axis.

### 2. What is transform 3D?

Transform 3D refers to CSS transformations that manipulate elements in three-dimensional space using properties like `transform`, `perspective`, and functions such as `scale3d()`, `rotate3d()`, and `translate3d()`. These transformations enable depth perception and spatial positioning beyond the traditional two-dimensional plane.

### 3. What is z scale in CSS?

Z scale in CSS refers to the scaling factor applied along the z-axis, which represents depth in three-dimensional space. In the `scale3d()` function, the third parameter (sz) controls the z-axis scaling. While this affects the element's transformation matrix, visible effects typically require additional 3D context provided by properties like `perspective()` or nested 3D transforms.

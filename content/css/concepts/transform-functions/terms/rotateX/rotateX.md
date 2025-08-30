---
Title: 'rotateX()'
Description: 'Rotates an element around its horizontal X-axis in 3D space.'
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
The **`rotateX()`** CSS function defines a transformation that rotates an element around the x-type axis (horizontal) without deforming it. Its result is a tansfrom-function data type. The axis rotation passes through an origin, defined by the transform-origin CSS.

## Syntax

``pseudo
transform: rotateX(angle);
```

**Parameters:**

- `angle`: The degree of rotation. It accepts units like `deg`, `rad`, `grad`, or `turn`.
  - Positive values rotate the element clockwise (tilting backward).
  - Negative values rotate counterclockwise (tilting forward).

**Return value:**

Returns a `<transform-function>` that can be applied within the `transform` property to visually rotate the element in 3D.

## Example

transform: rotateX(40deg);

    /* Box to rotate */
    .box {
      width: 200px;
      height: 200px;
      background-color: lightblue;
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-weight: bold;
      border: 2px solid #e71010ff;
      transform: rotateX(0deg); /* Initial rotation */
      transition: transform 0.5s ease; /* Smooth transition */
    }

    /* Rotate the box on hover */
    .box:hover {
      transform: rotateX(45deg); /* Rotate 45 degrees around the X-axis */
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box">Hover Me!</div>
  </div>
</body>
</html>

--- 

   
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS rotateX Example</title>
  <style>
    /* Container for demonstration */
    .container {
      perspective: 1000px; /* Adds depth to the 3D effect */
      margin: 50px;
    }

    /* Box to rotate */
    .box {
      width: 200px;
      height: 200px;
      background-color: lightblue;
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-weight: bold;
      border: 2px solid #e71010ff;
      transform: rotateX(0deg); /* Initial rotation */
      transition: transform 0.5s ease; /* Smooth transition */
    }

    /* Rotate the box on hover */
    .box:hover {
      transform: rotateX(45deg); /* Rotate 45 degrees around the X-axis */
    }

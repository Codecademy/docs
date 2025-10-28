---
Title: 'scaleZ()'
Description: 'Resizes an element along the z-axis in 3D space'
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

The **`scaleZ()`** function is a CSS transform function that resizes an element along the z-axis in 3D space. It modifies the depth of an element by scaling its z-coordinate, which is only visible when the element is positioned in a 3D context with perspective applied.

## Syntax

```pseudo
transform: scaleZ(z);
```

**Parameters:**

- `z`: A number or percentage representing the scaling factor to apply along the z-axis. A value of `1` leaves the element unchanged, values greater than `1` increase the depth, and values between `0` and `1` decrease the depth. Negative values create a reflection along the z-axis.

**Return value:**

The `scaleZ()` function returns a `<transform-function>` data type that can be used with the `transform` property.

## Example 1: Basic `scaleZ()` Usage

This example demonstrates basic z-axis scaling with perspective to visualize the effect. The HTML code is:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
    <title>Basic scaleZ Example</title>
  </head>
  <body>
    <div class="container">
      <div class="box original">Original</div>
      <div class="box scaled">Scaled Z</div>
    </div>
  </body>
</html>
```

The CSS code is:

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.container {
  perspective: 500px;
  display: flex;
  gap: 50px;
}

.box {
  width: 150px;
  height: 150px;
  background-color: #3498db;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
}

.original {
  transform: rotateY(45deg);
}

.scaled {
  transform: rotateY(45deg) scaleZ(2);
  background-color: #e74c3c;
}
```

This example results in the following output:

![Two boxes are displayed side by side. The left box (Original) is rotated 45 degrees along the y-axis. The right box (Scaled Z) is rotated 45 degrees and scaled 2x along the z-axis, making it appear stretched in depth when viewed from the perspective angle.](https://raw.githubusercontent.com/Codecademy/docs/main/media/scalez1.png)

## Example 2: 3D Card Flip with `scaleZ()`

This example shows how `scaleZ()` can be used to create depth effects in a 3D card flip animation. The HTML code is:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
    <title>3D Card Flip</title>
  </head>
  <body>
    <div class="card-container">
      <div class="card">
        <div class="card-front">Front Side</div>
        <div class="card-back">Back Side</div>
      </div>
    </div>
  </body>
</html>
```

The CSS code is:

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2c3e50;
}

.card-container {
  perspective: 1000px;
}

.card {
  width: 300px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card:hover {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 10px;
  transform: scaleZ(1.5);
}

.card-front {
  background-color: #3498db;
  color: white;
}

.card-back {
  background-color: #e74c3c;
  color: white;
  transform: rotateY(180deg) scaleZ(1.5);
}
```

This example results in the following output:

![A card is displayed that flips when hovered. The scaleZ() function adds depth to both the front and back faces of the card, making the 3D flip effect more pronounced and visually appealing.](https://raw.githubusercontent.com/Codecademy/docs/main/media/scalez2.gif)

## Example 3: 3D Image Gallery with `scaleZ()`

This example demonstrates using `scaleZ()` to create a 3D image gallery with depth effects. The HTML code is:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
    <title>3D Image Gallery</title>
  </head>
  <body>
    <div class="gallery">
      <div class="image-box box1">Image 1</div>
      <div class="image-box box2">Image 2</div>
      <div class="image-box box3">Image 3</div>
    </div>
  </body>
</html>
```

The CSS code is:

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.gallery {
  perspective: 800px;
  display: flex;
  gap: 30px;
}

.image-box {
  width: 180px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px;
  transition: transform 0.3s ease;
  transform-style: preserve-3d;
}

.box1 {
  background-color: #ff6b6b;
  transform: rotateY(-15deg) scaleZ(1.2);
}

.box2 {
  background-color: #4ecdc4;
  transform: scaleZ(1.5);
}

.box3 {
  background-color: #ffd93d;
  transform: rotateY(15deg) scaleZ(2);
}

.image-box:hover {
  transform: rotateY(0deg) scaleZ(2.5) translateZ(50px);
}
```

This example results in the following output:

![Three colored boxes are displayed in a row with different depth levels created by scaleZ(). Each box has a different z-axis scale factor, creating a layered 3D effect.](https://raw.githubusercontent.com/Codecademy/docs/main/media/scalez3.gif)

## Frequently Asked Questions

### 1. What is the z-scale in CSS?

Z scale refers to scaling an element along the z-axis in 3D space, modifying depth. It becomes visible when combined with other 3D transforms and perspective.

### 2. What does transform scale do in CSS?

Transform scale resizes elements along different axes. While `scale()`, `scaleX()`, and `scaleY()` work in 2D, `scaleZ()` scales along the z-axis in 3D space.

### 3. What is the z-scale used for?

The Z scale is used for creating 3D effects like card flips, interactive galleries, parallax effects, and depth-based animations when combined with other 3D transforms.

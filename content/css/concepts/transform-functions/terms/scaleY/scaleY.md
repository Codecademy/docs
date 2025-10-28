---
Title: 'scaleY()'
Description: 'Resizes an element along the y-axis.'
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

The **`scaleY()`** function is a CSS transform function that resizes an element along the y-axis. It modifies the height of an element by scaling its vertical dimension.

## Syntax

```pseudo
transform: scaleY(y);
```

**Parameters:**

- `y`: A number or percentage representing the scaling factor to apply along the y-axis. A value of `1` leaves the element unchanged, values greater than `1` increase the height, and values between `0` and `1` decrease the height. Negative values create a vertical reflection.

**Return value:**

The `scaleY()` function returns a `<transform-function>` data type that can be used with the `transform` property.

## Example 1: Scaling a Box Vertically

In this example, the height of a box is scaled along the y-axis to create a stretched effect. The HTML code is:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
    <title>ScaleY Box Example</title>
  </head>
  <body>
    <div class="container">
      <div class="box small">Small</div>
      <div class="box tall">Tall</div>
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
  background-color: #f8f8f8;
}

.container {
  display: flex;
  gap: 40px;
}

.box {
  width: 120px;
  height: 120px;
  background-color: #3498db;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
}

.small {
  transform: scaleY(0.8);
  background-color: #2ecc71;
}

.tall {
  transform: scaleY(1.8);
  background-color: #e67e22;
}
```

This example results in the following output:

![Two boxes displayed side by side. The left box labeled ‘Original’ is normal height, while the right box labeled ‘Scaled Y’ is stretched taller along the vertical axis, showing the effect of scaleY.](https://raw.githubusercontent.com/Codecademy/docs/main/media/scaleY1.png)

## Example 2: Animated Button Grow on Hover

In this example, a button grows taller along the y-axis when hovered over. The HTML code is:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
    <title>ScaleY Button Animation</title>
  </head>
  <body>
    <button class="btn">Hover Me</button>
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
  background-color: #ecf0f1;
}

.btn {
  width: 150px;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  transition: transform 0.4s ease;
}

.btn:hover {
  transform: scaleY(1.5);
}
```

This example results in the following output:

![A 3D card displayed that flips when hovered. The front and back faces are scaled taller along the Y-axis, enhancing the vertical depth effect during the flip animation.](https://raw.githubusercontent.com/Codecademy/docs/main/media/scaleY2.gif)

## Example 3: Image Column Stack with Vertical Scaling

In this example, images are stacked and scaled vertically to create a layered effect. The HTML code is:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
    <title>Vertical Image Stack</title>
  </head>
  <body>
    <div class="image-stack">
      <div class="image-box box1">1</div>
      <div class="image-box box2">2</div>
      <div class="image-box box3">3</div>
    </div>
  </body>
</html>
```

The CSS code is:

```css
body {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
  background: linear-gradient(120deg, #6a11cb, #2575fc);
}

.image-stack {
  display: flex;
  gap: 20px;
  align-items: flex-end;
}

.image-box {
  width: 80px;
  height: 80px;
  background-color: #ff6b6b;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 6px;
  transition: transform 0.3s ease;
}

.box1 {
  transform: scaleY(1.1);
  background-color: #ff6b6b;
}

.box2 {
  transform: scaleY(1.5);
  background-color: #4ecdc4;
}

.box3 {
  transform: scaleY(2);
  background-color: #ffd93d;
}

.image-box:hover {
  transform: scaleY(2.3);
}
```

This example results in the following output:

![Three colored boxes arranged in a row with different vertical scales using scaleY. Each box has a distinct height, creating a layered 3D vertical effect, and they grow taller when hovered.](https://raw.githubusercontent.com/Codecademy/docs/main/media/scaleY3.gif)

## Frequently Asked Questions

### 1. What is transform scale in CSS?

Transform scale resizes elements along different axes. `scaleY()` specifically scales the element vertically.

### 2. What does transform translateY(-50%) mean?

It moves an element up by 50% of its own height relative to its current position.

### 3. What is scaleY?

ScaleY is a CSS transform that stretches or compresses an element along the vertical axis.

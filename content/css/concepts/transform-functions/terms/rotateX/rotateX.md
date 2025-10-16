---
Title: 'rotateX()'
Description: 'Rotates an element around the x-axis in 3D space.'
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

The **`rotateX()`** function is a CSS transform function that rotates an element around the x-axis, which runs horizontally through the element. It is primarily used to create 3D rotation effects, especially when combined with perspective.

## Syntax

```pseudo
transform: rotateX(angle);
```

**Parameters:**

- `z`: A CSS `<angle>` value (e.g., `45deg`, `0.5rad`) that specifies the amount of rotation around the x-axis. Positive values rotate the element downward, while negative values rotate it upward.

**Return value:**

The `rotateX()` function returns a `<transform-function>` value that can be used with the `transform` property.

## Example 1: Tilting a Card Forward

In this example, a card element is rotated forward along the x-axis to create a tilt effect. The HTML code is:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
    <title>RotateX Card Example</title>
  </head>
  <body>
    <div class="card">Tilted Card</div>
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

.card {
  width: 200px;
  height: 120px;
  background-color: #3498db;
  color: white;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateX(30deg);
}
```

This example results in the following output:

![A rectangular card rotated forward along the x-axis at 30 degrees, creating a 3D tilt effect with depth perception.](https://raw.githubusercontent.com/Codecademy/docs/main/media/rotateX1.png)

## Example 2: Interactive Flip on Hover

In this example, a card flips forward when hovered over, simulating a 3D interactive effect. The HTML code is:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
    <title>RotateX Hover Animation</title>
  </head>
  <body>
    <div class="flip-card">Hover Me</div>
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

.flip-card {
  width: 150px;
  height: 80px;
  font-size: 18px;
  font-weight: bold;
  background-color: #e74c3c;
  color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease;
}

.flip-card:hover {
  transform: rotateX(180deg);
}
```

This example results in the following output:

![A rectangular card that flips forward 180 degrees along the x-axis when hovered, showing a 3D flip animation effect.](https://raw.githubusercontent.com/Codecademy/docs/main/media/rotateX2.gif)

## Example 3: Image Panel Stack with 3D Rotation

In this example, multiple images are stacked and rotated along the x-axis for a layered 3D effect. The HTML code is:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
    <title>3D Image Stack</title>
  </head>
  <body>
    <div class="image-stack">
      <div class="image-panel panel1">1</div>
      <div class="image-panel panel2">2</div>
      <div class="image-panel panel3">3</div>
    </div>
  </body>
</html>
```

The CSS code is:

```css
body {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background: linear-gradient(120deg, #ff7e5f, #feb47b);
}

.image-stack {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.image-panel {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 6px;
  transition: transform 0.3s ease;
}

.panel1 {
  transform: rotateX(15deg);
}

.panel2 {
  transform: rotateX(30deg);
}

.panel3 {
  transform: rotateX(45deg);
}

.image-panel:hover {
  transform: rotateX(60deg);
}
```

This example results in the following output:

![Three stacked square panels rotated along the x-axis with increasing angles, creating a layered 3D effect; each panel rotates further on hover.](https://raw.githubusercontent.com/Codecademy/docs/main/media/rotateX3.gif)

## Frequently Asked Questions

### 1. What is `rotateX`?

`rotateX()` is a CSS transform function that rotates an element forward or backward around its horizontal x-axis, creating a 3D rotation effect.

### 2. What is `rotate()` in CSS?

`rotate()` rotates an element around a single 2D axis (the z-axis) in its plane. It is simpler than `rotateX()` and does not create a 3D effect.

### 3. How to use `rotateX`?

Use `rotateX(angle)` with the CSS `transform` property. Optionally combine it with `perspective` to enhance the 3D visual effect. Example:

```css
.element {
  transform: rotateX(45deg);
  perspective: 500px;
}
```

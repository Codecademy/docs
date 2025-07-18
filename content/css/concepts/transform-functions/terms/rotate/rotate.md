---
Title: 'rotate()'
Description: 'Rotates an element around a fixed point by a specified angle.'
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

The CSS **`rotate()`** function rotates an element around a fixed point by a specified angle. This rotation can either be clockwise or anticlockwise and is commonly used in [animations](https://www.codecademy.com/resources/docs/css/animations), UI interactions, or creative web layouts.

## CSS `rotate()` Syntax

```pseudo
transform: rotate(angle);
```

**Parameters:**

- `angle`: Defines the degree of rotation. It accepts values in degrees (`deg`), radians (`rad`), gradians (`grad`), or turns (`turn`).
  - Positive values = Clockwise rotation
  - Negative values = Anticlockwise rotation

## Example 1: Basic Rotation in CSS Using `rotate()`

In this example, the `.box` element is rotated 45 degrees clockwise from its original position using CSS `rotate()`, creating a diamond-like appearance:

```css
.box {
  width: 100px;
  height: 100px;
  background-color: coral;
  transform: rotate(45deg);
  margin: 50px;
}
```

Here is the output:

![A box rotated 45 degrees clockwise from its original position, creating a diamond-like appearance](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-rotate-1.jpg)

## Example 2: Using `rotate()` to Rotate on Hover

When a user hovers on the `.box` element, it rotates 90 degrees, thanks to the smooth [transition](https://www.codecademy.com/resources/docs/css/transition) defined in the CSS:

```css
.box {
  width: 100px;
  height: 100px;
  background-color: mediumseagreen;
  transition: transform 0.3s ease-in-out;
  margin: 50px;
}

.box:hover {
  transform: rotate(90deg);
}
```

Here is the output:

![A box which rotates 90 degrees on hover](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-rotate-2.gif)

## Example 3: Continuous Rotation in CSS With the Help of `rotate()`

This example creates a spinning loader by continuously rotating a styled circle using a CSS animation:

```css
.box {
  width: 80px;
  height: 80px;
  margin: 50px;
  border: 5px solid lightgray;
  border-top: 5px solid steelblue;
  border-radius: 50%;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

Here is the output:

![A spinning loader](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-rotate-3.gif)

## Frequently Asked Questions

### 1. Does CSS `rotate()` affect layout or just visual appearance?

CSS `rotate()` is part of the `transform` property and only affects visual appearance. It doesn't change the element's position in the document flow.

### 2. Can I combine CSS `rotate()` with other transform functions?

Absolutely. You can combine CSS `rotate()` with other transform functions by separating them with a space:

```css
transform: scale(1.2) rotate(30deg) translateX(20px);
```

### 3. Is CSS `rotate()` supported across all browsers?

Yes. Modern browsers like Chrome, Firefox, Safari, Edge, and even Internet Explorer 9+ support CSS `rotate()`.

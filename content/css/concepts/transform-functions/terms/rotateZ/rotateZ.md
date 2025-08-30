---
Title: '.rotateZ()'
Description: 'Rotates an element around the z-axis by a specified angle.'
Subjects:
  - 'Code Foundations'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'CSS'
  - 'Functions'
  - 'Positioning'
CatalogContent:
- 'learn-css'
- 'paths/front-end-engineer-career-path'
---

The CSS **`.rotateZ()`** function applies a rotation to an element around the z-axis in three-dimensional space. The transformation does not deform the element itself, which is typically an HTML element or image contributing to the web layout.

The `rotateZ()` function is used within the CSS [`transform`](https://www.codecademy.com/resources/docs/css/transform-functions/transform) property and is essentially equivalent to the 
[`rotate()`](https://www.codecademy.com/resources/docs/css/transform-functions/rotate) function, with the distinction that the `z`-axis is explicitly specified. For example, `rotateZ(45deg)` is equivalent to `rotate(45deg`) as well as to `rotate(0 0 1 45deg)`, where the rotation is represented by a vector in which the `x` and `y` components are zero, and the `z` component is positive. Similarly `rotateZ(45deg)` is equivalent to `rotate3d(0, 0, 1, 45deg)`, where the `rotate3d()` transform property applies a three-dimensional transformation that corresponds to the two-dimensional `rotate(30deg)`.

## Syntax

```pseudo
transform: rotateZ(a)
```

**Parameters:**

- `a`: is an angle defining the degree of rotation, which can be expressed in degrees (`deg`), radians (`rad`), gradians (`grad`), or turns (`turn`). A positive value indicates a clockwise rotation, while a negative value indicates a counterclockwise rotation.

**Return value:**

The `rotateZ()` function returns a `<transform-function>` data type.


## Example

In this example, the `.rotateZ()` property is used to rotate some `<div>` containers around the z-axis. The structure is modeled in HTML as follows:

```html
<div class="container">
  <div class="original">Original Element</div>
  <div class="rotated-clockwise">Rotated Element #1</div>
  <div class="rotated-counterclockwise">Rotated Element #2</div>
</div>
```

The `.rotateZ()` property is applied to the second and third `<div>` containers, so that the element with the class `rotated-clockwise` is rotated by 45 degrees clockwise and the element with the class `rotated-counterclockwise` is rotated by -45 degrees counterclockwise (i.e,. in the opposite direction):

```css
div {
  width: 80px;
  height: 80px;
  padding: 10px;
}

.container {
  padding: 50px;
}

.original {
  background-color: lightblue;
}

.rotated-clockwise {
  transform: rotateZ(45deg);
  background-color: lightgreen;
}

.rotated-counterclockwise {
  transform: rotateZ(-45deg);
  background-color: greenyellow;
}
```

Here is the expected output:

![Clockwise and counterclockwise rotated div containers modelled using the CSS rotateZ() function](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-transform-function-rotateZ.png)

---
Title: 'translateZ()'
Description: 'Moves an element along the Z-axis in 3D space.'
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

In CSS, the **`translateZ()`** function moves an element along the Z-axis in 3D space, creating depth by moving the element closer to or farther from the viewer. For this effect to be visible, the element or its parent must have a `perspective` property set.

## Syntax

```pseudo
transform: translateZ(<length>);
```

The required `<length>` value can use any valid CSS length unit, such as `px`, `em`, `rem`, `cm`, etc.

- A positive value moves the element closer to the viewer.
- A negative value moves the element farther away.

> **Note:** Percentage values are not supported because the Z-axis has no intrinsic size reference like width or height.

The `perspective` property is essential for `translateZ()` to have a visible effect. Without a `perspective` defined, `translateZ()` still applies but appears visually the same as a 2D transform, so no depth is perceived.

Perspective can be applied on a parent container:

```css
.container {
  perspective: 300px;
}
```

Or, within the transform using:

```css
transform: perspective(300px) translateZ(100px);
```

## Example 1

In this example, an element with a `.effected-box` class is moved `100px` closer to the viewer:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>CSS translateZ() function</title>
    <style>
      body {
        text-align: center;
        padding: 30px;
        font-family: Arial, sans-serif;
      }
      .boxes {
        display: flex;
        justify-content: center;
        gap: 90px;
        margin: 60px 0;
      }
      .box {
        width: 150px;
        height: 150px;
        background: #3498db;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
      }
      .label {
        font-size: 16px;
        font-weight: bold;
        margin-top: 45px;
      }
      /* translateZ(+100px) - moves element closer, makes it look bigger */
      .closer-box {
        transform: perspective(300px) translateZ(+100px);
      }
      /* Normal position, no movement on Z-axis */
      .original-box {
        background: #95a5a6;
      }
    </style>
  </head>
  <body>
    <div class="boxes">
      <div class="box-container">
        <div class="box original-box">Before</div>
        <div class="label">translateZ(0)<br /><small>Default state</small></div>
      </div>
      <div class="box-container">
        <div class="box closer-box">After</div>
        <div class="label">translateZ(+100px)<br /><small>Applied</small></div>
      </div>
    </div>
  </body>
</html>
```

The element appears larger because it's moved closer to the viewer:

![Positive translateZ example](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-translateZ-pos.png)

## Example 2

In this example, an element with a `.effected-box` class is moved away from the viewer by `-100px`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>CSS translateZ() function</title>
    <style>
      body {
        text-align: center;
        padding: 30px;
        font-family: Arial, sans-serif;
      }
      .boxes {
        display: flex;
        justify-content: center;
        gap: 80px;
        margin: 60px 0;
      }
      .box {
        width: 150px;
        height: 150px;
        background: #3498db;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
      }
      .label {
        font-size: 16px;
        font-weight: bold;
        margin-top: 45px;
      }
      /* translateZ(-100px) - moves element farther, makes it look smaller */
      .effected-box {
        transform: perspective(300px) translateZ(-100px);
      }
      /* Normal position, no movement on Z-axis */
      .original-box {
        background: #95a5a6;
      }
    </style>
  </head>
  <body>
    <div class="boxes">
      <div class="box-container">
        <div class="box original-box">Before</div>
        <div class="label">translateZ(0)<br /><small>Default state</small></div>
      </div>
      <div class="box-container">
        <div class="box effected-box">After</div>
        <div class="label">translateZ(-100px)<br /><small>Applied</small></div>
      </div>
    </div>
  </body>
</html>
```

The element appears smaller because it's moved farther from the viewer:

![Negative translateZ example](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-translateZ-neg.png)

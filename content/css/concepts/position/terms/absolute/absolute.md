---
Title: 'Absolute Positioning in CSS' 
Description: 'Places an element exactly where you want, relative to its nearest positioned ancestor or the browser window.' 
Subjects: 
  - 'Web Design'
  - 'Web Development'
  - 'CSS'
Tags:
  - 'positioning'
  - 'CSS'
CatalogContent:
  - 'learn-css'
  - 'paths/css'
---

The **absolute** value of the position property allows an element to be positioned exactly where you want it, relative to its nearest positioned ancestor or the browser window. This method removes the element from the normal document flow, so it does not affect the layout of surrounding elements.

## Syntax
```css
position: absolute;
```
When an element is set to `position: absolute`, you can use the `top`, `right`, `bottom`, and `left` properties to offset it from its normal position:

```css
selector {
  position: absolute;
  top: <length>;
  right: <length>;
  bottom: <length>;
  left: <length>;
}
```

- `<length>`: Can be specified in pixels (px), ems (em), rems (rem), percentages (%), or other CSS units.
- Positive values move the element away from the specified edge.
- Negative values move the element towards the specified edge.

## Example 1 : Positioned Relative to its Parent

This example shows how absolute positioning works when the element is positioned relative to its parent container. By setting top: 0 and left: 0, the .box sticks to the top-left corner of its parent. You can adjust top, left, right, or bottom to move it anywhere within the parent.

```html
<div class="container">
    <div class="box"></div>
</div>
```

```css
    .container {
      position: relative; /* Important: This makes .box position relative to .container */

      /* Optional styles for the example */
      width: 500px;
      height: 300px;
      background-color: #e9ecef;
      border-radius: 8px;
      border: 1px solid #dee2e6; 
      margin: 100px auto;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); 
    }

    .box {
      position: absolute;
      top: 0px;
      left: 0px;

      /* Optional styles for the example */
      width: 200px;
      height: 120px;
      background-color: #495057;
      color: #f8f9fa;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      border-radius: 4px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
    }
```
Here's what the above examples look like:

![Box at top-left of parent](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-position-absolute-ex1.png)


## Example 2: Positioned Relative to the Browser Window


If the parent container doesn’t have position: relative (or any positioning), the element with position: absolute will stick to the browser window. This example demonstrates how the .box is now positioned relative to the window instead of its parent. 

```html
<div class="container">
    <div class="box"></div>
</div>
```

```css
    .container {
      /* position: relative; */

      /* Optional styles for the example */
      width: 500px;
      height: 300px;
      background-color: #e9ecef;
      border-radius: 8px;
      border: 1px solid #dee2e6; 
      margin: 100px auto;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); 
    }

    .box {
      position: absolute;
      top: 0px;
      left: 0px;
      
      /* Optional styles for the example */
      width: 200px;
      height: 120px;
      background-color: #495057;
      color: #f8f9fa;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      border-radius: 4px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
    }
```
Here's what the above examples look like:

![Box at top-left of window.](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-position-absolute-ex2.png)
---
Title: 'static'
Description: 'Positions an element according to the normal flow of the page but not in any special way.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'CSS'
  - 'Elements'
  - 'Positioning'
  - 'Values'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

In CSS, the **`static`** value of the `position` property allows an element to be positioned following the normal flow of the page, meaning it appears where it would naturally occur on the page without any adjustments. The element won't be affected by the [`top`](https://www.codecademy.com/resources/docs/css/position/top), [`bottom`](https://www.codecademy.com/resources/docs/css/position/bottom), [`left`](https://www.codecademy.com/resources/docs/css/position/left), and [`right`](https://www.codecademy.com/resources/docs/css/position/right) properties.

> **Note:** [HTML elements](https://www.codecademy.com/resources/docs/html/elements) are positioned `static` by default.

## Syntax

```pseudo
position: static;
```

## Example

This example demonstrates the static positioning of [HTML](https://www.codecademy.com/resources/docs/html) elements.

Here is the HTML code:

```html
<div class="box1">Box 1</div>
<div class="box2">Box 2</div>
```

Here is the CSS code:

```css
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box1 {
  width: 100px;
  height: 100px;
  background-color: lightblue;
}

.box2 {
  width: 100px;
  height: 100px;
  background-color: lightcoral;
  position: static;
  top: 50px; /* Has no effect on the element */
}
```

Here's what the above example's output looks like:

![CSS Static Positioning Example Output](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-position-static.png)

In this example, `box1` has no `position` property set, so it automatically uses `position: static`. On the other hand, `box2` explicitly has `position: static` and `top: 50px` set. However, both elements will follow the normal document flow, meaning they will stack on top of each other, one after the other vertically.

> **Note:** Other `position` values, such as [`relative`](https://www.codecademy.com/resources/docs/css/position/relative) or [`absolute`](https://www.codecademy.com/resources/docs/css/position/absolute) can be used in this case to modify the position of the elements.

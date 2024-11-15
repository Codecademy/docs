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

In CSS, the **`static`** value of the `position` property allows an element to be positioned following the normal flow of the page, meaning it appears where it would naturally occur on the page without any adjustments. The elements won't be affected by the `top`, `bottom`, `left`, and `right` properties.

> **Note:** HTML elements are positioned `static` by default.

## Syntax

```pseudo
position: static;
```

## Example

This example demonstrates the static positioning of HTML elements.

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

![CSS Static Position Example Output](https://raw.githubusercontent.com/Codecademy/docs/main/media/css_position_static.png)

In this example, the `box1` has no position property set, so it automatically uses `position: static`.
The `box2` explicitly has the `position: static` and `top: 50px` set. But both elements will follow the normal document flow, meaning they stack on top of each other, one after the other vertically.

Use other position values, such as ' relative ' or ' absolute, ' to modify the position of the elements.

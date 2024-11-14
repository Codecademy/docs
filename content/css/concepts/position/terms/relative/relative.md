---
Title: 'relative'
Description: 'Positions an element relative to its normal document flow placement, allowing for improved styling control.'
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

In CSS, the **`relative`** value of the `position` property allows an element to be positioned relative to its normal position in the document flow, enabling adjustments without affecting the layout of surrounding elements.

## Syntax

```pseudo
position: relative;
```

When an element is set to `position: relative`, the [`top`](https://www.codecademy.com/resources/docs/css/position/top), [`right`](https://www.codecademy.com/resources/docs/css/position/right), [`bottom`](https://www.codecademy.com/resources/docs/css/position/bottom), and [`left`](https://www.codecademy.com/resources/docs/css/position/left) properties can be used to offset it from its normal position as follows:

```pseudo
selector {
  position: relative;
  top: <length>;
  right: <length>;
  bottom: <length>;
  left: <length>;
}
```

- `<length>`: A value that can be specified in pixels (px), ems (em), rems (rem), percentages (%), or other [CSS units](https://www.codecademy.com/resources/docs/css/units). Positive values move the element away from the specified edge and negative values move it towards the specified edge.

## Example 1

This example demonstrates basic relative positioning of a single element. Here is the HTML code:

```html
<div class="container">
  <div class="box"></div>
</div>
```

Here is the CSS code:

```css
.container {
  position: relative; /* Enables child elements to be positioned absolutely within this container */
  width: 600px;
  height: 360px;
}

.box {
  position: relative; /* Shifts this box relative to its normal position */
  top: 50px; /* Moves the box 50px down from its original position */
  left: 100px; /* Moves the box 100px to the right from its original position */
  width: 200px;
  height: 200px;
}
```

Here's what the above example's output looks like:

![CSS Relative Position Example Output](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-position-relative-ex1.png)

In this example, the blue box is moved 50 pixels down and 100 pixels to the right from its original position within the container.

## Example 2

This example covers additional aspects of relative positioning, including [`z-index`](https://www.codecademy.com/resources/docs/css/position/z-index) and percentage-based positioning. Here is the HTML code:

```html
<div class="container">
  <div id="box1" class="box">Z-index: 2</div>
  <div id="box2" class="box">50% left</div>
  <div id="box3" class="box">Z-index: 3</div>
</div>
```

Here is the CSS code:

```css
.container {
  position: relative; /* Enables absolute positioning for its child elements */
  width: 300px;
  height: 300px;
}

.box {
  position: relative; /* Shifts this box relative to its normal position */
  width: 100px;
  height: 100px;
}

#box1 {
  z-index: 2; /* Stacks this box above others with lower z-index */
}

#box2 {
  top: -50px; /* Moves this box 50px up from its original position */
  left: 50%; /* Moves this box 50% to the right from its original position */
  z-index: 1; /* Stacks this box below others with higher z-index */
}

#box3 {
  top: -100px; /* Moves this box 100px up from its original position */
  left: 25%; /* Moves this box 25% to the right from its original position */
  z-index: 3; /* Stacks this box above others with lower z-index */
}
```

The above code produces the following output:

![CSS z-index and Percentage-Based Positioning Example Output](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-position-relative-ex2.png)

This advanced example demonstrates:

1. The `z-index` usage to control stacking order of relatively positioned elements.
2. Percentage-based positioning (50% and 25% left).
3. Negative values for top positioning to move elements upwards.
4. The way relatively positioned elements interact with each other in the same container.

The green box (`#box3`) appears on top due to its higher `z-index`, even though it is declared last in the HTML. The orange box (`#box2`) is positioned 50% from the left edge of the container, while the green box is 25% from the left.

---
Title: 'fixed'
Description: 'Positions an element relative to the viewport, removing it from the document flow and keeping it fixed during page scrolling.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Attributes'
  - 'CSS'
  - 'Design'
  - 'Development'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

In CSS, the **`fixed`** value of the `position` property positions an [HTML](https://www.codecademy.com/resources/docs/html) element of a webpage by taking that [element](https://www.codecademy.com/resources/docs/html/elements) out of the normal flow of the document and pinning it to a specified position. In this position, the element will remain fixed in place, even while scrolling the page.

## Syntax

```pseudo
position: fixed;
```

An element with a `fixed` position will be positioned relative to the viewport or the HTML element. In other words, it is fixed relative to the document itself.

> **Note**: This differs from [absolute positioning](https://www.codecademy.com/resources/docs/css/position/absolute), where an element is positioned relative to its closest ancestor/parent element, whose position is also set to a value of [`relative`](https://www.codecademy.com/resources/docs/css/position/relative) or `absolute` (a non-static position).

## Example

This example demonstrates the fixed positioning. Here is the HTML code:

```html
<nav class="fixed">
  <h1 class="content">Hello World!</h1>
</nav>
```

Here is the CSS code:

```css
nav.fixed {
  display: inline-block;
  height: 80px;
  width: 100%;
  position: fixed;
  top: 50px;
  left: 100px;
  background-color: white;
  border: 4px solid red;
}
```

In the code block above, the `nav` element with the [class](https://www.codecademy.com/resources/docs/html/classes) `fixed` has its `position` property set to `fixed`, along with its [`top`](https://www.codecademy.com/resources/docs/css/position/top) and [`left`](https://www.codecademy.com/resources/docs/css/position/left) properties set to values of `50px` and `100px`, respectively.

This configuration means that the navigation bar will remain fixed in place relative to the viewport, appearing 50 pixels from the top and 100 pixels from the left of the browser window. As a result, when the user scrolls, the `nav` element will stay visible at that position. This will render in the browser as shown in the image:

![Image of a fixed nav element in the browser window/viewport](https://raw.githubusercontent.com/Codecademy/docs/main/media/position-fixed-example.png)

The `nav` element is taken out of the document flow and positioned `50px` from the top and `100px` from the left. Although the [`width`](https://www.codecademy.com/resources/docs/css/sizing/width) property is set to `100%`, its position may cause it to extend beyond the right side of the viewport, depending on the viewport width and the element's total width (including [padding](https://www.codecademy.com/resources/docs/css/padding) and [borders](https://www.codecademy.com/resources/docs/css/borders)).

If the `nav` element had the `position` property set to [`static`](https://www.codecademy.com/resources/docs/css/position/static) (the default value), it would remain in its default position, i.e., flush against the top-left corner of the viewport:

![Image of a static nav element in the browser window/viewport](https://raw.githubusercontent.com/Codecademy/docs/main/media/position-static-example.png)
